import Navbar from '@/components/personal/Navbar';
import SideBar from '@/components/personal/SideBar';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react'

function DashboardLayout({
    children
}:{
    children: React.ReactNode;
}) {
  return (
    <div className='h-full relative'>
        <div className=' w-64  hidden md:flex h-full md:flex-col md:fixed md:inset-y-0 z-[80] bg-[#111627] text-white '>
            <ScrollArea className='p-4'>
<SideBar/>
            </ScrollArea>
        </div>
        <div className='md:pl-64'>
            <Navbar/>
            <div className='p-4 md:p-8'>
            {children}
                </div>
        </div>
    </div>
  )
}

export default DashboardLayout