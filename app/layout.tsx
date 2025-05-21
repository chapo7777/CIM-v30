import type React from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { Navbar } from "../components/navbar"
import "./globals.css"
import Footer from "@/components/footer";

export default function RootLayout({
  
  children,
}: {
  
  children: React.ReactNode
}) {
  return (

    <html lang="en" suppressHydrationWarning>
      <head />
      <body style={{ fontFamily: "Cairo, sans-serif" }}>
{/* //BackGround */}
  <div className="fixed inset-0 z-0">
    <img
      src="/assets/topography_heartbeat_fixed.svg"
      alt=""
      className="w-full h-full object-cover opacity-5 mix-blend-soft-light pointer-events-none"
    />
   </div>

      <div className="bg-gray-50" >

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <LanguageToggle />
          </LanguageProvider>
        </ThemeProvider>
        </div>
      </body>
      
    </html>
  )
}
