import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { brand } from '@/constants'

const Header = () => {
  return (
    <header className="w-full bg-transparent sticky top-0 z-[1000] backdrop-blur-md">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              {brand.name}
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/" className={cn("hover:underline")}>Home</Link></li>
              <li><Link href="/about" className={cn("hover:underline")}>About</Link></li>
              <li><Link href="/services" className={cn("hover:underline")}>Services</Link></li>
              <li><Link href="/contact" className={cn("hover:underline")}>Contact</Link></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button className="focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header