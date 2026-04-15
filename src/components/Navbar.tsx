import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-display font-bold text-navy text-xl">
            V
          </div>
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

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-gold text-navy font-bold rounded-full text-xs uppercase tracking-wider shadow-lg"
        >
          Nhận báo giá
        </motion.a>
      </div>
    </nav>
  );
}
