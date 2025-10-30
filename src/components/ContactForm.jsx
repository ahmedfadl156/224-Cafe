import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-[#3E2723] font-semibold mb-2 font-cairo">
          الاسم
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all font-cairo"
          placeholder="أدخل اسمك"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[#3E2723] font-semibold mb-2 font-cairo">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all font-cairo"
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-[#3E2723] font-semibold mb-2 font-cairo">
          رقم الهاتف
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all font-cairo"
          placeholder="01xxxxxxxxx"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[#3E2723] font-semibold mb-2 font-cairo">
          الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A574] focus:border-transparent transition-all resize-none font-cairo"
          placeholder="اكتب رسالتك هنا..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#D4A574] to-[#C4956A] text-white py-4 rounded-xl font-bold text-lg hover:from-[#C4956A] hover:to-[#B4855A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-cairo"
      >
        إرسال الرسالة
      </button>
    </motion.form>
  );
}
