"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronRight, Users } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function CrewHierarchyPage() {
  // Add a safe default in case the context is not available
  const { isArabic } = useLanguage?.() || { isArabic: false }
  const [mounted, setMounted] = useState(false)

  // Ensure component only renders fully on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted yet, show a simple loading state
  if (!mounted) {
    return <div className="container mx-auto py-10">Loading...</div>
  }

  // Translations object
  const t = {
    title: isArabic ? "الهيكل التنضيمي" : "Executive staff",
    dir: isArabic ? "rtl" : "ltr",
    subtitle: isArabic ? "الهيكل التنظيمي وعلاقات التقارير" : "Organizational structure and reporting relationships",
    teamMembers: isArabic ? "أعضاء الفريق" : "Team Members",
    viewByDepartment: isArabic ? "عرض جميع أفراد الطاقم حسب القسم" : "View all crew members by department",
    members: isArabic ? "أعضاء" : "members",
    more: isArabic ? "المزيد" : "more",
    departments: {
      command: isArabic ? "رئيس الهيئة العامة للإتصالات و المعلوماتية" : "President",
      engineering: isArabic ? " مدير العام الشؤون الإدارية و الماليه و الخدمات" : "General Manager",
      medical: isArabic ? "الطبي" : "Medical",
      management: isArabic ? "إداري" : "Manager",
      strategy: isArabic ? "إدارة تخطيت الإستراتيجي" : "Management of strategy",
      office: isArabic ? "مدير مكتب الرئيس" : "Director of the President's Office",
      humanresource: isArabic ? "مدير عام شؤون التنضيم" : "Director General of Organizational Affairs ",
      communications: isArabic ? " مدير إدارة الشبكات و البنية التحتيو" : "Manager of networks & Infrastructure ",
      genralmanager: isArabic ? " مدير العام الشؤون الإدارية و الماليه و الخدمات" : "General Manager",
    },
    roles: {
      captain: isArabic ? "الرئيس" : "President",
      firstOfficer: isArabic ? " مدير العام للشؤون الادارية و الملية" : "Director General of Administrative and Financial Affairs",
      chiefEngineer: isArabic ? "اداري" : "manager",
      chiefNetworking: isArabic ? " مدير إدارة الشبكات" : "Manager of networks & Infrastructure ",
      securityChief: isArabic ? "رئيس الأمن" : "Security Chief",
      operationsManager: isArabic ? "مدير العمليات" : "Operations Manager",
      scienceOfficer: isArabic ? " إداري" : "Management ",
      communications: isArabic ? "الاتصالات" : "Communications",
      genralmanager: isArabic ? " مدير عام" : "General Manager",
    },
  }

  return (
    
    <div className={`container mx-auto py-10 ${isArabic ? "rtl" : "ltr"}`}>
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t.title}</h1>
        <p className="text-muted-foreground">{t.subtitle}</p>
      </div>

      <div className="grid gap-8">
        {/* Executive Level */}
        <div className="flex flex-col items-center">
          <StaffCard
            name={isArabic ? " م. عبدالباسط الباعور" : "Eng. Abd Al-basit AL-Baor"}
            role={t.roles.captain}
            department={t.departments.command}
            email="..."
            imageUrl="/crew-img/president.jpeg"
            isArabic={isArabic}
          />
          <div className="w-px h-8 bg-blue-500"></div>
        </div>

        {/* Senior Officers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="hidden md:block w-full h-px bg-blue-500 mb-8"></div>
            <StaffCard
              name={isArabic ? " م. سليمان علي هاشم" : "Eng. Suliman Ali Hashim"}
              role={t.roles.scienceOfficer}
              department={t.departments.genralmanager}
              email="..."
              imageUrl="/crew-img/suliman.png"
              isArabic={isArabic}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="hidden md:block w-full h-px bg-blue-500 mb-8"></div>
            <StaffCard
              name={isArabic ? " م. محمد فرج عوض" : "Eng. mohamed faraj awadh"}
              role={t.roles.chiefEngineer}
              department={t.departments.engineering}
              email="..."
              imageUrl="/crew-img/aldrisi.png"
              isArabic={isArabic}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="hidden md:block w-full h-px bg-blue-500 mb-8"></div>
            <StaffCard
              name={isArabic ? " م. هيثم بلقاسم" : "ُHaitham Abo-Qasim"}
              role={t.roles.scienceOfficer}
              department={t.departments.communications}
              email="..."
              imageUrl="/crew-img/haitham.jpeg"
              isArabic={isArabic}
            />
          </div>
        </div>

        {/* Department Heads */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <div className="hidden md:block w-full h-px bg-blue-500 mb-6"></div>
            <StaffCard
              name={isArabic ? " نجمي عبدالله" : " Najmi Abd-Allah"}
              role={t.roles.scienceOfficer}
              department={t.departments.strategy}
              email="...."
              imageUrl="/crew-img/najmi.jpeg"
              compact
              isArabic={isArabic}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="hidden md:block w-full h-px bg-blue-500 mb-6"></div>
            <StaffCard
              name={isArabic ? "صلاح الباروني " : "Eng. Salah Al-Baroni"}
              role={t.roles.scienceOfficer}
              department={t.departments.office}
              email="..."
              imageUrl="/crew-img/baroni.jpeg"
              compact
              isArabic={isArabic}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="hidden md:block w-full h-px bg-blue-500 mb-6"></div>
            <StaffCard
              name={isArabic ? " رياض الزيتوني" : "Riyadh Al-Zitouni "}
              role={t.roles.scienceOfficer}
              department={t.departments.humanresource}
              email="..."
              imageUrl="/crew-img/riyadh.jpeg"
              compact
              isArabic={isArabic}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="hidden md:block w-full h-px bg-blue-500 mb-6"></div>
            <StaffCard
              name={isArabic ? "وليد الزواوي " : "waleed Al-Zawawy"}
              role={t.roles.scienceOfficer}
              department={t.departments.communications}
              email="..."
              imageUrl="/crew-img/waleed.jpeg"
              compact
              isArabic={isArabic}
            />
          </div>
        </div>

        {/* Team Members Section */}
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
  compact?: boolean
  isArabic: boolean
}

function StaffCard({ name, role, department, imageUrl, compact = false, isArabic }: StaffCardProps) {
  return (
    <Card
      className={`w-full ${compact ? "max-w-[250px]" : "max-w-[300px]"} border-blue-500/20 hover:border-blue-500/50 transition-colors`}
    >
      <CardHeader className={compact ? "p-4" : "p-6"}>
        <div className="flex items-center gap-4">
          <Avatar className={compact ? "h-10 w-10" : "h-14 w-14"}>
            <AvatarImage src={imageUrl || "/placeholder.svg"} alt={name} />
            <AvatarFallback className="bg-blue-500/10 text-blue-700">
              {!isArabic
                ? name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                : name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
          <CardDescription className="flex flex-col">
              <span>{role}</span>
              <span className="text-lg text-blue-500">{department}</span>
            </CardDescription>
            <CardTitle className={compact ? "text-xs" : "text-s"}>{name}</CardTitle>
            
          </div>
        </div>
      </CardHeader>
      {!compact && (
        <CardContent>
        </CardContent>
      )}
    </Card>
  )
}

interface DepartmentGroupProps {
  name: string
  count: number
  members: string[]
  isArabic: boolean
  membersText: string
  moreText: string
}

function DepartmentGroup({ name, count, members, isArabic, membersText, moreText }: DepartmentGroupProps) {
  return (
    <div className="border border-blue-500/20 rounded-lg">
      <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-blue-50">
        <div className="flex items-center">
          <ChevronRight className={`h-5 w-5 ${isArabic ? "ml-2" : "mr-2"} text-blue-500`} />
          <span className="font-medium">{name}</span>
          <span className="mx-2 text-xs text-blue-600 rounded-full bg-blue-100 px-2 py-0.5">
            {count} {membersText}
          </span>
        </div>
        <ChevronDown className="h-4 w-4 text-blue-500" />
      </div>
      <div className="px-4 pb-4">
        <ul className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ${isArabic ? "pr-7" : "pl-7"}`}>
          {members.map((member, i) => (
            <li key={i} className="text-sm text-muted-foreground hover:text-blue-700">
              {member}
            </li>
          ))}
          {count > members.length && (
            <li className="text-sm text-blue-400 italic">
              +{count - members.length} {moreText}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
