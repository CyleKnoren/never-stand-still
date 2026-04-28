import { Barlow_Condensed, Barlow } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-heading',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

export const metadata = {
  title: 'Never Stand Still',
  description: 'Adventure lifestyle blog — trails, gear, climbing, MTB and more. Based in Somerset West, Cape Town.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${barlow.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}