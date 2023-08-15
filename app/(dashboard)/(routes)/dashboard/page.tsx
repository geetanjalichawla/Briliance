"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, Image, ImageIcon, MessageSquare, Music, MusicIcon, Video, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Tools = [
  {
    label: 'ChatGpt ka Bhai',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    href: '/conversation',
    icon: MessageSquare
  },
  {
    label: 'Image Banao',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/image',
    icon: ImageIcon

  },
  {
    label: 'Video Banao',
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10',
    href: '/video',
    icon: VideoIcon

  },
  {
    label: 'Singer AI',
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    href: '/music',
    icon: MusicIcon

  },
  {
    label: '5 star Coder',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    href: '/code',
    icon: Code

  },
]
function DashboardPage() {
  const router = useRouter();
  return (
    <div className="p-4 md:p-8">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Discover the Power of AI</h2>
        <p className="text-muted-foreground font-light test-sm md:text-lg text-center">
          Chat with the smart AI - Experience the Power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {
          Tools.map(tool => (<Card
            key={tool.href}
            onClick={()=>router.push(tool.href)}
            className="p-4 border-black-5 flex items-center justify-center hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4 justify-between w-full">
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className="font-semibold mr-auto">
                {tool.label}
              </div>
              <ArrowRight className='w-5 h-5' />
            </div>
          </Card>))
        }
      </div>
    </div>

  )
}

export default DashboardPage