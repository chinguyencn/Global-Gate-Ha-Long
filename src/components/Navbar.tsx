import React from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const handleHotlineClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
                    || window.innerWidth < 1024;
    if (isMobile) {
      window.location.href = "tel:0785867676";
    } else {
      window.dispatchEvent(new CustomEvent("open-hotline-modal"));
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.postimg.cc/SN3s1sMc/logo.png" 
            alt="Vinhomes Global Gate Halong" 
            className="w-11 h-11 object-contain rounded-full shadow-md shadow-emerald-950/20"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-white font-display font-bold leading-none tracking-tight">VINHOMES</span>
            <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">Global Gate</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
          <a href="#" className="hover:text-gold transition-colors">Trang chủ</a>
          <a href="#" className="hover:text-gold transition-colors">Kỷ nguyên TOD</a>
          <a href="#" className="hover:text-gold transition-colors">Sản phẩm</a>
          <a href="#" className="hover:text-gold transition-colors">Chính sách</a>
        </div>

        <motion.button
          onClick={handleHotlineClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-black rounded-full text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 border border-white/20 transition-all cursor-pointer animate-pulse font-sans"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          HOTLINE: 0785867676
        </motion.button>
      </div>
    </nav>
  );
}
