import { motion } from "framer-motion";
import { Heart, Star, Users } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "اليوم",
      description: "نركز على جعل كل لحظة لك معنا تجربة فريدة ومريحة.",
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "غداً",
      description: "نسعى دائماً للتطور، لنقدم لك كل جديد في عالم القهوة والترفيه.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "إلى الأبد",
      description:
        "نؤمن أن عملاءنا جزء من عائلة 224، ننمو معهم ونبني معهم ذكريات لا تُنسى.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: "url('/About.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-[#3E2723]/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-[#D4A574] mb-6 font-cairo"
          >
            من نحن
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 font-tajawal leading-relaxed"
          >
            نحن نقدم لك أفضل تجربة في كافيه 224
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 font-cairo text-center"
          >
            قصة كافيه 224
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#D4A574] font-cairo text-2xl md:text-3xl mb-8 text-center"
          >
            اليوم. غدًا. إلى الأبد.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl text-center text-lg text-gray-700 leading-relaxed mb-6 font-tajawal"
          >
            في قلب منطقة الـ 28 بدمياط الجديدة، ووسط أجواء هادئة ومريحة، تأسس
            كافيه 224 ليكون أكثر من مجرد مكان لتناول القهوة — بل مساحة تجمع بين
            الدفء، الأناقة، والروح الشبابية.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl text-center text-lg text-gray-600 leading-relaxed mb-12 font-tajawal"
          >
            نحن نؤمن أن القهوة ليست مشروباً فحسب، بل تجربة تُعاش. لذلك حرصنا على
            تقديمها بأفضل جودة، مع تفاصيل تجعل كل زيارة لحظة خاصة لا تُنسى. سواء
            جئت لتبدأ يومك بهدوء على فنجان قهوة طازجة، أو لقضاء وقت ممتع في منطقة
            البلايستيشن مع أصدقائك، ستجد في 224 مزيجاً مثالياً من الراحة والمرح.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.span
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#D4A574] text-white w-20 h-20 rounded-full flex items-center justify-center"
                >
                  {card.icon}
                </motion.span>
                <h3 className="text-2xl font-bold font-cairo text-[#3E2723]">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-center font-tajawal leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-12 font-cairo text-center"
          >
            أجواءنا الفريدة
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="/photo.jpg"
                alt="أجواء كافيه 224"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="/photo-2.jpg"
                alt="أجواء كافيه 224"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
