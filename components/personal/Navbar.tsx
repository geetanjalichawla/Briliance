import { UserButton } from '@clerk/nextjs'
import React, { use } from 'react'
import MobileSideBar from '@/components/personal/MobileSideBar'
import { Lightbulb } from 'lucide-react'
const Navbar =()=> {
  return (
    <div className='flex w-full justify-between p-1 md:p-2 border-b shadow-md'>
      <MobileSideBar/> 
    <div className='text-lg font-serif font-bold flex items-center justify-center'><Lightbulb className='w-5 h-5 mr-4'/>Brilliance</div>

    <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Navbar