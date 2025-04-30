"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";


export default function AboutPage() {
  const { isArabic } = useLanguage();

  return (
<div className="flex flex-col md:flex-row w-full min-h-screen">

{/* Mobile Dropdown Menu (Sticky) */}
<div className="md:hidden sticky bottom-[0px] z-40 bg-white/80 backdrop-blur border-b-2 border-blue-500 p-4">
  <select
    onChange={(e) => {
      const section = document.getElementById(e.target.value);
      section?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="w-full p-2 rounded border"
  >
    <option value="section1">{isArabic ? 'من نحن' : 'About Us'}</option>
    <option value="section2">{isArabic ? 'إختصاصات الهيئة' : 'Authority Responsibilities'}</option>
  </select>
</div>

{/* Desktop Sidebar (Right Sidebar with Blue Streak) */}
<div className="hidden md:flex flex-col w-1/5 sticky top-[80px] p-4 bg-white/10 backdrop-blur border-r-4 border-blue-500 z-10">
  <button
    onClick={() => document.getElementById('section1')?.scrollIntoView({ behavior: 'smooth' })}
    className="mb-4 text-left hover:bg-blue-100 p-2 rounded"
  >
    {isArabic ? 'من نحن' : 'About Us'}
  </button>
  <button
    onClick={() => document.getElementById('section2')?.scrollIntoView({ behavior: 'smooth' })}
    className="text-left hover:bg-blue-100 p-2 rounded"
  >
    {isArabic ? 'إختصاصات الهيئة' : 'Authority Responsibilities'}
  </button>
</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                            

{/* Main Content Area */}
<div className="flex-1 w-full p-6 space-y-20">
{/* Section 1 */}
<div id="section1" className={`${isArabic ? 'text-right' : 'text-left'}`}>
  <h2 className="text-3xl font-bold mb-4">
    {isArabic ? 'من نحن' : 'About Us'}
  </h2>
  <p className="text-muted-foreground leading-relaxed">
    {isArabic 
      ? 'الهيئة العامة الإتصالات تعنى بشؤون الاتصالات وتقنية المعلومات وتمثل أعلى سلطة مسؤولة عن قطاع الاتصالات في ليبيا. يقع مقرها الرئيسي في مدينة طرابلس (مقر الشركة العامة للبريد والاتصالات السلكية واللاسلكية). استطاعت تحقيق العديد من الإنجازات بربط مختلف مناطق ليبيا بعدما تعرضت البنية التحتية للإتصالات من قطع وتخريب أثناء شهور الثورة وبالإضافة إلى إعادة خدمات الإتصالات والبريد والإنترنت واستكمال بعض المشاريع الإستراتيجية المهمة سعياً للمساهمة في لم الشمل وإعمار ليبيا ويترأس هذه الهيئة رئيسا بتكليف من رئيس الوزراء, المهندس عبدالباسط الباعور.' 
      : 'The General Authority for Communications is responsible for telecommunications and IT and represents the highest authority over the telecom sector in Libya. It is headquartered in Tripoli at the General Post and Telecommunications Company. The authority has achieved many milestones by reconnecting regions after telecom infrastructure was damaged during the revolution. It restored communication, postal, and internet services and completed strategic projects contributing to national unity and reconstruction. The authority is chaired by engineer Abdulbaset Albaour, appointed by the Prime Minister.'}
  </p>
</div>


  {/* Section 2 */}
  <div id="section2" className={`${isArabic ? 'text-right' : 'text-left'}`}>
  <ul
  dir={isArabic ? "rtl" : "ltr"} // This sets the text direction for Arabic (RTL) and English (LTR)
  className={`space-y-2 text-muted-foreground ${isArabic ? 'text-right list-inside list-disc' : 'text-left list-inside list-disc'}`}
>
  <li className="mb-2">
    {isArabic
      ? 'اقتراح مشروعات القوانين واللوائح المتعلقة بقطاع الاتصالات والمعلوماتية والبريد'
      : 'Propose draft laws and regulations related to the telecommunications, IT, and postal sectors.'}
  </li>
  <li className="mb-2">
    {isArabic
      ? 'تنفيذ التشريعات المتعلقة بالقطاع'
      : 'Implement sector-related legislation.'}
  </li>
  <li className="mb-2">
    {isArabic
      ? 'وضع الخطط الوطنية ومراقبة تنفيذها'
      : 'Set and monitor the implementation of national plans.'}
  </li>
  <li className="mb-2">
    {isArabic
      ? 'وضع المخطط الوطني للطيف الترددي وإدارة وتخصيص استعمال الترددات'
      : 'Develop and manage the national frequency spectrum plan.'}
  </li>
  <li className="mb-2">
    {isArabic
      ? 'تنظيم الربط بين شبكات الاتصالات القائمة على تقديم الخدمات'
      : 'Regulate interconnection between networks providing services.'}
  </li>
  <li className="mb-2">
    {isArabic
      ? 'إصدار وتحديد رسوم جميع أنواع التراخيص ومنح الموافقات المتعلقة بالنشاط'
      : 'Issue and determine fees for all types of licenses and activity approvals.'}
  </li>
  <li className="mb-2">
    {isArabic
      ? 'اقتراح القواعد المنظمة لمنح التراخيص'
      : 'Propose rules for granting licenses.'}
  </li>
  <li className="mb-2">
    {isArabic
      ? 'وضع الضوابط الخاصة بتحديد أسعار ومقابل تقديم الخدمات'
      : 'Set pricing rules for services.'}
  </li>
  <li className="mb-2">
    {isArabic
      ? 'تحديد الحد الأدنى للجودة ومستوى تقديم الخدمة'
      : 'Define minimum quality standards.'}
  </li>
  <li className="mb-2">
    {isArabic
      ? 'وضع المواصفات الفنية والقياسية لمنظومات الاتصالات والمعلوماتية لكافة مؤسسات الدولة'
      : 'Set technical and standard specifications for ICT systems across state institutions.'}
  </li>
  <li className="mb-2">
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
</div>

</div>


  );
}
