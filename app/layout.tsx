import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sale & Pepe | Fine Italian Dining in Ahmedabad',
  description: 'Experience authentic Italian fine dining at Sale & Pepe Ristorante Italiano. Handcrafted pastas, wood-fired pizzas, and timeless flavors in Ahmedabad.',
  keywords: ['Italian restaurant', 'fine dining', 'Ahmedabad', 'wood-fired pizza', 'pasta', 'Sale & Pepe'],
  authors: [{ name: 'Sale & Pepe Ristorante' }],
  openGraph: {
    title: 'Sale & Pepe | Fine Italian Dining in Ahmedabad',
    description: 'Experience authentic Italian fine dining at Sale & Pepe Ristorante Italiano.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1814',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
