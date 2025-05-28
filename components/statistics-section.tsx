"use client"

import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"

interface StatisticProps {
  value: number
  label: string
  suffix?: string
  duration?: number
}

function AnimatedCounter({ value, label, suffix = "", duration = 2000 }: StatisticProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`stat-${label}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [label])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startValue = 0
    const endValue = value

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return (
    <div id={`stat-${label}`} className="text-center group">
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
          {count.toLocaleString()}
          {suffix}
        </div>
        <div className="text-slate-600 font-medium">{label}</div>
      </div>
    </div>
  )
}

export default function StatisticsSection() {
  const { isArabic } = useLanguage()

  const statistics = [
    {
      value: 250000,
      suffix: "+",
      labelAr: "مستخدم مسجل",
      labelEn: "Registered Users",
    },
    {
      value: 1200000,
      suffix: "+",
      labelAr: "معاملة مكتملة",
      labelEn: "Completed Transactions",
    },
    {
      value: 98,
      suffix: "%",
      labelAr: "معدل الرضا",
      labelEn: "Satisfaction Rate",
    },
    {
      value: 24,
      suffix: "/7",
      labelAr: "خدمة مستمرة",
      labelEn: "24/7 Service",
    },
  ]

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {isArabic ? "إحصائياتنا" : "Our Statistics"}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {isArabic
            ? "أرقام تعكس التزامنا بتقديم خدمات متميزة وموثوقة"
            : "Numbers that reflect our commitment to providing excellent and reliable services"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statistics.map((stat, index) => (
          <AnimatedCounter
            key={index}
            value={stat.value}
            suffix={stat.suffix}
            label={isArabic ? stat.labelAr : stat.labelEn}
            duration={2000 + index * 200}
          />
        ))}
      </div>
    </section>
  )
}
