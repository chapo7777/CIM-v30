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
          <Separator orientation="vertical" className="mr-2 h-10 bg-blue-200" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#" className="text-blue-600 hover:text-blue-800">
                {isArabic ? "تنظيم الاتصالات والمعلوماتية" : "Comms & information Regulations"}
                 
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue-800 font-medium"></BreadcrumbPage>
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

        <div id="section2" className={`${isArabic ? 'text-right' : 'text-left'}`}>
          <ul
          dir={isArabic ? "rtl" : "ltr"} // This sets the text direction for Arabic (RTL) and English (LTR)
          className={`space-y-2 text-muted-foreground ${isArabic ? 'text-right list-inside list-disc' : 'text-left list-inside list-disc'}`}
        >
          <li className="mb-2 p-2">
            {isArabic
              ? 'اقتراح مشروعات القوانين واللوائح المتعلقة بقطاع الاتصالات والمعلوماتية والبريد'
              : 'Propose draft laws and regulations related to the telecommunications, IT, and postal sectors.'}
          </li>
          <li className="mb-2 p-2">
            {isArabic
              ? 'تنفيذ التشريعات المتعلقة بالقطاع'
              : 'Implement sector-related legislation.'}
          </li>
          <li className="mb-2 p-2">
            {isArabic
              ? 'وضع الخطط الوطنية ومراقبة تنفيذها'
              : 'Set and monitor the implementation of national plans.'}
          </li>
          <li className="mb-2 p-2">
            {isArabic
              ? 'وضع المخطط الوطني للطيف الترددي وإدارة وتخصيص استعمال الترددات'
              : 'Develop and manage the national frequency spectrum plan.'}
          </li>
          <li className="mb-2 p-2">
            {isArabic
              ? 'تنظيم الربط بين شبكات الاتصالات القائمة على تقديم الخدمات'
              : 'Regulate interconnection between networks providing services.'}
          </li>
          <li className="mb-2 p-2">
            {isArabic
              ? 'إصدار وتحديد رسوم جميع أنواع التراخيص ومنح الموافقات المتعلقة بالنشاط'
              : 'Issue and determine fees for all types of licenses and activity approvals.'}
          </li>
          <li className="mb-2 p-2">
            {isArabic
              ? 'اقتراح القواعد المنظمة لمنح التراخيص'
              : 'Propose rules for granting licenses.'}
          </li>
          <li className="mb-2 p-2">
            {isArabic
              ? 'وضع الضوابط الخاصة بتحديد أسعار ومقابل تقديم الخدمات'
              : 'Set pricing rules for services.'}
          </li>
          <li className="mb-2 p-2">
            {isArabic
              ? 'تحديد الحد الأدنى للجودة ومستوى تقديم الخدمة'
              : 'Define minimum quality standards.'}
          </li>
          <li className="mb-2 p-2">
            {isArabic
              ? 'وضع المواصفات الفنية والقياسية لمنظومات الاتصالات والمعلوماتية لكافة مؤسسات الدولة'
              : 'Set technical and standard specifications for ICT systems across state institutions.'}
          </li>
          <li className="mb-2 p-2">
            {isArabic
              ? 'تحديد معايير وضوابط خدمات الاتصالات الغير اقتصادية الخاصة بالمناطق النائية مع تحديد الالتزامات التي يتحملها المشغلون ومزودوا الخدمة'
              : 'Establish criteria for uneconomic telecom services in remote areas and operator obligations.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'مراجعة وتقييم الحاجة لتعديل مستوى تنظيم أي خدمة واقتراح الحلول المناسبة'
              : 'Review and suggest regulatory updates for services.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'تشجيع الاستثمار في القطاع وتوفير البيئة المناسبة لذلك'
              : 'Promote investment and provide a suitable environment.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'الإشراف والمتابعة والرقابة على أنشطة القطاع ومتابعة الشركات العاملة في هذا المجال'
              : 'Supervise and regulate sector activities and companies.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'الإشراف على مشروعات الأقمار الصناعية وتنفيذ التشريعات المتعلقة بها'
              : 'Oversee satellite projects and their regulations.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'وضع الضوابط والمعايير المتعلقة بالأمن القومي في القطاع بالتنسيق مع الجهات ذات العلاقة'
              : 'Coordinate with relevant entities on national security matters in the sector.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'دراسة المعاهدات والاتفاقيات الدولية ذات العلاقة بالقطاع واقتراح المشاركة أو الانضمام إليها ومتابعة تنفيذها'
              : 'Review and suggest international treaty participation and follow-up.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'المشاركة في المنظمات الدولية وحضور ما يعقد من مؤتمرات وندوات إقليمية ودوليـة وعرض قراراتها وتوصياتها للاعتماد ومتابعة تنفيذها'
              : 'Participate in international organizations and conferences.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'تمثيل الدولة الليبية في المنظمات الدولية في مجال الاتصالات والمعلوماتية بالتنسيق مع الجهــات ذات العلاقة'
              : 'Represent Libya internationally in telecom and IT fields.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'النهوض بالمنافسة في مجال تقديم الخدمات ومنع السلوك الغير تنافسي'
              : 'Foster service competition and prevent anti-competitive behavior.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'اتخاذ كافة الإجراءات القانونية ضد المخالفات المرتكبة في هذا المجال'
              : 'Take legal action against violations.'}
          </li>
          <li className="mb-2">
            {isArabic
              ? 'تجميع المعلومات المتعلقة بالقطــــاع وإعــــداد وإصـدار التقارير والمنشورات اللازمة لإرشاد المستفيدين من الخدمات ، والمساهمة بالبرامج الإعلاميـة لرفع الوعي العام في هذا المجال'
              : 'Collect sector data and publish guidance and awareness materials.'}
          </li>
        </ul>

          </div>
              </SidebarInset>
            </SidebarProvider>
          )
        }
