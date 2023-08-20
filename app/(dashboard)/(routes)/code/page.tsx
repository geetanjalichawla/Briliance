'use client';

import * as z from 'zod'
import Heading from '@/components/personal/Heading'
import { Code, } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './constraint';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ChatCompletionRequestMessage } from 'openai';
import Empty from '@/components/personal/empty';
import { ClerkLoading } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import UserAvatar from '@/components/personal/userAvatar';
import BotAvatar from '@/components/personal/BotAvatar';
import ReactMarkDown from "react-markdown";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
function FiveStarCoderPage() {
  const router = useRouter();
  const [message, setMessage] = useState<ChatCompletionRequestMessage[]>([])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt
      };

      const newMessages = [...message, userMessage]
      const response = await axios.post('/api/code', {
        message: newMessages
      });

      setMessage((current) => [...current, userMessage, response.data])
      form.reset();
    } catch (error: any) {
      //premium modal
      console.log(error);
    }
    finally {
      router.refresh();
    }
  }
  console.log({message})
  return (
    <div>
      <Heading title={"5 ⭐ Coder"} description='mai hu 5 Sitara Coder And i Love Coding' icon={Code} iconColor='text-red-500' bgColor='bg-red-500/10' />
      <div className='px-4 lg:px-4'>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='rounded-lg border w-full p-4 px-3 focus-within:shadow-sm grid grid-cols-12 gap-2'>
              <FormField name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='Write a button component in react js.'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>)
                } />
              <Button className='col-span-12 lg:col-span-2 w-full' disabled={isLoading}>
                generate
              </Button>
            </form>
          </Form>
        </div>
        <div className='space-y-4 mt-4'>
          {
            isLoading && <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <ClerkLoading />
            </div>
          }
          {message.length === 0 && !isLoading && <Empty label={'No conversation'} />}
          <div className='flex flex-col-reverse gap-y-4 text-sm'>
            {
              message.map((msg) => <div key={msg.content}
                className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg flex-col md:flex-row",
                  msg.role === 'user' ? "bg-white border border-black/10" : "bg-muted"
                )}
              >
                {
                  msg.role === 'user' ?
                    <UserAvatar /> :
                    <BotAvatar />
                }
                <div className='w-full overflow-auto'>

                <ReactMarkdown components={
                  {
                    pre: ({node, ...props})=>(
                      <div className='overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg '>
                        <pre {...props}/>
                      </div>
                      ),
                      code: ({node , ...props})=>(
                        <code className='bg-black/10 rounded-lg p-1 ' {...props}>
                          
                        </code>
                      )
                  }
                }
                className='text-sm overflow-hidden leading-7'

                >
                {msg.content || ""}
                </ReactMarkdown>
                </div>

              </div>)
            }
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default FiveStarCoderPage