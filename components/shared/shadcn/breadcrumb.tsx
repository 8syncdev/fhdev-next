'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ChevronRight, Home } from 'lucide-react'

const toTitleCase = (str: string) => {
    return str.split('-').map(word => {
        if (word.toLowerCase() === 'and') return 'and';
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

const BreadcrumbProvider = () => {
    const pathname = usePathname()
    if (!pathname || pathname === '/') return null

    const paths = pathname.split('/').filter(path => path)

    return (
        <Breadcrumb className="py-2 px-4 bg-background/50 rounded-md shadow-md my-3">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink className="flex items-center text-gray-300 hover:text-blue-400 transition-colors" asChild>
                        <Link href={'/'}>
                            <Home size={16} className="mr-1" />
                            Home
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <ChevronRight size={14} className="text-gray-500" />
                </BreadcrumbSeparator>
                {paths.map((path, index) => {
                    const href = `/${paths.slice(0, index + 1).join('/')}`
                    const isLast = index === paths.length - 1

                    return (
                        <React.Fragment key={path}>
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="font-semibold text-gray-100">{toTitleCase(path)}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link href={href} className="text-gray-300 hover:text-blue-400 transition-colors">
                                            {toTitleCase(path)}
                                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast && (
                                <BreadcrumbSeparator>
                                    <ChevronRight size={14} className="text-gray-500" />
                                </BreadcrumbSeparator>
                            )}
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadcrumbProvider
