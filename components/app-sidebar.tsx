"use client";

import type * as React from "react";
import { useState, useMemo } from "react";
import {
  Home,
  FileText,
  Shield,
  Zap,
  AlertCircle,
  Phone,
  Globe,
  Wifi,
  Lock,
  Settings,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { SearchForm } from "./search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Service buttons data (matching the main page)
const serviceButtons = [
  {
    title: "Communications Regulation",
    titleAr: "تنظيم الاتصالات",
    url: "/services/communications-regulation",
    icon: Phone,
    description: "Telecom licensing and regulation",
    descriptionAr: "  ترخيص وتنظيم الاتصالات و المعلوماتي",
  },

  {
    title: "E-Government Services",
    titleAr: "خدمات الحكومة الإلكترونية",
    url: "/services/e-government",
    icon: Globe,
    description: "Government digital services",
    descriptionAr: "الخدمات الحكومية الرقمية",
  },

  {
    title: "Cybersecurity Services",
    titleAr: "خدمات الأمن السيبراني",
    url: "/services/cybersecurity",
    icon: Shield,
    description: "Digital security and protection",
    descriptionAr: "الأمان والحماية الرقمية",
  },
  {
    title: "Digital Transformation",
    titleAr: "التحول الرقمي",
    url: "/services/digital-transformation",
    icon: Zap,
    description: "Digital modernization services",
    descriptionAr: "خدمات التحديث الرقمي",
  },
];

// Search result highlighting component
function HighlightText({
  text,
  searchQuery,
}: {
  text: string;
  searchQuery: string;
}) {
  if (!searchQuery.trim()) return <>{text}</>;

  const regex = new RegExp(
    `(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi"
  );
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark
            key={index}
            className="bg-yellow-200 text-yellow-900 rounded px-1"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isArabic } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return serviceButtons;

    const query = searchQuery.toLowerCase();
    return serviceButtons.filter((button) => {
      const title = isArabic ? button.titleAr : button.title;
      const description = isArabic ? button.descriptionAr : button.description;
      return (
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, isArabic]);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0);
  };

  const handleSearch = (query: string) => {
    console.log("Sidebar search executed:", query);
  };

  const hasResults = searchResults.length > 0;
  const isSearchActive = searchQuery.trim().length > 0;

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <Sidebar
        {...props}
        className={`fixed top-0 h-full z-10 transition-all duration-300 ${
          isArabic ? "right-0 left-auto" : "left-0 right-auto"
        } border-r border-slate-200/50`}
      >
        <SidebarHeader className="bg-gradient-to-br from-slate-50/50 to-white/80 backdrop-blur-sm border-b border-slate-200/50">
          <SidebarMenu>
            <SidebarMenuItem>
              
            </SidebarMenuItem>
          </SidebarMenu>

          <div className="px-2 pt-4">
            <SearchForm
              placeholder={
                isArabic ? "البحث في الخدمات..." : "Search services..."
              }
              onSearch={handleSearch}
              onQueryChange={handleSearchQueryChange}
              isLoading={false}
            />

            {/* Search Results Counter */}
            {isSearchActive && (
              <div className="px-2 py-2 text-xs text-slate-500">
                {hasResults
                  ? isArabic
                    ? `${searchResults.length} نتيجة موجودة`
                    : `${searchResults.length} result${
                        searchResults.length !== 1 ? "s" : ""
                      } found`
                  : isArabic
                  ? "لا توجد نتائج"
                  : "No results found"}
              </div>
            )}
          </div>
        </SidebarHeader>

        <SidebarContent className="bg-gradient-to-b from-white/50 to-slate-50/30">
          {/* Featured Image - Hide during search */}
          {!isSearchActive && (
            <div className="px-4 py-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <FileText className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-medium text-slate-700">
                        {isArabic ? "خدمات GACI" : "GACI Services"}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          )}

          <SidebarGroup>
            {/* No Results State */}
            {isSearchActive && !hasResults && (
              <div className="px-4 py-8 text-center">
                <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-sm font-medium text-slate-600 mb-1">
                  {isArabic ? "لم يتم العثور على نتائج" : "No results found"}
                </p>
                <p className="text-xs text-slate-500">
                  {isArabic
                    ? "جرب مصطلحات بحث مختلفة"
                    : "Try different search terms"}
                </p>
              </div>
            )}

            {/* Service Buttons */}
            <SidebarMenu className="space-y-3 px-2">
              {searchResults.map((service) => {
                const Icon = service.icon;
                return (
                  <SidebarMenuItem key={service.url}>
                    <SidebarMenuButton asChild className="group h-auto p-0">
                      <a
                        href={service.url}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-slate-50/80 hover:to-blue-50/50 transition-all duration-300 hover:shadow-sm border border-transparent hover:border-blue-100/50"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 group-hover:scale-105 transition-all duration-300 shadow-sm">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-slate-700 group-hover:text-slate-900 leading-tight mb-1">
                            <HighlightText
                              text={isArabic ? service.titleAr : service.title}
                              searchQuery={searchQuery}
                            />
                          </div>
                          <div className="text-xs text-slate-500 group-hover:text-slate-600 leading-tight">
                            <HighlightText
                              text={
                                isArabic
                                  ? service.descriptionAr
                                  : service.description
                              }
                              searchQuery={searchQuery}
                            />
                          </div>
                        </div>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>

          {/* Quick Actions - Hide during search */}
          {!isSearchActive && (
            <div className="px-4 py-6 mt-auto">
              <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/50">
                <h4 className="font-semibold text-sm text-slate-800 mb-3">
                  {isArabic ? "إجراءات سريعة" : "Quick Actions"}
                </h4>
                <div className="space-y-2">
                  <a
                    href="/contact"
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all duration-200"
                  >
                    {isArabic ? "اتصل بنا" : "Contact Us"}
                  </a>
                  <a
                    href="/support"
                    className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all duration-200"
                  >
                    {isArabic ? "الدعم الفني" : "Technical Support"}
                  </a>
                </div>
              </div>
            </div>
          )}
        </SidebarContent>

        <SidebarRail className="bg-slate-100/50" />
      </Sidebar>
    </div>
  );
}
