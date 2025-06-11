'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
import { ThemeToggle } from './theme-toggle'

const links = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/company', label: 'Company' },
  { href: '/', label: 'Blog' },
  { href: '/login', label: 'Login' },
]

function DesktopNav() {
  const navContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  }

  const navItem = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.nav
      variants={navContainer}
      initial="hidden"
      animate="show"
      className="relative hidden lg:flex"
    >
      {links.map(({ href, label }) => (
        <motion.div key={href} variants={navItem}>
          <PlusGridItem key={href} className="relative flex h-full">
            <Link
              href={href}
              className="flex h-full items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5 dark:text-gray-50 data-hover:dark:bg-white/2.5"
            >
              {label}
            </Link>
          </PlusGridItem>
        </motion.div>
      ))}
    </motion.nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link
              href={href}
              className="text-base font-medium text-gray-950 dark:text-gray-50"
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5 dark:border-white/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5 dark:border-white/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PlusGridItem className="py-3">
                <Link href="/" title="Home">
                  <Logo className="h-9 dark:text-white" />
                </Link>
              </PlusGridItem>
            </motion.div>
            {banner && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="relative hidden items-center py-3 lg:flex"
              >
                {banner}
              </motion.div>
            )}
          </div>
          <MobileNavButton />
          <div className="hidden gap-20 lg:flex">
            <DesktopNav />
            <motion.div
              initial={{ opacity: 0, x: 20 }} // Start slightly off to the right
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }} // Increased delay to appear after nav links
            >
              <PlusGridItem className="relative flex h-full">
                <ThemeToggle />
              </PlusGridItem>
            </motion.div>
          </div>
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
