import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Avatar,AvatarImage,AvatarFallback } from '@/components/ui/avatar';
import { BotIcon } from 'lucide-react';

function BotAvatar() {
  return (
<Avatar>
    <AvatarImage src={""} />
  <AvatarFallback>
  <BotIcon/>
  </AvatarFallback>
</Avatar>
  )
}

export default BotAvatar