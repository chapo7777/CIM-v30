"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchFormProps {
  className?: string
  placeholder?: string
  onSearch?: (query: string) => void
  onQueryChange?: (query: string) => void
  isLoading?: boolean
  showClearButton?: boolean
}

export function SearchForm({
  className = "",
  placeholder = "Search...",
  onSearch,
  onQueryChange,
  isLoading = false,
  showClearButton = true,
}: SearchFormProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQueryChange?.(query)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query, onQueryChange])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch?.(query.trim())
    }
  }

  const handleClear = () => {
    setQuery("")
    onQueryChange?.("")
    inputRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClear()
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="relative">
        <div className={`relative transition-all duration-300 ${isFocused ? "scale-105" : ""}`}>
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {isLoading ? (
              <Loader2 className="h-4 w-4 text-slate-400 animate-spin" />
            ) : (
              <Search className="h-4 w-4 text-slate-400" />
            )}
          </div>
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={`pl-10 pr-10 bg-white/60 backdrop-blur-sm border-slate-200/60 rounded-xl transition-all duration-300 focus:bg-white/80 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 ${
              isFocused ? "shadow-lg shadow-blue-500/10" : "shadow-sm"
            }`}
          />
          {query && showClearButton && (
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
