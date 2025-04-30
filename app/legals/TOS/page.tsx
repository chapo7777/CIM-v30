"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/language-context";

export default function TOS() {
  const { isArabic } = useLanguage();

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Accordion type="single" collapsible>
          {/* Tab 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className={`text-lg ${isArabic ? "text-right" : "text-left"}`}>
              {isArabic ? "إتفاقية الاستخدام" : "Terms of Use Agreement"}
            </AccordionTrigger>
            <AccordionContent>
              {isArabic ? (
                <>
                  {/* Existing Content */}
                  <p>
                    إن الموقع الإلكتروني الخاص بالهيئة العامة للاتصالات والمعلوماتية وما فيه من خدمات
                    ومواقع أخرى متشعبة منه متاح لاستخدامك الشخصي، ولا تتحمل الهيئة العامة للاتصالات
                    والمعلوماتية أي مسؤولية تجاه أي جهة اتخذت أو ستتخذ أي قرار بناءً على المحتوى
                    الوارد في هذا الموقع أو المواقع التابعة لها. كما أنها غير مسؤولة عن محتويات المواقع
                    الإلكترونية التي لا تتبعها ولكنها أُدرجت في موقع الهيئة العامة للاتصالات والمعلوماتية،
                    ولا تتحمل مسؤولية اتخاذ أي جهة لأي قرار أو تصرف بناءً على هذه المحتويات والمعلومات
                    المنشورة في تلك المواقع الإلكترونية. يخضع دخولك واستخدامك لموقع الهيئة العامة للاتصالات
                    والمعلوماتية لبنود وشروط الاستخدام وللأنظمة المعمول بها في ليبيا، وكذلك يعد وصولك
                    ودخولك إلى الموقع وخدماته موافقة دون قيد أو شرط على بنود وشروط الاستخدام، سواءً كنت
                    مستخدماً مسجلاً أم لا، وتسري هذه الموافقة اعتباراً من تاريخ أول استخدام لك لهذا الموقع.
                    ويصبح أي تعديل لهذه البنود والشروط نافذاً فور إعلانه، ويعني استمرارك في استخدام هذا الموقع
                    بعد إعلان أي تعديل قبول تام لذلك التعديل.
                  </p>

                  {/* Appended List */}
                  <p className="mt-4 font-bold">
                    باستخدامك لخدمات أو موقع الهيئة العامة للاتصالات والمعلوماتية، تقر بالامتناع عن الآتي:
                  </p>
                  <ul className="list-disc px-4 mt-2">
                    <li>
                      معلومات عن مستخدمي الموقع وزيارتهم له واستعمالهم إياه (ويشمل عنوان
                      المعرف والموقع الإقليمي ونوع المتصفح ومدة الزيارة وعدد الصفحات المقروءة)
                    </li>
                    <li>
                      رفع أو تحميل ملفات تحتوي على فيروسات أو بيانات تالفة أو أي برمجيات خبيثة، أو القيام
                      بكل ما من شأنه التأثير على سلامة المعلومات في الموقع أو موثوقيتها أو استمرار توفرها
                    </li>
                    <li>
                      نشر أو إعلان أو توزيع أو تعميم مواد أو معلومات تحتوي تشويهاً للسمعة أو انتهاكاً
                      للقوانين أو مواد إباحية أو بذيئة أو مخالفة للتعاليم الإسلامية أو للآداب العامة أو
                      أي مواد أو معلومات غير قانونية من خلال خدمات الهيئة
                    </li>
                    <li>
                      استخدام أية وسيلة أو برنامج أو إجراء لاعتراض أو محاولة اعتراض التشغيل الصحيح لموقع
                      الهيئة
                    </li>
                    <li>
                      القيام بأي إجراء يفرض حملاً غير معقول أو كبير أو بصورة غير مناسبة على البنية التحتية
                      لموقع الهيئة
                    </li>
                    <li>كل ما يعد مخالفة لنظام مكافحة الجرائم المعلوماتية</li>
                  </ul>
                </>
              ) : (
                <>
                  {/* Existing Content */}
                  <p>
                    The website of the General Authority for Communications and Informatics,
                    including its services and other subdomains, is available for your personal use.
                    The General Authority for Communications and Informatics is not responsible for
                    any decisions taken based on the content provided on this website or its subdomains.
                    Furthermore, it is not responsible for the contents of external websites that are
                    linked on the General Authority for Communications and Informatics website and
                    does not bear responsibility for decisions made based on their published content.
                    Your access and use of the General Authority for Communications and Informatics
                    website are subject to terms of use and regulations applicable in Libya. By accessing
                    and using the site and its services, you unconditionally agree to the terms of use,
                    whether registered or not. This agreement applies from the date of your first use of the site.
                    Any modifications to these terms and conditions become effective immediately after
                    their announcement, and your continued use signifies full acceptance of these changes.
                  </p>

                  {/* Appended List */}
                  <p className="mt-4 font-bold">
                    By using the services or website of the General Authority for Communications and Informatics, you agree to refrain from the following:
                  </p>
                  <ul className="list-disc px-4 mt-2">
                    <li>
                      Collecting information about site users and their visits and usage (including IP address,
                      regional location, browser type, visit duration, and number of pages viewed)
                    </li>
                    <li>
                      Uploading or downloading files containing viruses, corrupted data, or malicious software, or
                      performing actions that may affect the security, reliability, or availability of information on the site
                    </li>
                    <li>
                      Publishing, advertising, distributing, or circulating materials or information that contain
                      defamation, violate laws, or include pornographic, obscene, or content contrary to Islamic teachings
                      or public morals through the Authoritys services
                    </li>
                    <li>
                      Using any means, software, or procedures to intercept or attempt to intercept the proper operation
                      of the Authoritys site
                    </li>
                    <li>
                      Performing actions that impose unreasonable, excessive, or inappropriate loads on the site's infrastructure
                    </li>
                    <li>Any violations of the Cybercrime Law</li>
                  </ul>
                </>
              )}
            </AccordionContent>
          </AccordionItem>
          </Accordion>

          {/* Tab 2: Privacy Policy */}
          <AccordionItem value="item-2">
            <AccordionTrigger className={`text-lg ${isArabic ? "text-right" : "text-left"}`}>
              {isArabic ? "خصوصية البيانات" : "Privacy Policy"}
            </AccordionTrigger>
            <AccordionContent>
              {isArabic ? (
                <>
                  <p className="font-bold mt-2">
                    إن الهيئة العامة للاتصالات والمعلوماتية مسؤولة عن حماية البيانات الشخصية وخصوصية مستخدمي موقعها وفقًا لما يلي:
                  </p>

                  {/* List 1: Data Protection Measures */}
                  <ul className="list-disc px-4 mt-2">
                    <li>
                      الحفاظ على أية معلومة ترصد أثناء استعمال موقع الهيئة العامة للاتصالات والمعلوماتية بأعلى درجات السرية والأمنية.
                    </li>
                    <li>
                      تتخذ الهيئة العامة للاتصالات والمعلوماتية التدابير اللازمة لمنع فقدان المعلومات الشخصية أو إساءة استعمالها أو تغييرها بما فيها حفظ هذه المعلومات بقاعدة بيانات آمنة.
                    </li>
                  </ul>

                  {/* List 2: Use of Personal Data */}
                  <p className="font-bold mt-4">يجوز للهيئة رصد وحفظ واستعمال البيانات الشخصية كالتالي:</p>
                  <ul className="list-disc px-4 mt-2">
                    <li>
                      معلومات عن مستخدمي الموقع وزيارتهم له واستعمالهم إياه (ويشمل عنوان المعرف والموقع الإقليمي ونوع المتصفح ومدة الزيارة وعدد الصفحات المقروءة).
                    </li>
                    <li>
                      كل ما يرصد من معلومات يسجلها الزائر ملء إرادته أثناء زيارته موقع الهيئة العامة للاتصالات والمعلوماتية.
                    </li>
                  </ul>

                  {/* List 3: Use Cases */}
                  <p className="font-bold mt-4">يجوز للهيئة استعمال البيانات الشخصية لمستخدمي الموقع في الحالتين التاليتين:</p>
                  <ul className="list-disc px-4 mt-2">
                    <li>إرسال إشعارات أو إعلانات أو معلومات أو حملات ترويجية.</li>
                    <li>التواصل مع المستخدم ومتابعة الاستفسارات والاقتراحات والشكاوى.</li>
                  </ul>

                  {/* List 4: Disclosure of Data */}
                  <p className="font-bold mt-4">
                    لن تفصح الهيئة العامة للاتصالات والمعلوماتية عن أية بيانات شخصية لأي جهة إلا في الحالات التالية:
                  </p>
                  <ul className="list-disc px-4 mt-2">
                    <li>أن يتم طلب ذلك من الهيئة العامة للاتصالات والمعلوماتية قانونياً.</li>
                    <li>إذا كانت بصدد أية إجراءات قانونية.</li>
                  </ul>
                </>
              ) : (
                <>
                  <p className="font-bold mt-2">
                    The General Authority for Communications and Informatics is responsible for protecting personal data and user privacy as follows:
                  </p>

                  {/* List 1: Data Protection Measures */}
                  <ul className="list-disc px-4 mt-2">
                    <li>
                      Maintaining the highest levels of confidentiality and security for any information collected while using the Authority's website.
                    </li>
                    <li>
                      Taking necessary measures to prevent loss, misuse, or alteration of personal data, including storing this information in a secure database.
                    </li>
                  </ul>

                  {/* List 2: Use of Personal Data */}
                  <p className="font-bold mt-4">The Authority may monitor, retain, and use personal data as follows:</p>
                  <ul className="list-disc px-4 mt-2">
                    <li>
                      Information about site users and their visits and usage (including IP address, regional location, browser type, visit duration, and number of pages viewed).
                    </li>
                    <li>
                      Any information willingly provided by the visitor during their use of the Authority's website.
                    </li>
                  </ul>

                  {/* List 3: Use Cases */}
                  <p className="font-bold mt-4">The Authority may use personal data in the following two cases:</p>
                  <ul className="list-disc px-4 mt-2">
                    <li>To send notifications, advertisements, information, or promotional campaigns.</li>
                    <li>To communicate with the user and follow up on inquiries, suggestions, and complaints.</li>
                  </ul>

                  {/* List 4: Disclosure of Data */}
                  <p className="font-bold mt-4">
                    The Authority will not disclose personal data to any entity except in the following cases:
                  </p>
                  <ul className="list-disc px-4 mt-2">
                    <li>When legally requested by the General Authority for Communications and Informatics.</li>
                    <li>If it is part of any legal proceedings.</li>
                  </ul>
                </>
              )}
            </AccordionContent>
          </AccordionItem>

      </main>
    </div>
  );
}