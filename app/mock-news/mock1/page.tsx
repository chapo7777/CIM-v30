// app/newspg/N1/page.tsx
"use client";

import Image from "next/image";

export default function NewsPageN1() {
  return (
   <div className="max-w-3xl mx-auto px-4 py-10 text-right" dir="rtl">

  <div className="max-w-3xl mx-auto px-6 py-12 text-right bg-white rounded-lg shadow-lg" dir="rtl">
  <h1 className="text-3xl font-extrabold text-blue-900 mb-8 tracking-wide">بيان رسمي</h1>

  <Image
    src="/news/N1.jpg"
    alt="الهيئة العامة للاتصالات - بيان"
    width={768}
    height={960}
    className="rounded-lg shadow-md mb-10"
  />

  <div className="text-gray-900 leading-relaxed space-y-8 max-w-prose mx-auto font-serif text-lg">
    <p className="indent-8">
      تتابع الهيئة العامة للاتصالات والمعلوماتية بحكومة الوحدة الوطنية ما يتم تداوله عبر بعض المنصات ووسائل الإعلام بشأن إصدار تراخيص شاملة للاتصالات وتقنية المعلومات.
    </p>
    <p className="indent-8">
      وإذ تؤكد الهيئة أن ما ورد من معلومات في هذا الشأن عارٍ تماماً عن الصحة، فإننا نذكر الجميع بأن الجهة الوحيدة المخولة قانونياً بمنح تراخيص الاتصالات والخدمات المضافة والمرتبطة بها أو تنظيمها أو سحبها أو تعليقها هي الهيئة العامة للاتصالات والمعلوماتية بحكومة الوحدة الوطنية.
    </p>
    <p className="indent-8">
      وذلك استناداً إلى أحكام التشريعات النافذة وفي مقدمتها قانون الاتصالات رقم (22) لسنة 2010م واللوائح والقرارات التنظيمية الصادرة بمقتضاه.
    </p>
    <p className="indent-8">
      وتُشدد الهيئة على أن إصدار أي ترخيص دون اتباع الآليات وإجراءات قانونية مدروسة تستند إلى فواتير المنافسة العادلة، ومتطلبات الجدوى الاقتصادية ومعايير الأمن السيبراني، وبموافقة مجلس الوزراء بحكومة الوحدة الوطنية عند الاقتضاء.
    </p>

    <p className="font-semibold text-2xl text-blue-800 mt-12 mb-2">والله الموفق.</p>

    <p className="text-sm text-gray-600 italic mb-1">
      عن الهيئة العامة للاتصالات والمعلوماتية – حكومة الوحدة الوطنية
    </p>
    <p className="text-sm text-gray-600 italic">طرابلس – 2025-05-13</p>
  </div>
</div>

</div>
  );
}
