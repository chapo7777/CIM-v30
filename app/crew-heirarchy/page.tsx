"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Building, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"

export default function CrewHierarchyPage() {
  const { isArabic } = useLanguage?.() || { isArabic: false }
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="container mx-auto py-10">Loading...</div>
  }

  const t = {
    title: isArabic ? "الهيكل التنظيمي" : "Executive Staff",
    subtitle: isArabic ? "الهيكل التنظيمي وعلاقات التقارير" : "Organizational structure and reporting relationships",
    departments: {
      command: isArabic ? "رئيس الهيئة العامة للاتصالات والمعلوماتية" : "President",
      engineering: isArabic ? "مدير عام الشؤون الإدارية والمالية والخدمات" : "General Manager",
      strategy: isArabic ? "إدارة التخطيط الاستراتيجي" : "Strategic Planning Management",
      office: isArabic ? "مدير مكتب الرئيس" : "Director of the President's Office",
      humanresource: isArabic ? "مدير عام شؤون التنظيم" : "Director General of Organizational Affairs",
      communications: isArabic ? "مدير إدارة الشبكات والبنية التحتية" : "Manager of Networks & Infrastructure",
    },
    roles: {
      president: isArabic ? "الرئيس" : "President",
      generalManager: isArabic ? "مدير عام" : "General Manager",
      manager: isArabic ? "مدير" : "Manager",
      director: isArabic ? "مدير" : "Director",
    },
  }

  return (
    <div className={`container mx-auto py-10 px-4 ${isArabic ? "rtl" : "ltr"}`} dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white">
            <Building className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{t.title}</h1>
            <p className="text-lg text-gray-600 mt-2">{t.subtitle}</p>
          </div>
        </div>
        <Separator className="max-w-md mx-auto" />
      </div>

      <div className="space-y-12">
        {/* Executive Level - President */}
        <div className="flex flex-col items-center">
          <StaffCard
            name={isArabic ? "م. عبدالباسط الباعور" : "Eng. Abd Al-basit AL-Baor"}
            role={t.roles.president}
            department={t.departments.command}
            email="president@gaci.gov.ly"
            imageUrl="/crew-img/president.jpeg"
            isArabic={isArabic}
            level="executive"
          />
          <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-blue-300 mt-6"></div>
        </div>

        {/* Senior Management Level */}
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center">
              <StaffCard
                name={isArabic ? "م. سليمان علي هاشم" : "Eng. Suliman Ali Hashim"}
                role={t.roles.generalManager}
                department={t.departments.engineering}
                email="suliman@gaci.gov.ly"
                imageUrl="/crew-img/suliman.png"
                isArabic={isArabic}
                level="senior"
              />
            </div>
            <div className="flex flex-col items-center">
              <StaffCard
                name={isArabic ? "م. محمد فرج عوض" : "Eng. Mohamed Faraj Awadh"}
                role={t.roles.generalManager}
                department={t.departments.engineering}
                email="mohamed@gaci.gov.ly"
                imageUrl="/crew-img/aldrisi.png"
                isArabic={isArabic}
                level="senior"
              />
            </div>
            <div className="flex flex-col items-center">
              <StaffCard
                name={isArabic ? "م. هيثم بلقاسم" : "Haitham Abo-Qasim"}
                role={t.roles.manager}
                department={t.departments.communications}
                email="haitham@gaci.gov.ly"
                imageUrl="/crew-img/haitham.jpeg"
                isArabic={isArabic}
                level="senior"
              />
            </div>
          </div>

          {/* Vertical connecting lines */}
          <div className="hidden md:flex justify-center mt-6">
            <div className="flex space-x-32">
              <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-blue-300"></div>
              <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-blue-300"></div>
              <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-blue-300"></div>
            </div>
          </div>
        </div>

        {/* Department Heads Level */}
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-5/6 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="flex flex-col items-center">
              <StaffCard
                name={isArabic ? "نجمي عبدالله" : "Najmi Abd-Allah"}
                role={t.roles.director}
                department={t.departments.strategy}
                email="najmi@gaci.gov.ly"
                imageUrl="/crew-img/najmi.jpeg"
                isArabic={isArabic}
                level="department"
              />
            </div>
            <div className="flex flex-col items-center">
              <StaffCard
                name={isArabic ? "صلاح الباروني" : "Eng. Salah Al-Baroni"}
                role={t.roles.director}
                department={t.departments.office}
                email="salah@gaci.gov.ly"
                imageUrl="/crew-img/baroni.jpeg"
                isArabic={isArabic}
                level="department"
              />
            </div>
            <div className="flex flex-col items-center">
              <StaffCard
                name={isArabic ? "رياض الزيتوني" : "Riyadh Al-Zitouni"}
                role={t.roles.director}
                department={t.departments.humanresource}
                email="riyadh@gaci.gov.ly"
                imageUrl="/crew-img/riyadh.jpeg"
                isArabic={isArabic}
                level="department"
              />
            </div>
            <div className="flex flex-col items-center">
              <StaffCard
                name={isArabic ? "وليد الزواوي" : "Waleed Al-Zawawy"}
                role={t.roles.manager}
                department={t.departments.communications}
                email="waleed@gaci.gov.ly"
                imageUrl="/crew-img/waleed.jpeg"
                isArabic={isArabic}
                level="department"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface StaffCardProps {
  name: string
  role: string
  department: string
  email: string
  imageUrl: string
  isArabic: boolean
  level: "executive" | "senior" | "department"
}

function StaffCard({ name, role, department, email, imageUrl, isArabic, level }: StaffCardProps) {
  const cardSizes = {
    executive: "max-w-[400px]",
    senior: "max-w-[350px]",
    department: "max-w-[300px]",
  }

  const avatarSizes = {
    executive: "h-20 w-20",
    senior: "h-16 w-16",
    department: "h-14 w-14",
  }

  const titleSizes = {
    executive: "text-xl",
    senior: "text-lg",
    department: "text-base",
  }

  return (
    <Card
      className={`w-full ${cardSizes[level]} border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-blue-50/30`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <Avatar className={`${avatarSizes[level]} border-2 border-blue-200`}>
            <AvatarImage src={imageUrl || "/placeholder.svg"} alt={name} className="object-cover" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold">
              {!isArabic
                ? name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                : name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <CardTitle className={`${titleSizes[level]} font-bold text-gray-900 leading-tight mb-2`}>{name}</CardTitle>
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs font-medium">
                {role}
              </Badge>
              <CardDescription className="text-sm text-gray-600 leading-relaxed">{department}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      {level === "executive" && (
        <CardContent className="pt-0">
          <Separator className="mb-4" />
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4" />
            <span className="truncate">{email}</span>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
