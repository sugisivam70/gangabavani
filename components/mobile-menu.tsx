"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button, ContactNavButton } from "@/components/ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/machinery", label: "Machinery" },
    { href: "/components", label: "Components" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="p-2 text-gray-700 hover:text-[#048272] transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleMenu}
          />

          {/* Menu */}
          <div className="fixed top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
            <nav className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`block py-2 text-lg font-medium transition-colors ${
                    pathname === item.href
                      ? "text-[#04A790]"
                      : "text-gray-700 hover:text-[#048272]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <ContactNavButton
                  className="w-full bg-[#04A790] hover:bg-[#048272] text-white py-3 rounded-full font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Order Now
                </ContactNavButton>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
