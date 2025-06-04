"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useLanguage } from "@/contexts/language-context"
import { Clock, Loader2 } from "lucide-react"

export default function ComingSoonPage() {
  const { isArabic } = useLanguage()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main
          dir={isArabic ? "rtl" : "ltr"}
          className="flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 p-6 min-h-[calc(100vh-4rem)] rounded-3xl border border-amber-200"
        >
          <div className="bg-white rounded-3xl p-12 max-w-lg w-full text-center shadow-lg border border-amber-200">
            <Loader2 className="mx-auto mb-6 h-16 w-16 animate-spin text-amber-500" />
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {isArabic ? "قريباً جداً" : "Coming Soon"}
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              {isArabic
                ? "نحن نعمل على هذه الصفحة. شكرًا لصبركم!"
                : "We're working hard on this page. Thanks for your patience!"}
            </p>

            <div className="flex items-center justify-center gap-3 text-gray-600">
              <Clock className="w-6 h-6" />
              <span>
                {isArabic
                  ? "ساعات العمل: الأحد - الخميس 8:00 ص - 4:00 م"
                  : "Working hours: Sunday - Thursday 8:00 AM - 4:00 PM"}
              </span>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
