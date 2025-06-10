// National top-level domain (.Ly.) gov.ly
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { useLanguage } from "@/contexts/language-context";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function DomainPage() {
  const { isArabic } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {isArabic ? "النطاق الوطني العلوي (.ly)" : "National Top-Level Domain (.ly)"}
          </h1>
          <p className="text-lg text-slate-600">
            {isArabic
              ? "تشرف الهيئة العامة للاتصالات على تنظيم وتشغيل نطاق ليبيا العلوي الوطني (.ly) والنطاق الحكومي (gov.ly)."
              : "The General Authority for Communications oversees the regulation and operation of Libya's national top-level domain (.ly) and the government domain (gov.ly)."}
          </p>
        </motion.div>

        {/* Responsibilities Section */}
        <motion.div className="mb-12" initial="initial" animate="animate" variants={fadeInUp}>
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">
                {isArabic
                  ? "مهام قسم تنظيم خدمات المعلوماتية"
                  : "Responsibilities of the Informatics Services Regulation Department"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>{isArabic ? "وضع السياسات المتعلقة بتسجيل النطاقات." : "Develop policies for domain registration."}</li>
                <li>{isArabic ? "التنسيق مع مشغل سجل نطاق ليبيا." : "Coordinate with the Libya ccTLD registry operator."}</li>
                <li>{isArabic ? "وضع ومراقبة قواعد تسجيل نطاق gov.ly." : "Set and monitor rules for gov.ly domain registrations."}</li>
                <li>{isArabic ? "ضمان توافق التسجيلات مع المصلحة الوطنية." : "Ensure domain registrations align with national interests."}</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Conditions Section */}
        <motion.div className="mb-12" initial="initial" animate="animate" variants={fadeInUp}>
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">
                {isArabic
                  ? "شروط اختيار وصياغة اسم النطاق"
                  : "Domain Name Selection & Formulation Conditions"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>{isArabic ? "يجب أن يعكس النطاق الاسم الرسمي أو الاختصار للجهة." : "Domain must reflect the institution’s official name or acronym."}</li>
                <li>{isArabic ? "يجب ألا يخالف القوانين أو الأعراف العامة." : "Must not violate laws or public norms."}</li>
                <li>{isArabic ? "يجب أن يكون فريداً ولا يسبب التباساً." : "Should be unique and not cause confusion."}</li>
                <li>{isArabic ? "يجب ألا يحتوي على مصطلحات عامة أو محجوزة." : "Names should not include general or reserved terms."}</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Required Documents Section */}
        <motion.div className="mb-12" initial="initial" animate="animate" variants={fadeInUp}>
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-slate-800">
                {isArabic ? "المستندات المطلوبة لتسجيل النطاق" : "Required Documents for Domain Registration"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>{isArabic ? "خطاب رسمي من الجهة الطالبة للنطاق." : "Official letter from the entity requesting the domain."}</li>
                <li>{isArabic ? "نسخة من قرار تأسيس أو ترخيص المؤسسة." : "Copy of the institution's establishment decree or license."}</li>
                <li>{isArabic ? "وثائق تعريفية للمسؤول عن الطلب." : "Identification documents of the responsible officer."}</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
