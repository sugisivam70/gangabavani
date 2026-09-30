"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import { ContactNavButton } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  // const router = useRouter(); // Removed as per edit hint

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24">
                <Image
                  src="/Assets/logo.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              {/* <div className="ml-2">
                <div className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wider">GBA</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">MANUFACTURING</div>
              </div> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="sticky top-0 z-50 w-full flex justify-center py-2 backdrop-blur px-6 py-2">
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-[#04A790]" : "text-gray-700"
                } hover:text-[#048272] font-medium transition-colors`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-[#04A790]" : "text-gray-700"
                } hover:text-[#048272] font-medium transition-colors`}
              >
                About Us
              </Link>
              <Link
                href="/machinery"
                className={`${
                  pathname === "/machinery" ? "text-[#04A790]" : "text-gray-700"
                } hover:text-[#048272] font-medium transition-colors`}
              >
                Machinery
              </Link>
              <Link
                href="/components"
                className={`${
                  pathname === "/components"
                    ? "text-[#04A790]"
                    : "text-gray-700"
                } hover:text-[#048272] font-medium transition-colors`}
              >
                Components
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-[#04A790]" : "text-gray-700"
                } hover:text-[#048272] font-medium transition-colors`}
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Desktop Order Button */}
          <ContactNavButton className="hidden md:block bg-[#04A790] hover:bg-[#048272] text-white px-4 lg:px-6 py-2 rounded-full font-medium text-sm lg:text-base text-nowrap">
            Order Now
          </ContactNavButton>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
