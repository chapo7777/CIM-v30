"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import {
  Building2,
  Globe,
  Shield,
  Users,
  Target,
  Award,
  Satellite,
  Network,
  FileText,
  Scale,
  TrendingUp,
  MapPinCheckInside,
  Wifi,
  RadioTower,
  CirclePlus,
  FolderKanban,
  Banknote,
  Headset,
  ArrowUpRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  const { isArabic } = useLanguage();

  const responsibilities = [
    {
      icon: FileText,
      titleEn: "Issuing telecommunications services licenses",
      titleAr: "اصدار تراخيص خدمات الاتصالات",
      items: [
        {
          en: "Propose draft laws and regulations related to telecommunications, IT, and postal sectors",
          ar: "تقديم خدمات الانترنت من الفئة الثانية (مزودي الخدمة)ISP",
        },
        {
          en: "Providing second-class internet services (ISP)",
          ar: "تنفيذ التشريعات المتعلقة بالقطاع",
        },
        {
          en: "Propose rules for granting licenses",
          ar: "اقتراح القواعد المنظمة لمنح التراخيص",
        },
      ],
    },
    {
      icon: Target,
      titleEn: "Strategic Planning",
      titleAr: "التخطيط الاستراتيجي",
      items: [
        {
          en: "Set and monitor implementation of national plans",
          ar: "وضع الخطط الوطنية ومراقبة تنفيذها",
        },
        {
          en: "Develop and manage national frequency spectrum plan",
          ar: "وضع المخطط الوطني للطيف الترددي وإدارة وتخصيص استعمال الترددات",
        },
        {
          en: "Set technical and standard specifications for ICT systems",
          ar: "وضع المواصفات الفنية والقياسية لمنظومات الاتصالات والمعلوماتية",
        },
      ],
    },
    {
      icon: Scale,
      titleEn: "Regulation & Licensing",
      titleAr: "التنظيم والترخيص",
      items: [
        {
          en: "Issue and determine fees for all types of licenses",
          ar: "إصدار وتحديد رسوم جميع أنواع التراخيص ومنح الموافقات",
        },
        {
          en: "Regulate interconnection between service networks",
          ar: "تنظيم الربط بين شبكات الاتصالات القائمة على تقديم الخدمات",
        },
        {
          en: "Set pricing rules and quality standards for services",
          ar: "وضع الضوابط الخاصة بتحديد أسعار ومقابل تقديم الخدمات",
        },
      ],
    },
    {
      icon: Shield,
      titleEn: "Security & Oversight",
      titleAr: "الأمن والرقابة",
      items: [
        {
          en: "Coordinate on national security matters in the sector",
          ar: "وضع الضوابط والمعايير المتعلقة بالأمن القومي في القطاع",
        },
        {
          en: "Supervise and regulate sector activities and companies",
          ar: "الإشراف والمتابعة والرقابة على أنشطة القطاع",
        },
        {
          en: "Take legal action against violations",
          ar: "اتخاذ كافة الإجراءات القانونية ضد المخالفات",
        },
      ],
    },
    {
      icon: Globe,
      titleEn: "International Relations",
      titleAr: "العلاقات الدولية",
      items: [
        {
          en: "Represent Libya internationally in telecom and IT fields",
          ar: "تمثيل الدولة الليبية في المنظمات الدولية في مجال الاتصالات",
        },
        {
          en: "Participate in international organizations and conferences",
          ar: "المشاركة في المنظمات الدولية وحضور المؤتمرات والندوات",
        },
        {
          en: "Review and suggest international treaty participation",
          ar: "دراسة المعاهدات والاتفاقيات الدولية ذات العلاقة بالقطاع",
        },
      ],
    },
    {
      icon: TrendingUp,
      titleEn: "Development & Investment",
      titleAr: "التطوير والاستثمار",
      items: [
        {
          en: "Promote investment and provide suitable environment",
          ar: "تشجيع الاستثمار في القطاع وتوفير البيئة المناسبة",
        },
        {
          en: "Foster service competition and prevent anti-competitive behavior",
          ar: "النهوض بالمنافسة في مجال تقديم الخدمات ومنع السلوك الغير تنافسي",
        },
        {
          en: "Collect sector data and publish guidance materials",
          ar: "تجميع المعلومات المتعلقة بالقطاع وإعداد التقارير والمنشورات",
        },
      ],
    },
  ];

  const stats = [
    {
      icon: Satellite,
      value: "39",
      labelEn: "VSAT",
      labelAr: "VSAT",
    },
    {
      icon: Wifi,
      value: "136",
      labelEn: "Internet",
      labelAr: "الإنترنت",
    },
    {
      icon: CirclePlus,
      value: "146",
      labelEn: "Added Services",
      labelAr: "خدمات مضافة",
    },
    {
      icon: FolderKanban,
      value: "55",
      labelEn: "Fleet Management",
      labelAr: "إدارة الاساطيل",
    },
    {
      icon: Banknote,
      value: "109",
      labelEn: "Sale and import of devices",
      labelAr: "بيع وإستراد أجهزة",
    },
    {
      icon: Headset,
      value: "3",
      labelEn: "Call Centre",
      labelAr: "مراكز اتصال",
    },
    {
      icon: Headset,
      value: "488",
      labelEn: "Total ",
      labelAr: "الإجمالي",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              {isArabic
                ? "تراخيص خدمات الاتصالات"
                : "Telecommunications Services Licenses"}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            {isArabic
              ? "تراخيص خدمات الاتصالات"
              : "Telecommunications Services Licenses"}
          </h1>

          <h1 className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            {isArabic
              ? "عدد التراخيص  من الفئتين الثانية و الثالثة الممنوحة في الفترة (2012-2023)"
              : "Telecommunications Services Licenses"}
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? "نقود التحول الرقمي في ليبيا من خلال تنظيم قطاع الاتصالات وتقنية المعلومات"
              : "Number of second and third category licenses granted during the period (2012-2023)"}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">
                      {isArabic ? stat.labelAr : stat.labelEn}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="relative mb-10  w-auto h-auto">
          <Image
            src="/assets/c1-c2-chart.png"
            alt="Logo"
            layout="responsive"
            width={800}
            height={350}
            className="h-auto w-full rounded-2xl object-contain"
            priority
          />
        </div>
        {/* About Section */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
                {isArabic ? "تراخيص الفئة الأولى" : "First Class Licensing"}
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                {isArabic
                  ? "يعتبر إنشاء أو تشغيل شبكة اتصالات عامة أو بنية اتصالات دولية أو تقديم خدمات الاتصالات العامة أو خدمات توفير بنية النفاذ الدولية والتي تقتضي استغلال مورد من الموارد الطبيعية للدولة ( الطيف الترددي) من ضمن تراخيص الفئة الأولى وتشمل هذه الفئة على سبيل المثال لا الحصر"
                  : "The establishment or operation of a public communications network or international communications infrastructure, or the provision of public communications services or international access infrastructure services that require the exploitation of a natural resource of the state (frequency spectrum) are considered among the first-class licenses. This category includes, but is not limited to:"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    {isArabic ? "" : ""}
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "شبكات الهاتف الثابت (السلكي واللاسلكي)."
                        : "Fixed telephone networks (wired and wireless)."}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "شبكات الهاتف المحمول"
                        : "mobile phone networks"}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "الاتصالات الدولية"
                        : "International communications"}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic ? "شبكات التراسل" : "Messaging networks"}
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {isArabic
                      ? "أي أنواع أخرى من خدمات أو شبكات الاتصالات التي تقرر الهيئة أنها تتطلب ترخيصاً من الفئة الأولى"
                      : "First class licensed companies"}
                  </p>
                </div>
                <Link className="font-bold underline" href="/oops">
                  {isArabic
                    ? "الشركات المرخصة من الفئة الاولى"
                    : "Any other types of telecommunications services or networks that the Authority determines require a Class 1 license."}
                </Link>
                <span>
                  <ArrowUpRight />
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm mt-10 mb-10 border-slate-200/50 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
                {isArabic ? "تراخيص الفئة الثانية" : "Second Class Licensing"}
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                {isArabic
                  ? "يعتبر من ضمن تراخيص الفئة الثانية كل نشاط يعنى بتقديم خدمات الاتصالات العامة والتي تعتمد على استغلال سعة لشبكة اتصالات عامة من الفئة الأولى أو تقديم خدمات الاتصالات العامة الإضافية والتي تقتضي استغلال الموارد الوطنية كالترقيم وغيرها دون أن تقتضي استغلال مورد من الموارد الطبيعية للدولة."
                  : "Second-class licenses include activities related to providing public telecom services based on capacity leased from a first-class telecom network, or additional public services that use national resources (like numbering), but not natural state resources like the frequency spectrum."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "إعادة بيع خدمات الاتصالات"
                        : "Reselling telecom services"}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "شبكات تزويد خدمات الإنترنت (ISP)"
                        : "Internet Service Providers (ISPs)"}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "خدمات اتصالات الفضاء عبر الأقمار الصناعية"
                        : "Satellite-based communication services"}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "خدمات القيمة المضافة"
                        : "Value-added services (VAS)"}
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {isArabic
                      ? "أية أنواع أخرى من خدمات أو شبكات الاتصالات التي تقرر الهيئة أنها تتطلب ترخيص من الفئة الثانية"
                      : "Any other telecom service or network the Authority deems to require a second-class license."}
                  </p>
                </div>
                <Link className="font-bold underline" href="/oops">
                  {isArabic
                    ? "الشركات المرخصة من الفئة الثانية"
                    : "Second class licensed companies"}
                </Link>
                <span>
                  <ArrowUpRight />
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm mb-10 border-slate-200/50 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
                {isArabic ? "تراخيص الفئة الثالثة" : "Third Class Licensing"}
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                {isArabic
                  ? "يعتبر من ضمن تراخيص الفئة الثالثة كل نشاط يعنى بإنشاء أو تشغيل شبكة اتصالات خاصة أو تقديم خدمات الاتصالات الخاصة سواء بواسطة إنشاء أو تشغيل بنية تحتية لشبكة اتصالات خاصة، غير متصلة بالشبكة العامة، أو بواسطة استغلال سعة من شبكة اتصالات."
                  : "Third-class licenses include activities related to establishing or operating private telecom networks or providing private telecom services, whether via private infrastructure not connected to the public network or by using capacity from an existing network."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "خدمة تتبع وإدارة المركبات والآليات (AVL)"
                        : "Vehicle & Asset Tracking (AVL)"}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "استيراد وبيع معدات الاتصالات الراديوية"
                        : "Import & sale of radio communication equipment"}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "خدمات الاتصالات الشخصية المتنقلة عبر الأقمار الاصطناعية"
                        : "Mobile satellite personal communication services"}
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {isArabic
                      ? "أية أنواع أخرى من خدمات أو شبكات الاتصالات التي تقرر الهيئة أنها تتطلب ترخيص من الفئة الثالثة"
                      : "Any other telecom service or network the Authority deems to require a third-class license."}
                  </p>
                </div>
                <Link className="font-bold underline" href="/oops">
                  {isArabic
                    ? "الشركات المرخصة من الفئة الثالثة"
                    : "Third class licensed companies"}
                </Link>
                <span>
                  <ArrowUpRight />
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Responsibilities Section */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {isArabic ? "اختصاصات الهيئة" : "Authority Responsibilities"}
            </h2>
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsibilities.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-800">
                        {isArabic ? category.titleAr : category.titleEn}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">
                              {isArabic ? item.ar : item.en}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br mt-10 from-blue-50/80 to-indigo-50/60 rounded-2xl p-8 border border-blue-100/60 backdrop-blur-sm">
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
                    (window.location.href =
                      "https://www.google.com/maps/place/The+Central+Post+Office/@32.872999,13.1907074,17z/data=!3m1!4b1!4m6!3m5!1s0x13a893efdb123037:0x8377d9c7b512a575!8m2!3d32.872999!4d13.1907074!16s%2Fg%2F11sp18nm1s?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D")
                  }
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  <MapPinCheckInside />
                  <span>PinPoint!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
