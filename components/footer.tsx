import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16 sticky-bottom-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Logo Section */}
        <div>
          <Link href="/" aria-label="Homepage">
            <div className="inline-flex items-center space-x-2">
              {/* Replace with your logo image */}
              <Image
                src="/logo.png"
                alt="CIM Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-semibold">General Authority of Telecom & Informatics</span>
            </div>
          </Link>
          <p className="text-sm mt-2 text-gray-400">
            © {new Date().getFullYear()} General Authority of Telecom & Informatics. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <Link href="/legals/TOS" className="block text-sm hover:text-primary-400">
            Terms of Service
          </Link>
          <Link href="/privacy" className="block text-sm hover:text-primary-400">
            Privacy Policy
          </Link>
          <Link href="/contact" className="block text-sm hover:text-primary-400">
            Contact Us
          </Link>
        </div>

        {/* Language Switcher / Extra Section */}
        <div className="space-y-2">
          <div className="text-sm text-gray-500">Built for CIM Libya.</div>
        </div>
      </div>
    </footer>
  );
}
