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
import { pet } from '@/constants/image'

interface NavItemProps {
  label: string
  href: string
  icon: React.ReactNode
  target?: string
  color: string
}

const navItems: NavItemProps[] = [
  { label: 'Khoá học', href: '/course', icon: <GraduationCap className="w-4 h-4" />, target: '_self', color: 'blue' },
  { label: 'Giáo viên', href: '/mentor', icon: <Users className="w-4 h-4" />, target: '_self', color: 'purple' },
  { label: 'Phản hồi', href: '/#feedback-section', icon: <MessageSquare className="w-4 h-4" />, target: '_self', color: 'green' },
  { label: 'Lý thuyết', href: '/fhdev-docs', icon: <BookOpen className="w-4 h-4" />, target: '_blank', color: 'yellow' },
  { label: 'Bài tập', href: 'https://fullhousedev.com', icon: <FileText className="w-4 h-4" />, target: '_blank', color: 'pink' },
  { label: 'Liên hệ', href: '/contact', icon: <Mail className="w-4 h-4" />, target: '_self', color: 'cyan' },
]

const NavItem: React.FC<NavItemProps> = React.memo(({ label, href, icon, target = '_self', color }) => (
  <MotionDiv variants={bounceIn({ delay: 0.1, duration: 0.5 })}>
    <Link href={href} target={target} className={`flex items-center space-x-2 text-${color}-400 hover:text-${color}-300 transition-colors duration-200`}>
      {icon}
      <span className="text-sm md:text-base font-semibold">{label}</span>
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
      className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-10"
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
        <div className="flex items-center justify-between bg-opacity-80 backdrop-blur-md rounded-full border-b-2 border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.7)] py-3 px-6">
          <MotionDiv
            variants={slideIn({ direction: 'left', type: 'spring', delay: 0.2, duration: 0.5 })}
            className="md:hidden"
          >
            {/* <Image src={pet} alt="Logo" width={40} height={40} className="mr-2" /> */}
            <p className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
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
                <Menu className="h-8 w-8 text-cyan-300" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="backdrop-blur-md border-t-2 border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.7)] bg-opacity-80">
              <Nav />
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </MotionDiv>
  )
}

export default React.memo(Header)