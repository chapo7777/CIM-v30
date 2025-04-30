"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export default function StatisticsSection() {
  const { isArabic } = useLanguage()

  // Statistics data
  const data = [
    {
      name: isArabic ? "البريد الالكتروني - الاتصالات" : "Email - Communications",
      value: 23,
      color: "#3b82f6",
    },
    {
      name: isArabic ? "المعلومات الدراسة - الصحف الالكترونية" : "Study Information - Electronic Newspapers",
      value: 34,
      color: "#10b981",
    },
    {
      name: isArabic ? "المنتديات - التسوق" : "Forums - Shopping",
      value: 7,
      color: "#f59e0b",
    },
    {
      name: isArabic ? "التواصل الاجتماعي - التشغيل والتنزيلات" : "Social Media - Operations and Downloads",
      value: 36,
      color: "#6366f1",
    },
  ]

  return (
    <section className="py-12">
  <div className="container mx-auto px-2 sm:px-4">
    <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-center text-blue-600">
      {isArabic
        ? "احصائيات استخدام شبكة المعلومات حسب الانشطة"
        : "Information Network Usage Statistics by Activities"}
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center mb-8">
      <div style={{ height: '50vh' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
        {data.map((item, index) => (
          <Card key={index} className="border-blue-200">
            <CardContent className="p-4 sm:p-6 bg-white overflow-hidden">
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-12 sm:w-16 h-12 sm:h-16 rounded-full mb-2 sm:mb-4 flex items-center justify-center text-white text-lg sm:text-2xl font-bold"
                  style={{ backgroundColor: item.color }}
                >
                  {item.value}%
                </div>
                <p className="text-blue-900 text-sm sm:text-base">{item.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>
  )
}
