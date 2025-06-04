import type { NextApiRequest, NextApiResponse } from 'next';

type SearchResultType = 'service' | 'pdf' | 'news' | 'page';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  titleAr?: string;
  description?: string;
  descriptionAr?: string;
  url: string;
}

const mockSearchData: SearchResult[] = [
  {
    id: "service-1",
    type: "service",
    title: "Communications Regulation",
    titleAr: "تنظيم الاتصالات",
    description: "Telecom licensing and regulation",
    descriptionAr: "ترخيص وتنظيم شركات الاتصالات",
    url: "/services/communications-regulation",
  },
  {
    id: "service-2",
    type: "service",
    title: "Cybersecurity Services",
    titleAr: "خدمات الأمن السيبراني",
    description: "Digital security and protection",
    descriptionAr: "الأمان والحماية الرقمية",
    url: "/services/cybersecurity",
  },
  {
    id: "pdf-1",
    type: "pdf",
    title: "Telecom Licensing Guidelines",
    titleAr: "إرشادات ترخيص الاتصالات",
    description: "Official document for telecom licensing",
    descriptionAr: "وثيقة رسمية لترخيص الاتصالات",
    url: "/pdfs/service1.pdf",
  },
  {
    id: "pdf-2",
    type: "pdf",
    title: "Service Quality Standards",
    titleAr: "معايير جودة الخدمة",
    description: "Standards for telecom service quality",
    descriptionAr: "معايير جودة خدمة الاتصالات",
    url: "/attachments/948.pdf",
  },
  {
    id: "news-1",
    type: "news",
    title: "New Telecom Regulations Announced",
    titleAr: "إعلان لوائح اتصالات جديدة",
    description: "GACI announces new telecom regulations",
    descriptionAr: "تعلن الهيئة عن لوائح اتصالات جديدة",
    url: "/news/new-telecom-regulations",
  },
  {
    id: "news-2",
    type: "news",
    title: "Annual Telecom Conference",
    titleAr: "مؤتمر الاتصالات السنوي",
    description: "Annual conference for telecom industry",
    descriptionAr: "المؤتمر السنوي لصناعة الاتصالات",
    url: "/news/annual-telecom-conference",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<SearchResult[] | { error: string }>) {
  const { q, lang } = req.query;

  // Validate query param q
  if (!q || typeof q !== 'string') {
    return res.status(400).json({ error: 'Missing search query `q`' });
  }

  // Validate lang param and normalize to string, default 'en'
  const language = lang && typeof lang === 'string' && ['en', 'ar'].includes(lang.toLowerCase())
    ? lang.toLowerCase()
    : 'en';

  const query = q.toLowerCase();

  // Filter data
  const results = mockSearchData.filter(item => {
    const title = language === 'ar' && item.titleAr ? item.titleAr : item.title;
    const description = language === 'ar' && item.descriptionAr ? item.descriptionAr : item.description || "";

    return title.toLowerCase().includes(query) || description.toLowerCase().includes(query);
  });

  res.status(200).json(results);
}
