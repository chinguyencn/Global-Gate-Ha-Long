import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Phone } from "lucide-react";

export default function ZaloButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "0785867676";
  const greeting = "chào Anh/Chị! Rất vui được kết nối với Anh/Chị qua dự án VINHOMES GLOBAL GATE HẠ LONG";

  const handleHotlineClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
                    || window.innerWidth < 1024;
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      window.dispatchEvent(new CustomEvent("open-hotline-modal"));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-[280px] relative"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-[#0068FF]/10 rounded-full flex items-center justify-center">
                <Phone className="text-[#0068FF]" size={24} />
              </div>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                {greeting}
              </p>
              <button 
                onClick={handleHotlineClick}
                className="text-xl font-bold text-[#0068FF] hover:underline cursor-pointer font-sans"
              >
                {phoneNumber}
              </button>
              <a 
                href={`https://zalo.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-[#0068FF] text-white text-sm font-bold rounded-lg shadow-lg hover:bg-[#005ae0] transition-all flex items-center justify-center gap-2 font-sans"
              >
                <MessageCircle size={16} fill="currentColor" />
                Mở Zalo ngay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center gap-1 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative flex items-center justify-center w-16 h-16 bg-[#0068FF] rounded-full shadow-2xl pulse-effect overflow-hidden">
          {isOpen ? (
            <X className="text-white w-8 h-8" />
          ) : (
            <MessageCircle className="text-white w-8 h-8" fill="currentColor" />
          )}
        </div>
        <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-[#0068FF] shadow-md uppercase tracking-wider group-hover:bg-[#0068FF] group-hover:text-white transition-colors">
          Zalo
        </span>
      </motion.button>
    </div>
  );
}
