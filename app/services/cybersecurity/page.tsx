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
import { Shield, Lock, Eye, AlertTriangle, Users, Server, Clock } from "lucide-react"

export default function CybersecurityPage() {
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
                  {isArabic ? "خدمات الأمن السيبراني" : "Cybersecurity Services"}
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
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {isArabic ? "خدمات الأمن السيبراني" : "Cybersecurity Services"}
                </h1>
                <p className="text-lg text-gray-600">
                  {isArabic ? "حماية البنية التحتية الرقمية" : "Protecting digital infrastructure"}
                </p>
              </div>
            </div>
          </div>

          {/* Threat Levels */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "مستويات التهديد الحالية" : "Current Threat Levels"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <h3 className="font-semibold text-green-800">{isArabic ? "منخفض" : "Low"}</h3>
                </div>
                <p className="text-sm text-green-700">
                  {isArabic ? "التهديدات العامة تحت السيطرة" : "General threats under control"}
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <h3 className="font-semibold text-yellow-800">{isArabic ? "متوسط" : "Medium"}</h3>
                </div>
                <p className="text-sm text-yellow-700">
                  {isArabic ? "مراقبة مستمرة للأنشطة المشبوهة" : "Continuous monitoring of suspicious activities"}
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <h3 className="font-semibold text-red-800">{isArabic ? "عالي" : "High"}</h3>
                </div>
                <p className="text-sm text-red-700">
                  {isArabic ? "تهديدات نشطة تتطلب اهتماماً فورياً" : "Active threats requiring immediate attention"}
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "خدماتنا الأمنية" : "Our Security Services"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                  <Lock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {isArabic ? "تقييم الأمان" : "Security Assessment"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isArabic
                        ? "تحليل شامل للثغرات الأمنية في الأنظمة"
                        : "Comprehensive analysis of security vulnerabilities in systems"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <Eye className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {isArabic ? "المراقبة المستمرة" : "Continuous Monitoring"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isArabic ? "مراقبة الشبكات والأنظمة على مدار الساعة" : "24/7 network and system monitoring"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {isArabic ? "الاستجابة للحوادث" : "Incident Response"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isArabic
                        ? "استجابة سريعة للهجمات والحوادث الأمنية"
                        : "Rapid response to attacks and security incidents"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                  <Users className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {isArabic ? "التدريب الأمني" : "Security Training"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isArabic ? "برامج تدريبية لرفع الوعي الأمني" : "Training programs to raise security awareness"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-xl">
                  <Server className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {isArabic ? "حماية البنية التحتية" : "Infrastructure Protection"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isArabic ? "تأمين الخوادم والشبكات الحيوية" : "Securing critical servers and networks"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <Shield className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {isArabic ? "استشارات أمنية" : "Security Consulting"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isArabic
                        ? "خدمات استشارية متخصصة في الأمن السيبراني"
                        : "Specialized cybersecurity consulting services"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "الاتصال الطارئ" : "Emergency Contact"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {isArabic ? "خط الطوارئ الأمني" : "Security Emergency Hotline"}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="text-xl font-bold text-red-600">+218-21-CYBER-911</p>
                  <p>{isArabic ? "البريد الإلكتروني: security@gaci.gov.ly" : "Email: security@gaci.gov.ly"}</p>
                  <p className="text-sm text-gray-600">
                    {isArabic ? "متاح 24/7 للحوادث الأمنية الطارئة" : "Available 24/7 for emergency security incidents"}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">{isArabic ? "وقت الاستجابة" : "Response Time"}</h3>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5" />
                  <span>
                    {isArabic ? "أقل من 30 دقيقة للحوادث الحرجة" : "Less than 30 minutes for critical incidents"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
