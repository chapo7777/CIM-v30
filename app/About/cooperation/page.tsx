"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe, Users, Building2, Award, Handshake, Target, Calendar, MapPin } from "lucide-react"

export default function InternationalCooperationPage() {
  const { isArabic } = useLanguage()

  const internationalPartners = [
    {
      id: 1,
      nameAr: "الاتحاد الدولي للاتصالات (ITU)",
      nameEn: "International Telecommunication Union (ITU)",
      typeAr: "منظمة دولية",
      typeEn: "International Organization",
      descriptionAr: "الوكالة المتخصصة للأمم المتحدة لتكنولوجيا المعلومات والاتصالات",
      descriptionEn: "UN specialized agency for information and communication technologies",
      cooperationAreasAr: ["تطوير المعايير التقنية", "بناء القدرات", "السياسات التنظيمية"],
      cooperationAreasEn: ["Technical standards development", "Capacity building", "Regulatory policies"],
      logo: "/placeholder.svg?height=80&width=120",
      established: "2010",
    },
    {
      id: 2,
      nameAr: "اتحاد إذاعات الدول العربية (ASBU)",
      nameEn: "Arab States Broadcasting Union (ASBU)",
      typeAr: "منظمة إقليمية",
      typeEn: "Regional Organization",
      descriptionAr: "منظمة تجمع هيئات الإذاعة والتلفزيون في الدول العربية",
      descriptionEn: "Organization bringing together broadcasting authorities in Arab states",
      cooperationAreasAr: ["البث الرقمي", "تبادل المحتوى", "التدريب التقني"],
      cooperationAreasEn: ["Digital broadcasting", "Content exchange", "Technical training"],
      logo: "/placeholder.svg?height=80&width=120",
      established: "2012",
    },
    {
      id: 3,
      nameAr: "الاتحاد الأفريقي للاتصالات (ATU)",
      nameEn: "African Telecommunications Union (ATU)",
      typeAr: "منظمة قارية",
      typeEn: "Continental Organization",
      descriptionAr: "منظمة تهدف إلى تطوير الاتصالات في القارة الأفريقية",
      descriptionEn: "Organization aimed at developing telecommunications in the African continent",
      cooperationAreasAr: ["التكامل الإقليمي", "تطوير البنية التحتية", "التنسيق التقني"],
      cooperationAreasEn: ["Regional integration", "Infrastructure development", "Technical coordination"],
      logo: "/placeholder.svg?height=80&width=120",
      established: "2013",
    },
    {
      id: 4,
      nameAr: "جامعة الدول العربية",
      nameEn: "League of Arab States",
      typeAr: "منظمة إقليمية",
      typeEn: "Regional Organization",
      descriptionAr: "منظمة تضم الدول العربية وتعمل على تعزيز التعاون بينها",
      descriptionEn: "Organization of Arab states working to enhance cooperation among them",
      cooperationAreasAr: ["السياسات الرقمية", "التعاون التقني", "تبادل الخبرات"],
      cooperationAreasEn: ["Digital policies", "Technical cooperation", "Experience exchange"],
      logo: "/placeholder.svg?height=80&width=120",
      established: "2011",
    },
    {
      id: 5,
      nameAr: "الأمم المتحدة - برنامج التنمية",
      nameEn: "United Nations Development Programme",
      typeAr: "منظمة دولية",
      typeEn: "International Organization",
      descriptionAr: "برنامج الأمم المتحدة الإنمائي لدعم التنمية المستدامة",
      descriptionEn: "UN development programme supporting sustainable development",
      cooperationAreasAr: ["التحول الرقمي", "بناء القدرات", "الحكومة الإلكترونية"],
      cooperationAreasEn: ["Digital transformation", "Capacity building", "E-government"],
      logo: "/placeholder.svg?height=80&width=120",
      established: "2014",
    },
    {
      id: 6,
      nameAr: "البنك الدولي",
      nameEn: "World Bank",
      typeAr: "مؤسسة مالية دولية",
      typeEn: "International Financial Institution",
      descriptionAr: "مؤسسة مالية دولية تقدم القروض والمنح للدول النامية",
      descriptionEn: "International financial institution providing loans and grants to developing countries",
      cooperationAreasAr: ["تمويل المشاريع", "الاستشارات التقنية", "تطوير السياسات"],
      cooperationAreasEn: ["Project financing", "Technical consulting", "Policy development"],
      logo: "/placeholder.svg?height=80&width=120",
      established: "2015",
    },
  ]

  const cooperationAreas = [
    {
      titleAr: "تطوير المعايير التقنية",
      titleEn: "Technical Standards Development",
      descriptionAr: "العمل مع المنظمات الدولية لوضع وتطبيق المعايير التقنية العالمية",
      descriptionEn: "Working with international organizations to establish and implement global technical standards",
      icon: Award,
      color: "blue",
    },
    {
      titleAr: "بناء القدرات البشرية",
      titleEn: "Human Capacity Building",
      descriptionAr: "برامج تدريبية وتطويرية للكوادر التقنية والإدارية",
      descriptionEn: "Training and development programs for technical and administrative personnel",
      icon: Users,
      color: "green",
    },
    {
      titleAr: "تبادل الخبرات والمعرفة",
      titleEn: "Knowledge and Experience Exchange",
      descriptionAr: "تبادل أفضل الممارسات والخبرات مع الدول والمنظمات الشريكة",
      descriptionEn: "Exchanging best practices and experiences with partner countries and organizations",
      icon: Handshake,
      color: "purple",
    },
    {
      titleAr: "التعاون في المشاريع التقنية",
      titleEn: "Technical Project Collaboration",
      descriptionAr: "تنفيذ مشاريع مشتركة في مجال الاتصالات وتكنولوجيا المعلومات",
      descriptionEn: "Implementing joint projects in telecommunications and information technology",
      icon: Building2,
      color: "orange",
    },
  ]

  const achievements = [
    {
      yearAr: "2023",
      yearEn: "2023",
      titleAr: "اتفاقية التعاون مع الاتحاد الأوروبي",
      titleEn: "Cooperation Agreement with European Union",
      descriptionAr: "توقيع اتفاقية شراكة استراتيجية لتطوير البنية التحتية الرقمية",
      descriptionEn: "Signing strategic partnership agreement for digital infrastructure development",
    },
    {
      yearAr: "2022",
      yearEn: "2022",
      titleAr: "مشروع الربط الإقليمي",
      titleEn: "Regional Connectivity Project",
      descriptionAr: "إطلاق مشروع ربط الشبكات مع الدول المجاورة",
      descriptionEn: "Launching network connectivity project with neighboring countries",
    },
    {
      yearAr: "2021",
      yearEn: "2021",
      titleAr: "برنامج التدريب الدولي",
      titleEn: "International Training Program",
      descriptionAr: "تدريب 200 موظف في مجال الأمن السيبراني",
      descriptionEn: "Training 200 employees in cybersecurity field",
    },
    {
      yearAr: "2020",
      yearEn: "2020",
      titleAr: "مبادرة الحكومة الرقمية",
      titleEn: "Digital Government Initiative",
      descriptionAr: "إطلاق مبادرة التحول الرقمي بالتعاون مع الأمم المتحدة",
      descriptionEn: "Launching digital transformation initiative in cooperation with UN",
    },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${isArabic ? "rtl" : "ltr"}`}>
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-8">
          <div className={`text-center ${isArabic ? "text-right" : "text-left"}`}>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {isArabic ? "التعاون الدولي" : "International Cooperation"}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? "تعمل الهيئة العامة للاتصالات والمعلوماتية على تعزيز التعاون مع المنظمات الدولية والإقليمية لتطوير قطاع الاتصالات وتكنولوجيا المعلومات في ليبيا"
                : "The General Authority for Communications and Informatics works to enhance cooperation with international and regional organizations to develop Libya's telecommunications and information technology sector"}
            </p>
          </div>
        </div>

        {/* Cooperation Areas */}
        <section className="mb-16">
          <div className={`text-center mb-12 ${isArabic ? "text-right" : "text-left"}`}>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {isArabic ? "مجالات التعاون" : "Areas of Cooperation"}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {isArabic
                ? "نركز على مجالات متنوعة للتعاون الدولي لتحقيق أهدافنا الاستراتيجية"
                : "We focus on diverse areas of international cooperation to achieve our strategic objectives"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cooperationAreas.map((area, index) => {
              const Icon = area.icon
              const colorClasses = {
                blue: "from-blue-500 to-indigo-600",
                green: "from-green-500 to-emerald-600",
                purple: "from-purple-500 to-violet-600",
                orange: "from-orange-500 to-red-600",
              }

              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${colorClasses[area.color]} rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className={`font-semibold text-slate-800 mb-2 ${isArabic ? "text-right" : "text-center"}`}>
                    {isArabic ? area.titleAr : area.titleEn}
                  </h3>
                  <p className={`text-sm text-slate-600 ${isArabic ? "text-right" : "text-center"}`}>
                    {isArabic ? area.descriptionAr : area.descriptionEn}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* International Partners */}
        <section className="mb-16">
          <div className={`text-center mb-12 ${isArabic ? "text-right" : "text-left"}`}>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {isArabic ? "الشركاء الدوليون" : "International Partners"}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {isArabic
                ? "شراكات استراتيجية مع منظمات دولية وإقليمية رائدة"
                : "Strategic partnerships with leading international and regional organizations"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-16 mx-auto mb-4 rounded-lg overflow-hidden border border-slate-200 flex items-center justify-center bg-white">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={isArabic ? partner.nameAr : partner.nameEn}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className={`text-lg font-bold text-slate-800 mb-2 ${isArabic ? "text-right" : "text-center"}`}>
                    {isArabic ? partner.nameAr : partner.nameEn}
                  </h3>
                  <p className={`text-blue-600 font-medium text-sm mb-2 ${isArabic ? "text-right" : "text-center"}`}>
                    {isArabic ? partner.typeAr : partner.typeEn}
                  </p>
                  <div className={`flex items-center gap-2 justify-center mb-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-500">
                      {isArabic ? `منذ ${partner.established}` : `Since ${partner.established}`}
                    </span>
                  </div>
                </div>

                <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {isArabic ? partner.descriptionAr : partner.descriptionEn}
                  </p>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">
                      {isArabic ? "مجالات التعاون:" : "Cooperation Areas:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(isArabic ? partner.cooperationAreasAr : partner.cooperationAreasEn).map((area, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-16">
          <div className={`text-center mb-12 ${isArabic ? "text-right" : "text-left"}`}>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {isArabic ? "الإنجازات الرئيسية" : "Key Achievements"}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {isArabic
                ? "أهم الإنجازات المحققة من خلال التعاون الدولي"
                : "Major achievements realized through international cooperation"}
            </p>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`flex items-start gap-6 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <span className="text-lg font-bold">{isArabic ? achievement.yearAr : achievement.yearEn}</span>
                    </div>
                  </div>
                  <div className={`flex-1 ${isArabic ? "text-right" : "text-left"}`}>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {isArabic ? achievement.titleAr : achievement.titleEn}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {isArabic ? achievement.descriptionAr : achievement.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-8">
            <div className={`text-center mb-8 ${isArabic ? "text-right" : "text-left"}`}>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {isArabic ? "الأهداف المستقبلية" : "Future Goals"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {isArabic ? "التوسع في الشراكات" : "Expanding Partnerships"}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {isArabic
                    ? "نسعى إلى توسيع شبكة الشراكات الدولية لتشمل المزيد من المنظمات والدول، مع التركيز على التعاون في مجالات التكنولوجيا المتقدمة والذكاء الاصطناعي."
                    : "We aim to expand our international partnership network to include more organizations and countries, focusing on cooperation in advanced technology and artificial intelligence fields."}
                </p>
              </div>

              <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-white">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {isArabic ? "القيادة الإقليمية" : "Regional Leadership"}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {isArabic
                    ? "نهدف إلى تعزيز دور ليبيا كمركز إقليمي للاتصالات وتكنولوجيا المعلومات، من خلال استضافة المؤتمرات الدولية وتبادل الخبرات مع الدول الشقيقة والصديقة."
                    : "We aim to strengthen Libya's role as a regional hub for telecommunications and information technology, by hosting international conferences and exchanging expertise with brotherly and friendly countries."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for International Relations */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className={`text-center mb-8 ${isArabic ? "text-right" : "text-left"}`}>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {isArabic ? "التواصل للعلاقات الدولية" : "International Relations Contact"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {isArabic ? "إدارة العلاقات الدولية" : "International Relations Department"}
                </h3>
                <div className="space-y-3">
                  <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700">{isArabic ? "طرابلس، ليبيا" : "Tripoli, Libya"}</span>
                  </div>
                  <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700">international@cim.gov.ly</span>
                  </div>
                </div>
              </div>

              <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {isArabic ? "للشراكات والتعاون" : "For Partnerships & Cooperation"}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {isArabic
                    ? "نرحب بالتواصل مع المنظمات الدولية والإقليمية والشركات الراغبة في التعاون معنا في تطوير قطاع الاتصالات وتكنولوجيا المعلومات."
                    : "We welcome communication with international and regional organizations and companies interested in cooperating with us in developing the telecommunications and information technology sector."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
