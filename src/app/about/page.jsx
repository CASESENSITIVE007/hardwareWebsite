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
            {/* <h3 className="text-2xl font-bold text-gray-900">Our Story</h3> */}
            <p className="md:mt-4 text-xl text-gray-800 lg:font-bold font-md italic text-justify ">
              At The Original Traders, we believe that every machine deserves the best parts to
perform at its peak. With years of experience in the auto parts industry, we have built
a reputation for quality, reliability, and trust.

            </p>
            <p className="md:mt-4 text-xl text-gray-800 lg:font-bold font-md italic text-justify">
             What sets us apart is our commitment to genuine products, competitive pricing,
and timely delivery. We understand that in your business, downtime is costly. That's
why we ensure that every order is handled with precision, speed, and reliability.
            </p>
          </motion.div>
        </div>

        {/* Section 2: Our Values */}
        <div className="mt-16 md:flex md:items-center md:space-x-12 flex-row-reverse ">
          <motion.div className="md:w-1/2" variants={itemVariants}>
                <video
          className=" rounded-xl  m-2 inset-0 w-full h-full object-center object-cover  opacity-100 bg-white"
          autoPlay
          loop
          muted
          poster='/aboutplaceholder.png'
          playsInline
          preload="auto"
        >
          <source src="/aboutvideo.mp4" type="video/mp4" />
        </video>

          </motion.div>
          <motion.div className="md:w-1/2 mt-8 md:mt-0" variants={itemVariants}>
            {/* <h3 className="text-2xl font-bold text-gray-900">Our Values</h3> */}
            <p className="md:mt-4 text-xl text-gray-800 lg:font-bold font-md italic text-justify" >
              At The Original Traders, our mission is simple:
                  To keep your business moving smoothly and efficiently—always.

            </p>
            <p className="md:mt-4 text-xl text-gray-800 lg:font-bold font-md italic text-justify ">
             Whether you need a single piece or bulk supply, we are your dependable partner for
                all bearing solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;