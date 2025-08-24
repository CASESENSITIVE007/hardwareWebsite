"use client";
import IndustryCard from "./IndustryCard";
import { motion } from "framer-motion";

const cards = [
  { src: "/keyindustries/infrastructure.jpg", title: "Infrastructure" },
  { src: "/keyindustries/cement.jpg", title: "Cement" },
  { src: "/keyindustries/automotive.jpeg", title: "Automotive" },
  { src: "/keyindustries/motorandgearbox.jpeg", title: "Motor and Gearbox" },
  { src: "/keyindustries/papermill.jpeg", title: "Paper Mills" },
  { src: "/keyindustries/Textile.jpeg", title: "Textile" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { delay, staggerChildren: 0.12, ease: "easeOut" },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 },
  }),
};

function KeyIndustries() {
  return (
    <section
      id="keyindustries"
      className="relative text-center mx-auto m-4 py-8 overflow-hidden"
    >
      {/* Ambient backdrop accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/3 w-[38rem] h-[38rem] rounded-full bg-gradient-to-br from-red-700/15 via-red-600/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-10 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-blue-700/20 to-transparent blur-3xl" />
        <motion.div
          aria-hidden
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[55rem] h-[55rem] rounded-full border border-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={containerVariants}
        custom={0}
        className="mb-12"
      >
        
         
           <h1 className="text-3xl lg:text-5xl font-bold" >Key Industries</h1>
        
          {/* Underline grow */}
          
      </motion.div>

      {/* Responsive Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4"
      >
        {cards.map((c, i) => (
          <motion.div key={c.title} variants={itemVariants} custom={i}>
            <IndustryCard
              imageUrl={c.src}
              altText={c.title}
              title={c.title}
              index={i}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default KeyIndustries;
