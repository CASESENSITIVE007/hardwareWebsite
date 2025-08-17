import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Simplified product block: just heading bar + image scroller
const ProductBlock = ({ product, category }) => {
  const images = product.images || [];
  const scrollId = `scroll-${product.id}`;
  const scrollByDir = (dir) => {
    const el =
      typeof document !== "undefined" && document.getElementById(scrollId);
    if (!el) return;
    const delta = el.clientWidth * 0.85 * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };
  return (
    <div className="relative w-full space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="flex items-center gap-3 pl-1 select-none"
      >
        <span className="h-8 w-16 rounded-sm shadow-sm ring-1 ring-black/10 bg-[linear-gradient(135deg,#9a2700,#611500)]" />
        <span className="h-8 w-10 rounded-sm shadow-sm ring-1 ring-black/10 bg-[linear-gradient(135deg,#2c5685,#17334a)]" />
        <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-slate-900 uppercase drop-shadow-sm">
          {product.name}
        </h3>
      </motion.div>
      <div className="relative group px-2 md:px-0">
        {/* Hero-style gradient + bearing ring pattern (softened) */}
        <div className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden">
          {/* Base gradient further softened */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-800 to-blue-700 opacity-55" />
          {/* Transparent wash */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
          {/* Rings (bearing feel) with reduced prominence */}
          <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full border border-white/10" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-16 -right-14 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute bottom-8 left-10 w-32 h-32 rounded-full border border-white/15" />
          {/* Diagonal repeating pattern (lower opacity) */}
          <div className="absolute inset-0 opacity-[0.015] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.35)_0_6px,transparent_6px_14px)]" />
          {/* Soft color glows (dimmer) */}
          <div className="absolute -top-20 left-1/3 w-60 h-60 bg-blue-500/15 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-red-600/15 blur-3xl rounded-full" />
        </div>
        <motion.div
          id={scrollId}
          style={{ scrollbarWidth: "none" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex gap-5 px-6 py-8 h-72 md:h-80 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar rounded-xl md:ring-1 md:ring-white/15 shadow-inner relative backdrop-blur-[2px]"
        >
          {/* Slow animated glow overlay */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12), transparent 60%)",
            }}
            animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
          />
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              className="snap-center flex-shrink-0 basis-[78%] sm:basis-[52%] md:basis-1/3 bg-white backdrop-blur rounded-xl p-0 flex items-center justify-center shadow ring-1 ring-slate-200/60 relative overflow-hidden group/card "
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.07 }}
              whileHover={{
                y: -8,
                scale: 1.04,
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              {/* Shimmer sweep */}
              <motion.span
                className="absolute inset-0 pointer-events-none bg-gradient-to-br from-slate-50/95 via-white/95 to-slate-100/95 ring-1 ring-slate-200/70 translate-x-[-120%]"
                whileHover={{ translateX: "120%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              {/* <div className="relative rounded-xl w-full flex items-center justify-center bg-gradient-to-br from-slate-50/95 via-white/95 to-slate-100/95 ring-1 ring-slate-200/70  shadow-inner p-4 mx-2 h-56 md:h-60 overflow-hidden"> */}
              <div className="absolute inset-0 rounded-xl pointer-events-none p-4 " />
              <motion.img
                src={img.src}
                alt={img.alt}
                className="h-full w-auto max-w-full object-contain  select-none"
                draggable={false}
                animate={{ y: [0, -2, 0] }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
              />
              {/* </div> */}
              {/* Glow on hover */}
              {/* <motion.div
                aria-hidden
                className="absolute inset-0 pointer-events-none rounded-xl opacity-0 group-hover/card:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(154,39,0,0.18), transparent 70%)",
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              /> */}
            </motion.div>
          ))}
        </motion.div>
        {images.length > 2 && (
          <>
            <button
              onClick={() => scrollByDir(-1)}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 rounded-full p-2 shadow transition-opacity opacity-0 group-hover:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollByDir(1)}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 rounded-full p-2 shadow transition-opacity opacity-0 group-hover:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 pt-4">
        {product.brands.map((logo, i) => (
          <motion.img
            key={logo.id}
            src={logo.logo}
            alt={logo.name}
            className="h-8 md:h-10 lg:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          />
        ))}
      </div>
    </div>
  );
};

export const CategoryShowcase = ({ category }) => {
  const products = category.products || [];
  return (
    <div className="space-y-16">
      {products.map((p) => (
        <ProductBlock key={p.id} product={p} category={category} />
      ))}
      {/* {category.brandLogos?.length > 0 && (
        <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 pt-4">
          {category.brandLogos.map((logo, i) => (
            <motion.img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
            />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default CategoryShowcase;
