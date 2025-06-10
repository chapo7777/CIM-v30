import type React from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { Navbar } from "@/components/navbar"
import "./globals.css"
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang="en" className={tajawal.className}>
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'GACI',
  description: 'General Authority of comms & informatics Libya.',
  generator: 'Built by Mismari',
  authors: { name: 'Mismari'},
    icons: {
    icon: "/favicon.ico",
  },
}
