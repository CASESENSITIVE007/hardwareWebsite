'use client'
import { motion } from 'framer-motion';

function Hero() {
  // Animation settings for the image
  const imageVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: '-50%', // Replaces -translate-x-1/2 for perfect centering
      opacity: 0.4,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 40,
        duration: 1.5,
      },
    },
  };

  // Animation settings for the text content
  const textVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 50,
        delay: 0.2, // A slight delay for a sequenced effect
      },
    },
  };

  return (
    <div className="relative flex lg:min-h-screen flex-col justify-center overflow-hidden   p-8 lg:p-2">
      {/* Animated Faded Bearings image */}
      <motion.img
        src="/hero-bg-image.webp"
        alt="Bearings background"
        className="absolute left-1/2 top-1/2 -translate-y-1/2 mx-auto w-full object-cover md:w-2/3"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Animated Main Content */}
      <motion.div
        className="relative z-10 m-10 text-center md:m-20 md:place-items-start md:text-left"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-4xl font-extrabold leading-tight text-red-700 md:text-6xl lg:text-9xl">
          THE<br />ORIGINAL<br />TRADERS
        </div>
        <div className="text-xl font-medium italic text-blue-700 md:text-2xl lg:text-4xl">
          Keeping Machines in Motion
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;