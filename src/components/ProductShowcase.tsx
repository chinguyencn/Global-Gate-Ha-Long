import { motion } from "motion/react";
import { ShoppingBag, Home, Waves, CheckCircle2 } from "lucide-react";

const products = [
  {
    title: "Liền kề & Shophouse",
    subtitle: "Gà đẻ trứng vàng",
    desc: "Đón dòng khách khổng lồ từ Ga Depot Vinspeed, VinWonders và hệ thống 12 sân Golf đẳng cấp quốc tế.",
    image: "https://i.postimg.cc/76c8jRmx/shophouse-product.png",
    icon: <ShoppingBag className="text-gold" />,
    tags: ["Thanh khoản cao", "Kinh doanh 24/7"],
    fileUrl: "https://drive.google.com/uc?export=download&id=1SwQZz1XqUoXoa-UMk2ij3TxYII2CBfwm"
  },
  {
    title: "Biệt thự Song lập",
    subtitle: "Sản phẩm khan hiếm",
    desc: "Sở hữu 212km mặt nước bao quanh, mang lại không gian sống sinh thái và tiềm năng tăng giá vốn cực mạnh.",
    image: "https://i.postimg.cc/HnnZ106M/duplex-villas.png",
    icon: <Waves className="text-gold" />,
    tags: ["Tầm nhìn triệu đô", "Số lượng giới hạn"],
    fileUrl: "https://drive.google.com/uc?export=download&id=1OKnOF6wMpxVEKdff3PfCePfuCnYeLWRq"
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-xl md:text-3xl font-display font-bold text-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            QUỸ CĂN THANH KHOẢN CAO – ĐẶC QUYỀN NHÀ ĐẦU TƯ F1
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-navy/80 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-2">
                  {product.icon}
                  <span className="text-white font-bold text-sm uppercase">{product.subtitle}</span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-display font-bold text-navy mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1 text-xs font-bold text-navy-light bg-navy/5 px-3 py-1 rounded-full">
                      <CheckCircle2 size={14} className="text-gold" />
                      {tag}
                    </span>
                  ))}
                </div>
                {product.fileUrl.startsWith("http") ? (
                  <a 
                    href={product.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center py-4 border-2 border-navy text-navy font-bold rounded-xl hover:bg-navy hover:text-white transition-all shadow-sm cursor-pointer"
                  >
                    TẢI CHI TIẾT MẶT BẰNG (DIRECT DOWNLOAD)
                  </a>
                ) : (
                  <a 
                    href={product.fileUrl}
                    className="w-full block text-center py-4 border-2 border-navy text-navy font-bold rounded-xl hover:bg-navy hover:text-white transition-all shadow-sm cursor-pointer"
                  >
                    KẾT NỐI NHẬN MẶT BẰNG CHI TIẾT
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
