"use client";
// global imports
import React from 'react'
import Link from 'next/link';
import { Lightbulb } from 'lucide-react';
import { Montserrat } from 'next/font/google';
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from 'lucide-react'
import { usePathname } from 'next/navigation';
// personal imports
import { cn } from "@/lib/utils";


const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin']
});

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500'
  },
  {
    label: 'ChatGpt ka Bhai',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-pink-500'
  },
  {
    label: 'Image Banao',
    icon: ImageIcon,
    href: '/image',
    color: 'text-violet-500'
  },
  {
    label: 'Video Banao',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-700'
  },
  {
    label: 'Singer AI',
    icon: Music,
    href: '/music',
    color: 'text-green-700'
  },
  {
    label: '5 star Coder',
    icon: Code,
    href: '/code',
    color: 'text-red-700'
  },
  {
    label: 'Setting',
    icon: Settings,
    href: '/setting',
  },
]

const SideBar = () => {
  const path = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard">
          <div className="relative flex gap-4">
            <Lightbulb className='h-10 w-10 ' />
            <div className={cn('text-2xl , font-bold', montserrat.className)}>Brilliance</div>
          </div>
        </Link>
      </div>

      <div>
        <div className="px-3 py-2 flex-1">
          {
            routes.map(route => (
              <Link href={route.href} key={route.href}>
                <div className={cn('text-sm group flex p-3 w-full justify-start font-medium hover:text-white hover:bg-white/10 rounded-lg transition duration-500', path === route.href ? 'bg-white/10 text-white': 'text-slate-500')}>
                  <div className='flex items-center flex-1'>
                    <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                    {route.label}
                  </div>
                </div>
              </Link>))
          }
        </div>
      </div>
    </div>
  )
}

export default SideBar