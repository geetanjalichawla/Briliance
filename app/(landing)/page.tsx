import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div>
      <Link href={'/sign-in'}>
        <Button>login</Button>
      </Link>
      <Link href={'/sign-up'}>
        <Button>register</Button>
      </Link>
    </div>
  )
}

