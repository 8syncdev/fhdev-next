'use client'

import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Home, GraduationCap, Users, MessageSquare, BookOpen, FileText, Menu, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BlurDeco } from '@/components/shared'
import { MotionDiv } from '@/components/shared/hoc'
import { fadeIn, staggerContainer, bounceIn, slideIn } from '@/components/shared/hoc/motion/animations'
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { brand } from '@/constants'

interface NavItemProps {
  label: string
  href: string
  icon: React.ReactNode
  target?: string
}

const navItems: NavItemProps[] = [
  // { label: 'Trang chủ', href: '/', icon: <Home className="w-3 h-3" />, target: '_self' },
  { label: 'Khoá học', href: '/course', icon: <GraduationCap className="w-3 h-3" />, target: '_self' },
  { label: 'Giáo viên', href: '/mentor', icon: <Users className="w-3 h-3" />, target: '_self' },
  { label: 'Phản hồi', href: '/#feedback-section', icon: <MessageSquare className="w-3 h-3" />, target: '_self' },
  { label: 'Lý thuyết', href: '/fhdev-docs', icon: <BookOpen className="w-3 h-3" />, target: '_blank' },
  { label: 'Bài tập', href: 'https://fullhousedev.com', icon: <FileText className="w-3 h-3" />, target: '_blank' },
  { label: 'Liên hệ', href: '/contact', icon: <Mail className="w-3 h-3" />, target: '_self' },
]

const NavItem: React.FC<NavItemProps> = React.memo(({ label, href, icon, target = '_self' }) => (
  <MotionDiv variants={bounceIn({ delay: 0.1, duration: 0.5 })}>
    <Link href={href} target={target} className="flex items-center space-x-2 text-white hover:text-cyan-300 transition-colors duration-200">
      {icon}
      <span className="text-xs md:text-sm">{label}</span>
    </Link>
  </MotionDiv>
))

NavItem.displayName = 'NavItem'

const Nav: React.FC = React.memo(() => {
  return (
    <MotionDiv
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8"
    >
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </MotionDiv>
  )
})

Nav.displayName = 'Nav'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])

  return (
    <MotionDiv
      variants={fadeIn({ direction: 'down', type: 'spring', delay: 0.2, duration: 0.7 })}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-[1000] w-full"
    >
      <BlurDeco brightness={10} variant='gradient' />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between bg-background bg-opacity-30 backdrop-blur-md rounded-full border-b-2 border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.5)] py-2 px-4">
          <MotionDiv
            variants={slideIn({ direction: 'left', type: 'spring', delay: 0.2, duration: 0.5 })}
            className="md:hidden"
          >
            <p className='text-white'>
              {brand.name}
            </p>
          </MotionDiv>
          <div className="hidden md:flex items-center justify-center flex-grow">
            <Nav />
          </div>
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                className="md:hidden"
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
              >
                <Menu className="h-6 w-6 text-cyan-300" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-background backdrop-blur-md border-t-2 border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.5)] bg-opacity-30">
              <Nav />
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </MotionDiv>
  )
}

export default React.memo(Header)