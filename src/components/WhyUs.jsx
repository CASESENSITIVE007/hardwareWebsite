'use client';
import { Pickaxe, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Reusable card component
const ExpandableCard = ({ icon: Icon, title, text }) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Detect mobile/tablet
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isOpen = isMobile ? expanded : hovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={!isMobile ? { scale: 1.05 } : {}}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg cursor-pointer 
                 w-full sm:w-[45%] lg:w-[30%] max-w-sm"
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => isMobile && setExpanded(!expanded)}
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/20 text-white mx-auto">
        <Icon />
      </div>
      <h3 className="mt-5 text-lg font-medium text-white">{title}</h3>

      {/* Expandable Text */}
      <motion.p
        className="mt-2 text-base text-red-200 overflow-hidden"
        animate={{ maxHeight: isOpen ? 500 : 48 }} // 48px ≈ 2 lines
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default function WhyUs() {
  return (
    <section className="relative bg-gradient-to-r from-red-300 to-red-500 py-20 px-4 sm:px-6 lg:px-8">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-red-200">
            We are dedicated to providing the best service and quality products.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <ExpandableCard
            icon={() => (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            title="Vast Industrial Exposure"
            text="With over 15 years of industrial experience, The Original Traders has built a reputation for reliability, quality, and customer satisfaction. 15+ years in the industry means we understand the challenges and deliver the right solutions."
          />

          <ExpandableCard
            icon={() => (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )}
            title="Technical Assistance"
            text="At The Original Traders, we don’t just provide solutions — we partner with you to make them work. With deep technical expertise and a commitment to understanding your unique challenges, we help you achieve efficient, practical, and sustainable results. Your success is our mission — and our consultancy is designed to make it happen."
          />

          <ExpandableCard
            icon={() => (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z" />
              </svg>
            )}
            title="Commitment of Genuine Products"
            text="At the heart of our business is a simple promise – only authentic products, every time. We partner exclusively with reputed brands and certified suppliers to ensure what you receive is exactly what was promised—original, high-quality, and reliable. No shortcuts, no compromises—just the genuine quality you deserve."
          />

          <ExpandableCard
            icon={Pickaxe}
            title="Competitive Pricing"
            text="We believe quality shouldn’t come at a high cost. That’s why we offer genuine automotive spare parts at the most competitive prices in the market. Our strong supplier network and efficient operations help us keep costs low — so you save more without compromising on performance."
          />

          <ExpandableCard
            icon={Users}
            title="Customer-Centric Approach"
            text="Our customers are at the heart of everything we do. From understanding your exact needs to providing tailored solutions, we focus on building long-term relationships. Every interaction is driven by trust, transparency, and a commitment to your satisfaction."
          />
        </div>
      </div>
    </section>
  );
}
