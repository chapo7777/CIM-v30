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

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [isArabic, setIsArabic] = useState(false)

  useEffect(() => {
    const storedLang = localStorage.getItem("language")
    setIsArabic(storedLang === "ar")

    // Apply direction to the document
    document.documentElement.dir = storedLang === "ar" ? "rtl" : "ltr"
  }, [])

  const toggleLanguage = () => {
    setIsArabic((prev) => {
      const newLang = !prev ? "ar" : "en"
      localStorage.setItem("language", newLang)
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr"
      return !prev
    })
  }

  const language = isArabic ? "ar" : "en"
  const direction = isArabic ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ isArabic, language, direction, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
