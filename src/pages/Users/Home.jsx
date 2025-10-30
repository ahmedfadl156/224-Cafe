import { motion } from "framer-motion";
import { Coffee, Sparkles, Gamepad2, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  function scroll() {
    window.scrollTo({
      top: document.getElementById("why-us").offsetTop,
      behavior: "smooth",
    });
  }
    const cards = [
        {
            icon: <Coffee className="w-12 h-12" />,
            title: "مشروبات مميزة",
            description: "جميع المشروبات المميزة محضرة بعناية وبأفضل طريقة"
        },
        {
            icon: <Gamepad2 className="w-12 h-12" />,
            title: "منطقة بلايستيشن",
            description: "أحدث أجهزة البلايستيشن في أجواء مريحة ومثالية للألعاب"
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "أجواء هادئة",
            description: "مكان مثالي للقاء الأصدقاء والاستمتاع بأوقات لا تُنسى"
        },
        {
            icon: <Sparkles className="w-12 h-12" />,
            title: "تجربة فاخرة",
            description: "تصميم عصري وخدمة راقية تجعل زيارتك تجربة استثنائية"
        },
    ]
  return (
    <>      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#3E2723] via-[#4E342E] to-[#5D4037]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            background: "url('/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Coffee Beans */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#D4A574]/20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          >
            <Coffee className="w-12 h-12" />
          </motion.div>
        ))}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <Sparkles className="w-16 h-16 text-[#D4A574]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-[#D4A574] mb-4 font-cairo"
          >
            كافيه 224
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-white/90 mb-6 font-tajawal"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              مكانك المفضل للقهوة والألعاب
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-tajawal"
          >
            استمتع بأفضل أنواع القهوة المحضرة بعناية، مع أجواء مريحة وألعاب بلايستيشن
            مثيرة. مكان واحد يجمع كل ما تحب!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 165, 116, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scroll}
              className="bg-[#D4A574] text-[#3E2723] px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-[#E5B684] transition-all font-tajawal flex items-center gap-3"
            >
              <Coffee className="w-6 h-6" />
              تعرف أكثر
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[#D4A574]/60 text-sm font-tajawal"
            >
              <div className="flex flex-col items-center gap-2">
                <span>اسحب للأسفل</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723] via-transparent to-transparent pointer-events-none"></div>
      </section>
      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-4 bg-gradient-to-b from-white to-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-black text-[#3E2723] mb-4 font-cairo"
            >
              لماذا كافيه 224؟
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-[#D4A574] mx-auto mb-6 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-[#3E2723]/70 max-w-2xl mx-auto leading-relaxed font-tajawal"
            >
              تجربة فريدة تجمع بين عشق القهوة ومتعة اللعب
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#D4A574]/20 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-6 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#D4A574] to-[#C19463] rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  {card.icon}
                </motion.div>

                <h3 className="relative text-2xl font-bold text-[#3E2723] mb-3 font-cairo group-hover:text-[#D4A574] transition-colors">
                  {card.title}
                </h3>

                <p className="relative text-[#3E2723]/70 leading-relaxed font-tajawal">
                  {card.description}
                </p>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 left-4 w-2 h-2 bg-[#D4A574] rounded-full opacity-50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  className="absolute bottom-4 right-4 w-2 h-2 bg-[#D4A574] rounded-full opacity-50"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#3E2723] via-[#4E342E] to-[#3E2723] py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#D4A574] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-black text-[#D4A574] font-cairo leading-tight"
              >
                ابدأ تجربتك معنا
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 leading-relaxed font-tajawal"
              >
                سواء كنت تبحث عن فنجان قهوة مميز، أو ترغب في قضاء وقت ممتع مع
                الأصدقاء في منطقة الألعاب، كافيه 224 هو وجهتك المثالية.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 165, 116, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D4A574] text-[#3E2723] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#E5B684] transition-all font-tajawal flex items-center justify-center gap-3"
                >
                  <Coffee className="w-5 h-5" />
                  <Link to="/menu">تصفح المنيو</Link>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-[#D4A574] text-[#D4A574] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D4A574]/10 transition-all font-tajawal flex items-center justify-center gap-3"
                >
                  <Gamepad2 className="w-5 h-5" />
                  البلايستيشن
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Image Container with Gradient Overlay */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#D4A574]/20 to-transparent">
                  <img
                    src="/coffe.jpg"
                    alt="Coffee Experience"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/60 via-transparent to-transparent" />
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border-4 border-[#D4A574]/30 rounded-3xl pointer-events-none" />
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4A574] rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4A574] rounded-full opacity-20 blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
