"use client"

import type * as React from "react"
import { Minus, Plus, Home, FileText, Shield, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { SearchForm } from "./search-form"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Enhanced data structure with icons and better organization
const data = {
  navMain: [
    {
      title: "Communications & Information Regulation",
      titleAr: "تنظيم الاتصالات والمعلومات",
      url: "comms-sv",
      icon: FileText,
      items: [
        {
          title: "Numbering and Added Services",
          titleAr: "الترقيم والخدمات المضافة",
          url: "crd-1",
        },
        {
          title: "Project Structure",
          titleAr: "هيكل المشروع",
          url: "crd-2",
        },
        {
          title: "Licensing Framework",
          titleAr: "إطار الترخيص",
          url: "crd-3",
        },
      ],
    },
    {
      title: "Cybersecurity Services",
      titleAr: "خدمات الأمن السيبراني",
      url: "cybersecurity",
      icon: Shield,
      items: [
        {
          title: "Threat Assessment",
          titleAr: "تقييم التهديدات",
          url: "cyber-1",
        },
        {
          title: "Security Audits",
          titleAr: "التدقيق الأمني",
          url: "cyber-2",
        },
      ],
    },
    {
      title: "Digital Transformation",
      titleAr: "التحول الرقمي",
      url: "digital-transformation",
      icon: Zap,
      items: [
        {
          title: "Digital Strategy",
          titleAr: "الاستراتيجية الرقمية",
          url: "dt-1",
        },
        {
          title: "Implementation Support",
          titleAr: "دعم التنفيذ",
          url: "dt-2",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isArabic } = useLanguage()

  const handleSearch = (query: string) => {
    console.log("Sidebar search:", query)
    // Implement sidebar-specific search logic
  }

  return (
    <Sidebar {...props} className="border-r border-slate-200/50">
      <SidebarHeader className="bg-gradient-to-br from-slate-50/50 to-white/80 backdrop-blur-sm border-b border-slate-200/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="group">
              <a
                href="/"
                className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/30 transition-all duration-300 rounded-xl"
              >
                <div className="flex aspect-square size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Home className="size-6" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-slate-800">{isArabic ? "الرئيسية" : "Home"}</span>
                  <span className="text-xs text-slate-500">
                    {isArabic ? "العودة للصفحة الرئيسية" : "Go to Landing Page"}
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="px-2 pt-4">
          <SearchForm placeholder={isArabic ? "البحث في الخدمات..." : "Search services..."} onSearch={handleSearch} />
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-white/50 to-slate-50/30">
        {/* Featured Image */}
        <div className="px-4 py-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="relative">
              <div className="w-full h-32 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <FileText className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{isArabic ? "خدمات GACI" : "GACI Services"}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarMenu className="space-y-3 px-2">
            {data.navMain.map((item, index) => {
              const Icon = item.icon
              return (
                <Collapsible key={item.title} defaultOpen={index === 0} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="group px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-slate-50/80 hover:to-blue-50/50 transition-all duration-300 hover:shadow-sm">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                            <Icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="font-medium text-sm text-slate-700 group-hover:text-slate-900 whitespace-normal break-words leading-tight">
                            {isArabic ? item.titleAr : item.title}
                          </span>
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <Plus className="w-4 h-4 text-slate-400 group-data-[state=open]/collapsible:hidden transition-transform duration-200" />
                          <Minus className="w-4 h-4 text-slate-400 group-data-[state=closed]/collapsible:hidden transition-transform duration-200" />
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    {item.items?.length ? (
                      <CollapsibleContent className="animate-in slide-in-from-top-2 duration-200">
                        <SidebarMenuSub className="ml-4 mt-2 space-y-1">
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.url}>
                              <a
                                href={subItem.url}
                                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/30 transition-all duration-200 leading-snug border-l-2 border-transparent hover:border-blue-200"
                              >
                                {isArabic ? subItem.titleAr : subItem.title}
                              </a>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* Quick Actions */}
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
      </SidebarContent>

      <SidebarRail className="bg-slate-100/50" />
    </Sidebar>
  )
}
