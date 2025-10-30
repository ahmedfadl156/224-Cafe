import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      path: "/",
      label: "الرئيسية",
    },
    {
      path: "/about",
      label: "من نحن",
    },
    {
      path: "/menu",
      label: "القائمة",
    },
    {
      path: "/contact",
      label: "تواصل معنا",
    },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 bg-[#3E2723]/95 z-50 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Coffee className="w-8 h-8 text-[#D4A574] group-hover:rotate-12 transition-transform" />
            <div className="text-right">
              <div className="text-2xl font-bold text-[#D4A574] font-cairo">
                224 Café
              </div>
              <div className="text-xs text-[#D4A574]/70 font-cairo">
                Today.Tomorrow.Forever
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  className="font-bold text-lg text-white hover:text-[#D4A574] transition-colors font-tajawal"
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#D4A574] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    className="block font-bold text-lg text-white hover:text-[#D4A574] transition-colors font-tajawal py-2"
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}