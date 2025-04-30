"use client"

import { FacebookFeed } from "@/components/facebook-feed"
import { useLanguage } from "@/contexts/language-context"

export default function NewsPage() {
  const { isArabic } = useLanguage()

  return (
    <div className={isArabic ? "rtl" : "ltr"}>
      <main className="max-w-7xl mx-auto px-4 py-8 bg-white">
        <h1 className="text-3xl font-bold text-center mb-6">{isArabic ? "المركز الإعلامي" : "News Center"}</h1>

        <div className="mb-8 bg-white">
          <p className="text-lg text-center mb-8">
            {isArabic
              ? "آخر الأخبار والتحديثات من صفحتنا على فيسبوك"
              : "Latest news and updates from our Facebook page"}
          </p>

          <FacebookFeed />
        </div>
      </main>
    </div>
  )
}
