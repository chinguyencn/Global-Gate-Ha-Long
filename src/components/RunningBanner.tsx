import React from "react";

export default function RunningBanner() {
  const sentence = "Vinhomes Global Gate Hạ Long – Thành phố kỳ quan kết nối toàn cầu bên Vịnh di sản Quốc tế.";

  return (
    <div className="relative w-full overflow-hidden bg-navy border-y border-gold/30 py-3 select-none z-20 shadow-md">
      <div className="flex w-max min-w-full">
        {/* First running ribbon */}
        <div className="flex shrink-0 animate-marquee whitespace-nowrap gap-16 pr-16">
          <span className="text-gold font-bold text-base md:text-lg lg:text-xl tracking-wide uppercase font-display flex items-center">
            {sentence}
          </span>
          <span className="text-gold font-bold text-base md:text-lg lg:text-xl tracking-wide uppercase font-display flex items-center">
            {sentence}
          </span>
        </div>
        {/* Second identical ribbon for seamless loop */}
        <div className="flex shrink-0 animate-marquee whitespace-nowrap gap-16 pr-16" aria-hidden="true">
          <span className="text-gold font-bold text-base md:text-lg lg:text-xl tracking-wide uppercase font-display flex items-center">
            {sentence}
          </span>
          <span className="text-gold font-bold text-base md:text-lg lg:text-xl tracking-wide uppercase font-display flex items-center">
            {sentence}
          </span>
        </div>
      </div>
    </div>
  );
}
