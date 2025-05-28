"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface LanguageContextType {
  isArabic: boolean
  direction: "ltr" | "rtl"
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isArabic, setIsArabic] = useState(false)

  const toggleLanguage = () => {
    setIsArabic(!isArabic)
  }

  const direction = isArabic ? "rtl" : "ltr"

  useEffect(() => {
    document.documentElement.dir = direction
    document.documentElement.lang = isArabic ? "ar" : "en"
  }, [direction, isArabic])

  return <LanguageContext.Provider value={{ isArabic, direction, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
