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
import { Zap, Smartphone, Cloud, Database, Cpu, TrendingUp, Clock } from "lucide-react"

export default function DigitalTransformationPage() {
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
                  {isArabic ? "التحول الرقمي" : "Digital Transformation"}
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
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {isArabic ? "التحول الرقمي" : "Digital Transformation"}
                </h1>
                <p className="text-lg text-gray-600">
                  {isArabic
                    ? "قيادة التحديث التقني في القطاع الحكومي"
                    : "Leading technological modernization in the government sector"}
                </p>
              </div>
            </div>
          </div>

          {/* Transformation Areas */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "مجالات التحول" : "Transformation Areas"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "التطبيقات المحمولة" : "Mobile Applications"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "تطوير تطبيقات حكومية ذكية" : "Developing smart government applications"}
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Cloud className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "الحوسبة السحابية" : "Cloud Computing"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "نقل الخدمات إلى البيئة السحابية" : "Migrating services to cloud environment"}
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "إدارة البيانات" : "Data Management"}</h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "تحليل البيانات واتخاذ القرارات" : "Data analysis and decision making"}
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <Cpu className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "الذكاء الاصطناعي" : "Artificial Intelligence"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "تطبيق تقنيات الذكاء الاصطناعي" : "Implementing AI technologies"}
                </p>
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
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {isArabic ? "منصة الخدمات الحكومية الموحدة" : "Unified Government Services Platform"}
                  </h3>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-green-600">75%</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {isArabic
                    ? "تطوير منصة موحدة لجميع الخدمات الحكومية الإلكترونية لتسهيل وصول المواطنين للخدمات"
                    : "Developing a unified platform for all electronic government services to facilitate citizen access to services"}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {isArabic ? "نظام إدارة الوثائق الرقمية" : "Digital Document Management System"}
                  </h3>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">60%</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {isArabic
                    ? "تحويل جميع الوثائق الحكومية إلى نظام رقمي متطور لتحسين الكفاءة والأمان"
                    : "Converting all government documents to an advanced digital system to improve efficiency and security"}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {isArabic ? "شبكة الاتصالات الحكومية الآمنة" : "Secure Government Communications Network"}
                  </h3>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">40%</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {isArabic
                    ? "إنشاء شبكة اتصالات آمنة ومشفرة للاستخدام الحكومي الداخلي"
                    : "Creating a secure and encrypted communications network for internal government use"}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {isArabic ? "معلومات الاتصال" : "Contact Information"}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>{isArabic ? "الهاتف: +218-21-456-7890" : "Phone: +218-21-456-7890"}</p>
                  <p>{isArabic ? "البريد الإلكتروني: digital@gaci.gov.ly" : "Email: digital@gaci.gov.ly"}</p>
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
