import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';
import ContactInfo from '../../components/ContactInfo';

export default function ContactUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: "url('/contact.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-[#3E2723]/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-[#D4A574] mb-6 font-cairo"
          >
            تواصل معنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/90 font-cairo"
          >
            نحن هنا للإجابة على استفساراتك وتلبية احتياجاتك
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-[#3E2723] mb-8 font-cairo"
              >
                معلومات الاتصال
              </motion.h2>
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-[#3E2723] mb-8 font-cairo"
              >
                أرسل لنا رسالة
              </motion.h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-[#3E2723] mb-8 text-center font-cairo"
          >
            موقعنا على الخريطة
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.1234567890!2d31.6519144!3d31.4343567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9e30078c670a1%3A0xadaff7b84ab15b11!2z2YPYp9mB2YrZhyDZiNio2YTYp9mKINin2LPYqtmK2LTZhiAyMjQ!5e0!3m2!1sar!2seg!4v1698765432100!5m2!1sar!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع كافيه وبلاي استيشن 224"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
