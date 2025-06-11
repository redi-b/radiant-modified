'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Subheading } from './text'

export function BentoCard({
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
  hoverable = false,
}: {
  className?: string
  eyebrow: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  graphic: React.ReactNode
  fade?: ('top' | 'bottom')[]
  hoverable?: boolean
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    active: hoverable
      ? {
          scale: 1.015,
          y: -4,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }
      : {},
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="active"
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={cardVariants}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-lg',
        'bg-white shadow-xs ring-1 ring-black/5',
        'dark:bg-card-500 dark:ring-white/15',
      )}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes('top') && (
          <div className="absolute inset-0 bg-linear-to-b from-white to-50% group-dark:from-gray-800 group-dark:from-[-25%]" />
        )}
        {fade.includes('bottom') && (
          <div className="absolute inset-0 bg-linear-to-t from-white to-50% group-dark:from-gray-800 group-dark:from-[-25%]" />
        )}
      </div>
      <div className="relative p-10">
        <Subheading as="h3">{eyebrow}</Subheading>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-dark:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-dark:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
