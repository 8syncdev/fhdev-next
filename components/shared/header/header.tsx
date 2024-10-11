'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { brand } from '@/constants'
import { Menu, GraduationCap, MapPin, Phone, Book, X, Code, Database, Brain, FileText, Users, MessageSquare, Smartphone, Layout, ChevronDown, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface NavItemProps {
  label: string
  icon?: React.ReactNode
  color: string
  linkTriggerShow?: {
    index?: boolean
    title: string;
    href: string;
    description: string;
    icon: React.ReactNode;
    subLinks: {
      title: string;
      href: string;
      description: string;
      icon: React.ReactNode;
    }[]
  }[]
}

const defaultNavItems: NavItemProps[] = [
  {
    label: 'Nội dung',
    icon: <GraduationCap className="w-4 h-4" />,
    color: 'text-purple-400',
    linkTriggerShow: [
      {
        index: true,
        title: "Khóa Học",
        href: "/course",
        description: "Khám phá các khóa học chất lượng cao của chúng tôi.",
        icon: <GraduationCap className="w-4 h-4" />,
        subLinks: [
          {
            title: "Lập trình Web",
            href: "/course/course-nextjs-fullstack",
            description: "Học cách xây dựng trang web hiện đại với Next.js, React và TypeScript.",
            icon: <Code className="w-4 h-4" />
          },
          {
            title: "Lập trình Mobile",
            href: "/course/course-mobile-flet-python",
            description: "Phát triển ứng dụng di động đa nền tảng với Flet và Python.",
            icon: <Smartphone className="w-4 h-4" />
          },
          {
            title: "Khoa học dữ liệu",
            href: "/course/course-data-science",
            description: "Khám phá thế giới của AI, Phân tích dữ liệu, Kỹ thuật dữ liệu và Khoa học dữ liệu.",
            icon: <Brain className="w-4 h-4" />
          },
          {
            title: "Lập trình cơ bản",
            href: "/course/course-cpp-beginner",
            description: "Học ngôn ngữ lập trình C++ từ cơ bản đến nâng cao.",
            icon: <Book className="w-4 h-4" />
          },
          {
            title: "Lập trình thi đấu",
            href: "/course/lap-trinh-thi-dau",
            description: "Nâng cao kỹ năng lập trình và giải thuật với C++ cho các cuộc thi lập trình.",
            icon: <Award className="w-4 h-4" />
          },
        ]
      },
      {
        index: true,
        title: "Tài liệu",
        href: "#",
        description: "Truy cập tài liệu IT chuyên sâu và chia sẻ kiến thức mới nhất.",
        icon: <FileText className="w-4 h-4" />,
        subLinks: [
          {
            title: "Blog IT",
            href: "/fhdev-docs",
            description: "Đọc các bài viết chuyên sâu về công nghệ và lập trình.",
            icon: <FileText className="w-4 h-4" />
          },
        ]
      },
      {
        index: true,
        title: "Giới thiệu giáo viên",
        href: "/mentor",
        description: "Tìm hiểu về đội ngũ giảng viên giàu kinh nghiệm của chúng tôi.",
        icon: <Users className="w-4 h-4" />,
        subLinks: [

        ]
      }
    ]
  },
  {
    label: 'Lộ Trình',
    icon: <MapPin className="w-4 h-4" />,
    color: 'text-pink-400',
    linkTriggerShow: [
      {
        index: true,
        title: "Lộ Trình",
        href: "/#",
        description: "Xem lộ trình học tập được thiết kế riêng cho bạn.",
        icon: <MapPin className="w-4 h-4" />,
        subLinks: [
          {
            title: "Lộ trình Front-end",
            href: "/roadmap/frontend",
            description: "Trở thành chuyên gia phát triển giao diện người dùng.",
            icon: <Layout className="w-4 h-4" />
          },
          {
            title: "Lộ trình Back-end",
            href: "/roadmap/backend",
            description: "Xây dựng hệ thống phía máy chủ mạnh mẽ và hiệu quả.",
            icon: <Database className="w-4 h-4" />
          },
        ]
      }
    ]
  },
  {
    label: 'Liên Hệ',
    icon: <Phone className="w-4 h-4" />,
    color: 'text-green-400',
    linkTriggerShow: [
      {
        index: true,
        title: "Liên Hệ",
        href: "#",
        description: "Liên hệ với chúng tôi để được hỗ trợ.",
        icon: <Phone className="w-4 h-4" />,
        subLinks: [
          {
            title: "Hỗ trợ trực tuyến",
            href: "#",
            description: "Nhận hỗ trợ ngay lập tức thông qua chat trực tuyến.",
            icon: <MessageSquare className="w-4 h-4" />
          },
          {
            title: "Đặt lịch tư vấn",
            href: "#",
            description: "Đặt lịch hẹn để được tư vấn chi tiết về khóa học.",
            icon: <Users className="w-4 h-4" />
          },
        ]
      }
    ]
  },
]

interface HeaderProps {
  navItems?: NavItemProps[]
}

const Logo: React.FC = React.memo(() => (
  <div className="flex-shrink-0 flex items-center mr-4 sm:mr-6 md:mr-8 lg:mr-10">
    <Link href="/" aria-label={brand.name}>
      <p className="text-xl sm:text-2xl font-bold text-white">
        {brand.name}
      </p>
    </Link>
  </div>
))

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "flex items-center p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={props.href as string}
          {...props}
        >
          <span className="mr-2 flex items-center justify-center">{icon}</span>
          <div>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const NavItem: React.FC<NavItemProps> = React.memo(({ label, icon, color, linkTriggerShow }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger className={`${color} text-sm sm:text-base`}>
      <span className="flex items-center">
        <span className="mr-2 flex items-center justify-center">{icon}</span>
        {label}
      </span>
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="p-4 w-[600px] max-h-[500px] overflow-y-auto">
        {linkTriggerShow && linkTriggerShow.map((item, index) => (
          <li key={index} className="mb-4 flex items-center">
            {item.index && (
              <NavigationMenuLink asChild className="flex-shrink-0 w-1/3 mr-4">
                <Link
                  className="flex flex-col select-none rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md h-full"
                  href={item.href}
                >
                  <div className={`mb-2 text-base font-medium ${color}`}>{item.title}</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            )}
            <ul className="flex-grow grid grid-cols-2 gap-2 items-center max-h-44 overflow-y-auto">
              {item.subLinks.map((subItem) => (
                <ListItem key={subItem.title} title={subItem.title} href={subItem.href} icon={subItem.icon}>
                  {subItem.description}
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
))

const JoinButton: React.FC = React.memo(() => (
  <NavigationMenuItem>
    <Link href="/course" legacyBehavior passHref>
      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] transition-all duration-300")}>
        Tham gia ngay
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
))

const MobileAccordion: React.FC<{ items: NavItemProps[] }> = React.memo(({ items }) => (
  <Accordion
    type="single"
    collapsible
    className="md:hidden flex-col w-full bg-background pb-4"
  >
    {items.map((item, index) => (
      <AccordionItem value={`item-${index}`} key={index}>
        <AccordionTrigger className={`${item.color} px-4 py-2 flex items-center`}>
          <span className="mr-2">{item.icon}</span>
          {item.label}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="pl-8">
            {item.linkTriggerShow?.[0].subLinks.map((subItem, subIndex) => (
              <li key={subIndex} className="py-2">
                <Link href={subItem.href} className="flex items-center text-sm">
                  <span className="mr-2">{subItem.icon}</span>
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    ))}
    <div className="px-4 py-2">
      <Link href="/course" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] transition-all duration-300 block text-center">
        Tham gia ngay
      </Link>
    </div>
  </Accordion>
))

const Nav: React.FC<{ items: NavItemProps[] }> = React.memo(({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="md:hidden"
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {items.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
            <JoinButton />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background">
          <MobileAccordion items={items} />
        </div>
      )}
    </>
  )
})

const Header: React.FC<HeaderProps> = ({ navItems = defaultNavItems }) => {
  return (
    <div className="bg-transparent sticky top-0 z-[1000] backdrop-blur-md w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          <Nav items={navItems} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)