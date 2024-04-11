import React from 'react'
import MobileNav from './mobile-nav'
import { AppConfig } from '@/app.config'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Pickaxe, PocketKnife } from 'lucide-react'

export default function Header() {
  return (
    <header className='border-b'>
        <div className="container h-16 flex items-center gap-4">
            <div className="lg:hidden">
                <MobileNav/>
            </div>
            <Button asChild variant='ghost' className='font-bold text-lg gap-2'>
              <Link href='/' replace>
                <Pickaxe size={18}/>           
              {AppConfig.title}
              </Link>
              </Button>
        </div>
    </header>
  )
}
