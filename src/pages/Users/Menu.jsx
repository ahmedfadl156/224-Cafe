import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMenu } from "../../services/Menu/getMenu";
import MenuCard from "../../components/menuCard";
export default function Menu() {
    const {MenuData , isPending , error} = useMenu();
    const [filteredMenu , setFilteredMenu] = useState([]);
    const [activeFilter , setActiveFilter] = useState("all");

    useEffect(() => {
        if (MenuData) {
            setFilteredMenu(MenuData);
            setActiveFilter("all");
        }
    }, [MenuData]);
    if(isPending){
        return <div>loading...</div>
    }
    if(error){
        return <div>{error.message}</div>
    }

    function filterMenu(type){
       if(type === "all"){
        setFilteredMenu(MenuData);
        setActiveFilter("all");
       }else{
        setFilteredMenu(MenuData?.filter((item) => item.category === type));
        setActiveFilter(type);
       }
    }
return (
    <>
    <section className="py-20 px-4 relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
        <div
            className="absolute inset-0"
            style={{
            background: "url('/menu.jpg')",
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
            المنيو
        </motion.h1>
        </motion.div>
    </section>

    {/* Menu Section */}
    <section className="py-20 px-4">
        <div className="filter-container flex justify-center items-center gap-4 flex-wrap max-w-7xl mx-auto mb-10">
            <button onClick={() => filterMenu("all")} className={`filter-button px-4 py-2 rounded-full font-bold text-lg transition-all font-tajawal ${activeFilter === "all" ? "bg-[#3E2723] text-[#D4A574] ring-2 ring-[#D4A574] shadow-xl scale-105" : "bg-[#D4A574] text-white hover:bg-[#E5B684] shadow-lg"}`}>الكل</button>
            <button onClick={() => filterMenu("Hot Drinks")} className={`filter-button px-4 py-2 rounded-full font-bold text-lg transition-all font-tajawal ${activeFilter === "Hot Drinks" ? "bg-[#3E2723] text-[#D4A574] ring-2 ring-[#D4A574] shadow-xl scale-105" : "bg-[#D4A574] text-white hover:bg-[#E5B684] shadow-lg"}`}>المشروبات الساخنة</button>
            <button onClick={() => filterMenu("Cold Drinks")} className={`filter-button px-4 py-2 rounded-full font-bold text-lg transition-all font-tajawal ${activeFilter === "Cold Drinks" ? "bg-[#3E2723] text-[#D4A574] ring-2 ring-[#D4A574] shadow-xl scale-105" : "bg-[#D4A574] text-white hover:bg-[#E5B684] shadow-lg"}`}>المشروبات الباردة</button>
            <button onClick={() => filterMenu("Coffee")} className={`filter-button px-4 py-2 rounded-full font-bold text-lg transition-all font-tajawal ${activeFilter === "Coffee" ? "bg-[#3E2723] text-[#D4A574] ring-2 ring-[#D4A574] shadow-xl scale-105" : "bg-[#D4A574] text-white hover:bg-[#E5B684] shadow-lg"}`}>القهوة</button>
            <button onClick={() => filterMenu("Milkshake")} className={`filter-button px-4 py-2 rounded-full font-bold text-lg transition-all font-tajawal ${activeFilter === "Milkshake" ? "bg-[#3E2723] text-[#D4A574] ring-2 ring-[#D4A574] shadow-xl scale-105" : "bg-[#D4A574] text-white hover:bg-[#E5B684] shadow-lg"}`}>الميلك شيك</button>
            <button onClick={() => filterMenu("Fresh Juices")} className={`filter-button px-4 py-2 rounded-full font-bold text-lg transition-all font-tajawal ${activeFilter === "Fresh Juices" ? "bg-[#3E2723] text-[#D4A574] ring-2 ring-[#D4A574] shadow-xl scale-105" : "bg-[#D4A574] text-white hover:bg-[#E5B684] shadow-lg"}`}>العصائر الفريش</button>
            <button onClick={() => filterMenu("Waffle")} className={`filter-button px-4 py-2 rounded-full font-bold text-lg transition-all font-tajawal ${activeFilter === "Waffle" ? "bg-[#3E2723] text-[#D4A574] ring-2 ring-[#D4A574] shadow-xl scale-105" : "bg-[#D4A574] text-white hover:bg-[#E5B684] shadow-lg"}`}>الوفل</button>
        </div>
        {filteredMenu?.length === 0 ? (
            <div>لا يوجد منيو</div>
        ) : (
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu?.map((item) => (
                <MenuCard key={item.id} item={item} />
            ))}
            </div>
        )}
    </section>
    </>
)
}
