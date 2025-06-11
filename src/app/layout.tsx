import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Radiant',
    default: 'Radiant - Close every deal',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
        <script src="/theme.js" />
      </head>
      <body className="bg-gradient-to-b from-white from-50% to-white text-gray-950 antialiased transition-colors duration-300 ease-in-out dark:bg-gradient-to-b dark:from-neutral-950 dark:from-50% dark:to-neutral-900">
        {children}
      </body>
    </html>
  )
}
