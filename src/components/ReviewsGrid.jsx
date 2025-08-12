"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewCard from "./ReviewCard";

const staticReviews = [
  { rating: 5, comment: "Fantastic service and quality!" },
  { rating: 4, comment: "Really good, would recommend." },
  { rating: 5, comment: "Exceeded all of my expectations." },
  { rating: 5, comment: "A truly five-star experience." },
  { rating: 4, comment: "Great value and fast shipping." },
  { rating: 3, comment: "It was okay, did the job." },
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
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.5 },
  }),
};

const ReviewsGrid = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [reviewsPerSlide, setReviewsPerSlide] = useState(3);

  // Update reviewsPerSlide based on screen size
  useEffect(() => {
    const updateReviewsPerSlide = () => {
      if (window.innerWidth < 640) setReviewsPerSlide(1); // mobile
      else if (window.innerWidth < 1024) setReviewsPerSlide(2); // tablet
      else setReviewsPerSlide(3); // desktop
    };
    updateReviewsPerSlide();
    window.addEventListener("resize", updateReviewsPerSlide);
    return () => window.removeEventListener("resize", updateReviewsPerSlide);
  }, []);

  const totalPages = Math.ceil(staticReviews.length / reviewsPerSlide);

  const paginate = (newPage) => {
    setDirection(newPage > page ? 1 : -1);
    setPage(newPage);
  };

  const currentReviews = staticReviews.slice(
    page * reviewsPerSlide,
    page * reviewsPerSlide + reviewsPerSlide
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-center m-10 lg:text-5xl text-3xl font-bold">
        What they say about us?
      </h1>

      {/* Carousel */}
      <div className="overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            className="flex justify-center gap-6 flex-wrap"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {currentReviews.map((review, index) => (
              <div
                key={index}
                className="w-full sm:w-[45%] lg:w-[30%] flex justify-center"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => paginate(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              page === idx ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsGrid;










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