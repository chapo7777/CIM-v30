"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useLanguage } from "@/contexts/language-context";
import {
  Phone,
  Users,
  Building,
  RadioTower,
  Clock,
  FileTextIcon,
  Download,
  ExternalLink,
  CheckCircle,
  FileDigit,
  CircleCheckBig,
  BrainCog,
  HandHeart,
  FileStack,
  Truck,
  Sparkle,
  MapPinCheckInside,
} from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PdfModal = dynamic(() => import("@/components/PdfModal"), { ssr: false });

export default function CommunicationsRegulationPage() {
  const { isArabic } = useLanguage();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFileUrl, setActiveFileUrl] = useState<string | null>(null);
  const [activeFileName, setActiveFileName] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openPdf = (url: string, name: string, type: string) => {
    if (type === "pdf") {
      setActiveFileUrl(url);
      setActiveFileName(name);
      setIsModalOpen(true);
    } else if (type === "page") {
      window.open(url, "_blank");
    }
  };
  const serviceData = [
    {
      ar: "الترقيم و الخدمات المضافة",
      en: " Numbering and added services ",
      description: {
        ar: "لقد قامت الهيئة العامة للاتصالات والمعلوماتية بموجب قوانينها المستمدة من قانون الاتصالات في ليبيا ومع ما هو متبع حول العالم عند فتح أسواق الاتصالات للمنافسة الحرة، من إعداد القواعد التنظيمية والإجراءات التنفيذية لإيجاد بيئة تنافسية تتميز بالشفافية والمساواة والفعالية، وذلك لتلبية الطلب المتزايد على استخدام موارد الترقيم والخدمات المضافة بمختلف أنواعها",
        en: "The General Authority for Communications and Information Technology, in accordance with its laws derived from the Libyan Telecommunications Law and in line with what is followed around the world when opening telecommunications markets to free competition, has prepared regulatory rules and executive procedures to create a competitive environment characterized by transparency, equality, and effectiveness, in order to meet the increasing demand for the use of numbering resources and added services of various kinds.",
      },
      files: [
        {
          name: {
            ar: "نموذج الترقيم والخدمات المضافة",
            en: "Numbering and Added Services Form",
          },
          url: "/pdfs/numbering.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "نموذج طلب تخصيص الأرقام القصيرة المجانية (14XX)",
            en: "Free Short Number Allocation Request Form (14XX) Application Form",
          },
          url: "/pdfs/14XX.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "نموذج طلب تخصيص الأرقام القصيرة الغير مجانية (15XX)",
            en: "Non-toll-free short number allocation request form (15XX)",
          },
          url: "/pdfs/15XX.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "نموذج طلب تخصيص الأرقام المجانية (0800XXXXXXXX)",
            en: "Toll-free number allocation request form (0800XXXXXXXX)",
          },
          url: "/pdfs/0800.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "نموذج طلب تخصيص الأرقام المميزة (0900XXXXXXXX)",
            en: "Distinctive Number Allocation Application Form (0900XXXXXXXX)",
          },
          url: "/pdfs/0900.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "جدول قيم تعرفة تخصيص أرقام خدمات القيمة المضافة والقصيرة والمجانية وذات التعرفة المميزة.",
            en: "Table of tariff values for allocating value-added, short, toll-free, and premium-rate service numbers.",
          },
          url: "/pdfs/t1.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "جدول تصنيف وبيان أرقام خدمات القيمة المضافة",
            en: "Classification table and statement of value-added services numbers",
          },
          url: "/pdfs/t2.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "اللائحة التنفيذية للترقيم",
            en: "Executive Regulations for Numbering",
          },
          url: "/pdfs/list.pdf",
          type: "pdf",
        },
      ],
      icon: <FileDigit className="text-blue-600 w-8 h-8" />,
      bgColor: "from-blue-100 to-blue-300",
      borderColor: "border-blue-200 hover:border-blue-400",
      textColor: "text-blue-500",
    },
    {
      ar: "  الاعتماد النوعي",
      en: "Qualitative accreditation",
      description: {
        ar: "وفقا للائحة التنفيذية للقاون رقم ( 22 ) لسنة 2010م بشأن الاتصالات  بخصوص الاعتماد النوعي لأجهزة الاتصالات، باشرت إدارة التنظيم في اصدار شهادات الاعتماد النوعي لأجهزة الاتصالات بهدف ضمان استخدام الأجهزة وفق خطة الهيئة العامة للإتصالات والمعلوماتية بشأن الطيف الترددي والتأثيرات الكهرومغناطيسية بالإضافة إلى ضرورة الترويج للجودة والتكلفة المناسبة للأجهزة المتوفرة للمستخدمين وتجنب بيع أجهزة تضر بالمصلحة العامة في السوق المحلى",
        en: "According to the executive regulations of Law No. (22) of 2010 regarding communications regarding the type approval of communications devices, the Regulatory Department has begun issuing type approval certificates for communications devices with the aim of ensuring the use of devices in accordance with the plan of the General Authority for Communications and Information Technology regarding the frequency spectrum and electromagnetic effects, in addition to the necessity of promoting the quality and appropriate cost of devices available to users and avoiding the sale of devices that harm the public interest in the local market.",
      },
      files: [
        {
          name: {
            ar: " قائمة بالأجهزة المعتمدة نوعيا و المسموح بتوريدها و إستخدامها في ليبيا ",
            en: " List of type-approved devices permitted for import and use in Libya ",
          },
          url: "/pdfs/c1-s3-a1.pdf",
        },
        {
          name: { ar: "نموذج طلب الترخيص", en: "License Application Form" },
          url: "/pdfs/c1-s3-a2.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "شروط ومتطلبات الترخيص",
            en: "Licensing Terms and Requirements",
          },
          url: "/pdfs/c1-s3-a3.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "شروط ومتطلبات الترخيص",
            en: "Licensing Terms and Requirements",
          },
          url: "/pdfs/c1-c3-a4.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "المزيد من المعلومات",
            en: "More INFO",
          },
          url: "/INFO/Qualitative-accreditation",
          type: "page",
        },
      ],
      icon: <CircleCheckBig className="text-blue-600 w-8 h-8" />,
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200 hover:border-blue-400",
    },

    {
      ar: "الطيف الترددى",
      en: "Frequency spectrum ",
      description: {
        ar: " يقصد بالطيف الترددي المدى الترددي للموجات الكهرومغناطيسية و التي تنتشر لاسلكياً و الممتد من 3 كيلوهيرتز حتى 3000 جيجاهيرتز و التي يتم استخدامها في أغراض الاتصالات و التحكم و الملاحة الجوية و البحرية و القياسات و الاستشعار عن بعد و المراقبة و في غيرها من التطبيقات العلمية و الصناعية و الطبية الأخرى",
        en: "The frequency spectrum refers to the frequency range of electromagnetic waves that are propagated wirelessly and extending from 3 kilohertz to 3000 gigahertz, which is used for communications, control, air and marine navigation, measurements, remote sensing, monitoring, and other scientific, industrial, and medical applications.",
      },
      files: [
        {
          name: {
            ar: "  نموذج شكوى بخصوص تداخل ضارا",
            en: "Harmful Interference Complaint Form",
          },
          url: "/pdfs/c1-s4-a1.pdf",
          type: "pdf",
        },
        {
          name: { ar: "نموذج طلب الترخيص", en: "License Application Form" },
          url: "/pdfs/c1-s4-a2.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "شروط ومتطلبات الترخيص",
            en: "Licensing Terms and Requirements",
          },
          url: "/pdfs/c1-s4-a3.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "شروط ومتطلبات الترخيص",
            en: "Licensing Terms and Requirements",
          },
          url: "/pdfs/c1-s4-a4.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "شروط ومتطلبات الترخيص",
            en: "Licensing Terms and Requirements",
          },
          url: "/pdfs/c1-s4-a5.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "شروط ومتطلبات الترخيص",
            en: "Licensing Terms and Requirements",
          },
          url: "/pdfs/c1-s4-a6.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "المزيد من المعلومات",
            en: "More INFO",
          },
          url: "/INFO/frequency",
          type: "page",
        },
      ],
      icon: <RadioTower className="text-blue-600 w-8 h-8" />,
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200 hover:border-blue-400",
    },

    {
      ar: "تنظيم خدمات المعلوماتية",
      en: "Organization of information services",
      description: {
        ar: "تقوم الهيئة بمراقبة جودة الخدمات المقدمة من شركات الاتصالات وضمان التزامها بالمعايير المحددة.",
        en: "The Authority monitors the quality of services provided by telecommunications companies and ensures their compliance with specified standards.",
      },
      files: [
        {
          name: {
            ar: "النطاق العلوي الوطني ( Ly.) ",
            en: "National top-level domain (.Ly.)",
          },
          url: "/others/gov-ly",
          type: "page",
        },
        {
          name: {
            ar: "التقنيات",
            en: "Technologies",
          },
          url: "/others/tech",
          type: "page",
        },
        {
          name: {
            ar: "البلاغات",
            en: "Reports",
          },
          url: "/others/reports",
          type: "page",
        },
      ],
      icon: <BrainCog className="text-cyan-600 w-8 h-8" />,
      bgColor: "from-cyan-50 to-cyan-100",
      borderColor: "border-cyan-200 hover:border-cyan-400",
    },
    {
      ar: "مشورات عامة",
      en: "General Requests",
      description: {
        ar: "تعمل الهيئة على تنظيم أسعار خدمات الاتصالات وضمان العدالة في التسعير بما يحقق التوازن بين مصالح المستهلكين ومقدمي الخدمات.",
        en: "The Authority regulates telecommunications service prices and ensures fair pricing to achieve a balance between the interests of consumers and service providers.",
      },
      files: [
        {
          name: { ar: "المزيد من المعلومات", en: "More INFO" },
          url: "INFO/gen-req",
        },
      ],
      icon: <HandHeart className="text-violet-600 w-8 h-8" />,
      bgColor: "from-violet-50 to-violet-100",
      borderColor: "border-violet-200 hover:border-violet-400",
    },
    {
      ar: "وثائق مرجعية",
      en: "Reference documents",
      description: {
        ar: "",
        en: "",
      },
      files: [
        {
          name: {
            ar: "إجراءات تسوية النزاعات",
            en: "Dispute Resolution Procedures",
          },
          url: "/pdfs/c1-s7-a1.pdf",
          type: "pdf",
        },
        {
          name: { ar: "نموذج تقديم شكوى", en: "Complaint Submission Form" },
          url: "/pdfs/c1-s7-a2.pdf",
        },
        {
          name: {
            ar: "إجراءات تسوية النزاعات",
            en: "Dispute Resolution Procedures",
          },
          url: "/pdfs/c1-s7-a3.pdf",
          type: "pdf",
        },
        {
          name: {
            ar: "إجراءات تسوية النزاعات",
            en: "Dispute Resolution Procedures",
          },
          url: "/pdfs/c1-s7-a4.pdf",
          type: "pdf",
        },
      ],
      icon: <FileStack className="text-fuchsia-600 w-8 h-8" />,
      bgColor: "from-rose-50 to-rose-100",
      borderColor: "border-rose-200 hover:border-rose-400",
    },
    {
      ar: "الخدمــــــات البريدية",
      en: "Postal Services",
      description: {
        ar: "دور الخدمات البريدية :  تقوم بتنظيم ومتابعة الخدمات البريدية والإشراف عليها، للتأكد من تقديمها وفقاً للضوابط والسياسات الصادرة،  ومن أهمها تحديد الجهات المرخص لها لتقديم الخدمات البريدية، و إصدار تراخيص مزاولة نشاط تجميع ونقل وتوزيع البريد السريع المحلي والدولي، لتقديم خدمة أو أكثر من الخدمات البريدية، ومتابعة مزاولة النشاط وفق اللائحة التنظيمية للخدمات البريدية، مع مراعاة الاتفاقيات التي تشمل اتفاقيات الاتحاد البريدي العالمي، وأية اتفاقيات ثنائية أو إقليمية معتمدة في مجال الخدمات البريدية، وذلك عبر الإدارة العامة لشؤون التنظيم بالهيئة. ",
        en: "The role of postal services: It regulates, monitors and supervises postal services to ensure that they are provided in accordance with the issued controls and policies, the most important of which is identifying the entities licensed to provide postal services, issuing licenses to practice the activity of collecting, transporting and distributing local and international express mail, to provide one or more postal services, and following up on the practice of the activity in accordance with the postal services regulations, taking into account agreements that include the Universal Postal Union agreements, and any approved bilateral or regional agreements in the field of postal services, through the General Administration of Regulatory Affairs at the Authority.",
      },
      files: [
        {
          name: { ar: "معايير أمان الشبكات", en: "Network Security Standards" },
          url: "/pdfs/c1-s8-a1.pdf",
        },
        {
          name: {
            ar: "إرشادات حماية البيانات",
            en: "Data Protection Guidelines",
          },
          url: "/pdfs/c1-s8-a2.pdf",
        },
      ],
      icon: <Truck className="text-violet-600 w-8 h-8" />,
      bgColor: "from-violet-50 to-violet-100",
      borderColor: "border-violet-200 hover:border-violet-400",
    },
  ];

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
          <Separator
            orientation="vertical"
            className={`h-10 bg-slate-300/60 ${isArabic ? "mr-2" : "ml-2"}`}
          />
          <Breadcrumb>
            <BreadcrumbList className={isArabic ? "flex-row-reverse" : ""}>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink
                  href="/"
                  className="text-slate-600 hover:text-blue-700 transition-colors"
                >
                  {isArabic ? "الرئيسية" : "Home"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink
                  href="/#"
                  className="text-slate-600 hover:text-blue-700 transition-colors"
                >
                  {isArabic ? "الخدمات" : "Services"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-800 font-medium">
                  {isArabic ? "تنظيم الاتصالات" : "Communications Regulation"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div
          className={`flex flex-1 flex-col gap-8 p-6 ${
            isArabic ? "text-right" : "text-left"
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/60 rounded-2xl p-8 border border-blue-100/60 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-blue-800">
                  {isArabic ? "تنظيم الاتصالات" : "Communications Regulation"}
                </h1>
                <p className="text-lg text-blue-600">
                  {isArabic
                    ? "ترخيص وتنظيم شركات الاتصالات"
                    : "Telecom licensing and regulation"}
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              {isArabic ? "نظرة عامة" : "Overview"}
            </h2>
            <p className="text-slate-800 leading-relaxed text-lg mb-8">
              {isArabic
                ? "الإدارة العامة لشؤون التنظيم هي الجهة المسئولة عن تنظيم قطاع الاتصالات في ليبيا وتتولى تنظيم قطاع الاتصالات وتكنولوجيا المعلومات وقطاع البريد والنفاذ إلى الإعلام الرقمي."
                : "The Communications Regulation department oversees Libya's telecommunications sector, ensuring high-quality services for citizens and businesses. We develop policies and standards that guarantee a fair competitive environment and reliable services."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50/80 rounded-xl p-6 text-center border border-blue-100/60">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  {isArabic ? "حماية المستهلك" : "Consumer Protection"}
                </h3>
                <p className="text-sm text-slate-600">
                  {isArabic
                    ? "ضمان حقوق المستهلكين وجودة الخدمات"
                    : "Ensuring consumer rights and service quality"}
                </p>
              </div>
              <div className="bg-emerald-50/80 rounded-xl p-6 text-center border border-emerald-100/60">
                <Building className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  {isArabic ? "ترخيص الشركات" : "Company Licensing"}
                </h3>
                <p className="text-sm text-slate-600">
                  {isArabic
                    ? "إصدار وإدارة تراخيص شركات الاتصالات"
                    : "Issuing and managing telecom company licenses"}
                </p>
              </div>
              <div className="bg-violet-50/80 rounded-xl p-6 text-center border border-violet-100/60">
                <Sparkle className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  {isArabic ? "وضع المعايير" : "Setting Standards"}
                </h3>
                <p className="text-sm text-slate-600">
                  {isArabic
                    ? "تطوير معايير الجودة والأداء"
                    : "Developing quality and performance standards"}
                </p>
              </div>
            </div>
          </div>

          {/* Key Responsibilities - New Section with Disc List */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              {isArabic ? "المسؤوليات الرئيسية" : "Key Responsibilities"}
            </h2>

            {isArabic ? (
              <div className="text-blue-500 leading-relaxed">
                <p className="mb-6 text-lg text-slate-600">
                  خدمات القسم تشمل كل من الآتي:
                </p>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>إدارة وتنفيذ وتطبيق وتطوير خطة الترقيم الوطنية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      إصدار تراخيص استعمال موارد الترقيم وفق التعرفة المحددة
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      استلام نماذج تخصيص موارد الترقيم لمشغلي شبكات الهاتف
                      الثابت والمحمول، ومزودي خدمات الاتصالات بأنواعها
                      ولمستخدميها
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      المساهمة في تنظيم الربط البيني بين مشغلي شبكات الهاتف
                      المختلفة
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      مراقبة صلاحية مدة الخدمات ومتابعة الالتزامات المالية لصالح
                      الإدارة
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>ضمان جودة الخدمات المقدمة من شركات الاتصالات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>تنظيم أسعار الخدمات وضمان العدالة في التسعير</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="text-blue-500 leading-relaxed">
                <p className="mb-6 text-lg text-slate-600">
                  Our department's services include the following:
                </p>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Managing, implementing, applying and developing the
                      national numbering plan
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Issuing licenses for the use of numbering resources
                      according to specified tariffs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Receiving numbering resource allocation forms for fixed
                      and mobile phone network operators, telecommunications
                      service providers and their users
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Contributing to regulating interconnection between
                      different telephone network operators
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Monitoring service validity periods and following up on
                      financial obligations for the administration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Ensuring quality of services provided by
                      telecommunications companies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Regulating service prices and ensuring fair pricing
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Services Grid */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              {isArabic ? "خدماتنا" : "Our Services"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.map((service, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${service.borderColor} bg-gradient-to-br ${service.bgColor} backdrop-blur-sm`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`flex items-start gap-4 ${
                        isArabic ? "flex-row-reverse text-right" : ""
                      }`}
                    >
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
              <Dialog
                key={`modal-${index}`}
                open={openIndex === index}
                onOpenChange={() => setOpenIndex(null)}
              >
                <DialogContent
                  className="w-[90%] max-w-6xl sm:w-[80%] lg:w-[70%] bg-white/95 backdrop-blur-md"
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  <DialogHeader>
                    <DialogTitle
                      className={`text-lg font-semibold ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {isArabic ? service.ar : service.en}
                    </DialogTitle>
                  </DialogHeader>
                  <div
                    className={`mt-4 text-slate-700 text-base leading-relaxed ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {isArabic ? service.description.ar : service.description.en}
                  </div>

                  <div className="mt-6">
                    <h4
                      className={`font-medium text-slate-800 mb-3 ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    >
                      {isArabic ? "المرفقات" : "Attachments"}
                    </h4>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="documents">
                        <AccordionTrigger
                          className={`text-sm font-medium text-slate-700 ${
                            isArabic ? "flex-row-reverse" : ""
                          }`}
                        >
                          {isArabic
                            ? "المستندات والنماذج"
                            : "Documents & Forms"}
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
                                <div
                                  className={`flex-1 min-w-0 ${
                                    isArabic ? "text-right" : "text-left"
                                  }`}
                                >
                                  <p className="text-sm font-medium text-slate-800 truncate">
                                    {isArabic ? file.name.ar : file.name.en}
                                  </p>
                                  <p className="text-xs text-slate-500 truncate">
                                    PDF Document
                                  </p>
                                </div>
                                <div
                                  className={`flex gap-1 ${
                                    isArabic ? "flex-row-reverse" : ""
                                  }`}
                                >
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const name = isArabic
                                        ? file.name.ar
                                        : file.name.en;

                                      if (file.type === "pdf") {
                                        openPdf(file.url, name, "pdf");
                                      } else if (file.type === "page") {
                                        window.open(file.url, "_blank");
                                      }
                                    }}
                                    className="p-2 rounded-lg bg-white/80 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors border border-blue-200/60 backdrop-blur-sm"
                                    title={
                                      isArabic ? "عرض المستند" : "View document"
                                    }
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </button>
                                  <a
                                    href={file.url}
                                    download
                                    className="p-2 rounded-lg bg-white/80 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors border border-blue-200/60 backdrop-blur-sm"
                                    title={
                                      isArabic
                                        ? "تحميل المستند"
                                        : "Download document"
                                    }
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

                      <AccordionItem value="related">
                        <AccordionTrigger
                          className={`text-sm font-medium text-slate-700 ${
                            isArabic ? "flex-row-reverse" : ""
                          }`}
                        >
                          {isArabic ? "معلومات ذات صلة" : "Related Information"}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pt-2">
                            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60 backdrop-blur-sm">
                              <h5
                                className={`font-medium text-sm text-slate-800 mb-2 ${
                                  isArabic ? "text-right" : "text-left"
                                }`}
                              >
                                {isArabic
                                  ? "الجهات المعنية"
                                  : "Relevant Authorities"}
                              </h5>
                              <p
                                className={`text-sm text-slate-600 ${
                                  isArabic ? "text-right" : "text-left"
                                }`}
                              >
                                {isArabic
                                  ? "وزارة الاتصالات، هيئة تنظيم الاتصالات، شركات الاتصالات المرخصة"
                                  : "Ministry of Communications, Telecommunications Regulatory Authority, Licensed Telecom Companies"}
                              </p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60 backdrop-blur-sm">
                              <h5
                                className={`font-medium text-sm text-slate-800 mb-2 ${
                                  isArabic ? "text-right" : "text-left"
                                }`}
                              >
                                {isArabic
                                  ? "القوانين ذات الصلة"
                                  : "Relevant Laws"}
                              </h5>
                              <p
                                className={`text-sm text-slate-600 ${
                                  isArabic ? "text-right" : "text-left"
                                }`}
                              >
                                {isArabic
                                  ? "قانون الاتصالات رقم 22 لسنة 2010، لائحة تنظيم الاتصالات"
                                  : "Telecommunications Law No. 22 of 2010, Telecommunications Regulation Bylaw"}
                              </p>
                            </div>
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
                      ? "البريد الإلكتروني: regulation@cim.gov.ly"
                      : "Email: regulation@cim.gov.ly"}
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
      <PdfModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={
          activeFileUrl != null ? [{ type: "pdf", url: activeFileUrl }] : []
        }
        title={activeFileName ?? undefined}
      />
    </SidebarProvider>
  );
}
