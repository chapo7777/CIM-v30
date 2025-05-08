"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function AboutIntro() {
  const { isArabic } = useLanguage()

  return (
    <section className="py-12 bg-blue-50" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <Card className="border-blue-200 bg-white overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-blue-600 ${isArabic ? "text-right" : "text-left"}`}>
              {isArabic ? "من نحن" : "About Us"}
            </h2>
            <p className={`mb-6 text-blue-900 ${isArabic ? "text-right" : "text-left"}`}>
              {isArabic
                ? "الهيئة العامة الإتصالات تعنى بشؤون الاتصالات وتقنية المعلومات وتمثل أعلى سلطة مسؤولة عن قطاع الاتصالات في ليبيا. يقع مقرها الرئيسي في مدينة طرابلس (مقر الشركة العامة للبريد والاتصالات السلكية واللاسلكية)."
                : "The General Authority for Communications is responsible for telecommunications and IT and represents the highest authority over the telecom sector in Libya. It is headquartered in Tripoli at the General Post and Telecommunications Company."}
            </p>
            <div className={`flex ${isArabic ? "justify-start" : "justify-end"}`}>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/About/overview">{isArabic ? "اقرأ المزيد" : "Read More"}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
