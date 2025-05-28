"use client"

import { useLanguage } from "@/contexts/language-context"
import { Mail, Phone, Building, Award, Users, Calendar } from "lucide-react"

export default function LeadershipPage() {
  const { isArabic } = useLanguage()

  // President - displayed separately at the top
  const president = {
    id: 1,
    nameAr: "م. عبدالباسط الباعور",
    nameEn: "Eng. Abdul Basit Al-Baour",
    positionAr: "رئيس مجلس الإدارة",
    positionEn: "Chairman of the Board",
    bioAr:
      "يتمتع بخبرة واسعة في مجال الاتصالات وتكنولوجيا المعلومات تزيد عن 25 عاماً، وقد شغل مناصب قيادية في عدة مؤسسات حكومية وخاصة.",
    bioEn:
      "Has extensive experience in telecommunications and information technology for over 25 years, having held leadership positions in several government and private institutions.",
    email: "chairman@cim.gov.ly",
    image: "/crew-img/president.jpeg",
  }

  // Executive team - excluding the president
  const executiveTeam = [
    {
      id: 2,
      nameAr: "م. سليمان علي هاشم",
      nameEn: "ENG. Sulieman Ali Hashim",
      positionAr: "المدير العام",
      positionEn: "General Manager",
      bioAr:
        "حاصل على درجة الدكتوراه في هندسة الاتصالات، وله إسهامات بحثية مهمة في تطوير الشبكات اللاسلكية والأمن السيبراني.",
      bioEn:
        "Holds a PhD in Telecommunications Engineering, with significant research contributions in wireless network development and cybersecurity.",
      email: "gm@cim.gov.ly",
      phone: "+218-21-123-4568",
      image: "/suliman.png",
    },
    {
      id: 3,
      nameAr: "م. هيثم ابة القاسم",
      nameEn: "ENG. Haitham Abu-Alqasim",
      positionAr: "مدير إدارة التنظيم",
      positionEn: "Director of Regulatory Affairs",
      bioAr:
        "متخصصة في سياسات الاتصالات والتنظيم، وقد ساهمت في وضع العديد من اللوائح والقوانين المنظمة لقطاع الاتصالات في ليبيا.",
      bioEn:
        "Specialist in telecommunications policies and regulation, having contributed to developing numerous regulations and laws governing Libya's telecommunications sector.",
      email: "regulatory@cim.gov.ly",
      phone: "+218-21-123-4569",
      image: "/haitham.jpeg",
    },
    {
      id: 4,
      nameAr: "المهندس محمد عمر الشريف",
      nameEn: "Eng. Mohammed Omar Al-Sharif",
      positionAr: "مدير إدارة التقنية",
      positionEn: "Director of Technical Affairs",
      bioAr: "خبير في البنية التحتية للاتصالات والشبكات، وقد قاد العديد من المشاريع التقنية الكبرى في الهيئة.",
      bioEn:
        "Expert in telecommunications infrastructure and networks, having led numerous major technical projects at the authority.",
      email: "technical@cim.gov.ly",
      phone: "+218-21-123-4570",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      nameAr: "الدكتورة عائشة محمد الفيتوري",
      nameEn: "Dr. Aisha Mohammed Al-Faitouri",
      positionAr: "مدير إدارة الأمن السيبراني",
      positionEn: "Director of Cybersecurity",
      bioAr: "حاصلة على درجة الدكتوراه في أمن المعلومات، ولها خبرة دولية في مجال الأمن السيبراني وحماية البيانات.",
      bioEn: "Holds a PhD in Information Security, with international experience in cybersecurity and data protection.",
      email: "cybersecurity@cim.gov.ly",
      phone: "+218-21-123-4571",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      nameAr: "المهندس خالد أحمد البوسيفي",
      nameEn: "Eng. Khalid Ahmed Al-Busaifi",
      positionAr: "مدير إدارة الخدمات الإلكترونية",
      positionEn: "Director of Electronic Services",
      bioAr:
        "متخصص في تطوير الخدمات الحكومية الإلكترونية والتحول الرقمي، وقد أشرف على تطوير العديد من المنصات الرقمية.",
      bioEn:
        "Specialist in developing electronic government services and digital transformation, having supervised the development of numerous digital platforms.",
      email: "eservices@cim.gov.ly",
      phone: "+218-21-123-4572",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const organizationalStructure = [
    {
      titleAr: "مجلس الإدارة",
      titleEn: "Board of Directors",
      descriptionAr: "يتكون من 7 أعضاء يمثلون مختلف القطاعات ذات الصلة",
      descriptionEn: "Consists of 7 members representing various relevant sectors",
      icon: Users,
    },
    {
      titleAr: "الإدارة التنفيذية",
      titleEn: "Executive Management",
      descriptionAr: "تضم المدير العام ومديري الإدارات المختلفة",
      descriptionEn: "Includes the General Manager and directors of various departments",
      icon: Building,
    },
    {
      titleAr: "الإدارات التخصصية",
      titleEn: "Specialized Departments",
      descriptionAr: "تشمل إدارات التنظيم والتقنية والأمن السيبراني",
      descriptionEn: "Includes regulatory, technical, and cybersecurity departments",
      icon: Award,
    },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${isArabic ? "rtl" : "ltr"}`}>
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-8">
          <div className={`text-center ${isArabic ? "text-right" : "text-left"}`}>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {isArabic ? "القيادة التنفيذية" : "Executive Leadership"}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? "تعرف على فريق القيادة التنفيذية للهيئة العامة للاتصالات والمعلوماتية، الذي يقود جهود التطوير والتحديث في قطاع الاتصالات الليبي"
                : "Meet the executive leadership team of the General Authority for Communications and Informatics, leading development and modernization efforts in Libya's telecommunications sector"}
            </p>
          </div>
        </div>

        {/* President Section */}
        <section className="mb-16">
          <div className={`text-center mb-8 ${isArabic ? "text-right" : "text-left"}`}>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {isArabic ? "رئيس مجلس الإدارة" : "Chairman of the Board"}
            </h2>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-8 hover:shadow-2xl transition-all duration-300 group max-w-2xl w-full">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-200 group-hover:border-blue-400 transition-colors duration-300 shadow-lg">
                  <img
                    src={president.image || "/placeholder.svg"}
                    alt={isArabic ? president.nameAr : president.nameEn}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-2xl font-bold text-slate-800 mb-3 ${isArabic ? "text-right" : "text-center"}`}>
                  {isArabic ? president.nameAr : president.nameEn}
                </h3>
                <p className={`text-blue-600 font-semibold text-lg mb-6 ${isArabic ? "text-right" : "text-center"}`}>
                  {isArabic ? president.positionAr : president.positionEn}
                </p>
              </div>

              <div className={`space-y-6 ${isArabic ? "text-right" : "text-left"}`}>
                <p className="text-slate-600 leading-relaxed text-lg">{isArabic ? president.bioAr : president.bioEn}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                  <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{isArabic ? "البريد الإلكتروني" : "Email"}</p>
                      <a
                        href={`mailto:${president.email}`}
                        className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        {president.email}
                      </a>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="mb-16">
          <div className={`text-center mb-12 ${isArabic ? "text-right" : "text-left"}`}>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {isArabic ? "الهيكل التنظيمي" : "Organizational Structure"}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {isArabic
                ? "هيكل تنظيمي متطور يضمن الكفاءة والفعالية في تقديم الخدمات"
                : "An advanced organizational structure ensuring efficiency and effectiveness in service delivery"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {organizationalStructure.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className={`font-semibold text-slate-800 mb-2 ${isArabic ? "text-right" : "text-center"}`}>
                    {isArabic ? item.titleAr : item.titleEn}
                  </h3>
                  <p className={`text-sm text-slate-600 ${isArabic ? "text-right" : "text-center"}`}>
                    {isArabic ? item.descriptionAr : item.descriptionEn}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Executive Team */}
        <section className="mb-16">
          <div className={`text-center mb-12 ${isArabic ? "text-right" : "text-left"}`}>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {isArabic ? "الفريق التنفيذي" : "Executive Team"}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {isArabic
                ? "قادة متميزون بخبرات واسعة في مجال الاتصالات وتكنولوجيا المعلومات"
                : "Distinguished leaders with extensive experience in telecommunications and information technology"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={isArabic ? member.nameAr : member.nameEn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className={`text-xl font-bold text-slate-800 mb-2 ${isArabic ? "text-right" : "text-center"}`}>
                    {isArabic ? member.nameAr : member.nameEn}
                  </h3>
                  <p className={`text-blue-600 font-medium mb-4 ${isArabic ? "text-right" : "text-center"}`}>
                    {isArabic ? member.positionAr : member.positionEn}
                  </p>
                </div>

                <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
                  <p className="text-slate-600 leading-relaxed text-sm">{isArabic ? member.bioAr : member.bioEn}</p>

                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <Mail className="w-4 h-4 text-blue-600" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <Phone className="w-4 h-4 text-blue-600" />
                      <a
                        href={`tel:${member.phone}`}
                        className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Vision */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-8">
            <div className={`text-center mb-8 ${isArabic ? "text-right" : "text-left"}`}>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {isArabic ? "رؤية القيادة" : "Leadership Vision"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {isArabic ? "الرؤية الاستراتيجية" : "Strategic Vision"}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {isArabic
                    ? "تهدف قيادة الهيئة إلى تحقيق التحول الرقمي الشامل في ليبيا من خلال تطوير البنية التحتية للاتصالات وتعزيز الابتكار التكنولوجي، مع ضمان تقديم خدمات عالية الجودة تلبي احتياجات المواطنين والشركات."
                    : "The authority's leadership aims to achieve comprehensive digital transformation in Libya through developing telecommunications infrastructure and promoting technological innovation, while ensuring high-quality services that meet the needs of citizens and businesses."}
                </p>
              </div>

              <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {isArabic ? "القيم المؤسسية" : "Institutional Values"}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {isArabic
                    ? "تلتزم القيادة بقيم الشفافية والنزاهة والتميز في الأداء، مع التركيز على بناء فريق عمل متخصص وتطوير القدرات البشرية، وتعزيز التعاون مع الشركاء المحليين والدوليين لتحقيق أهداف التنمية المستدامة."
                    : "Leadership is committed to values of transparency, integrity, and excellence in performance, focusing on building a specialized workforce and developing human capabilities, while enhancing cooperation with local and international partners to achieve sustainable development goals."}
                </p>
              </div>
            </div>
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
                ? "إنجازات مهمة تحققت تحت قيادة الفريق التنفيذي الحالي"
                : "Important achievements realized under the current executive team's leadership"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titleAr: "تطوير البنية التحتية",
                titleEn: "Infrastructure Development",
                descriptionAr: "تحديث وتوسيع شبكات الاتصالات",
                descriptionEn: "Upgrading and expanding telecommunications networks",
                icon: Building,
                color: "blue",
              },
              {
                titleAr: "الخدمات الإلكترونية",
                titleEn: "Electronic Services",
                descriptionAr: "إطلاق منصات حكومية رقمية",
                descriptionEn: "Launching digital government platforms",
                icon: Calendar,
                color: "green",
              },
              {
                titleAr: "الأمن السيبراني",
                titleEn: "Cybersecurity",
                descriptionAr: "تعزيز الحماية الرقمية",
                descriptionEn: "Enhancing digital protection",
                icon: Award,
                color: "purple",
              },
              {
                titleAr: "التعاون الدولي",
                titleEn: "International Cooperation",
                descriptionAr: "شراكات استراتيجية عالمية",
                descriptionEn: "Global strategic partnerships",
                icon: Users,
                color: "orange",
              },
            ].map((achievement, index) => {
              const Icon = achievement.icon
              const colorClasses = {
                blue: "from-blue-500 to-indigo-600",
                green: "from-green-500 to-emerald-600",
                purple: "from-purple-500 to-violet-600",
                orange: "from-orange-500 to-red-600",
              }

              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${colorClasses[achievement.color]} rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    {isArabic ? achievement.titleAr : achievement.titleEn}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {isArabic ? achievement.descriptionAr : achievement.descriptionEn}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
