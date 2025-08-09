'use client'
import React from 'react';
import { motion } from 'framer-motion';

const page = () => {
  // Variants for the main container to orchestrate children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for individual items (text blocks, images) to slide in
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className="py-16 bg-white sm:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animate when the component enters the viewport
      viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% is visible
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Rooted in Aligarh, Built on Trust
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the story behind our craft and our commitment to the community.
          </p>
        </motion.div>

        {/* Section 1: Our Story */}
        <div className="mt-16 md:flex md:items-center md:space-x-12">
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <img
              className="rounded-lg shadow-xl w-full"
              src="/hero-bg-image.webp"
              alt="Our workshop in Aligarh"
            />
          </motion.div>
          <motion.div className="md:w-1/2 mt-8 md:mt-0" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded in the heart of Aligarh, Uttar Pradesh, we started with a simple vision: to provide high-quality **[Your Product/Service]** to our local community. With years of dedication and a passion for excellence, we've grown from a small workshop to a trusted name in the region.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our commitment to quality craftsmanship and customer satisfaction remains at the core of everything we do. Being based in Aligarh allows us to build lasting relationships and contribute to the local economy.
            </p>
          </motion.div>
        </div>

        {/* Section 2: Our Values */}
        <div className="mt-16 md:flex md:items-center md:space-x-12 flex-row-reverse">
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <img
              className="rounded-lg shadow-xl w-full"
              src="/hero-bg-image.webp"
              alt="Our dedicated team"
            />
          </motion.div>
          <motion.div className="md:w-1/2 mt-8 md:mt-0" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✔</span>
                <span><strong>Quality:</strong> We deliver products and services of the highest standard, ensuring durability and excellence.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✔</span>
                <span><strong>Community:</strong> We are proud to support and grow with the Aligarh community that has supported us since day one.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✔</span>
                <span><strong>Integrity:</strong> We operate with complete honesty and transparency in all our business dealings.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;