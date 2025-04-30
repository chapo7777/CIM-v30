"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Wifi, Globe, Shield, Cpu, X, Network } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import AboutIntro from "@/components/about-intro"
import StatisticsSection from "@/components/statistics-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PartnersCarousel from '../components/Partnerscarousel';


// Slide data for the carousel
const slides = [
  {
    id: 1,
    imageUrl: "/hero-slideshow/slide-1.jpg",
    titleAr: "تمكين المستقبل الرقمي",
    titleEn: "Empowering the Digital Future",
    descriptionAr: "نقود التحول الرقمي في المملكة من خلال تطوير البنية التحتية للاتصالات وتعزيز الابتكار التكنولوجي.",
    descriptionEn:
      "Leading the digital transformation in the Country through developing telecommunications infrastructure and promoting technological innovation.",
  },
  {
    id: 2,
    imageUrl: "/hero-slideshow/slide-2.jpg",
    titleAr: "خدمات الجيل الخامس",
    titleEn: "5G Services",
    descriptionAr: "نوفر أحدث تقنيات الاتصال لضمان تجربة رقمية سلسة وسريعة لجميع المستخدمين.",
    descriptionEn:
      "We provide the latest communication technologies to ensure a smooth and fast digital experience for all users.",
  },
  {
    id: 3,
    imageUrl: "/hero-slideshow/slide-3.jpg",
    titleAr: "الأمن السيبراني",
    titleEn: "Cybersecurity",
    descriptionAr: "نعمل على تعزيز الأمن السيبراني وحماية البيانات لبناء بيئة رقمية آمنة وموثوقة.",
    descriptionEn:
      "We work to enhance cybersecurity and data protection to build a safe and reliable digital environment.",
  },
  {
    id: 4,
    imageUrl: "/hero-slideshow/slide-4.jpg",
    titleAr: "الأمن السيبراني",
    titleEn: "Cybersecurity",
    descriptionAr: "نعمل على تعزيز الأمن السيبراني وحماية البيانات لبناء بيئة رقمية آمنة وموثوقة.",
    descriptionEn:
      "We work to enhance cybersecurity and data protection to build a safe and reliable digital environment.",
  },
]

// Service data
const services = [
  {
    id: 1,
    icon: <Network className="h-10 w-10" />,
    titleAr: "تنظيم الاتصالات والمعلوماتية",
    titleEn: "Communications and Information Technology Regulation",
    descriptionAr:
      "الإدارة العامة لشؤون التنظيم هي الجهة المسؤولة عن تنظيم قطاع الاتصالات وتكنولوجيا المعلومات وقطاع البريد والنفاذ إلى الإعلام الرقمي في ليبيا.",
    descriptionEn:
      "The General Administration for Regulatory Affairs is responsible for regulating the telecommunications, information technology, postal sectors, and access to digital media in Libya.",
    fullContentAr: `
      <AccordionItem>
        <AccordionButton>
          <h2 class="font-bold mt-4 mb-2">المهام والمسؤوليات:</h2>
        </AccordionButton>
        <AccordionPanel>
          <p>الإدارة العامة لشؤون التنظيم هي الجهة المسؤولة عن تنظيم قطاع الاتصالات في ليبيا، وتتولى تنظيم قطاع الاتصالات وتكنولوجيا المعلومات وقطاع البريد والنفاذ إلى الإعلام الرقمي.</p>
          <p>كما تعمل على تشجيع ودعم قطاع اتصالات مفتوح وتنافسي لضمان توفير خدمات اتصالات مبتكرة ومتقدمة وموثوقة، مع الالتزام بتحقيق التوازن بين حقوق المستهلكين وتلبية احتياجات مقدمي الخدمة، وضمان جودة الخدمات بما يتطابق مع شروط الرخصة من قبل المرخص لهم.</p>
          <h2 class="font-bold mt-4 mb-2">المهام والمسؤوليات:</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>تنظيم خدمات الاتصالات وتكنولوجيا المعلومات بما يضمن تقديم خدمات سريعة وعالية الجودة بأسعار معقولة وتحقيق الأداء الأمثل للقطاعين.</li>
            <li>حماية مصالح المستفيدين، ومراقبة الأشخاص والجهات المرخص لها لضمان الالتزام بشروط الرخصة وجودة الخدمات المقدمة.</li>
            <li>وضع واعتماد شروط ومعايير منح رخص شبكات وخدمات الاتصالات واستخدام الترددات الراديوية.</li>
            <li>إدارة وتنظيم استخدام طيف الترددات الراديوية في المجالات الأرضية والبحرية والجوية والفضائية.</li>
            <li>وضع القواعد الفنية والمقاييس لربط أجهزة الاتصالات السلكية واللاسلكية مع الشبكات العامة.</li>
            <li>منح الموافقات النوعية للأجهزة الطرفية ومراقبة استخدامها للأغراض الفردية أو في مناطق محددة.</li>
            <li>إدارة وتنظيم خدمة تسجيل أسماء النطاقات للمستوى العلوي (.ly).</li>
            <li>تتبع موارد الإنترنت وضبط أي مخالفات أو خروقات تهدد الأمن والاستقرار.</li>
            <li>رصد ودراسة التقنيات المعلوماتية ووضع التشريعات المناسبة لها.</li>
            <li>منح أذونات وتراخيص مزاولة لمزودي خدمات الحوسبة السحابية.</li>
            <li>وضع أسس ومعايير التسعير العادل لخدمات استضافة مراكز البيانات.</li>
            <li>العمل وفق اللوائح التنفيذية للقانون رقم (22) لسنة 2010 بشأن الاتصالات.</li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
    `,
    fullContentEn: `
      <AccordionItem>
        <AccordionButton>
          <h2 class="font-bold mt-4 mb-2">Tasks and Responsibilities:</h2>
        </AccordionButton>
        <AccordionPanel>
          <p>The General Administration for Regulatory Affairs is the authority responsible for regulating the telecommunications sector in Libya, including the telecommunications, information technology, postal sectors, and access to digital media.</p>
          <p>It works to encourage and support an open and competitive telecommunications sector to ensure the provision of innovative, advanced, and reliable services, while fully adhering to balancing consumer rights with the needs of service providers, and ensuring the quality of services according to licensing conditions by licensees.</p>
          <h2 class="font-bold mt-4 mb-2">Tasks and Responsibilities:</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>Regulating telecommunications and information technology services to ensure fast, high-quality services at reasonable prices and optimal sector performance.</li>
            <li>Protecting beneficiaries’ interests and monitoring licensed entities to ensure compliance with license conditions and the quality of services provided.</li>
            <li>Establishing and approving conditions and standards for licensing telecommunications networks, services, and radio frequency usage.</li>
            <li>Managing and regulating the use of radio frequency spectrum across terrestrial, maritime, aerial, and space domains.</li>
            <li>Setting technical rules and standards for connecting wired and wireless communication devices to public networks.</li>
            <li>Granting type approvals and regulating the import and usage of terminal communication devices for personal or specific area use.</li>
            <li>Managing and regulating the registration of top-level domain names (.ly).</li>
            <li>Monitoring internet resources and addressing any violations or breaches that threaten security and stability.</li>
            <li>Monitoring and studying information technology developments and enacting the necessary legislation.</li>
            <li>Issuing permissions and licenses for cloud service providers.</li>
            <li>Establishing mechanisms and standards for fair pricing of data center hosting services.</li>
            <li>Operating according to the executive regulations of Law No. (22) of 2010 regarding telecommunications.</li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
    `,
    downloadLinks: [
      { label: "Download Report", url: "/report.pdf" },
      { label: "Download Policy", url: "/policy.pdf" },
    ],
    additionalInfoAr: "مزيد من المعلومات باللغة العربية",  // New field
    additionalInfoEn: "More information in English",  // New field
  }
  ,
  {
    id: 2,
    icon: <Globe className="h-10 w-10" /> ,   
    titleAr: "الحكومة الإلكترونية",
    titleEn: "E-Government",
    descriptionAr:
      "نعمل على تطوير الخدمات الإلكترونية الحكومية وربط الجهات الحكومية لتسهيل الإجراءات وتحقيق التحول الرقمي في ليبيا.",
    descriptionEn:
      "We work on developing government e-services and connecting government agencies to simplify procedures and achieve digital transformation in Libya.",
    fullContentAr: `
      <h1>الحكومة الإلكترونية</h1>
      <p>بمبادرة من وزارة الاتصالات والمعلوماتية، قُدمت رسمياً أوائل سنة 2012 (مبادرة ليبيا الإلكترونية)، حيث تبنت الحكومة وضع الأسس العلمية والعملية لتنفيذ المبادرة. وافق مجلس الوزراء على المبادرة وأنشأ إدارة الخدمات الإلكترونية بقرار مجلس الوزراء (31-2012)، ثم الإدارة العامة للخدمات الإلكترونية لتطوير المبادرة إلى برنامج عملي تنفيذي.</p>
      <p>في أواخر سنة 2012، قرر مجلس الوزراء إنشاء برنامج وطني حكومي لتنفيذ الحكومة الإلكترونية تحت مسمى (برنامج الخدمات الإلكترونية)، وأُطلق رسمياً خلال الربع الأول من سنة 2013.</p>
      <h2>برنامج الخدمات الإلكترونية</h2>
      <p>هو الاسم الرسمي لبرنامج الحكومة الإلكترونية، أنشئ بموجب القرار (99 لسنة 2013) ويشرف عليه لجنة عليا برئاسة نائب رئيس الوزراء للشؤون الفنية وعضوية وزراء الاتصالات، المالية، التخطيط، العمل والتأهيل، الاقتصاد، الحكم المحلي، الداخلية، ومنسق عام مكتب دعم القرار.</p>
      <h2>أهداف البرنامج</h2>
      <p>يهدف البرنامج إلى تطوير ورفع مستوى جودة الخدمات في ليبيا عبر استخدام تكنولوجيا الاتصالات والمعلومات، والتحول إلى التعاملات الإلكترونية وربط جميع الأجهزة الحكومية لتبسيط الإجراءات، وتقليل الازدواجية، وتعزيز الشفافية واللامركزية.</p>
      <h2>مشروع تطوير استراتيجية الحكومة الإلكترونية</h2>
      <p>تم التعاقد مع شركة PwC العالمية لتطوير استراتيجية الحكومة الإلكترونية تحت إشراف الإدارة العامة للخدمات الإلكترونية بالتعاون مع كافة الجهات الحكومية.</p>
      <h2>أهم مخرجات الاستراتيجية</h2>
      <ul>
        <li>الرؤية الوطنية للحكومة الإلكترونية</li>
        <li>نظام الحوكمة والتشريعات المنظمة</li>
        <li>البنية التحتية والتطبيقات والخدمات المستهدفة</li>
        <li>آلية التمويل والإنفاق</li>
        <li>خارطة الطريق</li>
      </ul>
      <h2>إنجازاتنا</h2>
      <ul>
        <li>موقع التسجيل الإلكتروني للحملة الوطنية للتطعيم ضد فيروس كورونا بالتعاون مع وزارة الصحة والمركز الوطني لمكافحة الأمراض.</li>
        <li>بوابة الرسائل النصية للخدمات الإلكترونية (11234).</li>
        <li>الربط التقني والتبادل البيني للبيانات مع مصلحة الأحوال المدنية.</li>
        <li>استضافة المواقع والتطبيقات الحكومية بمركز بيانات الهيئة.</li>
        <li>دعم تنفيذ نظام إدارة وتتبع القضايا الجنائية بالتعاون مع وزارة الداخلية.</li>
        <li>تمكين وسائل وآليات الدفع الإلكتروني في القطاعين الحكومي والخاص.</li>
        <li>بوابة الخدمات الإلكترونية للهيئة.</li>
        <li>نظام إدارة الموارد المؤسسية بالهيئة.</li>
        <li>توثيق وتجهيز دليل الإجراءات بالهيئة كخطوة نحو التحول الرقمي.</li>
        <li>ورشة عمل تطوير الإطار الإستراتيجي لبرنامج الصحة الإلكترونية.</li>
        <li>ورشة عمل التحول الإلكتروني بقطاع التجارة.</li>
      </ul>
      <p><strong>للمزيد من المعلومات يمكن تحميل النشرات والدلائل من الموقع الرسمي.</strong></p>
    `,
    fullContentEn: `
      <h1>E-Government</h1>
      <p>Initiated by the Ministry of Communications and Informatics, the "e-Libya Initiative" was officially introduced in early 2012. The government adopted scientific and practical foundations to implement the initiative. The Council of Ministers approved it and established the Electronic Services Department by decision (31-2012), later evolving into the General Administration for Electronic Services to turn the initiative into an executable program.</p>
      <p>In late 2012, the Council of Ministers launched a national governmental program named the "Electronic Services Program", officially launched in the first quarter of 2013.</p>
      <h2>Electronic Services Program</h2>
      <p>The official e-Government program, established under decision (99-2013), supervised by a high committee chaired by the Deputy Prime Minister for Technical Affairs, and membership of the Ministers of Communications, Finance, Planning, Labor and Rehabilitation, Economy, Local Governance, Interior, and the General Coordinator of the Decision Support Office.</p>
      <h2>Program Goals</h2>
      <p>The program aims to develop and raise the quality of services in Libya through the comprehensive adoption of e-transactions, linking all government agencies, simplifying procedures, reducing software system duplication, and promoting transparency and decentralization.</p>
      <h2>e-Government Strategy Development Project</h2>
      <p>The Ministry contracted with PwC to develop the targeted e-Government strategy under the supervision of the General Administration for Electronic Services, in cooperation with all government sectors.</p>
      <h2>Key Strategy Outputs</h2>
      <ul>
        <li>National Vision for e-Government</li>
        <li>Governance system and regulatory legislations</li>
        <li>Infrastructure, applications, and target services</li>
        <li>Funding and spending mechanisms</li>
        <li>Roadmap</li>
      </ul>
      <h2>Our Achievements</h2>
      <ul>
        <li>Electronic registration site for the national COVID-19 vaccination campaign with the Ministry of Health and the National Center for Disease Control.</li>
        <li>SMS Gateway for electronic services (11234).</li>
        <li>Technical linkage and data exchange with the Civil Status Authority.</li>
        <li>Hosting governmental websites and applications at the Authority's Data Center.</li>
        <li>Supporting the implementation of an integrated criminal case management system with the Ministry of Interior.</li>
        <li>Enabling electronic payment mechanisms in both government and private sectors.</li>
        <li>Launching the Authority's Electronic Services Portal.</li>
        <li>Implementing the Authority’s Enterprise Resource Planning system.</li>
        <li>Documenting and preparing the Authority’s procedures manual as a first step towards digital transformation.</li>
        <li>Workshop on developing the strategic framework for the e-Health Program.</li>
        <li>Workshop on digital transformation in the commerce sector.</li>
      </ul>
      <p><strong>For more information, newsletters and guides can be downloaded from the official website.</strong></p>
    `,
    // Adding Download Links
    downloadLinks: [
      { label: "Download Official Guide", url: "/files/official-guide.pdf" },
      { label: "Download Strategy Report", url: "/files/strategy-report.pdf" }
    ]
    
  }
  
  ,
  {
    id: 3,
    icon: <Shield className="h-10 w-10" />,
    titleAr: "الأمن السيبراني",
    titleEn: "Cybersecurity",
    descriptionAr: "نعزز الأمن السيبراني وحماية البيانات لبناء بيئة رقمية آمنة وموثوقة للمستخدمين والشركات.",
    descriptionEn:
      "We enhance cybersecurity and data protection to build a safe and reliable digital environment for users and companies.",
    fullContentAr: `<h1>الأمن السيبراني</h1>

<p>تولي الهيئة العامة للاتصالات والمعلوماتية أهمية قصوى لتعزيز الأمن السيبراني وحماية البيانات، لبناء بيئة رقمية آمنة وموثوقة للمستخدمين والشركات في المملكة.</p>

<h2>مجالات عملنا</h2>

<h3>1. حماية البنية التحتية الحيوية</h3>
<p>نعمل على حماية البنية التحتية الحيوية للاتصالات والمعلومات من التهديدات السيبرانية، من خلال تطبيق أفضل الممارسات والمعايير العالمية في مجال الأمن السيبراني.</p>

<h3>2. الاستجابة للحوادث السيبرانية</h3>
<p>نوفر خدمات الاستجابة للحوادث السيبرانية، ونعمل على تطوير قدرات الكشف المبكر عن التهديدات والاستجابة السريعة لها.</p>

<h3>3. التوعية والتدريب</h3>
<p>نقدم برامج توعية وتدريب في مجال الأمن السيبراني للأفراد والمؤسسات، لرفع مستوى الوعي بالمخاطر السيبرانية وطرق الحماية منها.</p>

<h3>4. التعاون الدولي</h3>
<p>نتعاون مع المنظمات الدولية والهيئات المتخصصة في مجال الأمن السيبراني، لتبادل المعلومات والخبرات ومواجهة التحديات المشتركة.</p>`,
    fullContentEn: `<h1>Cybersecurity</h1>

<p>The General Authority for Communications and Information Technology attaches utmost importance to enhancing cybersecurity and data protection, to build a safe and reliable digital environment for users and companies in the Kingdom.</p>

<h2>Our Areas of Work</h2>

<h3>1. Protection of Critical Infrastructure</h3>
<p>We work to protect the critical infrastructure of communications and information from cyber threats, by applying the best global practices and standards in the field of cybersecurity.</p>

<h3>2. Cyber Incident Response</h3>
<p>We provide cyber incident response services, and work to develop capabilities for early detection of threats and rapid response to them.</p>

<h3>3. Awareness and Training</h3>
<p>We provide awareness and training programs in the field of cybersecurity for individuals and institutions, to raise the level of awareness of cyber risks and ways to protect against them.</p>

<h3>4. International Cooperation</h3>
<p>We cooperate with international organizations and specialized bodies in the field of cybersecurity, to exchange information and expertise and face common challenges.</p>`,
  },
  {
    id: 4,
    icon: <Cpu className="h-10 w-10" />,
    titleAr: "التحول الرقمي",
    titleEn: "Digital Transformation",
    descriptionAr: "ندعم جهود التحول الرقمي في المملكة من خلال تطوير البنية التحتية وتعزيز الابتكار التكنولوجي.",
    descriptionEn:
      "We support digital transformation efforts in the Kingdom through infrastructure development and promoting technological innovation.",
    fullContentAr: `<h1>التحول الرقمي</h1>

<p>تلعب الهيئة العامة للاتصالات والمعلوماتية دوراً محورياً في دعم جهود التحول الرقمي في المملكة، من خلال تطوير البنية التحتية وتعزيز الابتكار التكنولوجي.</p>

<h2>مبادراتنا</h2>

<h3>1. تطوير البنية التحتية الرقمية</h3>
<p>نعمل على تطوير البنية التحتية الرقمية في المملكة، بما في ذلك شبكات الاتصالات ومراكز البيانات، لدعم التحول الرقمي في مختلف القطاعات.</p>

<h3>2. تعزيز الابتكار التكنولوجي</h3>
<p>ندعم الابتكار التكنولوجي من خلال إنشاء مراكز الابتكار وحاضنات الأعمال التقنية، وتقديم الدعم للشركات الناشئة في مجال التكنولوجيا.</p>

<h3>3. تطوير المهارات الرقمية</h3>
<p>نعمل على تطوير المهارات الرقمية للكوادر الوطنية، من خلال برامج تدريبية متخصصة في مجالات التكنولوجيا المختلفة.</p>

<h3>4. تعزيز الشمول الرقمي</h3>
<p>نسعى إلى تعزيز الشمول الرقمي وضمان وصول خدمات الاتصالات وتكنولوجيا المعلومات إلى جميع فئات المجتمع في مختلف مناطق المملكة.</p>`,
    fullContentEn: `<h1>Digital Transformation</h1>

<p>The General Authority for Communications and Information Technology plays a pivotal role in supporting digital transformation efforts in the Kingdom, through infrastructure development and promoting technological innovation.</p>

<h2>Our Initiatives</h2>

<h3>1. Development of Digital Infrastructure</h3>
<p>We work on developing the digital infrastructure in the Kingdom, including telecommunications networks and data centers, to support digital transformation in various sectors.</p>

<h3>2. Promoting Technological Innovation</h3>
<p>We support technological innovation through the establishment of innovation centers and technical business incubators, and providing support to startups in the field of technology.</p>

<h3>3. Development of Digital Skills</h3>
<p>We work on developing the digital skills of national cadres, through specialized training programs in various fields of technology.</p>

<h3>4. Enhancing Digital Inclusion</h3>
<p>We seek to enhance digital inclusion and ensure access to communications and information technology services to all segments of society in various regions of the Kingdom.</p>`,
  },
]

const downloadLinks = [
  { title: 'ورشة عمل تطوير الإطار الإستراتيجي لبرنامج الصحة الإلكترونية', url: '/path/to/download1' },
  { title: 'ورشة عمل التحول الالكتروني بقطاع التجارة', url: '/path/to/download2' },
  { title: 'النشرة الإخبارية العدد الأول ـ النسخة العربية', url: '/path/to/download3' },
  { title: 'Newsletter Issue One - English Ver', url: '/path/to/download4' },
  { title: 'النشرة الإخبارية العدد الثاني ـ النسخة العربية', url: '/path/to/download5' },
  { title: 'Newsletter Issue Two - English Ver', url: '/path/to/download6' },
  { title: 'النشرة الإخبارية العدد الثالث ـ النسخة العربية', url: '/path/to/download7' },
  { title: 'Newsletter Issue Three - English Ver', url: '/path/to/download8' },
  { title: 'مسودة الدليل الحكومي للمحتوى الرقمي الفعال', url: '/path/to/download9' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const slideInterval = useRef<NodeJS.Timeout | null>(null)
  const { isArabic } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Handle slideshow auto-rotation
  useEffect(() => {
    // Start the slideshow
    startSlideshow()

    // Cleanup on unmount
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current)
      }
    }
  }, [])

  // Start slideshow with interval
  const startSlideshow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }

    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    // Reset the interval when manually navigating
    startSlideshow()
  }

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    // Reset the interval when manually navigating
    startSlideshow()
  }

  // Navigate to the next service in the modal
  const nextService = () => {
    if (expandedService === null) return

    const currentIndex = services.findIndex((service) => service.id === expandedService)
    const nextIndex = (currentIndex + 1) % services.length
    setExpandedService(services[nextIndex].id)
  }

  // Navigate to the previous service in the modal
  const prevService = () => {
    if (expandedService === null) return

    const currentIndex = services.findIndex((service) => service.id === expandedService)
    const prevIndex = (currentIndex - 1 + services.length) % services.length
    setExpandedService(services[prevIndex].id)
  }

  // Toggle service expansion
  const toggleService = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null)
    } else {
      setExpandedService(id)
    }
  }

  return (
    <div className={`min-h-screen bg-white ${isArabic ? "rtl" : "ltr"}`}>
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Slideshow/Carousel */}
        <div className="relative mb-16 rounded-xl overflow-hidden shadow-xl">
          {/* Slides */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.imageUrl || "/placeholder.svg"}
                  alt={isArabic ? slide.titleAr : slide.titleEn}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    {isArabic ? slide.titleAr : slide.titleEn}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl max-w-2xl">
                    {isArabic ? slide.descriptionAr : slide.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  startSlideshow()
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* About Intro Section */}
        <AboutIntro />

        {/* Statistics Section */}
        <StatisticsSection />

        {/* //partnersection */}
        <PartnersCarousel />




<section id="services" className="scroll-mt-20 pt-16 relative">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
        {isArabic ? "خدماتنا" : "Our Services"}
      </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-0">
    {services.map((service) => (
      <div
        key={service.id}
        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        onClick={() => toggleService(service.id)}
      >
        <div className="p-6" dir={isArabic ? "LTR" : "RTL"}>
          <div className="flex justify-center mb-4 text-blue-500">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-center text-blue-800">
            {isArabic ? service.titleAr : service.titleEn}
          </h3>
          <p className="text-blue-900 text-center">
            {isArabic ? service.descriptionAr : service.descriptionEn}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Service Modal */}
  {expandedService !== null && (
  <>
    {/* Backdrop with less opacity */}
    <div
      className="fixed inset-0 bg-black bg-opacity-30 z-40 backdrop-blur-sm"
      onClick={() => setExpandedService(null)}
    />

    {/* Modal */}
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-[90%] md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 text-white rounded-full bg-blue-500 hover:bg-gray-200 transition-colors z-10"
          onClick={() => setExpandedService(null)}
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        {services
          .filter((service) => service.id === expandedService) // Filtering the expanded service
          .map((service) => (
            <div key={service.id} className="p-8 pt-12">
              <div className="flex justify-center mb-6 text-blue-500">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-black">
                {isArabic ? service.titleAr : service.titleEn}
              </h3>

              {/* Accordion for Full Content */}
              <Accordion type="single" value={`service-${service.id}`}>
                {/* First Accordion Item */}
                <AccordionItem value="task-responsibilities">
                  <AccordionTrigger>
                    <h2 className="font-bold mt-4 mb-2">
                      {isArabic ? "المهام والمسؤوليات" : "Tasks and Responsibilities"}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="prose max-w-none text-blue-900"
                      dangerouslySetInnerHTML={{
                        __html: isArabic ? service.fullContentAr : service.fullContentEn,
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>

                {/* Second Accordion Item */}
                <AccordionItem value="contact-info">
                  <AccordionTrigger>
                    <h2 className="font-bold mt-4 mb-2">
                      {isArabic ? "للتواصل" : "Contact Information"}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-semibold mt-4">
                      {isArabic ? "للتواصل مع الإدارة عبر البريد الإلكتروني:" : "To contact the administration, please email:"} 
                      <a href="mailto:reg@cim.gov.ly" className="text-blue-500 underline">reg@cim.gov.ly</a>
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Additional Accordion Items (Optional) */}
                {/* You can keep adding more accordion items for each section */}
                {/* Example */}
                <AccordionItem value="more-info">
                  <AccordionTrigger>
                    <h2 className="font-bold mt-4 mb-2">
                      {isArabic ? "مزيد من المعلومات" : "More Information"}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{isArabic ? service.additionalInfoAr : service.additionalInfoEn}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Service navigation indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedService(s.id);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      s.id === expandedService ? "bg-blue-500 scale-125" : "bg-gray-300"
                    }`}
                    aria-label={`Go to service ${isArabic ? s.titleAr : s.titleEn}`}
                  />
                ))}
              </div>
            </div>
              )
          )}
        </div>
      </div>
    </>
  )}
</section>
      </main>
    </div>
  )
}
