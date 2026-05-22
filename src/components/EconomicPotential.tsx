import { motion } from "motion/react";
import { BarChart3, Landmark, Globe } from "lucide-react";

const metrics = [
  {
    label: "Tăng trưởng GRDP",
    value: "11,89%",
    sub: "Top 1 Miền Bắc",
    icon: <BarChart3 className="text-white" />,
    color: "bg-[#053026] border border-emerald-800/40 hover:border-gold/30 shadow-[0_4px_20px_rgba(5,48,38,0.3)]",
    textColor: "text-gold"
  },
  {
    label: "Thu ngân sách kỷ lục",
    value: "82.235 Tỷ",
    sub: "Đồng",
    icon: <Landmark className="text-white" />,
    color: "bg-[#053026] border border-emerald-800/40 hover:border-gold/30 shadow-[0_4px_20px_rgba(5,48,38,0.3)]",
    textColor: "text-gold"
  },
  {
    label: "Quy mô dự án",
    value: "6.220 Ha",
    sub: "Đại đô thị biển",
    icon: <Globe className="text-white" />,
    color: "bg-[#053026] border border-emerald-800/40 hover:border-gold/30 shadow-[0_4px_20px_rgba(5,48,38,0.3)]",
    textColor: "text-gold"
  }
];

export default function EconomicPotential() {
  return (
    <section className="py-24 bg-navy-light text-white relative overflow-hidden">
      {/* Abstract background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            HẠ LONG – CỰC TĂNG TRƯỞNG MỚI CỦA MIỀN BẮC
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Quảng Ninh không chỉ là thủ phủ du lịch, mà còn là đầu tàu kinh tế với những con số biết nói. Vinhomes Global Gate - Thành phố trong lòng Thành phố.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.color} p-10 rounded-2xl shadow-2xl flex flex-col items-center text-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-300 mb-2">{item.label}</p>
              <h3 className={`text-4xl md:text-5xl font-bold mb-1 ${item.textColor}`}>{item.value}</h3>
              <p className="text-lg font-semibold">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <h4 className="text-2xl font-display font-bold mb-4">Siêu dự án 6.220ha</h4>
              <p className="text-gray-400">Tổng vốn đầu tư 18 tỷ USD. Quy mô dân số dự kiến đạt 380.000 người, kiến tạo một chuẩn mực sống thượng lưu mới bên vịnh di sản.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "VinWonders", val: "Siêu CV 81ha" },
                { label: "Sân Golf", val: "12 Sân" },
                { label: "Dân số", val: "380.000" },
                { label: "Hạ tầng", val: "18 Tỷ $" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 border-l border-white/10">
                  <p className="text-gold font-bold text-xl">{stat.val}</p>
                  <p className="text-xs text-gray-400 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
