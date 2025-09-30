"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // 👉 Scroll үед аль section дээр байгааг highlight хийх
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // header өндрийг тооцно
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.replace("#", ""));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
      <div className="mx-auto container flex items-center justify-between px-4 py-3">
        {/* 🏡 Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          EO Guesthouse
        </Link>

        {/* 🌐 Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`font-medium transition-colors hover:text-blue-600 ${
                activeSection === item.href.replace("#", "")
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-left py-2 text-gray-800 font-medium ${
                  activeSection === item.href.replace("#", "")
                    ? "text-blue-600"
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
