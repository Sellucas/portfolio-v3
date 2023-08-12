import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Header from '@/components/header'

import './globals.css'

const font = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Sellucas | Frontend Developer',
  description: 'Lucas Sell Machado - Desenvolvedor Frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
