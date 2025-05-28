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
import { Users, Phone, MessageSquare, FileText, HelpCircle, Building, Clock } from "lucide-react"

export default function PublicServicesPage() {
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
                  {isArabic ? "الخدمات العامة" : "Public Services"}
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
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{isArabic ? "الخدمات العامة" : "Public Services"}</h1>
                <p className="text-lg text-gray-600">
                  {isArabic ? "خدمات المواطنين والأعمال" : "Citizen and business services"}
                </p>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "فئات الخدمات" : "Service Categories"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "خدمات الاتصالات" : "Telecommunications Services"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "خدمات الهاتف والإنترنت للمواطنين" : "Phone and internet services for citizens"}
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "خدمات الأعمال" : "Business Services"}</h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "خدمات الشركات والمؤسسات" : "Corporate and institutional services"}
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "الدعم والمساعدة" : "Support & Assistance"}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic ? "الدعم الفني وخدمة العملاء" : "Technical support and customer service"}
                </p>
              </div>
            </div>
          </div>

          {/* Available Services */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "الخدمات المتاحة" : "Available Services"}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "خط المساعدة" : "Help Line"}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {isArabic
                      ? "خط مساعدة مجاني للاستفسارات والشكاوى على مدار الساعة"
                      : "Free 24/7 helpline for inquiries and complaints"}
                  </p>
                  <p className="text-lg font-bold text-blue-600">191</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <MessageSquare className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {isArabic ? "الدعم عبر الإنترنت" : "Online Support"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isArabic
                      ? "دعم فني عبر الموقع الإلكتروني والدردشة المباشرة"
                      : "Technical support via website and live chat"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <FileText className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {isArabic ? "تقديم الطلبات" : "Application Submission"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isArabic
                      ? "تقديم طلبات الخدمات والتراخيص إلكترونياً"
                      : "Submit service and license applications electronically"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Statistics */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "إحصائيات الخدمة" : "Service Statistics"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                <p className="text-sm text-gray-600">{isArabic ? "استفسار شهرياً" : "Monthly Inquiries"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <p className="text-sm text-gray-600">{isArabic ? "معدل الحل" : "Resolution Rate"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2 min</div>
                <p className="text-sm text-gray-600">{isArabic ? "متوسط وقت الانتظار" : "Average Wait Time"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-sm text-gray-600">{isArabic ? "خدمة مستمرة" : "Continuous Service"}</p>
              </div>
            </div>
          </div>

          {/* Contact Channels */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "قنوات التواصل" : "Contact Channels"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {isArabic ? "الاتصال المباشر" : "Direct Contact"}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{isArabic ? "خط المساعدة" : "Help Line"}</p>
                      <p className="text-sm text-gray-600">191</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">{isArabic ? "واتساب" : "WhatsApp"}</p>
                      <p className="text-sm text-gray-600">+218-91-123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {isArabic ? "التواصل الإلكتروني" : "Digital Contact"}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium">{isArabic ? "البريد الإلكتروني" : "Email"}</p>
                      <p className="text-sm text-gray-600">support@gaci.gov.ly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="font-medium">{isArabic ? "الدردشة المباشرة" : "Live Chat"}</p>
                      <p className="text-sm text-gray-600">{isArabic ? "متاح على الموقع" : "Available on website"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {isArabic ? "معلومات الاتصال" : "Contact Information"}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>{isArabic ? "الهاتف: +218-21-777-8901" : "Phone: +218-21-777-8901"}</p>
                  <p>{isArabic ? "البريد الإلكتروني: public@gaci.gov.ly" : "Email: public@gaci.gov.ly"}</p>
                  <p>{isArabic ? "العنوان: طرابلس، ليبيا" : "Address: Tripoli, Libya"}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">{isArabic ? "ساعات العمل" : "Working Hours"}</h3>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5" />
                  <span>{isArabic ? "متاح 24/7 للخدمات الطارئة" : "Available 24/7 for emergency services"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
