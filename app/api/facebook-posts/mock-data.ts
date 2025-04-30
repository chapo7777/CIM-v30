import type { FacebookPost } from "./route"

export const mockPosts: FacebookPost[] = [
  {
    id: "mock_1",
    message:
      "تم إطلاق خدمة الجيل الخامس في المناطق الشمالية من البلاد. يمكن للمستخدمين الآن الاستفادة من سرعات إنترنت فائقة تصل إلى 1 جيجابت في الثانية.",
    created_time: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    full_picture: "/placeholder.svg?height=400&width=600",
    permalink_url: "#",
  },
  {
    id: "mock_2",
    message:
      "The Authority announces the completion of the fiber optic network expansion project in the eastern regions, which will improve internet services for more than 500,000 residents.",
    created_time: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    full_picture: "/placeholder.svg?height=400&width=600",
    permalink_url: "#",
  },
  {
    id: "mock_3",
    message:
      "ورشة عمل حول الأمن السيبراني ستقام الأسبوع القادم في المقر الرئيسي للهيئة. الدعوة مفتوحة للمختصين والمهتمين في مجال أمن المعلومات.",
    created_time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
    full_picture: "/placeholder.svg?height=400&width=600",
    permalink_url: "#",
  },
  {
    id: "mock_4",
    message:
      "The Authority participates in the International Telecommunications Conference in Geneva, representing our country in discussions about the future of global communications.",
    created_time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
    full_picture: "/placeholder.svg?height=400&width=600",
    permalink_url: "#",
  },
  {
    id: "mock_5",
    message:
      "تهنئ الهيئة العامة للاتصالات والمعلوماتية جميع المواطنين بمناسبة العيد الوطني، متمنين للجميع دوام التقدم والازدهار.",
    created_time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 7 days ago
    full_picture: "/placeholder.svg?height=400&width=600",
    permalink_url: "#",
  },
]
