"use client"

import type React from "react"
import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchFormProps {
  className?: string
  placeholder?: string
  onSearch?: (query: string) => void
}

export function SearchForm({ className = "", placeholder = "Search...", onSearch }: SearchFormProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch?.(query.trim())
      console.log("Searching for:", query.trim())
    }
  }

  const handleClear = () => {
    setQuery("")
    setIsFocused(false)
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="relative">
        <div className={`relative transition-all duration-300 ${isFocused ? "scale-105" : ""}`}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`pl-10 pr-10 bg-white/60 backdrop-blur-sm border-slate-200/60 rounded-xl transition-all duration-300 focus:bg-white/80 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 ${
              isFocused ? "shadow-lg shadow-blue-500/10" : "shadow-sm"
            }`}
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-slate-100/80 rounded-lg"
            >
              <X className="h-3 w-3 text-slate-400" />
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
