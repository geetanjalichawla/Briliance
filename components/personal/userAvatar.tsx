import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Avatar,AvatarImage,AvatarFallback } from '@/components/ui/avatar';

function UserAvatar() {
  const {user} =   useUser();
  return (
<Avatar>
  <AvatarImage src={user?.imageUrl} />
  <AvatarFallback>
{
  user?.firstName?.charAt(0)
}
{
    user?.lastName?.charAt(0)

}
  </AvatarFallback>
</Avatar>
  )
}

export default UserAvatar