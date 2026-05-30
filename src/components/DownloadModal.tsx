import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, CheckCircle, FileDown, ShieldAlert } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
  fileUrl: string;
}

export default function DownloadModal({ isOpen, onClose, productTitle, fileUrl }: DownloadModalProps) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateVietnamesePhone = (p: string) => {
    // Matches 0912345678, +84312345678, 84712345678, etc.
    const cleanPhone = p.replace(/[\s\-\(\)]/g, "");
    const regex = /^(0|\+84|84)(3|5|7|8|9)[0-9]{8}$/;
    return {
      isValid: regex.test(cleanPhone),
      cleaned: cleanPhone
    };
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { isValid, cleaned } = validateVietnamesePhone(phone);
    if (!isValid) {
      setError("Số điện thoại không đúng định dạng Việt Nam. Vui lòng nhập lại (ví dụ: 0912345678).");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `Khách tải MB: ${productTitle}`,
          phone: cleaned,
          source: `Popup Tải Mặt Bằng - ${productTitle}`
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      // Show success state
      setIsSuccess(true);

      // Trigger automatic download of PDF file
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "");
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      console.error("Error submitting lead:", err);
      setError("Có lỗi kết nối hệ thống. Vui lòng thử lại sau giây lát.");
    } finally {
      setIsLoading(false);
    }
  };

  // Reset state when modal is toggled
  React.useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setPhone("");
        setError("");
        setIsSuccess(false);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/80 backdrop-blur-md"
            id="modal-overlay"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-navy border border-gold/30 rounded-3xl overflow-hidden shadow-2xl z-10"
            id="modal-card"
          >
            {/* Elegant Top Border Line Accent */}
            <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

            {/* Close Button X */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all cursor-pointer"
              id="close-modal-btn"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Content area */}
            <div className="p-8 md:p-10">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6" id="download-lead-form">
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 border border-gold/30 text-gold mb-1">
                      <FileDown size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-white leading-normal uppercase">
                      TẢI TRỌN BỘ MẶT BẰNG NÉT CAO & BẢNG GIÁ ĐỢT 1
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm">
                      Sản phẩm: <span className="font-semibold text-white">{productTitle}</span>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-white text-xs md:text-sm font-semibold ml-1">
                      Nhập số điện thoại Zalo của bạn <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Nhập số điện thoại Zalo"
                        className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 text-base md:text-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                        id="phone-input"
                      />
                    </div>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs md:text-sm mt-1.5 flex items-start gap-1 px-1"
                      >
                        <ShieldAlert className="inline-block flex-shrink-0 mt-0.5" size={14} />
                        <span>{error}</span>
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:from-gold hover:to-gold-light text-[#001F3F] font-black text-base md:text-lg rounded-xl shadow-lg ring-1 ring-gold-light/40 flex items-center justify-center gap-2 hover:shadow-gold/20 transition-all disabled:opacity-50 cursor-pointer"
                    id="submit-modal-btn"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-[#001F3F] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "XÁC NHẬN TẢI XUỐNG (30S)"
                    )}
                  </motion.button>

                  <p className="text-center text-white/50 text-[10px] md:text-[11px] flex items-start justify-center gap-2 px-1">
                    <span className="mt-0.5">🔒</span>
                    <span>Tài liệu mật sẽ tự động tải xuống ngay sau khi xác nhận thành công. Trực tuyến 24/7.</span>
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                  id="modal-success-state"
                >
                  <div className="w-20 h-20 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-gold" size={42} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 font-display">XÁC MINH THÀNH CÔNG</h3>
                  <p className="text-gold-light text-sm font-semibold mb-4 uppercase tracking-wider font-sans">Tệp đang được tải về</p>
                  <p className="text-gray-300 leading-relaxed text-xs md:text-sm max-w-sm mx-auto font-sans">
                    Hệ thống đã gửi lệnh tải tài liệu có chất lượng gốc nét cao về thiết bị của bạn. Chuyên viên dự án sẽ liên hệ tư vấn thêm qua số điện thoại vừa gửi.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 px-6 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer"
                    id="back-to-app-btn"
                  >
                    Đóng cửa sổ
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
