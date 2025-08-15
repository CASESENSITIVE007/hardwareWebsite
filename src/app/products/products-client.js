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
} from '@heroicons/react/24/outline';

// --- Create a motion-compatible version of the Next.js Image component ---
const MotionImage = motion(Image);

// --- UPDATED DATA STRUCTURE FOR ALL CATEGORIES ---
const productCategories = [
  {
    id: 'gears',
    name: 'Gears & Transmissions',
    description: 'High-precision gears for industrial applications and power transmission systems.',
    icon: Cog6ToothIcon,
    showcaseImages: [
        { id: 'g1', src: '/products/spareparts/sp1.jpeg', alt: 'Helical Gear Set' },
        { id: 'g2', src: '/products/spareparts/sp2.jpeg', alt: 'Planetary Gearbox' },
        { id: 'g3', src: '/products/spareparts/sp3.jpeg', alt: 'Worm Gear Assembly' },
        { id: 'g4', src: '/products/spareparts/sp4.png', alt: 'Worm Gear Assembly' },
        { id: 'g5', src: '/products/spareparts/sp5.png', alt: 'Worm Gear Assembly' },
        { id: 'g6', src: '/products/spareparts/sp6.png', alt: 'Worm Gear Assembly' },
        { id: 'g7', src: '/products/spareparts/sp7.png', alt: 'Worm Gear Assembly' },
        { id: 'g8', src: '/products/spareparts/sp8.png', alt: 'Worm Gear Assembly' },
    ],
    brandLogos: [
      { id: 'gb1', src: '/products/bearings/brands/bb1.jpeg', alt: 'Brand A' },
      { id: 'gb2', src: '/products/bearings/brands/bb2.jpeg', alt: 'Brand B' },
    ]
  },
  {
    id: 'bearings',
    name: 'Bearings & Bushings',
    description: 'Precision bearings for smooth operation and superior performance.',
    icon: CubeIcon,
    showcaseImages: [
      { id: 'b1', src: '/products/bearings/images/bb1.jpeg', alt: 'Ball Bearing' },
      { id: 'b2', src: '/products/bearings/images/bb2.jpeg', alt: 'Roller Bearing' },
      { id: 'b3', src: '/products/bearings/images/bb3.jpeg', alt: 'Thrust Bearing' },
      { id: 'b4', src: '/products/bearings/images/bb4.jpeg', alt: 'Thrust Bearing' },
      { id: 'b5', src: '/products/bearings/images/bb5.jpeg', alt: 'Thrust Bearing' },
      { id: 'b6', src: '/products/bearings/images/bb6.jpeg', alt: 'Thrust Bearing' },
    ],
    brandLogos: [
      { id: 'bb1', src: '/products/bearings/brands/bb1.jpeg', alt: 'FAG Logo' },
      { id: 'bb2', src: '/products/bearings/brands/bb2.jpeg', alt: 'NSK Logo' },
      { id: 'bb3', src: '/products/bearings/brands/bb3.jpeg', alt: 'NSK Logo' },
      { id: 'bb4', src: '/products/bearings/brands/bb4.jpeg', alt: 'NSK Logo' },
      { id: 'bb5', src: '/products/bearings/brands/bb5.jpeg', alt: 'NSK Logo' },
      { id: 'bb6', src: '/products/bearings/brands/bb6.jpeg', alt: 'NSK Logo' },
    ]
  },
  {
    id: 'lubricants',
    name: 'Lubricants & Oils',
    description: 'Advanced lubrication solutions for optimal performance.',
    icon: SparklesIcon,
    showcaseImages: [
        { id: 'l1', src: '/products/lubricants/engineoil/e1.jpg', alt: 'Synthetic Gear Oil' },
        { id: 'l2', src: '/products/lubricants/engineoil/e2.jpg', alt: 'Bearing Grease' },
        { id: 'l3', src: '/products/lubricants/engineoil/e3.jpg', alt: 'Bearing Grease' },
        { id: 'l4', src: '/products/lubricants/engineoil/e4.jpg', alt: 'Bearing Grease' },
        { id: 'l5', src: '/products/lubricants/engineoil/e5.png', alt: 'Bearing Grease' },
        { id: 'l6', src: '/products/lubricants/engineoil/e6.jpeg', alt: 'Bearing Grease' },
    ],
    brandLogos: [
        { id: 'lb1', src: '/products/bearings/brands/bb4.jpeg', alt: 'Lube Brand X' },
    ]
  },
  {
    id: 'fasteners',
    name: 'Fasteners & Hardware',
    description: 'A wide range of quality fasteners for secure connections.',
    icon: BoltIcon,
    showcaseImages: [
        { id: 'f1', src: '/products/spareparts/sp1.jpeg', alt: 'Hex Bolt Set' },
        { id: 'f2', src: '/products/spareparts/sp2.jpeg', alt: 'Lock Washer Kit' },
    ],
    brandLogos: [
        { id: 'fb1', src: '/products/bearings/brands/bb6.jpeg', alt: 'Fastener Brand' },
    ]
  },
];

// --- REUSABLE CategoryShowcase Component ---
const CategoryShowcase = ({ category }) => {
   
    const { showcaseImages, brandLogos } = category;
    const [selectedImage, setSelectedImage] = useState(null);
    const constraintsRef = useRef(null);
    const contentRef = useRef(null);
    const [dragConstraint, setDragConstraint] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (contentRef.current && constraintsRef.current) {
                const contentWidth = contentRef.current.scrollWidth;
                const viewportWidth = constraintsRef.current.clientWidth;
                setDragConstraint(Math.max(0, contentWidth - viewportWidth));
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [showcaseImages]);

    return (
        <>
            <motion.div 
                ref={constraintsRef}
                className="relative w-full h-40 md:h-56 mb-12 overflow-hidden cursor-grab"
            >
                <motion.div
                    ref={contentRef}
                    className="absolute inset-0 flex items-center gap-4 px-4 h-full"
                    drag="x"
                    dragConstraints={{ right: 0, left: -dragConstraint }}
                    dragMomentum={false}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {showcaseImages.map((image) => (
                        <div key={image.id} className="relative flex-shrink-0 first:ml-auto last:mr-auto h-24 md:h-32 w-48">
                            <MotionImage 
                                src={image.src} 
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 30vw, 10vw"
                                className="object-contain pointer-events-none"
                                onClick={() => setSelectedImage(image)}
                                layoutId={`image-${image.id}`}
                            />
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 mb-8">
                {brandLogos.map(logo => (
                    <div key={logo.id} className="relative h-6 md:h-8 w-24">
                        <Image 
                            src={logo.src} 
                            alt={logo.alt}
                            fill
                            sizes="100px"
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
            
          

            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
                <DownloadIcon className="w-5 h-5" />
                Download Catalogue
            </button>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="relative w-full h-full max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
                           <MotionImage
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                sizes="90vw"
                                className="object-contain"
                                layoutId={`image-${selectedImage.id}`}
                           />
                        </div>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-5 right-5 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
                        >
                            <XIcon className="w-6 h-6" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

// --- Main Page Component ---
export default function ProductsPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [selectedCategory, setSelectedCategory] = useState(id || null);

    const categoriesToShow = selectedCategory
        ? productCategories.filter(cat => cat.id === selectedCategory)
        : productCategories;

    return (
        <main className="bg-slate-50 min-h-screen">
            <header className="bg-white text-center py-20">
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tighter">Our Products</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Explore our comprehensive range of industrial hardware, engineered for reliability and performance.
                </p>
            </header>

            <div className="container mx-auto px-4 py-16">
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
                        {productCategories.map(category => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                                className={`p-4 rounded-lg border-2 text-center transition-all duration-300 ${
                                    selectedCategory === category.id
                                        ? 'bg-red-100 border-red-600 shadow-lg'
                                        : 'bg-white border-gray-200 hover:border-red-500 hover:shadow-md'
                                }`}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <category.icon className={`w-8 h-8 mx-auto mb-2 transition-colors ${selectedCategory === category.id ? 'text-red-700' : 'text-gray-500'}`} />
                                <span className="font-semibold text-sm text-gray-800">{category.name}</span>
                            </motion.button>
                        ))}
                    </div>
                </section>

                <AnimatePresence>
                    {categoriesToShow.map(category => (
                        <motion.section
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                            className="mb-20 text-center"
                        >
                            <div className="mb-12">
                                <h2 className="text-4xl font-bold tracking-tighter text-gray-900">{category.name}</h2>
                                <p className="mt-2 text-gray-600 max-w-xl mx-auto">{category.description}</p>
                            </div>
                            
                            <CategoryShowcase category={category} />
                            
                        </motion.section>
                    ))}
                </AnimatePresence>
            </div>
        </main>
    );
}