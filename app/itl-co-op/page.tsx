"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/language-context";

export default function ITLPage() {
  const { isArabic } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">

      {/* Mobile Dropdown Menu (Sticky) */}
  <div className="md:hidden sticky top-[64px] z-50 bg-white/80 backdrop-blur border-b-2 border-blue-500 p-4">
   <select
      onChange={(e) => {
       const section = document.getElementById(e.target.value);
       section?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="w-full p-2 rounded border"
   >
      <option value="section1">{isArabic ? 'من نحن' : 'About Us'}</option>
      <option value="section2">{isArabic ? 'الإتحادات' : 'Unions'}</option>
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
    {isArabic ? 'الإتحادات' : 'Unions'}
  </button>
</div>

      {/* Scrollable Content Area */}
      <div className="w-4/5 h-screen overflow-y-auto p-6 z-0">
        <div className={`w-full space-y-20 ${isArabic ? 'text-right' : 'text-left'}`}>
          <div id="section1">
            <h2 className="text-3xl font-bold mb-10">
              {isArabic ? 'مكتب العلاقات والتعاون الدولي بالهيئة العامة للاتصالات والمعلوماتية ' : 'Office of International Relations and Cooperation at the General Authority for Communications and Informatics'}
            </h2>
            <p className="list-disc space-y-2 text-muted-foreground ps-5">
              {isArabic
                ? ' يعتبر مكتب العلاقات والتعاون الدولي من احد المكاتب العاملة والواقعة ضمن الهيكلية الادارية ويتبع أعلى سلطة في الهيئة (رئيس الهيئة) يقوم المكتب بالعمل كنقطة إتصال بين الهيئة العامة للاتصالات والمعلوماتية وبين جميع المنظمات والاتحادات العالمية ذات العلاقة والتي تكون الدولة الليبية عضو في هذه الاتحادات والمنظمات التي تعمل في مجال الاتصالات وتكنولوجيا المعلومات وكذلك يمثل الهيئة العامة للاتصالات والمعلوماتية في الاجتماعات ذات الطابع التعاوني التي تعقد بين دول الجوار والاقليمية والدولية وذلك من خلال ما تدعو اليه اللجنة العليا لمتابعة شؤون التعاون بين الدولة الليبية و دول العالم عن طريق وزارة الخارجية والتعاون الدولي وبالتالي فان مكتب العلاقات والعاون الدولي بالهيئة العامة للاتصالات والمعلوماتية يقوم بالتنسيق بين الادارةت وشركات القطاع للمشاركة في جميع المؤتمرات وورش العمل والملتقيات والقمم العالمية ذات الاهمية للقطاع والتي ترد دعوات للمشاركة فيها عن طريق الادارات العاملة بوزارة الخارجية والتعاون والتعاون الدولي'
                : 'The Office of International Relations and Cooperation is one of the operating offices within the administrative structure and is affiliated with the highest authority in the Authority (the Chairman of the Authority). The office works as a point of contact between the General Authority for Communications and Informatics and all relevant international organizations and unions in which the Libyan state is a member and organizations working in the field of communications and information technology. It also represents the General Authority for Communications and Informatics in cooperative meetings held between neighboring, regional and international countries through what is called for by the Supreme Committee for Follow-up of Cooperation Affairs between the Libyan state and countries of the world through the Ministry of Foreign Affairs and International Cooperation. Therefore, the Office of International Relations and Cooperation at the General Authority for Communications and Informatics coordinates between the departments and companies of the sector to participate in all conferences, workshops, forums and global summits of importance to the sector, which invitations to participate in are received through the departments working in the Ministry of Foreign Affairs and International Cooperation.'}
            </p>

            <p className="list-disc space-y-2 text-muted-foreground ps-5">
              {isArabic
              ? 'وتعتبر الدولة الليبية عضو في الاتحادات والمنظمات الدولية التي تعني بقطاع الاتصالات والمعلوماتية وهي': 'The Libyan state is a member of international federations and organizations concerned with the communications and information technology sector, which are:'}
              </p>

          </div>

          <div id="section2">
            <h2 className="text-3xl font-bold mt-5">
              {isArabic ? 'مكتب التعاون الدولي' : 'International Co-Operation office'}
            </h2>
          <ul
            dir={isArabic ? "rtl" : "ltr"}
            className={`space-y-2 text-muted-foreground list-disc list-inside ${isArabic ? 'text-right' : 'text-left'}`}
          >
            {(isArabic
              ? [
                  'الاتحاد الدولي للاتصالات (ITU)',
                  'الاتحاد الافريقي للاتصالات (ATU)',
                  'اتحاد البريدي العالمي (UPU)',
                  'اتحاد البريد الافريقي',
                  'المنظمة العربية لتكنولوجيات الاتصال والمعلومات',
                  'المؤسسة العربية للاتصالات الفضائية (عربسات)',
                  'المنظمة الدولية للاتصالات الفضائية (ITSO)',
                  'المنظمة العالمية للاتصالات البحرية (IMSO)',
                ]
              : [
                  'International Telecommunication Union (ITU)',
                  'African Telecommunication Union (ATU)',
                  'Universal Postal Union (UPU)',
                  'African Postal Union',
                  'Arab Information and Communication Technologies Organization',
                  'Arab Satellite Communications Organization (Arabsat)',
                  'International Telecommunications Satellite Organization (ITSO)',
                  'International Maritime Telecommunications Organization (IMSO)',
                ]
            ).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          </div>

          <div id="section3">
            <h2 className="text-2xl  mt-10">
              {isArabic ? 'وبالتالي تلتزم الدولة الليبية بدفع مساهمات سنوية نتيجة عضويتها في هذه الاتحادات والمنظمات الدولية لاتواجه المكتب أي صعوبات في الاتصال والمتابعة في تنفيذ أعماله سوء على المستوى الداخلي أو على الصعيد العالمي مع الاتحادات والمنظمات الدولية ويحاول بقدر الإمكان أن يواكب جميع المحافل والتطورات المتلاحقه في قطاع الإتصالات وتكنولوجيا المعلومات وذلك من خلال متابعة النشرات ونتائج المؤتمرات وورش العمل' : 'Therefore, the Libyan state is committed to paying annual contributions as a result of its membership in these international federations and organizations. The office does not face any difficulties in communicating and following up on the implementation of its work, whether at the internal level or at the global level, with international federations and organizations. It tries as much as possible to keep pace with all forums and successive developments in the communications and information technology sector by following up on publications and the results of conferences and workshops.'}
            </h2>
            <h2 className="text-2xl  list disc mt-10">
            {isArabic ?'في سنة (2020م) ونظراً لتهديد القائم المتمثل في جائحة كورونا فقد أعتمدت دول العالم والمنظمات والإتحادات الاجتماعات عن بعد الأمر الذي خلق فرص كبيرة للإستفادة من دور تكنولوجيا المعلومات والاتصالات في التواصل مع الدول العالم والمشاركة في جميع الإجتماعات وورش العمل ذات الأهمية التي عقدت عن بعد من قبل مختصين بالهيئة العامة للإتصالات والمعلوماتية وبالتالي فإن نشاط المكتب خلال هذه السنة اقتصر على متابعة الأنشطة وللاجتماعات ذات الإهمية والدولية والدورية التي عقدت عن بعد.':'In the year 2020 AD, due to the existing threat of the Corona pandemic, countries of the world, organizations and unions adopted remote meetings, which created great opportunities to benefit from the role of information and communications technology in communicating with countries of the world and participating in all important meetings and workshops held remotely by specialists in the General Authority for Communications and Informatics. Therefore, the office’s activity during this year was limited to following up on activities and important, international and periodic meetings held remotely.'}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
