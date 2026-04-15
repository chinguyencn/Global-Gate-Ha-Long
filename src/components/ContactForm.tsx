import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Phone, Send, CheckCircle, Shield } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?q=80&w=2070&auto=format&fit=crop" 
          alt="Hạ Long Landscape" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              KẾT NỐI CÙNG <span className="text-gold">CHUYÊN VIÊN</span> PHÂN TÍCH
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Đừng bỏ lỡ chu kỳ tăng giá vàng của Hạ Long. Hãy để tôi giúp bạn phân tích dòng tiền và lựa chọn quỹ căn tiềm năng nhất.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gold-light">
                <CheckCircle size={20} />
                <span>Báo cáo quy hoạch chi tiết 1/500</span>
              </div>
              <div className="flex items-center gap-3 text-gold-light">
                <CheckCircle size={20} />
                <span>Bảng tính dòng tiền đầu tư 5 năm</span>
              </div>
              <div className="flex items-center gap-3 text-gold-light">
                <CheckCircle size={20} />
                <span>Quỹ căn ngoại giao giá tốt nhất</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div 
              className="glass p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2 ml-1">Họ và tên</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                        <input 
                          required
                          type="text" 
                          placeholder="Nhập họ tên của bạn"
                          className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2 ml-1">Số điện thoại (Zalo)</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                        <input 
                          required
                          type="tel" 
                          placeholder="Nhập số điện thoại Zalo"
                          className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isLoading}
                      className="w-full py-4 bg-[#002147] text-[#FFD700] font-bold text-lg rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-[#003366] transition-all disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-[#FFD700] border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={20} />
                          KẾT NỐI CÙNG CHUYÊN VIÊN KINH DOANH
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-white/70 text-[11px] flex items-start justify-center gap-2 px-2">
                      <span className="mt-0.5">🔒</span>
                      <span>Đặc quyền bảo mật: Thông tin của bạn được bảo mật tuyệt đối. Tôi cam kết chỉ cung cấp thông tin thị trường thực thụ, không làm phiền.</span>
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="text-center py-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-gold" size={48} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4">Gửi yêu cầu thành công!</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base px-4">
                      Cảm ơn Anh/Chị đã quan tâm đến dự án Ga depot Vinspeed. Hiện tại dự án đang trong giai đoạn chuẩn bị lộ trình ra mắt. Em đã tiếp nhận yêu cầu và sẽ sớm kết nối để gửi đến Anh/Chị Thông tin quy hoạch mới nhất và Lịch trình triển khai dự án 2026 qua Zalo ạ!
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-gold text-sm font-bold hover:underline"
                    >
                      Quay lại
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
