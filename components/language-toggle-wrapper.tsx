"use client"

import { useState } from "react"

import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"
import { createPortal } from "react-dom"

export function LanguageToggleWrapper() {
  const { isArabic, toggleLanguage } = useLanguage()

  // Use a portal to render the toggle button
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  const container = document.getElementById("language-toggle-container")
  if (!container) return null

  return createPortal(
    <button
      onClick={toggleLanguage}
      className="w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg flex items-center justify-center font-medium border border-blue-400"
      style={{
        boxShadow: "0 0 15px rgba(59, 130, 246, 0.4), 0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      aria-label={`Switch to ${isArabic ? "English" : "Arabic"}`}
    >
      {isArabic ? "EN" : "ع"}
    </button>,
    container,
  )
}
