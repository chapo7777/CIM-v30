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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useLanguage } from "@/contexts/language-context"
import {
  Globe,
  Users,
  Building,
  Clock,
  ArrowDown01,
  Shield,
  Wifi,
  FileTextIcon,
  Download,
  ExternalLink,
  CheckCircle,
  Monitor,
  Database,
  Smartphone,
  CreditCard,
} from "lucide-react"
import { useState } from "react"
import dynamic from "next/dynamic"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageToggle } from "@/components/language-toggle"

const PdfModal = dynamic(() => import("@/components/PdfModal"), { ssr: false })

export default function EGovernmentPage() {
  const { isArabic } = useLanguage()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeFileUrl, setActiveFileUrl] = useState<string | null>(null)
  const [activeFileName, setActiveFileName] = useState<string | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const openPdf = (url: string, name: string) => {
    setActiveFileUrl(url)
    setActiveFileName(name)
    setIsModalOpen(true)
  }

  const serviceData = [
    {
      ar: "البوابة الإلكترونية الموحدة",
      en: "Unified Electronic Portal",
      description: {
        ar: "بوابة إلكترونية موحدة تجمع جميع الخدمات الحكومية في مكان واحد لتسهيل وصول المواطنين والشركات إلى الخدمات الرقمية",
        en: "A unified electronic portal that brings together all government services in one place to facilitate citizens' and companies' access to digital services",
      },
      files: [
        {
          name: {
            ar: "دليل استخدام البوابة",
            en: "Portal User Guide",
          },
          url: "/pdfs/portal-guide.pdf",
        },
        {
          name: { ar: "نموذج التسجيل", en: "Registration Form" },
          url: "/pdfs/registration-form.pdf",
        },
      ],
      icon: <Globe className="text-blue-600 w-8 h-8" />,
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200 hover:border-blue-400",
    },
    {
      ar: "الخدمات الإلكترونية للمواطنين",
      en: "Electronic Services for Citizens",
      description: {
        ar: "مجموعة شاملة من الخدمات الإلكترونية المقدمة للمواطنين تشمل استخراج الوثائق والشهادات والتراخيص",
        en: "A comprehensive set of electronic services provided to citizens including document extraction, certificates and licenses",
      },
      files: [
        {
          name: { ar: "قائمة الخدمات المتاحة", en: "Available Services List" },
          url: "/pdfs/citizen-services.pdf",
        },
        {
          name: {
            ar: "إجراءات الحصول على الخدمات",
            en: "Service Procedures",
          },
          url: "/pdfs/service-procedures.pdf",
        },
      ],
      icon: <Users className="text-emerald-600 w-8 h-8" />,
      bgColor: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200 hover:border-emerald-400",
    },
    {
      ar: "الخدمات الإلكترونية للشركات",
      en: "Electronic Services for Companies",
      description: {
        ar: "خدمات إلكترونية متخصصة للشركات والمؤسسات تشمل التسجيل التجاري والتراخيص والإقرارات الضريبية",
        en: "Specialized electronic services for companies and institutions including commercial registration, licenses and tax returns",
      },
      files: [
        {
          name: { ar: "دليل الخدمات التجارية", en: "Business Services Guide" },
          url: "/pdfs/business-services.pdf",
        },
        {
          name: { ar: "نماذج التسجيل التجاري", en: "Commercial Registration Forms" },
          url: "/pdfs/commercial-registration.pdf",
        },
      ],
      icon: <Building className="text-amber-600 w-8 h-8" />,
      bgColor: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200 hover:border-amber-400",
    },
    {
      ar: "نظام إدارة الوثائق الإلكترونية",
      en: "Electronic Document Management System",
      description: {
        ar: "نظام متطور لإدارة وأرشفة الوثائق الحكومية إلكترونياً مع ضمان الأمان والسرية",
        en: "An advanced system for managing and archiving government documents electronically while ensuring security and confidentiality",
      },
      files: [
        {
          name: {
            ar: "دليل نظام إدارة الوثائق",
            en: "Document Management System Guide",
          },
          url: "/pdfs/document-management.pdf",
        },
        {
          name: { ar: "معايير الأمان", en: "Security Standards" },
          url: "/pdfs/security-standards.pdf",
        },
      ],
      icon: <Database className="text-rose-600 w-8 h-8" />,
      bgColor: "from-rose-50 to-rose-100",
      borderColor: "border-rose-200 hover:border-rose-400",
    },
    {
      ar: "تطبيقات الهواتف الذكية",
      en: "Mobile Applications",
      description: {
        ar: "تطبيقات ذكية للهواتف المحمولة تتيح الوصول للخدمات الحكومية في أي وقت ومن أي مكان",
        en: "Smart mobile applications that allow access to government services anytime and anywhere",
      },
      files: [
        {
          name: { ar: "دليل التطبيقات المحمولة", en: "Mobile Apps Guide" },
          url: "/pdfs/mobile-apps.pdf",
        },
        {
          name: {
            ar: "روابط التحميل",
            en: "Download Links",
          },
          url: "/pdfs/download-links.pdf",
        },
      ],
      icon: <Smartphone className="text-violet-600 w-8 h-8" />,
      bgColor: "from-violet-50 to-violet-100",
      borderColor: "border-violet-200 hover:border-violet-400",
    },
    {
      ar: "نظام الدفع الإلكتروني",
      en: "Electronic Payment System",
      description: {
        ar: "نظام دفع إلكتروني آمن يدعم جميع وسائل الدفع المحلية والدولية لتسديد رسوم الخدمات الحكومية",
        en: "A secure electronic payment system that supports all local and international payment methods for paying government service fees",
      },
      files: [
        {
          name: { ar: "دليل الدفع الإلكتروني", en: "Electronic Payment Guide" },
          url: "/pdfs/payment-guide.pdf",
        },
        {
          name: {
            ar: "وسائل الدفع المقبولة",
            en: "Accepted Payment Methods",
          },
          url: "/pdfs/payment-methods.pdf",
        },
      ],
      icon: <CreditCard className="text-indigo-600 w-8 h-8" />,
      bgColor: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200 hover:border-indigo-400",
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          className={`flex h-16 shrink-0 items-center gap-2 border-b border-slate-200/60 px-4 bg-gradient-to-r from-slate-50/80 to-blue-50/50 backdrop-blur-sm ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <SidebarTrigger
            className={`text-slate-600 hover:bg-white/80 hover:text-blue-600 transition-all duration-200 ${
              isArabic ? "ml-1" : "-ml-1"
            }`}
          />
          <Separator orientation="vertical" className={`h-10 bg-slate-300/60 ${isArabic ? "mr-2" : "ml-2"}`} />
          <Breadcrumb>
            <BreadcrumbList className={isArabic ? "flex-row-reverse" : ""}>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/" className="text-slate-600 hover:text-blue-700 transition-colors">
                  {isArabic ? "الرئيسية" : "Home"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/#services" className="text-slate-600 hover:text-blue-700 transition-colors">
                  {isArabic ? "الخدمات" : "Services"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-800 font-medium">
                  {isArabic ? "خدمات الحكومة الإلكترونية" : "E-Government Services"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div
          className={`flex flex-1 flex-col gap-8 p-6 ${isArabic ? "text-right" : "text-left"}`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/60 rounded-2xl p-8 border border-blue-100/60 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  {isArabic ? "خدمات الحكومة الإلكترونية" : "E-Government Services"}
                </h1>
                <p className="text-lg text-slate-600">
                  {isArabic ? "الخدمات الحكومية الرقمية" : "Government digital services"}
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">{isArabic ? "نظرة عامة" : "Overview"}</h2>
            <p className="text-slate-700 leading-relaxed text-lg mb-8">
              {isArabic
                ? "تهدف الحكومة الإلكترونية إلى تحسين جودة الخدمات المقدمة للمواطنين والشركات من خلال استخدام التكنولوجيا الحديثة وتوفير منصات رقمية متطورة تضمن الشفافية والكفاءة في تقديم الخدمات الحكومية."
                : "E-Government aims to improve the quality of services provided to citizens and companies through the use of modern technology and providing advanced digital platforms that ensure transparency and efficiency in delivering government services."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50/80 rounded-xl p-6 text-center border border-blue-100/60">
                <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  {isArabic ? "الخدمات الرقمية" : "Digital Services"}
                </h3>
                <p className="text-sm text-slate-600">
                  {isArabic ? "خدمات حكومية متاحة على مدار الساعة" : "Government services available 24/7"}
                </p>
              </div>
              <div className="bg-emerald-50/80 rounded-xl p-6 text-center border border-emerald-100/60">
                <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  {isArabic ? "الأمان والحماية" : "Security & Protection"}
                </h3>
                <p className="text-sm text-slate-600">
                  {isArabic ? "حماية البيانات والمعلومات الشخصية" : "Protection of data and personal information"}
                </p>
              </div>
              <div className="bg-violet-50/80 rounded-xl p-6 text-center border border-violet-100/60">
                <Wifi className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">{isArabic ? "سهولة الوصول" : "Easy Access"}</h3>
                <p className="text-sm text-slate-600">
                  {isArabic ? "وصول سهل من أي مكان وفي أي وقت" : "Easy access from anywhere at any time"}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              {isArabic ? "الميزات الرئيسية" : "Key Features"}
            </h2>

            {isArabic ? (
              <div className="text-slate-700 leading-relaxed">
                <p className="mb-6 text-lg">تشمل خدمات الحكومة الإلكترونية:</p>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>بوابة إلكترونية موحدة لجميع الخدمات الحكومية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>خدمات إلكترونية للمواطنين والشركات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>نظام إدارة الوثائق الإلكترونية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>تطبيقات الهواتف الذكية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>نظام الدفع الإلكتروني الآمن</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>خدمة العملاء الإلكترونية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>التوقيع الإلكتروني المعتمد</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="text-slate-700 leading-relaxed">
                <p className="mb-6 text-lg">E-Government services include:</p>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Unified electronic portal for all government services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Electronic services for citizens and companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Electronic document management system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Mobile applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Secure electronic payment system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Electronic customer service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Certified electronic signature</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Services Grid */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">{isArabic ? "خدماتنا" : "Our Services"}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.map((service, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${service.borderColor} bg-gradient-to-br ${service.bgColor} backdrop-blur-sm`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <CardHeader className="pb-4">
                    <div className={`flex items-start gap-4 ${isArabic ? "flex-row-reverse text-right" : ""}`}>
                      <div className="flex-shrink-0 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base font-bold text-slate-900 leading-tight mb-2">
                          {isArabic ? service.ar : service.en}
                        </CardTitle>
                      </div>
                      <ArrowDown01
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {isArabic
                        ? service.description.ar.substring(0, 100) + "..."
                        : service.description.en.substring(0, 100) + "..."}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Modal */}
            {serviceData.map((service, index) => (
              <Dialog key={`modal-${index}`} open={openIndex === index} onOpenChange={() => setOpenIndex(null)}>
                <DialogContent
                  className="w-[90%] max-w-6xl sm:w-[80%] lg:w-[70%] bg-white/95 backdrop-blur-md"
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  <DialogHeader>
                    <DialogTitle className={`text-lg font-semibold ${isArabic ? "text-right" : "text-left"}`}>
                      {isArabic ? service.ar : service.en}
                    </DialogTitle>
                  </DialogHeader>
                  <div
                    className={`mt-4 text-slate-600 text-sm leading-relaxed ${isArabic ? "text-right" : "text-left"}`}
                  >
                    {isArabic ? service.description.ar : service.description.en}
                  </div>

                  <div className="mt-6">
                    <h4 className={`font-medium text-slate-800 mb-3 ${isArabic ? "text-right" : "text-left"}`}>
                      {isArabic ? "المرفقات" : "Attachments"}
                    </h4>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="documents">
                        <AccordionTrigger
                          className={`text-sm font-medium text-slate-700 ${isArabic ? "flex-row-reverse" : ""}`}
                        >
                          {isArabic ? "المستندات والنماذج" : "Documents & Forms"}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                            {service.files.map((file, fileIndex) => (
                              <div
                                key={fileIndex}
                                className={`flex items-center gap-3 p-4 rounded-xl bg-blue-50/80 hover:bg-blue-100/80 transition-colors group border border-blue-200/60 backdrop-blur-sm ${
                                  isArabic ? "flex-row-reverse" : ""
                                }`}
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-100/80 rounded-xl flex items-center justify-center group-hover:bg-blue-200/80 transition-colors">
                                  <FileTextIcon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className={`flex-1 min-w-0 ${isArabic ? "text-right" : "text-left"}`}>
                                  <p className="text-sm font-medium text-slate-800 truncate">
                                    {isArabic ? file.name.ar : file.name.en}
                                  </p>
                                  <p className="text-xs text-slate-500 truncate">PDF Document</p>
                                </div>
                                <div className={`flex gap-1 ${isArabic ? "flex-row-reverse" : ""}`}>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      openPdf(file.url, isArabic ? file.name.ar : file.name.en)
                                    }}
                                    className="p-2 rounded-lg bg-white/80 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors border border-blue-200/60 backdrop-blur-sm"
                                    title={isArabic ? "عرض المستند" : "View document"}
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </button>
                                  <a
                                    href={file.url}
                                    download
                                    className="p-2 rounded-lg bg-white/80 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors border border-blue-200/60 backdrop-blur-sm"
                                    title={isArabic ? "تحميل المستند" : "Download document"}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Download className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/60 rounded-2xl p-8 border border-blue-100/60 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  {isArabic ? "معلومات الاتصال" : "Contact Information"}
                </h3>
                <div className="space-y-2 text-slate-700">
                  <p>{isArabic ? "الهاتف: +218-21-123-4567" : "Phone: +218-21-123-4567"}</p>
                  <p>{isArabic ? "البريد الإلكتروني: egovt@gaci.gov.ly" : "Email: egovt@gaci.gov.ly"}</p>
                  <p>{isArabic ? "العنوان: طرابلس، ليبيا" : "Address: Tripoli, Libya"}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">{isArabic ? "ساعات العمل" : "Working Hours"}</h3>
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-5 h-5" />
                  <span>{isArabic ? "الأحد - الخميس: 8:00 ص - 4:00 م" : "Sunday - Thursday: 8:00 AM - 4:00 PM"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>

      {/* PDF Viewer Modal */}
      {isModalOpen && activeFileUrl && (
        <PdfModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          pdfUrl={activeFileUrl}
          title={activeFileName || "PDF Document"}
        />
      )}

      <LanguageToggle />
    </SidebarProvider>
  )
}
