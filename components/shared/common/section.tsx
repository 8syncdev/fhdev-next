import React from 'react'
import { cn } from '@/lib/utils'

const Section = ({
  children,
  className,
  id,
  columns = 1
}: {
  children: React.ReactNode,
  className?: string,
  id?: string,
  columns?: number
}) => {
  const columnVariants = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 lg:grid-cols-3',
    4: 'grid-cols-1 lg:grid-cols-4',
    5: 'grid-cols-1 lg:grid-cols-5',
    6: 'grid-cols-1 lg:grid-cols-6',
    7: 'grid-cols-1 lg:grid-cols-7',
    8: 'grid-cols-1 lg:grid-cols-8',
    9: 'grid-cols-1 lg:grid-cols-9',
    10: 'grid-cols-1 lg:grid-cols-10',
    11: 'grid-cols-1 lg:grid-cols-11',
    12: 'grid-cols-1 lg:grid-cols-12',
  };

  const gapVariants = {
    1: 'gap-9',
    2: 'gap-8',
    3: 'gap-7',
    4: 'gap-6',
    5: 'gap-5',
    6: 'gap-4',
    7: 'gap-4',
    8: 'gap-4',
    9: 'gap-4',
    10: 'gap-4',
    11: 'gap-4',
    12: 'gap-4',
  };

  const columnClass = columns >= 1 && columns <= 12 ? columnVariants[columns as keyof typeof columnVariants] : '';
  const gapClass = columns >= 1 && columns <= 12 ? gapVariants[columns as keyof typeof gapVariants] : '';

  return (
    <section id={id} className={cn("pt-10 pb-12 relative grid items-start", columnClass, gapClass, className)}>
      {children}
    </section>
  )
}

export default Section;
