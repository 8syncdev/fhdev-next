'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { brand } from '@/constants'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import NeonText from '@/components/dev/canvas3d/neon-text'

interface NavItemProps {
  href: string
  label: string
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <li>
    <Link href={href} className={cn("block px-4 py-2 text-sm lg:text-base text-gray-350 hover:text-white focus:text-white transition-colors duration-300")}>
      {label}
    </Link>
  </li>
)

interface NavProps {
  items: NavItemProps[]
  isMobile?: boolean
}

const Nav: React.FC<NavProps> = ({ items, isMobile = false }) => (
  <ul className={cn(
    "flex flex-col items-start mt-4 text-sm md:flex-row md:space-x-1 md:mt-0 md:border-0",
    isMobile ? "w-full h-screen" : "md:w-auto md:h-auto"
  )}>
    {items.map((item, index) => (
      <NavItem key={index} {...item} />
    ))}
    <li>
      <Link href="/course" className={cn("block px-4 py-2 text-sm lg:text-base text-white bg-violet-500 hover:bg-violet-400 rounded-3xl transition-colors duration-300")}>
        Tham gia ngay
      </Link>
    </li>
  </ul>
)

interface HeaderProps {
  navItems?: NavItemProps[]
}

const defaultNavItems: NavItemProps[] = [
  { href: '/course', label: 'Khóa Học' },
  { href: '/#', label: 'Lộ Trình' },
  { href: '/#', label: 'Liên Hệ' },
]

const Header: React.FC<HeaderProps> = ({ navItems = defaultNavItems }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-transparent sticky top-0 z-[1000] backdrop-blur-md flex-grow container mx-auto">
      <div className="py-3">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex-shrink-0 flex items-center mr-10 lg:mr-14">
            <Link href="/" aria-label={brand.name} className=''>
              <p className="text-2xl font-bold text-white">
                {brand.name}
              </p>
            </Link>
          </div>
          <Button
            variant="ghost"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:bg-blue-750 text-gray-400 hover:bg-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Expand main menu</span>
            <Menu size={27} />
          </Button>
          <div className={cn("md:flex md:items-center w-full md:w-auto", isOpen ? "block" : "hidden")}>
            <Nav items={navItems} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header