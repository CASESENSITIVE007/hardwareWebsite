'use client'
import { Suspense } from 'react';
import ProductsClient from './products-client';
import { motion } from 'framer-motion'; // For the loading animation

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 mx-auto mb-6"
        >
          <div className="w-full h-full rounded-full border-4 border-red-700 border-t-transparent"></div>
        </motion.div>
        <h2 className="text-2xl font-bold text-red-700 mb-2">THE ORIGINAL TRADERS</h2>
        <p className="text-blue-700 italic">Loading Premium Hardware...</p>
      </motion.div>
    </div>
  );
}

export default function page() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ProductsClient />
    </Suspense>
  );
}