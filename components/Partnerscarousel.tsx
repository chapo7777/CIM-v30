"use client"

import { useLanguage } from "@/contexts/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const partners = [
  {
    id: 1,
    name: "International Telecommunication Union",
    nameAr: "الاتحاد الدولي للاتصالات",
    logo: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 2,
    name: "Arab States Broadcasting Union",
    nameAr: "اتحاد إذاعات الدول العربية",
    logo: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 3,
    name: "African Telecommunications Union",
    nameAr: "الاتحاد الأفريقي للاتصالات",
    logo: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 4,
    name: "League of Arab States",
    nameAr: "جامعة الدول العربية",
    logo: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 5,
    name: "United Nations",
    nameAr: "الأمم المتحدة",
    logo: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 6,
    name: "World Bank",
    nameAr: "البنك الدولي",
    logo: "/placeholder.svg?height=80&width=120",
  },
]

export default function PartnersCarousel() {
  const { isArabic } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const itemsPerView = 4
  const maxIndex = Math.max(0, partners.length - itemsPerView)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {isArabic ? "شركاؤنا" : "Our Partners"}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {isArabic
            ? "نتعاون مع منظمات دولية وإقليمية رائدة لتحقيق أهدافنا"
            : "We collaborate with leading international and regional organizations to achieve our goals"}
        </p>
      </div>

      <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100 p-8">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {partners.map((partner) => (
              <div key={partner.id} className="flex-shrink-0 px-4" style={{ width: `${100 / itemsPerView}%` }}>
                <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 group">
                  <div className="flex items-center justify-center h-20 mb-4">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={isArabic ? partner.nameAr : partner.name}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-center text-slate-700 group-hover:text-blue-600 transition-colors duration-200">
                    {isArabic ? partner.nameAr : partner.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-blue-500 text-slate-600 hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous partners"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-blue-500 text-slate-600 hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next partners"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 5000)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-slate-300 hover:bg-blue-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
