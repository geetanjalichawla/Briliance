'use client';

import * as z from 'zod'
import Heading from '@/components/personal/Heading'
import {  MessageSquare } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {formSchema} from './constraint';
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
function ChatGptKaBhai() {
  const router =useRouter();
  const [message, setMessage] = useState<ChatCompletionRequestMessage[]>([])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting;
  const onSubmit =async (values:z.infer<typeof formSchema>) => {
    try {
      const userMessage : ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt
      };

      const newMessages = [...message, userMessage]
      const response = await axios.post('/api/conversation', {
        message: newMessages
      });

      setMessage((current)=>[...current, userMessage, response.data])
      form.reset();
    } catch (error:any) {
      //premium modal
      console.log(error);
    }
    finally
    {
      router.refresh();
    }
    }
  return (
    <div>
      <Heading  title={"Chat gpt ka bhai"} description='Sharmao mt puchlo jo puchna hai😄' icon={MessageSquare} iconColor='text-pink-500' bgColor='bg-pink-500/10'/>
      <div className='px-4 lg:px-4'>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='rounded-lg border w-full p-4 px-3 focus-within:shadow-sm grid grid-cols-12 gap-2'>
                 <FormField name='prompt'  
                 render={({field})=>(
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='What is Computer?'
                        {...field}
                       />
                    </FormControl>
                  </FormItem>)
                 }/>
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
         {message.length === 0  && !isLoading && <Empty label={'No conversation'}/>}
            <div className='flex flex-col-reverse gap-y-4'>
                  {
                    message.map((msg)=><div key={msg.content}
                    className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg",
                    msg.role ==='user'?"bg-white border border-black/10":"bg-muted"
                    )}  
                    >
                   {
                    msg.role === 'user'?
                    <UserAvatar/>:
                    <BotAvatar/>
                   }  {msg.content}
                    </div>)
                  }
            </div>

          </div>
      </div>
    </div>
  )
}

export default ChatGptKaBhai