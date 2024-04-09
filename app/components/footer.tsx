import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'

export default function Footer() {
  return (
    <div className='border sticky top-full'>
        <div className="container h-16 flex items-center justify-between">
            <p className='text-muted-foreground'>© gaku</p>
            <ModeToggle/>
        </div>
    </div>
  )
}
