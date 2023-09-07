import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

import { Manrope } from 'next/font/google'

const monrope = Manrope({
  weight : ['400', '500', '600', '700', '800'],
  variable: '--font-monrope',
  subsets: ['latin'],
  
})

export const metadata: Metadata = {
  title: 'ScaleneWorks',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monrope.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
