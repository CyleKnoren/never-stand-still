import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  title: 'Never Stand Still',
  description: 'Adventure blog — trails, gear, climbing, MTB and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-black text-white min-h-screen`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}