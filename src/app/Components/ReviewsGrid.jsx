// /components/ReviewsGrid.js
"use client";

import { motion } from 'framer-motion';
import ReviewCard from './ReviewCard';

// This is your "dummy" data. You can change these values anytime.
const staticReviews = [
  { rating: 5, comment: "Fantastic service and quality!" },
  { rating: 4, comment: "Really good, would recommend." },
  { rating: 5, comment: "Exceeded all of my expectations." },
  { rating: 5, comment: "A truly five-star experience." },
  { rating: 4, comment: "Great value and fast shipping." },
  { rating: 3, comment: "It was okay, did the job." },
];

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ReviewsGrid = () => {
  return (
    <div className="p-4">
      <h1 className="text-center m-10 lg:text-5xl md:text-3xl text-2xl font-bold">
        What they say about us?
      </h1>

      <motion.div
        // A grid layout is better for this than flexbox
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* We map over the dummy data array */}
        {staticReviews.map((review, index) => (
          // The motion.div and key are inside the loop
          <motion.div key={index} variants={itemVariants}>
            {/* We pass the 'review' object to each card */}
            <ReviewCard review={review} />
          </motion.div>
        ))}
      </motion.div>
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