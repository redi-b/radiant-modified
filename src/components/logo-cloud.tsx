'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

const lightThemeLogos = [
  { alt: 'SavvyCal', src: '/logo-cloud/savvycal.svg' },
  { alt: 'Laravel', src: '/logo-cloud/laravel.svg' },
  { alt: 'Tuple', src: '/logo-cloud/tuple.svg' },
  { alt: 'Transistor', src: '/logo-cloud/transistor.svg' },
  { alt: 'Statamic', src: '/logo-cloud/statamic.svg' },
]

const darkThemeLogos = [
  { alt: 'SavvyCal', src: '/logo-cloud/dark/savvycal.svg' },
  { alt: 'Laravel', src: '/logo-cloud/dark/laravel.svg' },
  { alt: 'Tuple', src: '/logo-cloud/dark/tuple.svg' },
  { alt: 'Transistor', src: '/logo-cloud/dark/transistor.svg' },
  { alt: 'Statamic', src: '/logo-cloud/dark/statamic.svg' },
]

function LogoCloudContainer({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={clsx(
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <>
      <LogoCloudContainer className={clsx('dark:hidden', className)}>
        {lightThemeLogos.map((logo) => (
          <motion.img
            key={logo.alt}
            alt={logo.alt}
            src={logo.src}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
          />
        ))}
      </LogoCloudContainer>

      <LogoCloudContainer className={clsx('hidden dark:flex', className)}>
        {darkThemeLogos.map((logo) => (
          <motion.img
            key={logo.alt}
            alt={logo.alt}
            src={logo.src}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
          />
        ))}
      </LogoCloudContainer>
    </>
  )
}
