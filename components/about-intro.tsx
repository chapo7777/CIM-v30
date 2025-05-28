"use client"

import { useLanguage } from "@/contexts/language-context"
import { Building2, Users, Globe, Award } from "lucide-react"

export default function AboutIntro() {
  const { isArabic } = useLanguage()

  return (
    <section className="mb-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {isArabic ? "نبذة عن الهيئة" : "About GACI"}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? "الهيئة العامة للاتصالات والمعلوماتية هي الجهة المسؤولة عن تنظيم وتطوير قطاع الاتصالات وتكنولوجيا المعلومات في ليبيا"
              : "The General Authority for Communications and Informatics is responsible for regulating and developing the telecommunications and information technology sector in Libya"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">{isArabic ? "البنية التحتية" : "Infrastructure"}</h3>
            <p className="text-sm text-slate-600">
              {isArabic ? "تطوير البنية التحتية للاتصالات" : "Developing telecommunications infrastructure"}
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">{isArabic ? "خدمة المواطنين" : "Citizen Services"}</h3>
            <p className="text-sm text-slate-600">
              {isArabic ? "تقديم خدمات متميزة للمواطنين" : "Providing excellent services to citizens"}
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">
              {isArabic ? "التعاون الدولي" : "International Cooperation"}
            </h3>
            <p className="text-sm text-slate-600">
              {isArabic ? "شراكات عالمية في التكنولوجيا" : "Global partnerships in technology"}
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">
              {isArabic ? "الجودة والتميز" : "Quality & Excellence"}
            </h3>
            <p className="text-sm text-slate-600">
              {isArabic ? "الالتزام بأعلى معايير الجودة" : "Commitment to highest quality standards"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
