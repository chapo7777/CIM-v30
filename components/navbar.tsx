"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export const Navbar = () => {
  const pathname = usePathname()
  const { isArabic } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState("")

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash)
    handleHashChange() // run once on mount
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const [isMobile, setIsMobile] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const prevIsMobileRef = useRef(isMobile)

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = window.innerWidth < 1024
      setIsMobile(newIsMobile)

      // Close hamburger menu when transitioning from mobile to desktop
      if (prevIsMobileRef.current && !newIsMobile) {
        setIsOpen(false)
      }
      prevIsMobileRef.current = newIsMobile
    }

    // Initial check
    checkScreenSize()

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleNavbar = () => setIsOpen(!isOpen)
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen)

  // About dropdown items
  const aboutDropdownItems = [
    { href: "/About/overview", labelAr: "نبذة عن الهيئة", labelEn: "Overview" },
    { href: "/crew-heirarchy", labelAr: "القيادة", labelEn: "Leadership" },
  ]

  // All navigation links in proper order
  const navLinks = [
    { href: "/", labelAr: "الرئيسية", labelEn: "Home" },
    // About is handled separately but kept in position
    { isAbout: true },
    { href: "/itl-co-op", labelAr: "التعاون الدولي", labelEn: "International Co-op" },
    { href: "/news", labelAr: "المركز الإعلامي", labelEn: "News" },
    { href: "#services", scrollTo: true, labelAr: "خدماتنا", labelEn: "Services" },
  ]

  return (
    <div dir={isArabic ? "rtl" : "ltr"} style={{ position: "relative" }}>
      <nav 
        className="bg-white px-4 py-4 backdrop-blur-md text-black min-h-20 flex items-center justify-between sticky top-0 z-50"
        style={{
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        {/* Logo and Title */}
        <div className="flex items-center p-3">
          <img src="/logo.png" alt="CIM" className="w-10 h-10 rounded-full" />
          <span className="p-2 font-bold text-sm md:text-base lg:text-lg truncate max-w-[175px] md:max-w-[200px] lg:max-w-none">
            {isArabic ? "الهيئة العامة للإتصالات والمعلوماتية" : "General Authority of Communications and IT"}
          </span>
        </div>

        {/* Navigation Links Container */}
        <div className="flex items-center justify-end lg:justify-center lg:flex-1">
          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none"
            } lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto transition-all duration-200 ease-in-out 
            absolute lg:relative top-20 lg:top-0 left-0 lg:left-auto right-0 lg:right-auto 
            bg-white lg:bg-transparent p-5 lg:p-0 shadow-lg lg:shadow-none rounded-xl lg:rounded-none 
            flex flex-col lg:flex-row items-center justify-evenly gap-1 lg:gap-3 w-full z-40 ${isOpen ? "border-blue-500 border-l border-r border-b" : ""}`}
            style={{
              boxShadow: isOpen ? "0 10px 15px rgba(59, 130, 246, 0.2)" : "none",
            }}
          >
            {/* Render all nav links in order, with special handling for About */}
            {navLinks.map((link, index) => {
              // Special handling for the About dropdown
              if ("isAbout" in link) {
                return (
                  <div key="about" className={isMobile ? "w-full" : "relative"} ref={dropdownRef}>
                    {/* About Button - Desktop & Mobile */}
                    <button
                      onClick={toggleAboutDropdown}
                      className={`py-2 px-4 rounded-lg transition-all duration-200 font-medium whitespace-nowrap
                        ${isArabic ? "text-right" : "text-left"}
                        ${isMobile ? "w-full" : ""}
                        flex items-center ${isMobile ? "justify-between" : "gap-1"}
                        bg-gray-50 text-gray-800 hover:bg-blue-100 hover:text-blue-600
                      `}
                      style={{
                        minWidth: "fit-content",
                      }}
                    >
                      {isArabic ? "عن الهيئة" : "About"}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${aboutDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown menu - Desktop & Mobile */}
                    {aboutDropdownOpen && (
                      <div
                        className={`${
                          isMobile
                            ? "mt-1 bg-white rounded-lg border border-blue-100 overflow-hidden w-full"
                            : "absolute top-full mt-1 bg-white rounded-lg shadow-lg border border-blue-100 overflow-hidden min-w-[200px] z-50"
                        }`}
                      >
                        {aboutDropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block py-2 
                            ${isMobile ? `${isArabic ? "pr-8 pl-5" : "pl-8 pr-5"}` : "px-4"} 
                            hover:bg-blue-50 transition-colors
                            ${pathname === item.href ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}
                            ${isArabic ? "text-right" : "text-left"}`}
                            onClick={() => {
                              setAboutDropdownOpen(false)
                              setIsOpen(false)
                            }}
                          >
                            {isArabic ? item.labelAr : item.labelEn}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              // Regular nav links
              return link.scrollTo ? (
                <button
                  key={link.href}
                  onClick={() => {
                    const el = document.getElementById("services")
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                      setIsOpen(false)
                    } else {
                      // navigate to home and scroll after
                      window.location.href = `/#services`
                    }
                  }}
                  className={`py-2 px-4 rounded-lg transition-all duration-200 font-medium whitespace-nowrap
                    ${
                      pathname === "/" && currentHash === "#services"
                        ? "bg-blue-500 text-white shadow-md hover:bg-blue-600"
                        : "bg-gray-50 text-gray-800 hover:bg-blue-100 hover:text-blue-600"
                    }`}
                  style={{
                    textAlign: isArabic ? "right" : "left",
                    minWidth: "fit-content",
                  }}
                >
                  {isArabic ? link.labelAr : link.labelEn}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 px-4 rounded-lg transition-all duration-200 font-medium whitespace-nowrap
                  ${
                    pathname === link.href
                      ? "bg-blue-500 text-white shadow-md hover:bg-blue-600"
                      : "bg-gray-50 text-gray-800 hover:bg-blue-100 hover:text-blue-600"
                  }`}
                  style={{
                    textAlign: isArabic ? "right" : "left",
                    minWidth: "fit-content",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {isArabic ? link.labelAr : link.labelEn}
                </Link>
              )
            })}
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleNavbar}
            className="lg:hidden p-2 ml-2 bg-gray-50 text-blue-500 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
