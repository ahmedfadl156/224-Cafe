import { motion } from "framer-motion";
import { Coffee, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = {
    quickLinks: [
      { name: "الرئيسية", path: "/" },
      { name: "من نحن", path: "/about" },
      { name: "القائمة", path: "/menu" },
      { name: "البلايستيشن", path: "/playstation" },
    ],
    services: [
      { name: "المشروبات الساخنة", path: "/menu#hot" },
      { name: "المشروبات الباردة", path: "/menu#cold" },
      { name: "الحلويات", path: "/menu#desserts" },
      { name: "حجز البلايستيشن", path: "/playstation" },
    ],
  };

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: "دمياط الجديدة مجاورة 28" },
    { icon: <Phone className="w-5 h-5" />, text: "01050075993" },
    { icon: <Mail className="w-5 h-5" />, text: "info@224cafe.com" },
    { icon: <Clock className="w-5 h-5" />, text: "يومياً: 9 صباحاً - 4 صباحاً" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", name: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#3E2723] to-[#2C1810] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center gap-3 group">
              <Coffee className="w-10 h-10 text-[#D4A574] group-hover:rotate-12 transition-transform" />
              <div>
                <div className="text-2xl font-bold text-[#D4A574] font-cairo">224 Café</div>
                <div className="text-xs text-[#D4A574]/70 font-cairo">Today.Tomorrow.Forever</div>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed font-tajawal">
              وجهتك المثالية للاستمتاع بأفضل أنواع القهوة في أجواء مريحة ومميزة مع أحدث ألعاب البلايستيشن.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#D4A574]/10 hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <span className="text-[#D4A574] group-hover:text-[#3E2723] transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-[#D4A574] mb-6 font-cairo">روابط سريعة</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#D4A574] transition-colors font-tajawal flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-[#D4A574] mb-6 font-cairo">خدماتنا</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-white/70 hover:text-[#D4A574] transition-colors font-tajawal flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-[#D4A574] mb-6 font-cairo">تواصل معنا</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70 font-tajawal">
                  <span className="text-[#D4A574] mt-1 flex-shrink-0">{info.icon}</span>
                  <span className="leading-relaxed">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white/60 text-sm font-tajawal text-center md:text-right"
            >
              © {new Date().getFullYear()} كافيه 224. جميع الحقوق محفوظة.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-6 text-sm"
            >
              <Link to="/privacy" className="text-white/60 hover:text-[#D4A574] transition-colors font-tajawal">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-[#D4A574] transition-colors font-tajawal">
                الشروط والأحكام
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
