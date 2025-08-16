"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function IndustryCard({ imageUrl, title, altText, index = 0 }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x, y });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm aspect-[3/4] overflow-hidden rounded-2xl shadow-lg m-2 p-[2px] group mx-auto bg-gradient-to-br from-slate-200 via-white to-slate-100 "
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.05,
      }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x * 8}deg) rotateY(${
          tilt.y * 8
        }deg)`,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Inner content wrapper */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden  flex justify-center ">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.12]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority
        />
        {/* Ambient moving light */}
        <motion.div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.22), transparent 60%)",
          }}
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.8,
          }}
        />
        {/* Sheen sweep */}
        <motion.span
          aria-hidden
          className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.65),transparent)]"
          whileHover={{ translateX: "120%" }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
        />
        {/* Gradient overlay for readability */}
        <div className="absolute  inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
        {/* Title */}
        <motion.h3
          className="absolute bottom-0  p-4 text-white text-lg sm:text-xl md:text-2xl font-semibold z-20 tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
            delay: 0.15 + index * 0.05,
          }}
        >
          {title}
        </motion.h3>
      </div>
      {/* Subtle hover glow ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-offset-0 ring-red-700/50 transition duration-500"
      />
    </motion.div>
  );
}

export default IndustryCard;
