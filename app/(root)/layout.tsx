import React from 'react'
import BaseLayout from '@/components/shared/layout/base-layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  )
}