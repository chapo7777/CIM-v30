"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

import { Label } from "@/components/ui/label"
import { SidebarGroup, SidebarGroupContent, SidebarInput } from "@/components/ui/sidebar"

// Define the data structure for search results
type SearchResult = {
  title: string
  url: string
  category: string
}

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock data for search results - in a real app, this would come from your data source
  const allItems: SearchResult[] = [
    { title: "Installation", url: "#", category: "Getting Started" },
    { title: "Project Structure", url: "#", category: "Getting Started" },
    { title: "Routing", url: "#", category: "Building Your Application" },
    { title: "Data Fetching", url: "#", category: "Building Your Application" },
    { title: "Rendering", url: "#", category: "Building Your Application" },
    { title: "Caching", url: "#", category: "Building Your Application" },
    { title: "Components", url: "#", category: "API Reference" },
    { title: "Functions", url: "#", category: "API Reference" },
    { title: "Accessibility", url: "#", category: "Architecture" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)

    // Simulate a search delay
    setTimeout(() => {
      const results = allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setSearchResults(results)
      setIsSearching(false)
    }, 300)
  }

  return (
    <div className="relative">
      <form {...props} onSubmit={handleSearch}>
        <SidebarGroup className="py-0">
          <SidebarGroupContent className="relative">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <SidebarInput
              id="search"
              placeholder="Search the docs..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
          </SidebarGroupContent>
        </SidebarGroup>
      </form>

      {/* Search results dropdown */}
      {searchResults.length > 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-lg">
          <ul className="max-h-60 overflow-auto py-1 text-sm">
            {searchResults.map((result, index) => (
              <li key={index}>
                <a href={result.url} className="block px-4 py-2 hover:bg-blue-50 text-gray-700">
                  <div className="font-medium">{result.title}</div>
                  <div className="text-xs text-gray-500">{result.category}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* No results state */}
      {isSearching && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-white p-2 shadow-lg text-center text-sm text-gray-500">
          Searching...
        </div>
      )}

      {searchQuery && !isSearching && searchResults.length === 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-white p-2 shadow-lg text-center text-sm text-gray-500">
          No results found
        </div>
      )}
    </div>
  )
}
