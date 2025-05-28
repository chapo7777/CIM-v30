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
import { Settings, CheckCircle, FileText, Award, Cog, Clock } from "lucide-react"

export default function TechnicalStandardsPage() {
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
                  {isArabic ? "المعايير التقنية" : "Technical Standards"}
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
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Settings className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {isArabic ? "المعايير التقنية" : "Technical Standards"}
                </h1>
                <p className="text-lg text-gray-600">
                  {isArabic ? "المعايير التقنية والامتثال" : "Technology standards and compliance"}
                </p>
              </div>
            </div>
          </div>

          {/* Standards Categories */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "فئات المعايير" : "Standards Categories"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <Cog className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "معايير الشبكات" : "Network Standards"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "معايير تشغيل وصيانة الشبكات" : "Network operation and maintenance standards"}
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "معايير الجودة" : "Quality Standards"}</h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "ضمان جودة الخدمات والمنتجات" : "Ensuring service and product quality"}
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "معايير الأمان" : "Security Standards"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "معايير الأمان والحماية" : "Safety and protection standards"}
                </p>
              </div>
            </div>
          </div>

          {/* Current Standards */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "المعايير المعتمدة" : "Adopted Standards"}
            </h2>
            <div className="space-y-4">
              {[
                {
                  ar: "معيار ISO/IEC 27001 لأمن المعلومات",
                  en: "ISO/IEC 27001 Information Security Standard",
                  status: "active",
                },
                {
                  ar: "معيار ITU-T للاتصالات",
                  en: "ITU-T Telecommunications Standard",
                  status: "active",
                },
                {
                  ar: "معيار IEEE 802.11 للشبكات اللاسلكية",
                  en: "IEEE 802.11 Wireless Network Standard",
                  status: "active",
                },
                {
                  ar: "معيار 3GPP للشبكات المحمولة",
                  en: "3GPP Mobile Network Standard",
                  status: "active",
                },
                {
                  ar: "معيار ETSI للاتصالات الأوروبية",
                  en: "ETSI European Telecommunications Standard",
                  status: "pending",
                },
              ].map((standard, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle
                      className={`w-5 h-5 ${standard.status === "active" ? "text-green-600" : "text-yellow-600"}`}
                    />
                    <span className="text-gray-700">{isArabic ? standard.ar : standard.en}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      standard.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {standard.status === "active"
                      ? isArabic
                        ? "نشط"
                        : "Active"
                      : isArabic
                        ? "قيد المراجعة"
                        : "Under Review"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Process */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "عملية الامتثال" : "Compliance Process"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {isArabic ? "تقديم الطلب" : "Application Submission"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isArabic ? "تقديم طلب الحصول على شهادة الامتثال" : "Submit compliance certification application"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {isArabic ? "المراجعة الأولية" : "Initial Review"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isArabic ? "مراجعة الوثائق والمتطلبات" : "Review documents and requirements"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {isArabic ? "التقييم التقني" : "Technical Assessment"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isArabic ? "إجراء التقييم التقني والاختبارات" : "Conduct technical evaluation and testing"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {isArabic ? "إصدار الشهادة" : "Certificate Issuance"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isArabic ? "إصدار شهادة الامتثال المعتمدة" : "Issue certified compliance certificate"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {isArabic ? "معلومات الاتصال" : "Contact Information"}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>{isArabic ? "الهاتف: +218-21-666-7890" : "Phone: +218-21-666-7890"}</p>
                  <p>{isArabic ? "البريد الإلكتروني: standards@gaci.gov.ly" : "Email: standards@gaci.gov.ly"}</p>
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
