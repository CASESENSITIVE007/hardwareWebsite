'use client';
import { Pickaxe } from 'lucide-react';
import { motion } from 'framer-motion';

// You can create a dedicated component for icons or import them from a library like 'lucide-react'
const CheckIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const BoltIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const UserIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z" />
  </svg>
);


const WhyUs = () => {
  return (
    <section
      // OPTION 1: BACKGROUND IMAGE (DEFAULT)
      // To change the image, just replace the URL.
    //   style={{
    //     backgroundImage: "hero-bg-image.webp",
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
    //   className="relative py-20 px-4 sm:px-6 lg:px-8"

      // OPTION 2: GRADIENT BACKGROUND
      // To use this, comment out the `style` prop above and uncomment the className below.
      className="relative bg-gradient-to-r from-red-300 to-red-500 py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Overlay for background image readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto">
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

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/20 text-white mx-auto">
              <CheckIcon />
            </div>
            <h3 className="mt-5 text-lg font-medium text-white">Unmatched Quality</h3>
            <p className="mt-2 text-base text-red-200">
            100% Authenticity over Product Delivery.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/20 text-white mx-auto">
              <BoltIcon />
            </div>
            <h3 className="mt-5 text-lg font-medium text-white">Experienced</h3>
            <p className="mt-2 text-base text-red-200">
            Over 15+ years of Industry Exposure.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/20 text-white mx-auto">
              <UserIcon />
            </div>
            <h3 className="mt-5 text-lg font-medium text-white">Focused</h3>
            <p className="mt-2 text-base text-red-200">
            Focused on Durability and Reliability of Bearings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white/20 text-white mx-auto">
              <Pickaxe />
            </div>
            <h3 className="mt-5 text-lg font-medium text-white">Services</h3>
            <p className="mt-2 text-base text-red-200">
            Providing Complimentary Technical Consultancy. (Terms and Condition applied)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;