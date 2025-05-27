"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
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
} from "lucide-react"
import { Navbar } from "@/components/navbar"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AboutPage() {
  const { isArabic } = useLanguage()

  const responsibilities = [
    {
      icon: FileText,
      titleEn: "Legislative Framework",
      titleAr: "الإطار التشريعي",
      items: [
        {
          en: "Propose draft laws and regulations related to telecommunications, IT, and postal sectors",
          ar: "اقتراح مشروعات القوانين واللوائح المتعلقة بقطاع الاتصالات والمعلوماتية والبريد",
        },
        {
          en: "Implement sector-related legislation",
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
  ]

  const stats = [
    {
      icon: Building2,
      value: "2011",
      labelEn: "Established",
      labelAr: "تأسست",
    },
    {
      icon: Network,
      value: "100%",
      labelEn: "Coverage",
      labelAr: "التغطية",
    },
    {
      icon: Users,
      value: "6M+",
      labelEn: "Citizens Served",
      labelAr: "مواطن يخدمهم",
    },
    {
      icon: Satellite,
      value: "24/7",
      labelEn: "Operations",
      labelAr: "العمليات",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

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
              {isArabic ? "الهيئة العامة للاتصالات" : "General Authority for Communications"}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            {isArabic ? "من نحن" : "About GACI"}
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? "نقود التحول الرقمي في ليبيا من خلال تنظيم قطاع الاتصالات وتقنية المعلومات"
              : "Leading Libya's digital transformation through telecommunications and IT sector regulation"}
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
            const Icon = stat.icon
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{isArabic ? stat.labelAr : stat.labelEn}</div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* About Section */}
        <motion.div className="mb-16" variants={fadeInUp} initial="initial" animate="animate">
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-slate-800 mb-4">
                {isArabic ? "رسالتنا" : "Our Mission"}
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                {isArabic
                  ? "الهيئة العامة للاتصالات تعنى بشؤون الاتصالات وتقنية المعلومات وتمثل أعلى سلطة مسؤولة عن قطاع الاتصالات في ليبيا. يقع مقرها الرئيسي في مدينة طرابلس ويترأسها المهندس عبدالباسط الباعور بتكليف من رئيس الوزراء."
                  : "The General Authority for Communications is responsible for telecommunications and IT, representing the highest authority over Libya's telecom sector. Headquartered in Tripoli, it is chaired by Engineer Abdulbaset Albaour, appointed by the Prime Minister."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    {isArabic ? "إنجازاتنا" : "Our Achievements"}
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "إعادة ربط مختلف مناطق ليبيا بعد الثورة"
                        : "Reconnected Libya's regions after the revolution"}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic
                        ? "استعادة خدمات الاتصالات والإنترنت والبريد"
                        : "Restored telecommunications, internet, and postal services"}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {isArabic ? "إنجاز مشاريع استراتيجية مهمة" : "Completed important strategic projects"}
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    {isArabic ? "رؤيتنا" : "Our Vision"}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {isArabic
                      ? "المساهمة في لم الشمل وإعمار ليبيا من خلال تطوير قطاع الاتصالات وتقنية المعلومات وضمان وصول الخدمات لجميع المواطنين."
                      : "Contributing to national unity and Libya's reconstruction through developing the telecommunications and IT sector, ensuring services reach all citizens."}
                  </p>
                </div>
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
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {isArabic
                ? "نعمل على تنظيم وتطوير قطاع الاتصالات من خلال مجموعة شاملة من المسؤوليات والاختصاصات"
                : "We regulate and develop the telecommunications sector through comprehensive responsibilities and authorities"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsibilities.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div key={index} variants={fadeInUp} transition={{ delay: index * 0.1 }}>
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
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{isArabic ? item.ar : item.en}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-16 text-center" variants={fadeInUp} initial="initial" animate="animate">
          <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 border-0 text-white">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-4">{isArabic ? "تواصل معنا" : "Get in Touch"}</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                {isArabic
                  ? "نحن هنا لخدمتكم وتقديم أفضل الحلول في مجال الاتصالات وتقنية المعلومات"
                  : "We're here to serve you and provide the best solutions in telecommunications and IT"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors duration-200">
                  {isArabic ? "اتصل بنا" : "Contact Us"}
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-colors duration-200">
                  {isArabic ? "خدماتنا" : "Our Services"}
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
