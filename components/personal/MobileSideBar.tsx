import React, { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import SideBar from '@/components/personal/SideBar'
import { Lightbulb, Menu } from 'lucide-react'

function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger><Menu className=' md:hidden' /></SheetTrigger>
      <SheetContent className='space-y-4 py-4 flex flex-col h-full text-white  bg-[#111627]' side={'left'}>
        <SheetDescription>
          <SideBar />
        </SheetDescription>
      </SheetContent>
    </Sheet>

  )
}

export default MobileSideBar