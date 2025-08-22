"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

// Updated data to include examples from your images
const testimonials = [
  {
    name: "Poorna Rao",
    title: "Salesforce Developer",
    image: "/logo.png", // Replace with your image
    quote:
      "The dynamic environment at Infoglen promises rapid growth, allowing me to learn, innovate, and excel The dynamic environment at Infoglen promises rapid growth, allowing me to learn, innovate, and excel.",
  },
  {
    name: "Cole Pammer",
    title: "Sales Intern",
    image: "/bearingcard.jpeg", // Replace with your image
    quote:
      "The dynamic environment at Infoglen promises rapid growth, allowing me to learn, innovate, and excel The dynamic environment at Infoglen promises rapid growth, allowing me to learn, innovate, and excel.",
  },
  {
    name: "Anam Alam",
    title: "Associate Manager - Marketing",
    image: "/logogalaxy.png", // Replace with your image
    quote:
      "The dynamic environment at Infoglen promises rapid growth, allowing me to learn, innovate, and excel The dynamic environment at Infoglen promises rapid growth, allowing me to learn, innovate, and excel.",
  },
];

const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    let newPage = page + newDirection;
    if (newPage < 0) {
      newPage = testimonials.length - 1;
    } else if (newPage >= testimonials.length) {
      newPage = 0;
    }
    setPage([newPage, newDirection]);
  };

  const currentIndex = page;

  return (
    <div className=" flex flex-col items-center justify-center p-4 bg-gray-50 min-h-[600px] font-sans">
      <div className="relative w-full max-w-6xl  p-8 bg-white border border-gray-200 rounded-lg shadow-md">
        
        {/* Large Quotation Mark Icon */}
        <div className="absolute top-6 left-6 text-7xl text-[#0D2F4B] font-serif z-0 opacity-80">
          “
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-[#0D2F4B] text-center mb-10 relative z-10">
            Testimonials
        </h2>

        {/* Carousel */}
        <div className="relative h-72 md:h-56 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              className="absolute w-full h-full"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  paginate(1);
                } else if (swipe > 10000) {
                  paginate(-1);
                }
              }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index > page ? 1 : -1])}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-red-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Testimonials;











// /components/ReviewsGrid.js
// "use client";

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import ReviewCard from './ReviewCard';

// // Animation variants for the container and items
// const containerVariants = {
//  hidden: { opacity: 0 },
//  visible: {
//    opacity: 1,
//    transition: {
//      staggerChildren: 0.15, // Slightly increased stagger
//    },
//  },
// };

// const itemVariants = {
//  hidden: { opacity: 0 },
//  visible: { opacity: 1 },
// };

// const ReviewsGrid = () => {
//  const [reviews, setReviews] = useState([]);
//  const [isLoading, setIsLoading] = useState(true);

//  useEffect(() => {
//    const fetchReviews = async () => {
//      try {
//        const response = await fetch('/api/get-reviews');
//        if (!response.ok) {
//          throw new Error('Failed to fetch reviews');
//        }
//        const data = await response.json();
//        // For the visual example, we'll just take the rating
//        const formattedReviews = data.slice(0, 6).map(rev => ({ rating: rev.rating }));
//        setReviews(formattedReviews);
//      } catch (error) {
//        console.error(error);
//      } finally {
//        setIsLoading(false);
//      }
//    };

//    fetchReviews();
//  }, []);

//  if (isLoading) {
//    return <div className="text-center">Loading reviews...</div>;
//  }

//  if (!reviews || reviews.length === 0) {
//    return <div className="text-center">No reviews found.</div>;
//  }

//  return (
//    <motion.div
//      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3" // Adjusted grid for better visual match
//      variants={containerVariants}
//      initial="hidden"
//      animate="visible"
//    >
//      {reviews.map((review, index) => (
//        <motion.div key={index} variants={itemVariants}>
//          <ReviewCard review={review} />
//        </motion.div>
//      ))}
//    </motion.div>
//  );
// };

// export default ReviewsGrid;