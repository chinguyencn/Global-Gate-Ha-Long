import { motion } from "motion/react";
import { ShieldCheck, Percent, Calendar } from "lucide-react";

const policies = [
  {
    icon: <Percent className="text-gold" size={40} />,
    title: "3,3%/năm",
    desc: "Cam kết lãi suất cố định cho năm đầu tiên."
  },
  {
    icon: <ShieldCheck className="text-gold" size={40} />,
    title: "Trần 9%/năm",
    desc: "Bảo hiểm lãi suất cho 2 năm tiếp theo."
  },
  {
    icon: <Calendar className="text-gold" size={40} />,
    title: "5 Năm",
    desc: "An tâm đầu tư dài hạn, tối ưu dòng tiền."
  }
];

export default function FinancialPolicy() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-navy rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Gold Ring */}
          <div className="absolute -top-20 -right-20 w-64 h-64 border-[20px] border-gold/10 rounded-full" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                SIÊU CHÍNH SÁCH: 5 NĂM KHÔNG LO LÃI SUẤT
              </motion.h2>
              <p className="text-gold-light text-xl font-semibold">"Cú hích" phá băng thị trường BĐS Hạ Long 2026</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {policies.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gold mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-white/10 text-center">
              <p className="text-gray-400 text-sm italic">
                * Chính sách áp dụng cho quỹ căn đợt 1. Vui lòng liên hệ chuyên viên để nhận tài liệu chi tiết.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
