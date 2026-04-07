import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AURA Sports Club | Pilates & Boks Stüdyosu — Zekeriyaköy',
  description:
    'Zekeriyaköy\'ün kalbinde pilates ve boks stüdyosu. Bedeninizi ve zihninizi keşfedin. Reformer Pilates, Mat Pilates, Boks dersleri.',
  keywords: 'pilates, boks, spor stüdyosu, zekeriyaköy, sarıyer, istanbul, reformer pilates',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'AURA Sports Club | Pilates & Boks Stüdyosu',
    description: 'Zekeriyaköy\'ün kalbinde pilates ve boks stüdyosu.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
