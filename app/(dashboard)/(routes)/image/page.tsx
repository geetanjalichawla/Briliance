'use client';

import * as z from 'zod'
import Heading from '@/components/personal/Heading'
import {  ImageIcon } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {formSchema} from './constraint';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Empty from '@/components/personal/empty';
import { ClerkLoading } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import UserAvatar from '@/components/personal/userAvatar';
import BotAvatar from '@/components/personal/BotAvatar';
function ImagePage() {
  const router =useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      prompt: "",
      amount : "1",
      resolution: "512×512"
    }
  })
const [images, setImages] = useState<string []>([])
  const isLoading = form.formState.isSubmitting;
  const onSubmit =async (values:z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('/api/conversation', {
      });

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
      <Heading  title={"Image Banao"} description='Sharmao mt Bana Lo Image' icon={ImageIcon} iconColor='text-violet-500' bgColor='bg-violet-500/10'/>
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
                        placeholder='Tiger Image with Trees'
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
         {images.length === 0  && !isLoading && <Empty label={'No Images Generated'}/>}

<div>
  image will be render here
</div>

          </div>
      </div>
    </div>
  )
}

export default ImagePage