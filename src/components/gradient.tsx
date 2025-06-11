import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145',
        'dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e]',
        'transition-colors duration-500 ease-in-out',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff]',
          'dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e]',
          'rotate-[-10deg] rounded-full blur-3xl',
          'transition-colors duration-500 ease-in-out',
        )}
      />
    </div>
  )
}
