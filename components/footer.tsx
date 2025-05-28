"use client"

import { useLanguage } from "@/contexts/language-context"
import { Phone, Mail, MapPin, Globe, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const { isArabic } = useLanguage()

  return (
    <footer className={`bg-gradient-to-br from-slate-900 to-blue-900 text-white ${isArabic ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                G
              </div>
              <div>
                <h3 className="text-xl font-bold">GACI</h3>
                <p className="text-sm text-blue-200">
                  {isArabic
                    ? "الهيئة العامة للاتصالات والمعلوماتية"
                    : "General Authority for Communications & Informatics"}
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {isArabic
                ? "نعمل على تطوير وتنظيم قطاع الاتصالات وتكنولوجيا المعلومات في ليبيا لخدمة المواطنين والشركات."
                : "We work to develop and regulate the telecommunications and information technology sector in Libya to serve citizens and businesses."}
            </p>
          </div>

          {/* Quick Links */}
          <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
            <h4 className="text-lg font-semibold text-blue-200">{isArabic ? "روابط سريعة" : "Quick Links"}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-slate-300 hover:text-white transition-colors duration-200">
                  {isArabic ? "عن الهيئة" : "About Us"}
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-300 hover:text-white transition-colors duration-200">
                  {isArabic ? "خدماتنا" : "Our Services"}
                </a>
              </li>
              <li>
                <a href="/news" className="text-slate-300 hover:text-white transition-colors duration-200">
                  {isArabic ? "الأخبار" : "News"}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-300 hover:text-white transition-colors duration-200">
                  {isArabic ? "اتصل بنا" : "Contact Us"}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
            <h4 className="text-lg font-semibold text-blue-200">{isArabic ? "خدماتنا" : "Our Services"}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services/communications-regulation"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {isArabic ? "تنظيم الاتصالات" : "Communications Regulation"}
                </a>
              </li>
              <li>
                <a
                  href="/services/e-government"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {isArabic ? "الحكومة الإلكترونية" : "E-Government"}
                </a>
              </li>
              <li>
                <a
                  href="/services/cybersecurity"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {isArabic ? "الأمن السيبراني" : "Cybersecurity"}
                </a>
              </li>
              <li>
                <a
                  href="/services/digital-transformation"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {isArabic ? "التحول الرقمي" : "Digital Transformation"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}>
            <h4 className="text-lg font-semibold text-blue-200">
              {isArabic ? "معلومات التواصل" : "Contact Information"}
            </h4>
            <div className="space-y-3">
              <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">+218-21-123-4567</span>
              </div>
              <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">info@gaci.gov.ly</span>
              </div>
              <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">{isArabic ? "طرابلس، ليبيا" : "Tripoli, Libya"}</span>
              </div>
              <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">www.gaci.gov.ly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-slate-700 pt-8">
          <div
            className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isArabic ? "md:flex-row-reverse" : ""}`}
          >
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">{isArabic ? "تابعنا على:" : "Follow us:"}</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-300 transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors duration-200"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-slate-400 text-sm text-center">
              {isArabic
                ? `© ${new Date().getFullYear()} الهيئة العامة للاتصالات والمعلوماتية. جميع الحقوق محفوظة.`
                : `© ${new Date().getFullYear()} General Authority for Communications & Informatics. All rights reserved.`}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
