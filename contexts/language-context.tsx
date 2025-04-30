"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type LanguageContextType = {
  isArabic: boolean
  language: "ar" | "en"
  direction: "rtl" | "ltr"
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  isArabic: false,
  language: "en",
  direction: "ltr",
  toggleLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isArabic, setIsArabic] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Handle hydration mismatch by only running effect on client
  useEffect(() => {
    setIsClient(true)
    const storedLanguage = localStorage.getItem("language")
    if (storedLanguage === "arabic") {
      setIsArabic(true)
    }
  }, [])

  const toggleLanguage = () => {
    setIsArabic((prev) => {
      const newLanguage = !prev
      if (typeof window !== "undefined") {
        localStorage.setItem("language", newLanguage ? "arabic" : "english")
      }
      return newLanguage
    })
  }

  // Derive additional properties
  const language = isArabic ? "ar" : "en"
  const direction = isArabic ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ isArabic, language, direction, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
