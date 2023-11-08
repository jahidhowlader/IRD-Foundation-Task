import { Inter } from 'next/font/google'
import './globals.css'
import SideNavigation from '@/components/sideNavigation/SideNavigation'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IRD Foundation Task',
  description: 'IRD Foundation Task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SideNavigation />
        {children}
      </body>
    </html>
  )
}
