import React from 'react'
import { Metadata } from 'next'
import PaymentPage from '@/components/content/payment/main'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { searchParams }: Props
): Promise<Metadata> {
  const slug = searchParams.slug
  
  return {
    title: `Payment for ${slug}`,
  }
}

const Page = ({ searchParams }: Props) => {
  return <PaymentPage searchParams={searchParams} />
}

export default Page