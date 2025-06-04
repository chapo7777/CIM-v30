"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { X, Mail, Phone, User, MessageSquare, Building, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContactFormPopupProps {
  isOpen: boolean
  onClose: () => void
  defaultSector?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  sector: string
  subject: string
  message: string
}

interface SectorOption {
  value: string
  labelAr: string
  labelEn: string
  email: string
}

export function ContactFormPopup({ isOpen, onClose, defaultSector }: ContactFormPopupProps) {
  const { isArabic } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    sector: defaultSector || "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  // Sector options with email addresses - you can update these with actual emails
  const sectorOptions: SectorOption[] = [
    {
      value: "general",
      labelAr: "الاستفسارات العامة",
      labelEn: "General Inquiries",
      email: "info@gaci.gov.ly",
    },
    {
      value: "regulation",
      labelAr: "إدارة التنظيم",
      labelEn: "Regulatory Affairs",
      email: "regulation@gaci.gov.ly",
    },
    {
      value: "technical",
      labelAr: "الشؤون التقنية",
      labelEn: "Technical Affairs",
      email: "technical@gaci.gov.ly",
    },
    {
      value: "cybersecurity",
      labelAr: "الأمن السيبراني",
      labelEn: "Cybersecurity",
      email: "cybersecurity@gaci.gov.ly",
    },
    {
      value: "eservices",
      labelAr: "الخدمات الإلكترونية",
      labelEn: "Electronic Services",
      email: "eservices@gaci.gov.ly",
    },
    {
      value: "international",
      labelAr: "العلاقات الدولية",
      labelEn: "International Relations",
      email: "international@gaci.gov.ly",
    },
    {
      value: "media",
      labelAr: "المركز الإعلامي",
      labelEn: "Media Center",
      email: "media@gaci.gov.ly",
    },
    {
      value: "complaints",
      labelAr: "الشكاوى والاقتراحات",
      labelEn: "Complaints & Suggestions",
      email: "complaints@gaci.gov.ly",
    },
  ]

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = isArabic ? "الاسم مطلوب" : "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = isArabic ? "البريد الإلكتروني مطلوب" : "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isArabic ? "البريد الإلكتروني غير صحيح" : "Invalid email format"
    }

    if (!formData.sector) {
      newErrors.sector = isArabic ? "يرجى اختيار القسم" : "Please select a sector"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = isArabic ? "الموضوع مطلوب" : "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = isArabic ? "الرسالة مطلوبة" : "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Find the selected sector's email
      const selectedSector = sectorOptions.find((sector) => sector.value === formData.sector)
      const recipientEmail = selectedSector?.email || "info@gaci.gov.ly"

      // Here you would typically send the email to your backend
      // For now, we'll simulate the API call
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail,
          sectorName: isArabic ? selectedSector?.labelAr : selectedSector?.labelEn,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            sector: defaultSector || "",
            subject: "",
            message: "",
          })
          setSubmitStatus("idle")
          onClose()
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className={`bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto ${isArabic ? "rtl" : "ltr"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className={`text-green-800 font-medium ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!"}
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className={`text-red-800 font-medium ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic
                    ? "حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى."
                    : "An error occurred while sending your message. Please try again."}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className={`block text-sm font-medium text-slate-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "الاسم الكامل" : "Full Name"} *
                </label>
                <div className="relative">
                  <User
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 ${isArabic ? "right-3" : "left-3"}`}
                  />
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`${isArabic ? "pr-10 text-right" : "pl-10"} ${errors.name ? "border-red-300" : ""}`}
                    placeholder={isArabic ? "أدخل اسمك الكامل" : "Enter your full name"}
                  />
                </div>
                {errors.name && (
                  <p className={`text-sm text-red-600 ${isArabic ? "text-right" : "text-left"}`}>{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className={`block text-sm font-medium text-slate-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "البريد الإلكتروني" : "Email Address"} *
                </label>
                <div className="relative">
                  <Mail
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 ${isArabic ? "right-3" : "left-3"}`}
                  />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`${isArabic ? "pr-10 text-right" : "pl-10"} ${errors.email ? "border-red-300" : ""}`}
                    placeholder={isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email address"}
                  />
                </div>
                {errors.email && (
                  <p className={`text-sm text-red-600 ${isArabic ? "text-right" : "text-left"}`}>{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className={`block text-sm font-medium text-slate-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "رقم الهاتف" : "Phone Number"}
                </label>
                <div className="relative">
                  <Phone
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 ${isArabic ? "right-3" : "left-3"}`}
                  />
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`${isArabic ? "pr-10 text-right" : "pl-10"}`}
                    placeholder={isArabic ? "أدخل رقم هاتفك" : "Enter your phone number"}
                  />
                </div>
              </div>

              {/* Sector */}
              <div className="space-y-2">
                <label className={`block text-sm font-medium text-slate-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "القسم المختص" : "Department"} *
                </label>
                <div className="relative">
                  <Building
                    className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 z-10 ${isArabic ? "right-3" : "left-3"}`}
                  />
                  <Select value={formData.sector} onValueChange={(value) => handleInputChange("sector", value)}>
                    <SelectTrigger
                      className={`${isArabic ? "pr-10 text-right" : "pl-10"} ${errors.sector ? "border-red-300" : ""}`}
                    >
                      <SelectValue placeholder={isArabic ? "اختر القسم المختص" : "Select department"} />
                    </SelectTrigger>
                    <SelectContent>
                      {sectorOptions.map((sector) => (
                        <SelectItem key={sector.value} value={sector.value}>
                          {isArabic ? sector.labelAr : sector.labelEn}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {errors.sector && (
                  <p className={`text-sm text-red-600 ${isArabic ? "text-right" : "text-left"}`}>{errors.sector}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className={`block text-sm font-medium text-slate-700 ${isArabic ? "text-right" : "text-left"}`}>
                {isArabic ? "موضوع الرسالة" : "Subject"} *
              </label>
              <Input
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className={`${isArabic ? "text-right" : ""} ${errors.subject ? "border-red-300" : ""}`}
                placeholder={isArabic ? "أدخل موضوع رسالتك" : "Enter the subject of your message"}
              />
              {errors.subject && (
                <p className={`text-sm text-red-600 ${isArabic ? "text-right" : "text-left"}`}>{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className={`block text-sm font-medium text-slate-700 ${isArabic ? "text-right" : "text-left"}`}>
                {isArabic ? "الرسالة" : "Message"} *
              </label>
              <div className="relative">
                <MessageSquare className={`absolute top-3 w-4 h-4 text-slate-400 ${isArabic ? "right-3" : "left-3"}`} />
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`min-h-[120px] ${isArabic ? "pr-10 text-right" : "pl-10"} ${errors.message ? "border-red-300" : ""}`}
                  placeholder={isArabic ? "اكتب رسالتك هنا..." : "Write your message here..."}
                />
              </div>
              {errors.message && (
                <p className={`text-sm text-red-600 ${isArabic ? "text-right" : "text-left"}`}>{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className={`flex gap-4 ${isArabic ? "flex-row-reverse" : ""}`}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isArabic ? "جاري الإرسال..." : "Sending..."}</span>
                  </div>
                ) : (
                  <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <Send className="w-4 h-4" />
                    <span>{isArabic ? "إرسال الرسالة" : "Send Message"}</span>
                  </div>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-6 py-3 rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                {isArabic ? "إلغاء" : "Cancel"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
