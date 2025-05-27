import type React from "react";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageToggle } from "@/components/language-toggle";
import { Navbar } from "../components/navbar";
import { Tajawal } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/footer";

// Load Tajawal font via next/font/google
const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'GACI',
  description: 'General Authority of Communication & Informatics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={tajawal.className}>
      <head />
      <body className="bg-gray-50">
        {/* Background Topography Image */}
        <div className="fixed inset-0 z-0">
          <img
            src="/assets/topography_heartbeat_fixed.svg"
            alt=""
            className="w-full h-full object-cover opacity-5 mix-blend-soft-light pointer-events-none"
          />
        </div>

        {/* Main App Layout */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <LanguageToggle />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
