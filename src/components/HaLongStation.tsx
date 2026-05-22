import { motion } from "motion/react";
import { Train, TreePine, TrendingUp } from "lucide-react";

export default function HaLongStation() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-3xl font-display font-bold text-navy mb-8 leading-tight uppercase">
              HÉ LỘ HÌNH ẢNH CỦA HẠ LONG STATION TẠI VINHOMES GLOBAL GATE HẠ LONG
            </h2>
            <p className="text-gray-700 mb-6 text-lg font-semibold leading-relaxed">
              Không chỉ là một công trình hạ tầng, Hạ Long Station chính là “Ngọn Hải Đăng siêu đô thị” vận hành nhịp sống của Vinhomes Global Gate Hạ Long.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              🌊 Lấy cảm hứng từ những con sóng đại dương uốn lượn, Hạ Long Station không chỉ sở hữu kiến trúc biểu tượng mà còn là lời khẳng định cho một chuẩn sống mới: Sống xanh giữa lòng di sản – Kết nối tốc độ đến tương lai.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Train className="text-gold" size={24} />
                </div>
                <p className="text-navy font-medium">🚄 Chỉ 23 phút để kết nối Thủ đô Hà Nội.</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <TreePine className="text-gold" size={24} />
                </div>
                <p className="text-navy font-medium">🌳 Tọa lạc giữa 662 Công viên rừng Globle Hạ Long.</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-gold" size={24} />
                </div>
                <p className="text-navy font-medium">📈 Mô hình đô thị TOD (Transit Oriented Development) – Bảo chứng vàng cho giá trị bất động sản bền vững.</p>
              </div>
            </div>

            <p className="text-navy font-bold text-lg italic border-l-4 border-gold pl-6">
              Khi các yếu tố về hạ tầng, quy mô và tiện ích hội tụ, Vinhomes Global Gate Hạ Long sẽ thiết lập chuẩn mực mới cho thị trường bất động sản Việt Nam với dòng người,
            </p>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-navy/20 aspect-video w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[400px] xl:h-[450px]">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/wyjTw0Vv7N8?autoplay=0&rel=0&modestbranding=1"
                title="Hạ Long Station - Vinhomes Global Gate"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl lg:block hidden" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
