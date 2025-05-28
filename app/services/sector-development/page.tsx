"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useLanguage } from "@/contexts/language-context"
import { TrendingUp, Building2, Users, Target, BarChart3, Lightbulb, Clock } from "lucide-react"

export default function SectorDevelopmentPage() {
  const { isArabic } = useLanguage()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          className={`flex h-16 shrink-0 items-center gap-2 border-b border-blue-100 px-4 bg-blue-50 ${isArabic ? "flex-row-reverse" : ""}`}
        >
          <SidebarTrigger className={`text-blue-600 hover:bg-blue-100 ${isArabic ? "ml-1" : "-ml-1"}`} />
          <Separator orientation="vertical" className={`h-10 bg-blue-200 ${isArabic ? "mr-2" : "ml-2"}`} />
          <Breadcrumb>
            <BreadcrumbList className={isArabic ? "flex-row-reverse" : ""}>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/" className="text-blue-600 hover:text-blue-800">
                  {isArabic ? "الرئيسية" : "Home"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/#services" className="text-blue-600 hover:text-blue-800">
                  {isArabic ? "الخدمات" : "Services"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue-800 font-medium">
                  {isArabic ? "تطوير القطاع" : "Sector Development"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div
          className={`flex flex-1 flex-col gap-6 p-6 ${isArabic ? "text-right" : "text-left"}`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{isArabic ? "تطوير القطاع" : "Sector Development"}</h1>
                <p className="text-lg text-gray-600">
                  {isArabic
                    ? "تطوير وتحسين قطاع الاتصالات والمعلوماتية"
                    : "Developing and improving the telecommunications and IT sector"}
                </p>
              </div>
            </div>
          </div>

          {/* Development Areas */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "مجالات التطوير" : "Development Areas"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "تطوير البنية التحتية" : "Infrastructure Development"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "تحديث وتوسيع شبكات الاتصالات" : "Upgrading and expanding telecommunications networks"}
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "تطوير الكوادر البشرية" : "Human Resource Development"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "تدريب وتأهيل الكوادر التقنية" : "Training and qualifying technical personnel"}
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "وضع الاستراتيجيات" : "Strategy Development"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "تطوير خطط استراتيجية طويلة المدى" : "Developing long-term strategic plans"}
                </p>
              </div>
            </div>
          </div>

          {/* Current Initiatives */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "المبادرات الحالية" : "Current Initiatives"}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
                <BarChart3 className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {isArabic ? "مشروع تحديث الشبكات" : "Network Modernization Project"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isArabic
                      ? "تحديث البنية التحتية للشبكات لدعم التقنيات الحديثة وتحسين جودة الخدمات"
                      : "Upgrading network infrastructure to support modern technologies and improve service quality"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <Lightbulb className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {isArabic ? "برنامج الابتكار التقني" : "Technical Innovation Program"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isArabic
                      ? "دعم الابتكار والبحث والتطوير في مجال التكنولوجيا"
                      : "Supporting innovation and research & development in technology"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <Users className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {isArabic ? "برنامج تأهيل الكوادر" : "Personnel Qualification Program"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isArabic
                      ? "تدريب وتطوير مهارات العاملين في قطاع الاتصالات"
                      : "Training and developing skills of telecommunications sector workers"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Goals */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "الأهداف الاستراتيجية" : "Strategic Goals"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {isArabic ? "الأهداف قصيرة المدى" : "Short-term Goals"}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      {isArabic ? "تحسين جودة الخدمات الحالية" : "Improve current service quality"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{isArabic ? "توسيع نطاق التغطية" : "Expand coverage area"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      {isArabic ? "تطوير الكوادر التقنية" : "Develop technical personnel"}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {isArabic ? "الأهداف طويلة المدى" : "Long-term Goals"}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      {isArabic ? "تحقيق التحول الرقمي الكامل" : "Achieve complete digital transformation"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      {isArabic ? "بناء اقتصاد رقمي متطور" : "Build an advanced digital economy"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      {isArabic ? "تحقيق الريادة الإقليمية" : "Achieve regional leadership"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {isArabic ? "معلومات الاتصال" : "Contact Information"}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>{isArabic ? "الهاتف: +218-21-555-0123" : "Phone: +218-21-555-0123"}</p>
                  <p>{isArabic ? "البريد الإلكتروني: development@gaci.gov.ly" : "Email: development@gaci.gov.ly"}</p>
                  <p>{isArabic ? "العنوان: طرابلس، ليبيا" : "Address: Tripoli, Libya"}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">{isArabic ? "ساعات العمل" : "Working Hours"}</h3>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5" />
                  <span>{isArabic ? "الأحد - الخميس: 8:00 ص - 4:00 م" : "Sunday - Thursday: 8:00 AM - 4:00 PM"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
