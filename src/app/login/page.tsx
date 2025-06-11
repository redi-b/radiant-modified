import { Button } from '@/components/button'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Mark } from '@/components/logo'
import { Checkbox, Field, Input, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account to continue.',
}

export default function Login() {
  return (
    <main className="dark:to-neutral-90 overflow-hidden bg-gray-50 dark:bg-gradient-to-b dark:from-neutral-950 dark:from-50%">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5 dark:bg-card-500 dark:ring-white/15">
          <form action="#" method="POST" className="p-7 sm:p-11">
            <div className="flex items-start">
              <Link href="/" title="Home">
                <Mark className="h-9 fill-black dark:fill-white" />
              </Link>
            </div>
            <h1 className="mt-8 text-base/6 font-medium dark:text-gray-50">
              Welcome back!
            </h1>
            <p className="mt-1 text-sm/5 text-gray-600 dark:text-gray-200">
              Sign in to your account to continue.
            </p>
            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium dark:text-gray-50">
                Email
              </Label>
              <Input
                required
                autoFocus
                type="email"
                name="email"
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
                  'dark:bg-card-400 dark:text-gray-50 dark:ring-white/35',
                  'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6',
                  'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black',
                  'dark:data-focus:outline-white',
                )}
              />
            </Field>
            <Field className="mt-8 space-y-3">
              <Label className="text-sm/5 font-medium dark:text-gray-50">
                Password
              </Label>
              <Input
                required
                type="password"
                name="password"
                className={clsx(
                  'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
                  'dark:bg-card-400 dark:text-gray-50 dark:ring-white/35',
                  'px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1.5)-1px)] text-base/6 sm:text-sm/6',
                  'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-black',
                  'dark:data-focus:outline-white',
                )}
              />
            </Field>
            <div className="mt-8 flex items-center justify-between text-sm/5">
              <Field className="flex items-center gap-3">
                <Checkbox
                  name="remember-me"
                  className={clsx(
                    'group block size-4 rounded-sm border border-transparent shadow-sm ring-1 ring-black/10',
                    'dark:bg-card-400 dark:ring-white/35',
                    'data-checked:bg-black data-checked:ring-black',
                    'dark:data-checked:bg-white dark:data-checked:ring-white/15',
                    'data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-black',
                  )}
                >
                  <CheckIcon className="fill-white opacity-0 group-data-checked:opacity-100 dark:fill-black" />
                </Checkbox>
                <Label className="dark:text-gray-50">Remember me</Label>
              </Field>
              <Link
                href="#"
                className="font-medium hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-300"
              >
                Forgot password?
              </Link>
            </div>
            <div className="mt-8">
              <Button
                type="submit"
                className="w-full transition-colors duration-200 dark:bg-gray-100 dark:text-gray-950 dark:hover:bg-gray-300 dark:hover:text-black"
              >
                Sign in
              </Button>
            </div>
          </form>
          <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5 dark:bg-card-600 dark:text-gray-50 dark:ring-white/25">
            Not a member?{' '}
            <Link
              href="#"
              className="font-medium hover:text-gray-600 dark:hover:text-gray-300"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
