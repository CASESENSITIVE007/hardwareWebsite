"use client";

import Image from 'next/image';

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  return (
    <div className=" w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start  h-full gap-8 p-4">
      
      {/* Left Side: Profile Info */}
      <div className="flex flex-col items-center md:items-start flex-shrink-0">
        {/* Profile Image with colored ring */}
        <div className="mb-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={112} // 7rem
            height={112} // 7rem
            className="rounded-full  "
          />
        </div>

        {/* Name */}
        <div className="text-sm font-semibold px-4 py-1.5 rounded-md shadow-sm">
          {testimonial.name}
        </div>

       
      
      </div>

      {/* Right Side: Testimonial Quote */}
      <div className="flex-grow text-center md:text-left">
        <p className="text-base text-gray-700 leading-relaxed pt-2">
          {testimonial.quote}
        </p>
      </div>

    </div>
  );
};

export default TestimonialCard;










//  // /components/ReviewCard.js
//  "use client";

//  import { motion } from 'framer-motion';

//  // Star Icon Component
//  const StarIcon = ({ isFilled }) => (
//   <svg
//     className={`h-4 w-4 ${isFilled ? 'text-yellow-400' : 'text-gray-300'}`}
//     viewBox="0 0 20 20"
//     fill="currentColor"
//   >
//     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.95-.69l1.07-3.292z" />
//   </svg>
//  );

//  const ReviewCard = ({ review }) => {
//   if (!review) return null;

//   return (
//     <motion.div
//       className="flex h-full flex-col rounded-lg bg-gray-100 p-4 shadow-sm"
//       whileHover={{ y: -3, scale: 1.01 }}
//       transition={{ type: 'spring', stiffness: 300, damping: 10 }}
//     >
//       {/* Star Rating and Score */}
//       <div className="flex items-center mb-2">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <StarIcon key={index} isFilled={index < review.rating} />
//         ))}
//         {review.rating && <span className="ml-2 text-sm font-semibold text-gray-700">{review.rating.toFixed(1)}</span>}
//       </div>

//       {/* Comment Placeholder */}
//       <p className="text-xs italic text-gray-400">Comment...</p>
//     </motion.div>
//   );
//  };

//  export default ReviewCard;