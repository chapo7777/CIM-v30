"use client"

import { useState } from "react"

export function useContactForm() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [defaultSector, setDefaultSector] = useState<string>("")

  const openContactForm = (sector?: string) => {
    if (sector) {
      setDefaultSector(sector)
    }
    setIsContactFormOpen(true)
  }

  const closeContactForm = () => {
    setIsContactFormOpen(false)
    setDefaultSector("")
  }

  return {
    isContactFormOpen,
    defaultSector,
    openContactForm,
    closeContactForm,
  }
}
