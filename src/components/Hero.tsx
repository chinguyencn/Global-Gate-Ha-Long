import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=2070&auto=format&fit=crop"
          alt="Hạ Long Bay Night View"
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold-light text-sm font-semibold mb-6 tracking-widest uppercase">
            Cơ hội đầu tư F1 - Đợt 1
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            VINHOMES GLOBAL GATE HẠ LONG – ĐÓN ĐẦU CHU KỲ TĂNG GIÁ TỪ <span className="text-gold">"SIÊU HẠ TẦNG"</span> 18 TỶ USD
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Sở hữu quỹ căn đợt 1 tại "Hà Nội mới" bên vịnh di sản. Kết nối tốc độ cao 350km/h – Rút ngắn thời gian di chuyển chỉ còn 23 phút.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold hover:bg-gold-dark text-navy font-bold rounded-lg flex items-center gap-2 transition-all shadow-xl"
            >
              <Download size={20} />
              TẢI TRỌN BỘ QUY HOẠCH & BẢNG GIÁ
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 backdrop-blur-sm flex items-center gap-2 transition-all"
            >
              KHÁM PHÁ DỰ ÁN
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Ga Depot Vinspeed Visual Hint */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span>Cuộn để khám phá kỷ nguyên TOD</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
