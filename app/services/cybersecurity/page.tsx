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
  Shield,
  Users,
  Clock,
  Lock,
  Eye,
  AlertTriangle,
  FileTextIcon,
  Download,
  ExternalLink,
  CheckCircle,
  Monitor,
  MapPinCheckInside,
} from "lucide-react"
import { useState } from "react"
import dynamic from "next/dynamic"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageToggle } from "@/components/language-toggle"

const PdfModal = dynamic(() => import("@/components/PdfModal"), { ssr: false })

export default function CybersecurityPage() {
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
      ar: "تقييم الأمان السيبراني",
      en: "Cybersecurity Assessment",
      description: {
        ar: "تقييم شامل للبنية التحتية التقنية وتحديد نقاط الضعف والثغرات الأمنية مع تقديم التوصيات اللازمة لتعزيز الأمان",
        en: "Comprehensive assessment of technical infrastructure and identification of vulnerabilities and security gaps with necessary recommendations to enhance security",
      },
      files: [
        
      ],
      icon: <Shield className="text-blue-600 w-8 h-8" />,
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200 hover:border-blue-400",
    },
    {
      ar: "مراقبة الشبكات والأنظمة",
      en: "Network and Systems Monitoring",
      description: {
        ar: "خدمة مراقبة مستمرة للشبكات والأنظمة على مدار الساعة لاكتشاف التهديدات والهجمات السيبرانية والاستجابة السريعة لها",
        en: "24/7 continuous monitoring service for networks and systems to detect cyber threats and attacks and respond quickly to them",
      },
      files: [
     
      ],
      icon: <Monitor className="text-emerald-600 w-8 h-8" />,
      bgColor: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200 hover:border-emerald-400",
    },
    {
      ar: "استجابة الحوادث السيبرانية",
      en: "Cyber Incident Response",
      description: {
        ar: "فريق متخصص للاستجابة السريعة للحوادث السيبرانية وإدارة الأزمات الأمنية واحتواء التهديدات",
        en: "Specialized team for rapid response to cyber incidents, security crisis management and threat containment",
      },
      files: [
   
      ],
      icon: <AlertTriangle className="text-amber-600 w-8 h-8" />,
      bgColor: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200 hover:border-amber-400",
    },
    {
      ar: "التدريب والتوعية الأمنية",
      en: "Security Training and Awareness",
      description: {
        ar: "برامج تدريبية متخصصة في الأمن السيبراني وحملات توعية للموظفين حول أفضل الممارسات الأمنية",
        en: "Specialized training programs in cybersecurity and awareness campaigns for employees on security best practices",
      },
      files: [
      
      ],
      icon: <Users className="text-rose-600 w-8 h-8" />,
      bgColor: "from-rose-50 to-rose-100",
      borderColor: "border-rose-200 hover:border-rose-400",
    },
    {
      ar: "حماية البيانات والخصوصية",
      en: "Data Protection and Privacy",
      description: {
        ar: "خدمات حماية البيانات الحساسة وضمان الخصوصية وفقاً للمعايير الدولية وقوانين حماية البيانات",
        en: "Sensitive data protection services and privacy assurance according to international standards and data protection laws",
      },
      files: [
      
      ],
      icon: <Lock className="text-violet-600 w-8 h-8" />,
      bgColor: "from-violet-50 to-violet-100",
      borderColor: "border-violet-200 hover:border-violet-400",
    },
    {
      ar: "اختبار الاختراق والثغرات",
      en: "Penetration Testing and Vulnerability Assessment",
      description: {
        ar: "اختبارات اختراق متقدمة لتحديد الثغرات الأمنية في الأنظمة والتطبيقات مع تقديم تقارير مفصلة وحلول",
        en: "Advanced penetration testing to identify security vulnerabilities in systems and applications with detailed reports and solutions",
      },
      files: [
        {
          name: { ar: "", en: "" },
          url: "blank",
        },
      ],
      icon: <Eye className="text-indigo-600 w-8 h-8" />,
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
                  {isArabic ? "خدمات الأمن السيبراني" : "Cybersecurity Services"}
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
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  {isArabic ? "خدمات الأمن السيبراني" : "Cybersecurity Services"}
                </h1>
                <p className="text-lg text-slate-600">
                  {isArabic ? "الأمان والحماية الرقمية" : "Digital security and protection"}
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">{isArabic ? "نظرة عامة" : "Overview"}</h2>
            <p className="text-slate-700 leading-relaxed text-lg mb-8">
              {isArabic
                ? "تقدم الهيئة العامة للاتصالات والمعلوماتية خدمات شاملة في مجال الأمن السيبراني لحماية البنية التحتية الرقمية والمعلومات الحساسة من التهديدات السيبرانية المتطورة."
                : "The General Authority for Communications and Information Technology provides comprehensive cybersecurity services to protect digital infrastructure and sensitive information from advanced cyber threats."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50/80 rounded-xl p-6 text-center border border-blue-100/60">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  {isArabic ? "الحماية المتقدمة" : "Advanced Protection"}
                </h3>
                <p className="text-sm text-slate-600">
                  {isArabic ? "حماية شاملة ضد التهديدات السيبرانية" : "Comprehensive protection against cyber threats"}
                </p>
              </div>
              <div className="bg-emerald-50/80 rounded-xl p-6 text-center border border-emerald-100/60">
                <Monitor className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  {isArabic ? "المراقبة المستمرة" : "Continuous Monitoring"}
                </h3>
                <p className="text-sm text-slate-600">
                  {isArabic ? "مراقبة على مدار الساعة للأنظمة والشبكات" : "24/7 monitoring of systems and networks"}
                </p>
              </div>
              <div className="bg-violet-50/80 rounded-xl p-6 text-center border border-violet-100/60">
                <Users className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">{isArabic ? "فريق الخبراء" : "Expert Team"}</h3>
                <p className="text-sm text-slate-600">
                  {isArabic ? "فريق متخصص من خبراء الأمن السيبراني" : "Specialized team of cybersecurity experts"}
                </p>
              </div>
            </div>
          </div>

          {/* Key Services */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              {isArabic ? "الخدمات الرئيسية" : "Key Services"}
            </h2>

            {isArabic ? (
               <div className="text-blue-500 leading-relaxed">
                <p className="mb-6 text-lg text-slate-600">تشمل خدمات الأمن السيبراني:</p>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>تقييم شامل للأمان السيبراني والثغرات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>مراقبة الشبكات والأنظمة على مدار الساعة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>الاستجابة السريعة للحوادث السيبرانية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>التدريب والتوعية الأمنية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>حماية البيانات والخصوصية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>اختبار الاختراق وتقييم الثغرات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>استشارات الأمن السيبراني</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="text-slate-700 leading-relaxed">
                <p className="mb-6 text-lg">Cybersecurity services include:</p>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive cybersecurity and vulnerability assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 network and systems monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Rapid cyber incident response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Security training and awareness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Data protection and privacy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Penetration testing and vulnerability assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Cybersecurity consulting</span>
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
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-500 mb-3">
                  {isArabic ? "معلومات الاتصال" : "Contact Information"}
                </h3>
                <div className="space-y-2 text-slate-700">
                  <p>
                    {isArabic
                      ? "الهاتف : +218 21 361 9811/15"
                      : "Phone: +218 21 361 9811/15"}
                  </p>
                  <p>
                    {isArabic
                      ? "البريد الإلكتروني:  info@nissa.gov.ly"
                      : "Email:  info@nissa.gov.ly"}
                  </p>
                  <p>
                    {isArabic
                      ? "العنوان: طرابلس، ليبيا"
                      : "Address: AL-Zawiyah ST., Tripoli, Libya"}
                  </p>
                  <button 
                    onClick={() =>
                      (window.location.href = "https://www.google.com/maps/place/The+Central+Post+Office/@32.872999,13.1907074,17z/data=!3m1!4b1!4m6!3m5!1s0x13a893efdb123037:0x8377d9c7b512a575!8m2!3d32.872999!4d13.1907074!16s%2Fg%2F11sp18nm1s?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D")
                    }
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  ><MapPinCheckInside/>
                    <span>PinPoint!</span>
                  </button>
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
          title={activeFileName || "PDF Document"} content={[]}        />
      )}

    
    </SidebarProvider>
  )
}
