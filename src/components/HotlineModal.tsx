import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, MessageSquare, Copy, Check } from "lucide-react";

export default function HotlineModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneNumber = "0785867676";

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-hotline-modal", handleOpen);
    return () => {
      window.removeEventListener("open-hotline-modal", handleOpen);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop Overlay with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-navy/80 backdrop-blur-md"
            id="hotline-overlay"
          />

          {/* Elegant Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-sm bg-navy border-2 border-gold/40 rounded-3xl overflow-hidden shadow-2xl z-10"
            id="hotline-card"
          >
            {/* Top decorative gradient bar */}
            <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

            {/* Close Button X */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all cursor-pointer"
              id="close-hotline-btn"
              aria-label="Đóng"
            >
              <X size={18} />
            </button>

            {/* Inner Content */}
            <div className="p-6 md:p-8 text-center flex flex-col items-center">
              
              {/* Spinning/pulsing luxury phone icon */}
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping opacity-75" />
                <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gold/10 border border-gold/30 text-gold shadow-lg shadow-gold/10">
                  <Phone size={18} className="animate-pulse" />
                </div>
              </div>

              {/* Title Section */}
              <h3 className="text-xs font-sans font-bold text-gold uppercase tracking-[0.2em] mb-1">
                HOTLINE TƯ VẤN ĐỘC QUYỀN ĐỢT 1
              </h3>

              {/* Large prominent phone number */}
              <div className="flex items-center gap-2 mb-3 group">
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-2xl md:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-white to-gold-light hover:scale-105 transition-transform"
                >
                  {phoneNumber}
                </a>
                <button
                  onClick={handleCopy}
                  title="Sao chép số điện thoại"
                  className="p-1 px-1.5 text-gold/60 hover:text-gold hover:bg-white/5 rounded transition-all flex items-center gap-1 cursor-pointer border border-gold/10 text-[10px]"
                >
                  {copied ? <Check size={10} className="text-emerald-400" /> : <Copy size={10} />}
                  <span>{copied ? "Đã copy" : "Copy"}</span>
                </button>
              </div>

              {/* Subtext description */}
              <p className="text-gray-300 text-[11px] md:text-xs leading-relaxed mb-4 px-2 font-sans">
                Quý khách vui lòng liên hệ hotline trên hoặc quét mã Zalo dưới đây để nhận thông tin chi tiết.
              </p>

              {/* QR Code Container/Placeholder - Reduced by 30-40% */}
              <div className="bg-white p-2.5 rounded-xl border border-gold/30 shadow-lg space-y-1.5 inline-block">
                {/* Simulated high-quality QR scaled down from w-40 to w-24 md:w-28 */}
                <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-50 flex items-center justify-center relative rounded-lg border border-gray-100 overflow-hidden">
                  {/* Top-left QR finder pattern */}
                  <div className="absolute top-1 left-1 w-5 h-5 md:w-6 md:h-6 border-2 border-navy rounded-xs flex items-center justify-center">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-navy" />
                  </div>
                  {/* Top-right QR finder pattern */}
                  <div className="absolute top-1 right-1 w-5 h-5 md:w-6 md:h-6 border-2 border-navy rounded-xs flex items-center justify-center">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-navy" />
                  </div>
                  {/* Bottom-left QR finder pattern */}
                  <div className="absolute bottom-1 left-1 w-5 h-5 md:w-6 md:h-6 border-2 border-navy rounded-xs flex items-center justify-center">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-navy" />
                  </div>
                  {/* Visual design elements representing the code */}
                  <div className="w-14 h-14 md:w-16 md:h-16 grid grid-cols-6 gap-0.5 opacity-80 mt-1">
                    {Array.from({ length: 36 }).map((_, idx) => {
                      // Custom mask logic to look like a real QR code with logo in the middle
                      const isCenter = idx >= 14 && idx <= 16 || idx >= 20 && idx <= 22;
                      if (isCenter) return <div key={idx} />;
                      const fill = (idx * 17) % 3 === 0 || (idx * 23) % 2 === 0;
                      return fill ? (
                        <div key={idx} className="bg-navy rounded-xs" />
                      ) : (
                        <div key={idx} />
                      );
                    })}
                  </div>
                  {/* Center Zalo image/logo decoration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0068FF] rounded border border-white shadow-md flex items-center justify-center p-0.5">
                      <span className="text-white text-[6px] md:text-[7px] font-black tracking-tighter">Zalo</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-navy text-[9px] md:text-[10px] font-bold block tracking-wider">ZALO TRƯỞNG PHÒNG KD</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-2.5 w-full">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2.5 border border-white/25 hover:bg-white/5 text-white/80 hover:text-white font-medium text-xs rounded-lg transition-all cursor-pointer font-sans"
                >
                  Đóng
                </button>
                <a
                  href={`https://zalo.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-gradient-to-r from-[#0068FF] to-[#0052cc] hover:from-[#005be0] hover:to-[#0047b3] text-white font-bold text-xs rounded-lg shadow-lg shadow-[#0068FF]/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer font-sans"
                >
                  <MessageSquare size={14} />
                  Nhắn tin Zalo
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
