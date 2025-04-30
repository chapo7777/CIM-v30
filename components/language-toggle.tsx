"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { isArabic, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-[20px] right-[20px] w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg flex items-center justify-center font-medium border border-blue-400 z-50"
      style={{
        boxShadow: "0 0 15px rgba(59, 130, 246, 0.4), 0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      aria-label={`Switch to ${isArabic ? "English" : "Arabic"}`}
    >
      {isArabic ? "EN" : "ع"}
    </button>
  )
}

export default LanguageToggle
