import React from 'react'
import { cn } from '@/lib/utils'
import { Footer, Header } from '@/components/shared'
import { bgImg } from '@/constants'
import Image from 'next/image'



interface BaseLayoutProps {
  children: React.ReactNode
  className?: string
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, className }) => {
  return (
    <>
      <div className={cn('min-h-screen flex flex-col bg-background/5 relative', className)}>
        <Header />
        <Image
          src={bgImg.src}
          alt="background"
          fetchPriority="high"
          width={1572}
          height={795}
          className="absolute -top- -z-10"
          style={{ color: 'transparent' }}
        />
        <main className="flex-grow container">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default BaseLayout