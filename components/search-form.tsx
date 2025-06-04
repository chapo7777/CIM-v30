"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"

export type SearchResultType = "service" | "pdf" | "news" | "page"

export interface SearchResult {
  id: string
  type: SearchResultType
  title: string
  titleAr?: string
  description?: string
  descriptionAr?: string
  url: string
  iconUrl?: string
}

interface SearchFormProps {
  placeholder?: string
  onSearch: (query: string) => void
  onQueryChange?: (query: string) => void
  isLoading?: boolean
  className?: string
  showResults?: boolean
  variant?: "navbar" | "sidebar"
}

export function SearchForm({
  placeholder = "Search...",
  onSearch,
  onQueryChange,
  isLoading = false,
  className = "",
  showResults = true,
  variant = "navbar",
}: SearchFormProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { isArabic } = useLanguage()
  const router = useRouter()
  const controllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    // Cancel previous fetch on new query
    if (controllerRef.current) {
      controllerRef.current.abort()
    }

    if (query.trim().length < 2) {
      setResults([])
      setShowSearchResults(false)
      setError(null)
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    const controller = new AbortController()
    controllerRef.current = controller

    // Local search data - replace API call
    const localSearchData: SearchResult[] = [
      {
        id: "1",
        type: "service",
        title: "Communications Regulation",
        titleAr: "تنظيم الاتصالات",
        description: "Telecom licensing and regulation",
        descriptionAr: "ترخيص وتنظيم شركات الاتصالات",
        url: "/services/communications-regulation",
      },
      {
        id: "2",
        type: "service",
        title: "E-Government Services",
        titleAr: "خدمات الحكومة الإلكترونية",
        description: "Government digital services",
        descriptionAr: "الخدمات الحكومية الرقمية",
        url: "/services/e-government",
      },
      {
        id: "3",
        type: "service",
        title: "Cybersecurity Services",
        titleAr: "خدمات الأمن السيبراني",
        description: "Digital security and protection",
        descriptionAr: "الأمان والحماية الرقمية",
        url: "/services/cybersecurity",
      },
    ]

    // Filter results locally
    const filteredResults = localSearchData.filter((item) => {
      const title = isArabic ? item.titleAr : item.title
      const description = isArabic ? item.descriptionAr : item.description
      return (
        title?.toLowerCase().includes(query.toLowerCase()) || description?.toLowerCase().includes(query.toLowerCase())
      )
    })

    setResults(filteredResults)
    setShowSearchResults(true)
    setLoading(false)

    return () => {
      controller.abort()
    }
  }, [query, isArabic])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
    if (results.length > 0) {
      router.push(results[0].url)
      setShowSearchResults(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onQueryChange?.(value)
  }

  const handleResultClick = (url: string) => {
    router.push(url)
    setShowSearchResults(false)
    setQuery("")
  }

  const clearSearch = () => {
    setQuery("")
    setShowSearchResults(false)
    onQueryChange?.("")
  }

  const getTypeIcon = (type: SearchResultType) => {
    switch (type) {
      case "service":
        return "🔧"
      case "pdf":
        return "📄"
      case "news":
        return "📰"
      case "page":
        return "🔗"
      default:
        return "🔍"
    }
  }

  return (
    <div className={`relative max-w-xs ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <Search
          className={`absolute ${isArabic ? "right-4" : "left-4"} top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 transition-colors`}
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          className={`${isArabic ? "pr-12 pl-4" : "pl-12 pr-4"} py-3 w-full h-11 rounded-xl border-0 bg-slate-50/80 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-200 transition-all duration-200 text-slate-700 placeholder:text-slate-400 shadow-sm hover:shadow-md hover:bg-white`}
          disabled={loading || isLoading}
          aria-label="Search input"
        />
        {query.length > 0 && (
          <button
            type="button"
            onClick={clearSearch}
            className={`absolute ${isArabic ? "left-4" : "right-4"} top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100`}
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      {loading && (
        <div
          className={`absolute z-50 ${variant === "navbar" ? "top-full mt-2" : "top-14"} ${isArabic ? "right-0" : "left-0"} w-full bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-200/50 p-4 text-center text-slate-500`}
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            {isArabic ? "جارٍ البحث..." : "Searching..."}
          </div>
        </div>
      )}

      {error && (
        <div
          className={`absolute z-50 ${variant === "navbar" ? "top-full mt-2" : "top-14"} ${isArabic ? "right-0" : "left-0"} w-full bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-red-200/50 p-4 text-center text-red-600`}
        >
          {error}
        </div>
      )}

      {showResults && showSearchResults && results.length > 0 && !loading && (
        <div
          className={`absolute z-50 ${
            variant === "navbar" ? "top-full mt-2" : "top-14"
          } ${isArabic ? "right-0" : "left-0"} w-full max-h-80 overflow-y-auto bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-200/50`}
        >
          <div className="p-2">
            <div className="text-xs font-medium text-slate-500 px-4 py-3 border-b border-slate-100">
              {isArabic ? `${results.length} نتيجة` : `${results.length} results`}
            </div>
            <div className="space-y-1 p-2">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result.url)}
                  className="w-full text-left px-4 py-3 hover:bg-blue-50/80 rounded-lg flex items-start gap-3 transition-all duration-200 group"
                >
                  <span className="flex-shrink-0 text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                    {getTypeIcon(result.type)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm text-slate-900 truncate group-hover:text-blue-700 transition-colors">
                      {isArabic && result.titleAr ? result.titleAr : result.title}
                    </div>
                    {(result.description || result.descriptionAr) && (
                      <div className="text-xs text-slate-500 truncate mt-1">
                        {isArabic && result.descriptionAr ? result.descriptionAr : result.description}
                      </div>
                    )}
                    <div className="text-xs text-blue-500 mt-1 truncate opacity-70 group-hover:opacity-100 transition-opacity">
                      {result.url}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {showResults && showSearchResults && !loading && results.length === 0 && (
        <div
          className={`absolute z-50 ${variant === "navbar" ? "top-full mt-2" : "top-14"} ${isArabic ? "right-0" : "left-0"} w-full bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-200/50`}
        >
          <div className="p-6 text-center">
            <div className="text-slate-400 mb-2">🔍</div>
            <p className="text-sm text-slate-500">{isArabic ? "لا توجد نتائج مطابقة" : "No matching results found"}</p>
          </div>
        </div>
      )}
    </div>
  )
}
