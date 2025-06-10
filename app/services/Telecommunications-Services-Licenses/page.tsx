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
import { Wifi, Radio, Satellite, Server, Network, Cable, Clock } from "lucide-react"

export default function NetworkInfrastructurePage() {
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
                  {isArabic ? "البنية التحتية للشبكات" : "Network Infrastructure"}
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
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Wifi className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {isArabic ? "البنية التحتية للشبكات" : "Network Infrastructure"}
                </h1>
                <p className="text-lg text-gray-600">
                  {isArabic ? "تخطيط وتطوير شبكات الاتصالات" : "Planning and developing telecommunications networks"}
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure Components */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "مكونات البنية التحتية" : "Infrastructure Components"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <Radio className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "الشبكات اللاسلكية" : "Wireless Networks"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "شبكات الجيل الرابع والخامس" : "4G and 5G networks"}
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Cable className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "الشبكات السلكية" : "Wired Networks"}</h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "الألياف البصرية والكابلات" : "Fiber optics and cables"}
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <Satellite className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "الاتصالات الفضائية" : "Satellite Communications"}
                </h3>
                <p className="text-sm text-gray-600">{isArabic ? "شبكات الأقمار الصناعية" : "Satellite networks"}</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <Server className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "مراكز البيانات" : "Data Centers"}</h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "مراكز معالجة وتخزين البيانات" : "Data processing and storage centers"}
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <Network className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "شبكات النقل" : "Transport Networks"}</h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "شبكات نقل البيانات عالية السرعة" : "High-speed data transport networks"}
                </p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-6 text-center">
                <Wifi className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "نقاط الوصول" : "Access Points"}</h3>
                <p className="text-sm text-gray-600">{isArabic ? "نقاط الوصول اللاسلكي" : "Wireless access points"}</p>
              </div>
            </div>
          </div>

          {/* Current Projects */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "المشاريع الجارية" : "Current Projects"}
            </h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {isArabic ? "مشروع شبكة الألياف البصرية الوطنية" : "National Fiber Optic Network Project"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isArabic
                    ? "توسيع شبكة الألياف البصرية لتغطي جميع المدن والمناطق الرئيسية في ليبيا"
                    : "Expanding the fiber optic network to cover all major cities and regions in Libya"}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <span className="text-sm font-medium text-blue-600">65%</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {isArabic ? "مشروع شبكة الجيل الخامس" : "5G Network Project"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isArabic
                    ? "إطلاق شبكة الجيل الخامس في المدن الرئيسية لتوفير خدمات إنترنت فائقة السرعة"
                    : "Launching 5G network in major cities to provide ultra-high-speed internet services"}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <span className="text-sm font-medium text-green-600">45%</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {isArabic ? "مشروع مراكز البيانات الحكومية" : "Government Data Centers Project"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isArabic
                    ? "إنشاء مراكز بيانات حديثة لدعم الخدمات الحكومية الإلكترونية"
                    : "Establishing modern data centers to support electronic government services"}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  <span className="text-sm font-medium text-purple-600">30%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "المواصفات التقنية" : "Technical Specifications"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {isArabic ? "الشبكات اللاسلكية" : "Wireless Networks"}
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">{isArabic ? "تقنية 5G" : "5G Technology"}:</span>
                    <span className="font-medium">{isArabic ? "متاح" : "Available"}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">{isArabic ? "السرعة القصوى" : "Max Speed"}:</span>
                    <span className="font-medium">10 Gbps</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">{isArabic ? "التغطية" : "Coverage"}:</span>
                    <span className="font-medium">85%</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">{isArabic ? "الألياف البصرية" : "Fiber Optics"}</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">{isArabic ? "طول الشبكة" : "Network Length"}:</span>
                    <span className="font-medium">15,000 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">{isArabic ? "السعة" : "Capacity"}:</span>
                    <span className="font-medium">100 Tbps</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">{isArabic ? "الموثوقية" : "Reliability"}:</span>
                    <span className="font-medium">99.9%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {isArabic ? "معلومات الاتصال" : "Contact Information"}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>{isArabic ? "الهاتف: +218-21-333-4567" : "Phone: +218-21-333-4567"}</p>
                  <p>
                    {isArabic ? "البريد الإلكتروني: infrastructure@gaci.gov.ly" : "Email: infrastructure@gaci.gov.ly"}
                  </p>
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
