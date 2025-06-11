'use client'

import { Button } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const nowDark = !isDark
    if (nowDark) {
      html.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
    setIsDark(nowDark)
  }

  return (
    <Button
      onClick={toggleTheme}
      className="flex cursor-pointer items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5 dark:text-gray-50 data-hover:dark:bg-white/2.5"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.svg
            key="sun"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-current"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2L12 4 M12 20L12 22 M22 12L20 12 M4 12L2 12 M18.95 5.05L17.536 6.464 M5.05 5.05L6.464 6.464 M18.95 18.95L17.536 17.536 M5.05 18.95L6.464 17.536" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-current"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M21.75 15.5a9.5 9.5 0 01-11.25-13 9.5 9.5 0 1011.25 13z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </Button>
  )
}
