import React from 'react'
import { BackgroundProvider, BackgroundSwitcher, useBackground } from '@/components/dev'

const Page = () => {


  return (
    <BackgroundProvider>
        <BackgroundSwitcher />
    </BackgroundProvider>
  )
}

export default Page