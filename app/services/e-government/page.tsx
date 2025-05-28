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
import { Globe, FileText, CreditCard, MapPin, Users, Building, Clock } from "lucide-react"

export default function EGovernmentPage() {
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
                  {isArabic ? "خدمات الحكومة الإلكترونية" : "E-Government Services"}
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
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {isArabic ? "خدمات الحكومة الإلكترونية" : "E-Government Services"}
                </h1>
                <p className="text-lg text-gray-600">
                  {isArabic ? "خدمات حكومية رقمية متطورة" : "Advanced digital government services"}
                </p>
              </div>
            </div>
          </div>

          {/* Available Services */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "الخدمات المتاحة" : "Available Services"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "استخراج الوثائق" : "Document Issuance"}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isArabic
                    ? "استخراج جوازات السفر، بطاقات الهوية، وشهادات الميلاد"
                    : "Issuing passports, ID cards, and birth certificates"}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  {isArabic ? "ابدأ الخدمة" : "Start Service"}
                </button>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <CreditCard className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "الدفع الإلكتروني" : "Electronic Payment"}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isArabic
                    ? "دفع الرسوم الحكومية والغرامات إلكترونياً"
                    : "Pay government fees and fines electronically"}
                </p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  {isArabic ? "ابدأ الخدمة" : "Start Service"}
                </button>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <MapPin className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "الخدمات المحلية" : "Local Services"}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isArabic ? "خدمات البلديات والمجالس المحلية" : "Municipality and local council services"}
                </p>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  {isArabic ? "ابدأ الخدمة" : "Start Service"}
                </button>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {isArabic ? "الخدمات الاجتماعية" : "Social Services"}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isArabic ? "التقديم للمساعدات والبرامج الاجتماعية" : "Apply for social assistance and programs"}
                </p>
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                  {isArabic ? "ابدأ الخدمة" : "Start Service"}
                </button>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Building className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "خدمات الأعمال" : "Business Services"}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isArabic
                    ? "تسجيل الشركات والحصول على التراخيص التجارية"
                    : "Company registration and commercial licensing"}
                </p>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                  {isArabic ? "ابدأ الخدمة" : "Start Service"}
                </button>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <FileText className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{isArabic ? "الاستعلامات" : "Inquiries"}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {isArabic
                    ? "الاستعلام عن حالة الطلبات والمعاملات"
                    : "Inquire about application and transaction status"}
                </p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  {isArabic ? "ابدأ الخدمة" : "Start Service"}
                </button>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {isArabic ? "إحصائيات الخدمة" : "Service Statistics"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">250,000+</div>
                <p className="text-sm text-gray-600">{isArabic ? "مستخدم مسجل" : "Registered Users"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1.2M+</div>
                <p className="text-sm text-gray-600">{isArabic ? "معاملة مكتملة" : "Completed Transactions"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">98.5%</div>
                <p className="text-sm text-gray-600">{isArabic ? "معدل الرضا" : "Satisfaction Rate"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-sm text-gray-600">{isArabic ? "متاح على مدار الساعة" : "Available 24/7"}</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">{isArabic ? "الدعم الفني" : "Technical Support"}</h3>
                <div className="space-y-2 text-gray-700">
                  <p>{isArabic ? "الهاتف: +218-21-789-0123" : "Phone: +218-21-789-0123"}</p>
                  <p>{isArabic ? "البريد الإلكتروني: support@egov.ly" : "Email: support@egov.ly"}</p>
                  <p>{isArabic ? "الموقع: www.egov.ly" : "Website: www.egov.ly"}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">{isArabic ? "ساعات الدعم" : "Support Hours"}</h3>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5" />
                  <span>{isArabic ? "متاح 24/7 للخدمات الإلكترونية" : "Available 24/7 for electronic services"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
