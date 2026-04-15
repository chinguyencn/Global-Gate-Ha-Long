export default function Footer() {
  return (
    <footer className="bg-navy py-12 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gold rounded flex items-center justify-center font-display font-bold text-navy">
            V
          </div>
          <span className="text-white font-display font-bold text-xl">VINHOMES GLOBAL GATE</span>
        </div>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
          Đại lý phân phối chính thức dự án Vinhomes Global Gate Hạ Long. Cam kết thông tin chính xác, quỹ căn ngoại giao đợt 1.
        </p>
        <div className="flex justify-center gap-6 text-gray-400 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-gold transition-colors">Pháp lý</a>
          <a href="#" className="hover:text-gold transition-colors">Quy hoạch</a>
          <a href="#" className="hover:text-gold transition-colors">Liên hệ</a>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-gray-600 text-[10px]">
          © 2026 Vinhomes Global Gate Hạ Long. All rights reserved. Designed by International Expert.
        </div>
      </div>
    </footer>
  );
}
