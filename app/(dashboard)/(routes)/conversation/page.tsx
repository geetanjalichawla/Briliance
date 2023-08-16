'use client';

import * as z from 'zod'
import Heading from '@/components/personal/Heading'
import {  MessageSquare } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {formSchema} from './constraint';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting;
  const onSubmit =async (values:z.infer<typeof formSchema>) => {
    console.log({values})
  }
  return (
    <div>
      <Heading  title={"this is heading"} description='this is description' icon={MessageSquare} iconColor='text-pink-500' bgColor='bg-pink-500/10'/>
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
          <div>
            messages content
          </div>
      </div>
    </div>
  )
}

export default page