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
            <h2 className="text-xl md:text-3xl font-display font-bold text-navy mb-8 leading-tight">
              TẠI SAO GIỚI ĐẦU TƯ SÀNH SỎI LUÔN SĂN ĐÓN BĐS QUANH GA METRO?
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Mô hình TOD (Transit-Oriented Development) không chỉ là xu hướng, mà là "mỏ neo" lợi nhuận vĩnh cửu. Khi khoảng cách được tính bằng phút thay vì km, mặt bằng giá Hạ Long sẽ tiệm cận giá trung tâm Thủ đô.
            </p>

            <div className="space-y-8">
              {stats.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex gap-6 items-start">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  
                  {index === 2 && (
                    <div className="pl-14 pt-4 mt-2">
                      <div className="flex items-center gap-2 mb-4 text-emerald-600 font-bold text-lg">
                        <span>🍃</span>
                        <h4 className="font-display">12 tiện ích nổi bật</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 bg-gray-50 p-5 rounded-xl border border-gray-100">
                        {[
                          "Công viên rừng: 662ha",
                          "TOD và outlet : 73ha",
                          "Tổ hợp 12 sân Golf : 950ha",
                          "Vinwonder: 81ha",
                          "Toà tháp văn phòng 35 - 45 tầng",
                          "Điểm đến văn hoá sự kiện: 16.4ha",
                          "Vin New Horizon: 158ha",
                          "Công viên rừng ngập mặn: 800ha",
                          "Hệ thống khách sạn 5-6 sao",
                          "Sòng Bạc hoàng gia Casino Royal Bay",
                          "Hệ thống hàng trăm công viên nội khu",
                          "Hệ thống biển Lagoon lớn nhất miền Bắc: 680ha"
                        ].map((amenity, i) => (
                          <div key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-gold font-bold font-mono">{i + 1}.</span>
                            <span className="font-medium">{amenity}</span>
                          </div>
                        ))}
                      </div>

                      {/* Spotlight Highlight Event Venue Image */}
                      <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">
                        <div className="relative overflow-hidden aspect-[1280/714]">
                          <img 
                            src="https://i.postimg.cc/Wz6pFfCw/wonder-theatre.png" 
                            alt="Nhà hát Wonder Theatre" 
                            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500 ease-in-out"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="p-5 bg-white">
                          <p className="text-navy font-bold text-base mb-1.5 flex items-center gap-1.5">
                            <span className="text-gold">🎭</span> Wonder Theatre & Tổ hợp sự kiện đẳng cấp quốc tế
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Nhà hát Wonder Theatre với 3.000 chỗ – Trung tâm hội nghị quốc tế – Sân khấu tổ chức sự kiện ngoài trời view biển lên tới 60.000 chỗ lớn nhất Việt Nam.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
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
                src="https://i.postimg.cc/Ss5FHPDS/tod-metro-chart.png" 
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
