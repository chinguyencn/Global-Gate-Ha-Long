import { motion } from "motion/react";
import { Train, TrendingUp, MapPin } from "lucide-react";

const stats = [
  {
    icon: <Train className="text-gold" size={32} />,
    title: "Tiền lệ quốc tế",
    desc: "Tuyến Crossrail (Anh) hay Shinkansen (Nhật) giúp BĐS tăng 5-10 lần giá trị.",
  },
  {
    icon: <TrendingUp className="text-gold" size={32} />,
    title: "Cơ hội Việt Nam",
    desc: "Tuyến Metro số 1 TP.HCM giúp giá dự án lân cận tăng 50-200%.",
  },
  {
    icon: <MapPin className="text-gold" size={32} />,
    title: "Ga depot Vinspeed",
    desc: "Tích hợp Ga Depot ngay lòng dự án. Khoảng cách tới Hà Nội chỉ còn 23 phút.",
  },
];

export default function TodLogic() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-8 leading-tight">
              TẠI SAO GIỚI ĐẦU TƯ SÀNH SỎI LUÔN SĂN ĐÓN BĐS QUANH GA METRO?
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Mô hình TOD (Transit-Oriented Development) không chỉ là xu hướng, mà là "mỏ neo" lợi nhuận vĩnh cửu. Khi khoảng cách được tính bằng phút thay vì km, mặt bằng giá Hạ Long sẽ tiệm cận giá trung tâm Thủ đô.
            </p>

            <div className="space-y-8">
              {stats.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-navy/5">
              <img 
                src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop" 
                alt="Metro Station Chart Concept" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy/10 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs">
                  <p className="text-gold font-bold text-3xl mb-1">+200%</p>
                  <p className="text-navy text-sm font-semibold">Tăng trưởng giá trị BĐS lân cận Ga Metro</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-navy/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
