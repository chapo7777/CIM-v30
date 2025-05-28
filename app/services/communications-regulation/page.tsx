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
import { Phone, CheckCircle, Users, Building, FileText, Clock } from "lucide-react"

export default function CommunicationsRegulationPage() {
  const { isArabic } = useLanguage()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          className={`flex h-16 shrink-0 items-center gap-2 border-b border-blue-100 px-4 bg-blue-50 ${isArabic ? "flex-row-reverse" : ""}`}
        >
          <SidebarTrigger className={`text-blue-600 hover:bg-blue-100 ${isArabic ? "mr-1" : "-ml-1"}`} />
          <Separator orientation="vertical" className={`h-10 bg-blue-200 ${isArabic ? "ml-2" : "mr-2"}`} />
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
                  {isArabic ? "تنظيم الاتصالات" : "Communications Regulation"}
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
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {isArabic ? "تنظيم الاتصالات" : "Communications Regulation"}
                </h1>
                <p className="text-lg text-gray-600">
                  {isArabic ? "ترخيص وتنظيم شركات الاتصالات" : "Telecom licensing and regulation"}
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{isArabic ? "نظرة عامة" : "Overview"}</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {isArabic
                ? "تتولى إدارة تنظيم الاتصالات مسؤولية الإشراف على قطاع الاتصالات في ليبيا، وضمان تقديم خدمات عالية الجودة للمواطنين والشركات. نعمل على وضع السياسات والمعايير التي تضمن بيئة تنافسية عادلة وخدمات موثوقة."
                : "The Communications Regulation department oversees Libya's telecommunications sector, ensuring high-quality services for citizens and businesses. We develop policies and standards that guarantee a fair competitive environment and reliable services."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "حماية المستهلك" : "Consumer Protection"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "ضمان حقوق المستهلكين وجودة الخدمات" : "Ensuring consumer rights and service quality"}
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "ترخيص الشركات" : "Company Licensing"}</h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "إصدار وإدارة تراخيص شركات الاتصالات" : "Issuing and managing telecom company licenses"}
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "وضع المعايير" : "Setting Standards"}</h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "تطوير معايير الجودة والأداء" : "Developing quality and performance standards"}
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{isArabic ? "خدماتنا" : "Our Services"}</h2>
            <div className="space-y-4">
              {[
                {
                  ar: "إصدار تراخيص تشغيل شبكات الاتصالات المتنقلة والثابتة",
                  en: "Issuing licenses for mobile and fixed telecommunications network operations",
                },
                {
                  ar: "مراقبة جودة الخدمات المقدمة من شركات الاتصالات",
                  en: "Monitoring the quality of services provided by telecommunications companies",
                },
                {
                  ar: "تنظيم أسعار الخدمات وضمان العدالة في التسعير",
                  en: "Regulating service prices and ensuring fair pricing",
                },
                {
                  ar: "حل النزاعات بين شركات الاتصالات والمستهلكين",
                  en: "Resolving disputes between telecommunications companies and consumers",
                },
                {
                  ar: "وضع معايير الأمان والحماية للشبكات",
                  en: "Setting safety and protection standards for networks",
                },
                {
                  ar: "إدارة الطيف الترددي وتوزيع الترددات",
                  en: "Managing frequency spectrum and frequency allocation",
                },
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{isArabic ? service.ar : service.en}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {isArabic ? "معلومات الاتصال" : "Contact Information"}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>{isArabic ? "الهاتف: +218-21-123-4567" : "Phone: +218-21-123-4567"}</p>
                  <p>{isArabic ? "البريد الإلكتروني: regulation@gaci.gov.ly" : "Email: regulation@gaci.gov.ly"}</p>
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
