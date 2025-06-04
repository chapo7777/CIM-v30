"use client"

import type React from "react"

import { LanguageProvider } from "@/contexts/language-context"

export default function CommunicationsRegulationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LanguageProvider>{children}</LanguageProvider>
}
