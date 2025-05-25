"use client"
import { AppSidebar } from "../../components/app-sidebar"
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

export default function Page() {

  const { isArabic } = useLanguage()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-blue-100 px-4 bg-blue-50">
          <SidebarTrigger className="-ml-1 text-blue-600 hover:bg-blue-100" />
          <Separator orientation="vertical" className="mr-2 h-4 bg-blue-200" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
                {isArabic ? "تنظيم الاتصالات والمعلوماتية" : "Comms & information management"}
                 
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue-800 font-medium">Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
           <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" >
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/UBjXdycYRWM?autoplay=1&mute=1&controls=0"
                title="YT"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <p className="text-gray-800 text-2xl font-semibold mt-10">
          {isArabic ? "تنظيم الاتصالات والمعلوماتية" : "Communication & information management"} 
          </p>
          <p className="text-gray-800 text-l  mt-10">
          {isArabic ? " الإدارة العامة لشؤون التنظيم هي الجهة المسئولة عن تنظيم قطاع الاتصالات في ليبيا وتتولى تنظيم قطاع الاتصالات وتكنولوجيا المعلومات وقطاع البريد والنفاذ إلى الإعلام الرقمي.كما تعمل على تشجيع ودعم قطاع اتصالات مفتوح وتنافسي لضمان توفير خدمات اتصالات مبتكرة ومتقدمة وموثوق بها مع الالتزام الكامل بتحقيق التوازن بين حقوق المستهلكين وتلبية احتياجات مقدمي الخدمة، وضمان نوعية الخدمات بما يتطابق مع شروط الرخصة من قبل المرخصين." : 
          "The General Directorate of Regulatory Affairs is the entity responsible for regulating the telecommunications sector in Libya. It oversees the regulation of the telecommunications and information technology sector, as well as the postal sector and access to digital media.It also works to encourage and support an open and competitive telecommunications sector to ensure the provision of innovative, advanced, and reliable telecommunications services, while fully committing to achieving a balance between consumer rights and the needs of service providers, and ensuring service quality in accordance with the licensing terms by licensed operators."} 
          </p>

          
            <p className="text-gray-800 text-xl font-semibold mt-10">
          {isArabic ? "تتولى الإدارة العامة لشؤون التنظيم المهام والمسؤوليات التالية :" :
           "The General Directorate of Regulatory Affairs is responsible for the following tasks and responsibilities:"} 
          </p>

          <p className="text-gray-800 text-xl font-semibold mt-10">
          {isArabic ? "تتولى الإدارة العامة لشؤون التنظيم المهام والمسؤوليات التالية :" :
           "The General Directorate of Regulatory Affairs is responsible for the following tasks and responsibilities:"} 
          </p>
          <ul></ul>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
