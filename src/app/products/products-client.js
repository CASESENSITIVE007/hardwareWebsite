'use client';
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Using Next.js Image component
import {
  Cog6ToothIcon,
  CubeIcon,
  BoltIcon,
  SparklesIcon,
  XMarkIcon as XIcon,
  ArrowDownTrayIcon as DownloadIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { ShieldStarIcon } from '@phosphor-icons/react/dist/ssr';
import CategoryShowcase from './CategoryShowcase';
import { productCategories as rawCategories } from './productData';
import ContactSection from '@/components/ContactSection';

// Map icon string to actual component reference
const iconMap = {
    ShieldStarIcon,
    CubeIcon,
    BoltIcon,
    SparklesIcon,
    Cog6ToothIcon,
};

// Enhance imported data with real icon components
const productCategories = rawCategories.map(cat => ({
    ...cat,
    icon: iconMap[cat.icon] || CubeIcon
}));
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

// --- Main Page Component ---
export default function ProductsPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [selectedCategory, setSelectedCategory] = useState(id || null);

 
    useEffect(() => {
        // It updates the component's state to match the URL.
        setSelectedCategory(id || null);
    }, [id]); // The dependency array makes this effect watch for changes to 'id'.

    const categoriesToShow = selectedCategory
        ? productCategories.filter(cat => cat.id === selectedCategory)
        : productCategories;

  return (
    <>
    <main className="bg-white min-h-screen">
         
            <motion.section
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-r from-red-700 via-red-800 to-blue-700 text-white py-20 overflow-hidden"
            >
              {/* Background bearing pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-white"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border-4 border-white"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border-2 border-white"></div>
              </div>

              <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6"
                  >
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight">
                      THE<br />ORIGINAL<br />TRADERS
                    </h1>
                    <p className="text-2xl md:text-3xl italic font-medium">
                      Keeping Machines in Motion
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl text-red-100 mb-8 leading-relaxed"
                  >
                    Premium industrial hardware components engineered for performance and reliability
                  </motion.p>

                  
                </div>
              </div>
            </motion.section>

            <header className="bg-gradient-to-br from-red-50 via-white to-blue-50 relative text-center py-20">
              
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tighter">Our Products</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Explore our comprehensive range of industrial hardware, engineered for reliability and performance.
                </p>
            </header>

            <div className="container mx-auto px-4 py-16 bg-white ">
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-800">Product Categories</h2>
                        {selectedCategory && (
                            <Button
                                onClick={() => setSelectedCategory(null)}
                                variant="ghost"
                                className="text-red-700 hover:text-red-800 font-semibold"
                            >
                                Show All
                            </Button>
                        )}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {productCategories.map(category => {
                        const isSelected = selectedCategory === category.id;
                        return (
                          <motion.button
                            key={category.id}
                            onClick={() => setSelectedCategory(isSelected ? null : category.id)}
                            className={`relative group p-4 rounded-xl border-2 text-center transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9a2700] ${
                              isSelected
                                ? 'border-[#9a2700] shadow-lg'
                                : 'border-gray-200 hover:border-[#9a2700] hover:shadow-md'
                            }`}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {/* Background / pattern layers */}
                            <div className="absolute inset-0 ">
                              {isSelected ? (
                                <>
                                  <span className="absolute inset-0 bg-[linear-gradient(140deg,#9a2700_0%,#611500_40%,#2c5685_100%)]" />
                                  <span className="absolute inset-0 mix-blend-overlay opacity-25 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.18)_0_10px,transparent_10px_20px)]" />
                                  <span className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/10 blur-xl" />
                                  <span className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-white/10 blur-2xl" />
                                </>
                              ) : (
                                <>
                                  <span className="absolute inset-0 bg-white transition-colors group-hover:bg-[linear-gradient(140deg,#ffffff,#fef2f2,#f0f6ff)]" />
                                  <span className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity bg-[radial-gradient(circle_at_30%_20%,#9a270022,transparent_60%),radial-gradient(circle_at_75%_75%,#2c568522,transparent_65%)]" />
                                </>
                              )}
                            </div>
                            <div className="relative">
                              <category.icon
                                className={`w-8 h-8 mx-auto mb-2 transition-colors drop-shadow-sm ${
                                  isSelected ? 'text-white' : 'text-gray-500 group-hover:text-[#9a2700]'
                                }`}
                              />
                              <span
                                className={`font-semibold text-sm transition-colors ${
                                  isSelected ? 'text-white' : 'text-gray-800 group-hover:text-[#611500]'
                                }`}
                              >
                                {category.name}
                              </span>
                            </div>
                            {isSelected && (
                              <span className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(to_right,#9a2700,#2c5685)]" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                </section>

        <AnimatePresence>
          {categoriesToShow.map((category, idx) => (
                      <motion.section
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                            className="mb-20 text-center"
                        >
                            <div className="mb-20 max-w-4xl mx-auto">
                                <motion.h2
                                  initial={{ x: -80, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  exit={{ x: -40, opacity: 0 }}
                                  transition={{ duration: 0.6, ease: 'easeOut' }}
                                  className="text-4xl font-bold tracking-tighter text-gray-900"
                                >
                                  {category.name}
                                </motion.h2>
                                <p className="mt-4 text-xl text-gray-800 font-medium  mx-auto text-justify ">{category.description}</p>
                            </div>
                            
                            <CategoryShowcase category={category} />

                            {idx < categoriesToShow.length - 1 && (
                              <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                exit={{ opacity: 0, scaleX: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="mx-auto my-12 h-0.5 w-3/4 origin-left rounded bg-gradient-to-r from-[#9a2700] via-[#2c5685] to-[#9a2700] relative overflow-hidden"
                                aria-hidden
                              >
                                {/* shimmer */}
                                <span className="absolute left-0 top-0 h-full w-24 bg-white/30 mix-blend-screen blur-md animate-separator-shimmer" />
                              </motion.div>
                            )}

                        </motion.section>
                    ))}
                </AnimatePresence>
            </div>
      {selectedCategory === "galaxy" ? (
  <div className="mt-4  p-2 mb-10 flex md:items-center max-w-7xl mx-auto   flex-col ">
    {/* Video Section */}
    <motion.div className="md:w-1/2" variants={itemVariants}>
      <video
        className="rounded-xl  w-full h-full object-cover bg-white"
        
        loop
        
       
        playsInline
        preload="auto"
        aria-label="About us promotional video"
        controls
      >
        <source src="/galaxyvideo.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>

    {/* Text Section */}
    <motion.div className="md:w-1/2  mt-8  md:mt-0" variants={itemVariants}>
     
      
    <p className="md:mt-4 text-xl text-gray-800 font-bold   mx-auto text-center italic " >To become a channel partner please contact us.</p>
     
      
    </motion.div>
  </div>
) : null}


            <section className='flex items-center justify-center'>
             
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="mb-6"
                      >
                        <motion.a
                          href="/catalogue.pdf" 
                          download
                          whileHover={{ scale: 1.06, rotate: 0.5 }}
                          whileTap={{ scale: 0.94 }}
                          className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-4 font-semibold tracking-wide overflow-hidden"
                        >
                          {/* Glow / Border background */}
                          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600 via-pink-600 to-blue-700 opacity-90" />
                          {/* Animated sheen */}
                          <span className="absolute -inset-1 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)] mix-blend-overlay" />
                          {/* Moving light bar */}
                          <span className="pointer-events-none absolute top-0 left-[-150%] h-full w-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[slide_2.8s_linear_infinite]" />
                          <span className="relative flex items-center gap-2 text-white drop-shadow-sm">

                            <motion.span
                              aria-hidden
                              animate={{ rotate: [0, 4, -4, 0] }}
                              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                              className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm ring-1 ring-white/30"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                              >
                                <path d="M12 3v14" />
                                <path d="M6 11l6 6 6-6" />
                                <path d="M5 21h14" />
                              </svg>
                            </motion.span>

                            <span className="text-lg">Download Catalogue</span>
                          </span>
   
                          <span className="absolute inset-0 rounded-xl ring-2 ring-white/0 group-hover:ring-white/40 transition" />
                        </motion.a>
                      </motion.div>
                      <style jsx global>{`
                        @keyframes slide { 0% { transform: translateX(0); } 100% { transform: translateX(100%); } }
                      `}</style>
            </section>

             {/* Call to Action */}

            {/* <ContactSection/> */}
             
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-700 via-red-800 to-blue-700 text-white py-20 relative overflow-hidden"
            >
            
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border-2 border-white"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full border-2 border-white"></div>
              </div>

              <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl font-bold mb-6"
                >
                  Need Custom Engineering Solutions?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-red-100 mb-8 max-w-2xl mx-auto text-lg"
                >
                  Our expert engineering team specializes in designing and manufacturing precision hardware components
                  tailored to your exact specifications and performance requirements.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-white text-red-700 hover:bg-red-50 font-semibold shadow-xl cursor-pointer" 
                      onClick={() => {
                        // Dispatch a global event to open the contact overlay
                        window.dispatchEvent(new Event('contact:open'));
                      }}
                    >
                      <WrenchScrewdriverIcon className="w-5 h-5 mr-2" />
                      Contact Us
                    </Button>
                  </motion.div>
                  
                </motion.div>
              </div>
            </motion.section>
        
        
    </main>
    {/* Mount overlay-only contact section so it can open from this page */}
    <ContactSection overlayOnly />
    </>
  );
}

/* Add separator shimmer animation */
<style jsx global>{`
@keyframes separatorShimmer { 0% { transform: translateX(-120%); opacity: 0; } 10% { opacity: 0.2 } 50% { transform: translateX(120%); opacity: 0.6 } 90% { opacity: 0.2 } 100% { transform: translateX(220%); opacity: 0 } }
.animate-separator-shimmer { animation: separatorShimmer 2.2s cubic-bezier(.2,.9,.2,1) infinite; will-change: transform, opacity; }
@media (prefers-reduced-motion: reduce) { .animate-separator-shimmer { animation: none; opacity: 0.18; } }
`}</style>