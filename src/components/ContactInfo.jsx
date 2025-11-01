import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: 'الهاتف',
      info: '01023764309',
      link: 'tel:01023764309'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      info: 'info@224cafe.com',
      link: 'mailto:info@224cafe.com'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      info: 'دمياط الجديدة مجاورة 28 بجانب نادى وادى دجلة',
      link: null
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      info: 'يومياً من 9 صباحاً - 5 صباحاً',
      link: null
    }
  ];

  return (
    <div className="space-y-6">
      {contactDetails.map((detail, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
        >
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-[#D4A574] to-[#C4956A] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <detail.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#3E2723] font-bold text-lg mb-2 font-cairo">
                {detail.title}
              </h3>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-gray-600 hover:text-[#D4A574] transition-colors font-cairo"
                >
                  {detail.info}
                </a>
              ) : (
                <p className="text-gray-600 font-cairo phone">{detail.info}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
