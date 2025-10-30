import { motion } from "framer-motion";

export default function MenuCard({item}) {
return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden w-full border border-gray-100"
    >
        <div className="relative overflow-hidden h-56">
            <img 
                src={item.image_url} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 bg-[#D4A574] text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                {item.price} جنيه
            </div>
        </div>
        
        <div className="p-6">
            <h2 className="text-2xl font-bold text-[#3E2723] mb-3 group-hover:text-[#D4A574] transition-colors duration-300 font-cairo">
                {item.name}
            </h2>
            <p className="text-gray-600 leading-relaxed line-clamp-3 font-cairo">
                {item.description}
            </p>
        </div>
    </motion.div>
)
}
