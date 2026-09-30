import Link from "next/link";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28">
                <img src="/Assets/logo.png" alt="logo" />
              </div>
              {/* <div className="ml-2">
      <div className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wider">HUBTRIC</div>
      <div className="text-xs text-gray-600 uppercase tracking-wide">MANUFACTURING</div>
    </div> */}
            </Link>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm sm:text-base text-gray-600 hover:text-[#04A790] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm sm:text-base text-gray-600 hover:text-[#04A790] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/machinery"
                  className="text-sm sm:text-base text-gray-600 hover:text-[#04A790] transition-colors"
                >
                  Machinery
                </Link>
              </li>
              <li>
                <Link
                  href="/components"
                  className="text-sm sm:text-base text-gray-600 hover:text-[#04A790] transition-colors"
                >
                  Components
                </Link>
              </li>
            </ul>
          </div>

          {/* Machinery */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Machinery
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li className="text-sm sm:text-base text-gray-600">
                Traub Machining
              </li>
              <li className="text-sm sm:text-base text-gray-600">
                Centerless Grinding
              </li>
              <li className="text-sm sm:text-base text-gray-600">
                CNC Turning
              </li>
              <li className="text-sm sm:text-base text-gray-600">
                Drilling & Tapping
              </li>
              <li className="text-sm sm:text-base text-gray-600">
                Thread Rooling
              </li>
              <li className="text-sm sm:text-base text-gray-600">
                Cold Forging
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Contact Us
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-sm sm:text-base text-gray-600">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                <span>Raju K - +91 7204891239</span>
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-600">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                <span className="break-all">gangabhavani7india@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
            Copyrights © {new Date().getFullYear().toString()} GBA. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
