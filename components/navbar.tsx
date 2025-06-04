"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Globe, Search } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { SearchForm } from "@/components/search-form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ContactFormPopup } from "./contact-form-popup";
import { useContactForm } from "@/hooks/use-contact-form";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const { isArabic, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = window.innerWidth < 1024;
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setIsOpen(false);
        setShowMobileSearch(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);
  const toggleMobileSearch = () => setShowMobileSearch(!showMobileSearch);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const aboutDropdownItems = [
    { href: "/about/overview", labelAr: "نبذة عن الهيئة", labelEn: "Overview" },
    { href: "/about/leadership", labelAr: "القيادة", labelEn: "Leadership" },
    {
      href: "/about/cooperation",
      labelAr: "التعاون الدولي",
      labelEn: "International Co-op",
    },
  ];

  const serviceItems = [
    {
      href: "/services/communications-regulation",
      labelAr: "تنظيم الاتصالات",
      labelEn: "Communications Regulation",
    },
    {
      href: "/services/e-government",
      labelAr: "الحكومة الإلكترونية",
      labelEn: "E-Government",
    },
    {
      href: "/services/cybersecurity",
      labelAr: "الأمن السيبراني",
      labelEn: "Cybersecurity",
    },
    {
      href: "/services/digital-transformation",
      labelAr: "التحول الرقمي",
      labelEn: "Digital Transformation",
    },
  ];

  const navLinks = [
    { href: "/", labelAr: "الرئيسية", labelEn: "Home" },
    { isAbout: true },
    { href: "/news", labelAr: "المركز الإعلامي", labelEn: "News" },
  ];

  const {
    isContactFormOpen,
    defaultSector,
    openContactForm,
    closeContactForm,
  } = useContactForm();

  return (
    <div className="relative">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-lg shadow-slate-900/5"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center group">
              <div className="relative mx-5 p-3 bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="GACI Logo"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="ml-4">
                <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent tracking-tight">
                  G A C I
                </span>
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <SearchForm
                className="w-full"
                placeholder={isArabic ? "البحث..." : "Search..."}
                onSearch={handleSearch}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                if ("isAbout" in link) {
                  return (
                    <div key="about" className="relative" ref={dropdownRef}>
                      <button
                        onClick={toggleAboutDropdown}
                        className={`group relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-1.5 ${
                          aboutDropdownOpen
                            ? "bg-slate-100/80 text-slate-900"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-50/80"
                        }`}
                      >
                        <span className="relative z-10">
                          {isArabic ? "عن الهيئة" : "About"}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-all duration-300 ${
                            aboutDropdownOpen
                              ? "rotate-180"
                              : "group-hover:translate-y-0.5"
                          }`}
                        />
                      </button>

                      {aboutDropdownOpen && (
                        <div className="absolute top-full mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden min-w-[220px] z-50">
                          <div className="p-2">
                            {aboutDropdownItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                  pathname === item.href
                                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
                                    : "text-slate-700 hover:bg-slate-50/80 hover:text-slate-900"
                                }`}
                                onClick={() => {
                                  setAboutDropdownOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                {isArabic ? item.labelAr : item.labelEn}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                      pathname === link.href
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50/80"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">
                      {isArabic ? link.labelAr : link.labelEn}
                    </span>
                  </Link>
                );
              })}

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="group relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 flex items-center gap-1.5">
                  <span className="relative z-10">
                    {isArabic ? "الخدمات" : "Services"}
                  </span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-xl border-slate-200/50 shadow-xl rounded-2xl p-2 min-w-[280px]">
                  <DropdownMenuLabel className="text-slate-900 font-semibold px-3 py-2">
                    {isArabic ? "خدماتنا" : "Our Services"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-200/60" />
                  {serviceItems.map((service) => (
                    <Link key={service.href} href={service.href}>
                      <DropdownMenuItem className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50/80 hover:text-slate-900 transition-colors duration-200">
                        {isArabic ? service.labelAr : service.labelEn}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 📌 Contact Us Button */}
              <Button
                onClick={openContactForm}
                className="ml-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm hover:shadow-md hover:brightness-110 transition-all duration-300 rounded-xl px-4 py-2 text-sm font-medium"
              >
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </Button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="group relative p-2.5 rounded-xl font-medium text-sm transition-all duration-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80"
                title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
              >
                <Globe className="h-4 w-4" />
              </button>
            </div>
            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleMobileSearch}
                className="relative p-3 bg-slate-50/80 hover:bg-slate-100/80 rounded-2xl transition-all duration-300 hover:scale-105 group"
                aria-label="Toggle search"
              >
                <Search size={18} className="text-slate-700" />
              </button>

              <button
                onClick={toggleNavbar}
                className="relative p-3 bg-slate-50/80 hover:bg-slate-100/80 rounded-2xl transition-all duration-300 hover:scale-105 group"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <X size={20} className="text-slate-700" />
                ) : (
                  <Menu size={20} className="text-slate-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showMobileSearch && (
            <div className="lg:hidden pb-4">
              <SearchForm
                className="w-full"
                placeholder={isArabic ? "البحث..." : "Search..."}
                onSearch={handleSearch}
              />
            </div>
          )}

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${
              isOpen
                ? "max-h-screen opacity-100 pb-6"
                : "max-h-0 opacity-0 pb-0"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-xl p-4 mt-4 space-y-2">
              {/* Home Link */}
              <Link
                href="/"
                className={`w-full flex items-center px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  pathname === "/"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                    : "text-slate-700 hover:bg-slate-50/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {isArabic ? "الرئيسية" : "Home"}
              </Link>

              {/* About Dropdown */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 text-slate-700 hover:bg-slate-50/80"
                >
                  <span>{isArabic ? "عن الهيئة" : "About"}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      mobileAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileAboutOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                          pathname === item.href
                            ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
                            : "text-slate-600 hover:bg-slate-50/80 hover:text-slate-900"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {isArabic ? item.labelAr : item.labelEn}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 text-slate-700 hover:bg-slate-50/80"
                >
                  <span>{isArabic ? "الخدمات" : "Services"}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                          pathname === service.href
                            ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
                            : "text-slate-600 hover:bg-slate-50/80 hover:text-slate-900"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {isArabic ? service.labelAr : service.labelEn}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* News Link */}
              <Link
                href="/news"
                className={`w-full flex items-center px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  pathname === "/news"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                    : "text-slate-700 hover:bg-slate-50/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {isArabic ? "المركز الإعلامي" : "News"}
              </Link>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 text-slate-700 hover:bg-slate-50/80"
              >
                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {isArabic ? "Switch to English" : "التبديل إلى العربية"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Contact Form Modal */}
      <ContactFormPopup
        isOpen={isContactFormOpen}
        onClose={closeContactForm}
        defaultSector={defaultSector}
      />
      <div className="h-20" />
    </div>
  );
};
