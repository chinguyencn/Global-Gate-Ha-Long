import { motion } from "motion/react";
import { useState } from "react";
import { 
  Percent, 
  TrendingUp, 
  Gift, 
  Clock, 
  Coins, 
  ShieldCheck, 
  Gem, 
  Activity,
  ChevronRight,
  Info
} from "lucide-react";

export default function FinancialPolicy() {
  const [activeTableTab, setActiveTableTab] = useState<"htls" | "quydoi">("htls");

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-semibold mb-4 tracking-widest uppercase">
            Cập nhật từ chủ đầu tư
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#053c30] mb-4">
            CHÍNH SÁCH BÁN HÀNG
          </h2>
          <p className="text-[#bf9d5c] text-xl font-display font-bold tracking-widest uppercase mb-2">
            VINHOMES GLOBAL GATE
          </p>
          <p className="text-gray-500 font-medium text-sm italic">
            (Áp dụng từ ngày 04/05/2026)
          </p>
          <div className="w-24 h-1 bg-[#bf9d5c] mx-auto mt-6" />
        </div>

        {/* Master Container - Emerald Themed */}
        <div className="bg-gradient-to-b from-[#083c32] to-[#04241e] rounded-[2.5rem] p-6 sm:p-10 md:p-16 text-white relative overflow-hidden shadow-2xl border border-emerald-800/50">
          {/* Subtle light effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-12">
            
            {/* Top Cards: Thanh toán sớm & Cam kết lợi nhuận */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CARD 1: THANH TOÁN SỚM */}
              <motion.div 
                className="bg-[#0c4e42]/60 hover:bg-[#0c4e42]/80 transition-all rounded-3xl p-8 border border-emerald-700/30 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400">
                      <Percent size={24} />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">Hình thức linh hoạt</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">THANH TOÁN SỚM</h3>
                  <p className="text-emerald-100/70 text-sm mb-6">Chiết khấu trực tiếp vào Hợp đồng mua bán dành cho khách hàng tự chủ dòng tiền.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-800">
                  <div className="p-4 bg-[#052c24] rounded-2xl text-center">
                    <p className="text-xs text-emerald-300 mb-1">Trước 20/07/2026</p>
                    <p className="text-3xl font-bold text-[#bf9d5c]">9%</p>
                    <p className="text-[10px] text-gray-400">Trị giá căn hộ</p>
                  </div>
                  <div className="p-4 bg-[#052c24] rounded-2xl text-center">
                    <p className="text-xs text-emerald-300 mb-1">Sau 20/07/2026</p>
                    <p className="text-3xl font-bold text-emerald-100">7.5%</p>
                    <p className="text-[10px] text-gray-400">Trị giá căn hộ</p>
                  </div>
                </div>
              </motion.div>

              {/* CARD 2: CAM KẾT LỢI NHUẬN */}
              <motion.div 
                className="bg-[#0c4e42]/60 hover:bg-[#0c4e42]/80 transition-all rounded-3xl p-8 border border-emerald-700/30 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400">
                      <TrendingUp size={24} />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">Đầu tư an nhàn</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">CAM KẾT LỢI NHUẬN</h3>
                  <p className="text-emerald-100/70 text-sm mb-6">Chương trình dòng tiền bền vững, quản lý vận hành chuẩn quốc tế bởi thương hiệu Vinpearl uy tín.</p>
                </div>

                <div className="p-5 bg-gradient-to-r from-[#0d4a3f] to-[#062d25] rounded-2xl border border-emerald-800/40">
                  <div className="flex items-baseline gap-2 justify-center mb-1">
                    <span className="text-xs text-emerald-300 py-1">Lên tới</span>
                    <span className="text-4xl font-black text-[#bf9d5c]">21%</span>
                    <span className="text-lg font-bold text-white">/ 3 Năm</span>
                  </div>
                  <p className="text-[11px] text-emerald-200/70 text-center">
                    Áp dụng cho quỹ căn bàn giao hoàn thiện - Cam kết vận hành ổn định
                  </p>
                </div>
              </motion.div>
            </div>

            {/* QUA TANG HAP DAN SECTION */}
            <motion.div 
              className="bg-[#09322a] rounded-3xl p-8 border border-emerald-800/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Gift className="text-[#bf9d5c]" size={28} />
                <h3 className="text-2xl font-bold font-display text-white">CHÍNH SÁCH HTLS CHƯA TỪNG CÓ TRONG TIỀN LỆ</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    title: "Siêu HTLS Trần",
                    main: "≤ 6% / năm",
                    sub: "An tâm tài chính tối đa"
                  },
                  {
                    title: "Đảm bảo lãi suất",
                    main: "9% / năm",
                    sub: "Bảo hiểm lãi suất 2 năm đầu"
                  },
                  {
                    title: "Voucher Vinmec",
                    main: "100 Triệu",
                    sub: "Chăm sóc sức khỏe gia đình"
                  },
                  {
                    title: "Miễn phí quản lý",
                    main: "3 Năm",
                    sub: "Chất lượng dịch vụ đẳng cấp"
                  },
                  {
                    title: "Vinclub ưu đãi",
                    main: "Tới 0.9%",
                    sub: "Ưu đãi chiết khấu trực tiếp"
                  }
                ].map((gift, idx) => (
                  <div key={idx} className="bg-[#05221c] p-5 rounded-2xl border border-emerald-800/30 text-center flex flex-col justify-between">
                    <p className="text-xs text-emerald-400 font-semibold mb-3">{gift.title}</p>
                    <p className="text-xl font-bold text-[#bf9d5c] mb-2">{gift.main}</p>
                    <p className="text-[10px] text-gray-400 leading-tight">{gift.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>



            {/* TAB-BASED LOAN INTEREST RATE / PROJECTIONS TABLES */}
            <motion.div 
              className="bg-[#072b24] rounded-3xl p-6 sm:p-8 md:p-10 border border-emerald-800/80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-emerald-800 pb-6">
                <div>
                  <h4 className="text-xl font-bold text-white font-display mb-2">Thống kê lãi suất & Tỷ lệ ưu đãi vay</h4>
                  <p className="text-xs text-gray-400">Thông số áp dụng chi tiết cho các gói vay ngân hàng</p>
                </div>

                {/* Tabs switcher */}
                <div className="flex bg-[#041d18] p-1.5 rounded-xl border border-emerald-800">
                  <button 
                    onClick={() => setActiveTableTab("htls")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeTableTab === "htls" 
                        ? "bg-[#bf9d5c] text-navy" 
                        : "text-emerald-300 hover:text-white"
                    }`}
                  >
                    Thời gian HTLS / Tỷ lệ tăng giá
                  </button>
                  <button 
                    onClick={() => setActiveTableTab("quydoi")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeTableTab === "quydoi" 
                        ? "bg-[#bf9d5c] text-navy" 
                        : "text-emerald-300 hover:text-white"
                    }`}
                  >
                    Quy đổi sang lãi suất / năm tương ứng
                  </button>
                </div>
              </div>

              {/* Table rendering based on tab selection */}
              <div className="overflow-x-auto rounded-2xl border border-emerald-800 bg-[#041a15]">
                <table className="w-full text-center border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#052620] text-emerald-300 text-xs font-bold uppercase tracking-wider">
                      <th className="py-4 px-6 border-b border-emerald-800 text-left">Gói hỗ trợ ngân hàng</th>
                      <th className="py-4 px-3 border-b border-emerald-800">18 Tháng</th>
                      <th className="py-4 px-3 border-b border-emerald-800">24 Tháng</th>
                      <th className="py-4 px-3 border-b border-emerald-800">30 Tháng</th>
                      <th className="py-4 px-3 border-b border-emerald-800">36 Tháng</th>
                      <th className="py-4 px-3 border-b border-emerald-800">60 Tháng</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-900/40 text-sm">
                    {activeTableTab === "htls" ? (
                      <>
                        <tr className="hover:bg-emerald-950/30 transition-all">
                          <td className="py-4 px-6 text-left font-semibold text-white">VAY 70%</td>
                          <td className="py-4 px-3 font-bold text-[#bf9d5c]">0%</td>
                          <td className="py-4 px-3 font-bold text-gray-300">4.50%</td>
                          <td className="py-4 px-3 font-bold text-gray-300">9%</td>
                          <td className="py-4 px-3 font-bold text-[#bf9d5c]">14%</td>
                          <td className="py-4 px-3 font-bold text-[#bf9d5c]">25%</td>
                        </tr>
                        <tr className="hover:bg-emerald-950/30 transition-all">
                          <td className="py-4 px-6 text-left font-semibold text-white">VAY 80%</td>
                          <td className="py-4 px-3 font-bold text-[#bf9d5c]">0%</td>
                          <td className="py-4 px-3 font-bold text-gray-300">5%</td>
                          <td className="py-4 px-3 font-bold text-gray-300">11%</td>
                          <td className="py-4 px-3 font-bold text-[#bf9d5c]">16.50%</td>
                          <td className="py-4 px-3 font-bold text-[#bf9d5c]">30%</td>
                        </tr>
                        <tr className="bg-[#052620]/30 text-xs text-emerald-300">
                          <td className="py-3 px-6 text-left font-medium">Song song hỗ trợ</td>
                          <td className="py-3 px-3" colSpan={4}>Có áp dụng song song chính sách đảm bảo lãi suất</td>
                          <td className="py-3 px-3 text-red-400 font-semibold">Không áp dụng</td>
                        </tr>
                      </>
                    ) : (
                      <>
                        <tr className="hover:bg-emerald-950/30 transition-all">
                          <td className="py-4 px-6 text-left font-semibold text-white">VAY 70%</td>
                          <td className="py-4 px-3 font-bold text-[#bf9d5c]">0%</td>
                          <td className="py-4 px-3 font-bold text-gray-300">3.10%</td>
                          <td className="py-4 px-3 font-bold text-gray-300">4.80%</td>
                          <td className="py-4 px-3 font-bold text-emerald-300">5.90%</td>
                          <td className="py-4 px-3 font-bold text-emerald-300">5.80%</td>
                        </tr>
                        <tr className="hover:bg-emerald-950/30 transition-all">
                          <td className="py-4 px-6 text-left font-semibold text-white">VAY 80%</td>
                          <td className="py-4 px-3 font-bold text-[#bf9d5c]">0%</td>
                          <td className="py-4 px-3 font-bold text-gray-300">3%</td>
                          <td className="py-4 px-3 font-bold text-gray-300">5%</td>
                          <td className="py-4 px-3 font-bold text-emerald-300">5.90%</td>
                          <td className="py-4 px-3 font-bold text-emerald-300">5.80%</td>
                        </tr>
                        <tr className="bg-[#052620]/30 text-[11px] text-emerald-400/80">
                          <td className="py-3 px-6 text-left font-medium" colSpan={6}>
                            💡 Hệ số quy đổi giúp tối ưu và quy đổi nghĩa vụ trả lãi về mức thấp kỷ lục so với mặt bằng ngân hàng chung.
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Interest disclaimer text from the image */}
              <div className="mt-4 flex items-start gap-2 text-xs text-gray-400">
                <Info size={14} className="mt-0.5 text-amber-500 flex-shrink-0" />
                <p>
                  * Áp dụng chính sách bảo hiểm và đảm bảo lãi suất cố định tối đa 9%/năm cho 2 năm tiếp theo sau thời gian Hỗ Trợ Lãi Suất (HTLS).
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

