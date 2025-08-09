'use client';

import { motion } from 'framer-motion';

// Animation variants for the container to orchestrate the children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // This will make the children animate one after the other
      staggerChildren: 0.3,
    },
  },
};

// Animation variants for the text elements
const itemVariants = {
  // Start state: shifted down and invisible
  hidden: { y: 20, opacity: 0 },
  // End state: in position and fully visible
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function Hero() {
  return (
    <div className="relative flex lg:min-h-screen h-screen flex-col justify-center overflow-hidden p-8 lg:p-2">
      {/* Faded Bearings image with a fade-in animation */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-100 bg-black"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>


      {/* Main Content Container with variants */}
      <motion.div
        className="relative z-10 m-10 text-center md:m-20 md:place-items-start md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Heading */}
        <motion.div
          className="text-4xl font-extrabold leading-tight text-white   md:text-6xl lg:text-9xl"
          variants={itemVariants}
        >
          THE
          <br />
          ORIGINAL
          <br />
          TRADERS
        </motion.div>
        
        {/* Animated Subheading */}
        <motion.div
          className="text-xl font-medium italic text-blue-700 md:text-2xl lg:text-4xl"
          variants={itemVariants}
        >
          Keeping Machines in Motion
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;


//[-webkit-text-stroke:2px_white]