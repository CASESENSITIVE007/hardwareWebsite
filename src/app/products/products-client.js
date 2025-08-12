
'use client';
import {useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  CubeIcon,
  BoltIcon,
  SparklesIcon,
  ArrowRightIcon,
  XMarkIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { HomeIcon } from 'lucide-react';
import { ShieldStarIcon } from '@phosphor-icons/react';

const productCategories = [
  {
    id: 'galaxy',
    name: 'Galaxy Components',
    description: 'High-quality components for space applications',
    icon: ShieldStarIcon,
    color: 'from-yellow-600 to-yellow-300',
    bgPattern: 'radial-gradient(circle at 30% 70%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)',
    products: [
      {
        id: 1,
        name: 'Helmet ',
        description: 'Premium quality helmet for space applications',
        price: '$299.99',
        specifications: ['Material: Carbon Fiber', 'Size: Medium', 'Weight: 1.2 kg'],
        image: '/products/helmet.jpg'
      },
      {
        id: 2,
        name: 'Planetary Gearbox',
        description: 'Compact planetary gearbox for high-efficiency applications',
        price: '$599.99',
        specifications: ['Efficiency: 97%', 'Ratio: 10:1', 'Compact Design'],
        image: '/products/helmet.jpg'
      },
      {
        id: 3,
        name: 'Worm Gear Assembly',
        description: 'Self-locking worm gear for precise positioning',
        price: '$199.99',
        specifications: ['Self-Locking', 'High Reduction', 'Quiet Operation'],
        image: '/products/helmet.jpg'
      }
    ]
  },

  {
    id: 'gears',
    name: 'Gears & Transmissions',
    description: 'High-precision gears for industrial applications and power transmission systems',
    icon: Cog6ToothIcon,
    color: 'from-red-600 to-red-700',
    bgPattern: 'radial-gradient(circle at 30% 70%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
    products: [
      {
        id: 4,
        name: 'Helical Gear Set',
        description: 'Premium quality helical gears with superior torque transmission and reduced noise operation',
        price: '$299.99',
        specifications: ['Material: Hardened Steel', 'Ratio: 3:1', 'Torque: 500 Nm', 'Helix Angle: 20°'],
        image: '⚙️'
      },
      {
        id: 5,
        name: 'Planetary Gearbox',
        description: 'Compact planetary gearbox for high-efficiency applications with excellent power-to-weight ratio',
        price: '$599.99',
        specifications: ['Efficiency: 97%', 'Ratio: 10:1', 'Compact Design', 'Low Backlash'],
        image: '🔧'
      },
      {
        id: 6,
        name: 'Worm Gear Assembly',
        description: 'Self-locking worm gear for precise positioning and high reduction ratios',
        price: '$199.99',
        specifications: ['Self-Locking', 'High Reduction', 'Quiet Operation', 'Bronze Wheel'],
        image: '🔩'
      }
    ]
  },

  {
    id: 'lubricants',
    name: 'Lubricants & Oils',
    description: 'Advanced lubrication solutions for optimal performance and extended equipment life',
    icon: SparklesIcon,
    color: 'from-blue-600 to-blue-700',
    bgPattern: 'radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)',
    products: [
      {
        id: 7,
        name: 'Synthetic Gear Oil',
        description: 'High-performance synthetic oil engineered for extreme conditions and extended service intervals',
        price: '$49.99',
        specifications: ['Viscosity: SAE 75W-90', 'Temperature Range: -40°C to 150°C', 'Volume: 5L', 'Synthetic Base'],
        image: '🛢️'
      },
      {
        id: 8,
        name: 'Bearing Grease',
        description: 'Long-lasting lithium complex grease specially formulated for bearing applications',
        price: '$29.99',
        specifications: ['High Temperature Resistance', 'Water Resistant', 'Extended Service Life', 'NLGI Grade 2'],
        image: '🧴'
      },
      {
        id: 9,
        name: 'Multi-Purpose Lubricant',
        description: 'Versatile penetrating lubricant for general industrial maintenance and protection',
        price: '$19.99',
        specifications: ['Multi-Purpose', 'Corrosion Protection', 'Easy Application', 'Food Grade Available'],
        image: '💧'
      }
    ]
  },
  {
    id: 'bearings',
    name: 'Bearings & Bushings',
    description: 'Precision bearings for smooth operation and superior performance',
    icon: CubeIcon,
    color: 'from-gray-600 to-gray-700',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(75, 85, 99, 0.1) 0%, transparent 50%)',
    products: [
      {
        id: 7,
        name: 'Ball Bearings',
        description: 'High-precision ball bearings engineered for low friction and smooth operation in demanding industrial applications',
        price: '$89.99',
        specifications: ['Bore: 20mm', 'Outer Diameter: 47mm', 'Load Rating: 5kN', 'Material: Chrome Steel'],
        image: '⚪'
      },
      {
        id: 8,
        name: 'Roller Bearings',
        description: 'Heavy-duty cylindrical roller bearings designed for high radial load capacity and extended service life',
        price: '$159.99',
        specifications: ['Heavy Load Capacity', 'High Durability', 'Sealed Design', 'Temperature Range: -20°C to 120°C'],
        image: '🎯'
      },
      {
        id: 9,
        name: 'Super Precision Bearings',
        description: 'Ultra-precise bearings for critical applications requiring exceptional accuracy and minimal vibration',
        price: '$299.99',
        specifications: ['ABEC-7 Precision', 'Ultra-Low Friction', 'Ceramic Balls Available', 'Noise Level: <35dB'],
        image: '🔘'
      },
      {
        id: 10,
        name: 'Thrust Bearings',
        description: 'Specialized axial load bearings for applications requiring smooth rotational movement under thrust loads',
        price: '$129.99',
        specifications: ['Axial Load Support', 'Low Friction Coefficient', 'Compact Design', 'Bi-directional Load'],
        image: '⭕'
      },
      {
        id: 11,
        name: 'Needle Bearings',
        description: 'Space-efficient needle roller bearings providing high load capacity in minimal radial space',
        price: '$79.99',
        specifications: ['High Load/Space Ratio', 'Minimal Radial Space', 'High Speed Capability', 'Self-Aligning'],
        image: '�'
      }
    ]
  },
  {
    id: 'fasteners',
    name: 'Fasteners & Hardware',
    description: 'Quality fasteners for secure connections',
    icon: BoltIcon,
    color: 'from-amber-600 to-orange-600',
    bgPattern: 'radial-gradient(circle at 20% 80%, rgba(217, 119, 6, 0.1) 0%, transparent 50%)',
    products: [
      {
        id: 15,
        name: 'Hex Bolt Set',
        description: 'Stainless steel hex bolts in various sizes',
        price: '$24.99',
        specifications: ['Material: Stainless Steel', 'Sizes: M6-M20', 'Grade: A2-70'],
        image: '🔩'
      },
      {
        id: 16,
        name: 'Lock Washer Kit',
        description: 'Spring washers for secure fastening',
        price: '$15.99',
        specifications: ['Spring Steel', 'Zinc Plated', 'Multiple Sizes'],
        image: '⭕'
      },
      {
        id: 17,
        name: 'Machine Screws',
        description: 'Precision machine screws for mechanical assemblies',
        price: '$39.99',
        specifications: ['Phillips Drive', 'Metric Threads', 'High Strength'],
        image: '🔗'
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  }
};

const iconRotateVariants = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [selectedCategory, setSelectedCategory] = useState(id ||null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Get all products for search
  const allProducts = productCategories.flatMap(category =>
    category.products.map(product => ({ ...product, category: category.name, categoryId: category.id }))
  );

  // Search products
  const searchResults = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get categories to display
  const categoriesToShow = selectedCategory
    ? productCategories.filter(cat => (cat.id === selectedCategory) )
    : productCategories;

  const resetFilters = () => {
    setSelectedCategory(null);
    setSearchTerm('');
    setIsSearchOpen(false);
  };

  if (isLoading) {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-700"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-blue-700"></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 rounded-full bg-gray-600"></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 rounded-full bg-amber-600"></div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Header */}
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-red-50 to-blue-50">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Search Products</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </Button>
                </div>
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for gears, bearings, lubricants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
              </div>

              {/* Search Results */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {searchTerm ? (
                  searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {searchResults.map((product,index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-3xl">{product.image}</div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-800">{product.name}</h3>
                              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                              <Badge variant="outline" className="text-xs mb-2">
                                {product.category}
                              </Badge>
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-red-700">{product.price}</span>
                                <Button size="sm" className="bg-red-700 hover:bg-red-800">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">🔍</div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                      <p className="text-gray-500">Try searching with different keywords</p>
                    </div>
                  )
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">⚙️</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Start searching</h3>
                    <p className="text-gray-500">Enter keywords to find your hardware components</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
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

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/" className="no-underline">
                <Button

                  size="lg"
                  variant="link"
                  className="bg-white text-red-700 hover:bg-red-50 hover:cursor-pointer font-semibold"
                // className="border-white text-red-700 bg-white hover:bg-red-50 hover:cursor-pointer "
                >
                  <HomeIcon className="w-5 h-5 " />
                  Home
                </Button>
              </Link>
              <Button
                onClick={() => setIsSearchOpen(true)}
                size="lg"
                className="bg-white text-red-700 hover:bg-red-50 hover:cursor-pointer font-semibold"
              >
                <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                Search Products
              </Button>

            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Category Selection */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="py-16 relative z-10"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of industrial hardware components,
              each engineered to meet the highest standards of quality and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${selectedCategory === category.id
                  ? 'ring-4 ring-red-500 ring-offset-2'
                  : 'hover:shadow-xl'
                  }`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`bg-gradient-to-br ${category.color} p-8 text-white relative`}
                  style={{ background: category.bgPattern }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
                  <div className="relative z-10 text-center">
                    <motion.div
                      animate={{ rotate: selectedCategory === category.id ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-4"
                    >
                      <category.icon className="w-12 h-12 mx-auto" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{category.name.split(' ')[0]}</h3>
                    <p className="text-sm opacity-90">{category.products.length} Products</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Button
                onClick={() => setSelectedCategory(null)}
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-50"
              >
                Show All Categories
              </Button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.section
        className="py-16 bg-white relative z-10"
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {categoriesToShow.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-20"
              >
                {/* Category Header */}
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-12"
                >
                  <div
                    className={`inline-flex items-center justify-center p-6 rounded-full bg-gradient-to-r ${category.color} mb-6 shadow-2xl`}
                  >
                    <motion.div
                      variants={iconRotateVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      <category.icon className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">{category.name}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto text-lg">{category.description}</p>
                  <Separator className="mt-8 max-w-xs mx-auto bg-gray-300" />
                </motion.div>

                {/* Products Showcase - Alternating Layout */}
                <div className="space-y-16">
                  {category.products.map((product, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="relative"
                      >
                        <div className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'} max-w-6xl mx-auto`}>
                          
                          {/* Product Image Container */}
                          <motion.div
                            initial={{ 
                              x: isEven ? -100 : 100, 
                              opacity: 0 
                            }}
                            whileInView={{ 
                              x: 0, 
                              opacity: 1 
                            }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.8, 
                              delay: 0.3,
                              type: "spring",
                              stiffness: 100
                            }}
                            className="flex-1 max-w-md"
                          >
                            <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${category.color} shadow-2xl overflow-hidden`}>
                              {/* Background Pattern */}
                              <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white"></div>
                                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border-2 border-white"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white"></div>
                              </div>
                              
                              {/* Product Image */}
                              <motion.div
                                className="relative z-10 bg-white rounded-2xl p-6 shadow-xl"
                                whileHover={{ 
                                  scale: 1.05,
                                  rotate: [0, 1, -1, 0],
                                }}
                                transition={{ 
                                  duration: 0.3,
                                  rotate: { duration: 0.6, ease: "easeInOut" }
                                }}
                              >
                                {product.image.startsWith('/') ? (
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                  />
                                ) : (
                                  <div className="text-8xl text-center py-8">
                                    {product.image}
                                  </div>
                                )}
                              </motion.div>
                              
                              {/* Floating Elements */}
                              <motion.div
                                className="absolute top-6 left-6 w-3 h-3 bg-white rounded-full"
                                animate={{
                                  y: [0, -10, 0],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <motion.div
                                className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full"
                                animate={{
                                  y: [0, -15, 0],
                                  opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.5
                                }}
                              />
                            </div>
                          </motion.div>

                          {/* Product Name and Details */}
                          <motion.div
                            initial={{ 
                              x: isEven ? 100 : -100, 
                              opacity: 0 
                            }}
                            whileInView={{ 
                              x: 0, 
                              opacity: 1 
                            }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.8, 
                              delay: 0.5,
                              type: "spring",
                              stiffness: 100
                            }}
                            className="flex-1 space-y-6"
                          >
                            {/* Animated Product Name */}
                            <div className="space-y-4">
                              <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                  duration: 0.6, 
                                  delay: 0.8,
                                  type: "spring",
                                  stiffness: 200
                                }}
                                className="relative"
                              >
                                {/* Animated Icon Behind Text */}
                                <motion.div
                                  className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center opacity-20`}
                                  animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                  }}
                                  transition={{
                                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                  }}
                                >
                                  <category.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                
                                <motion.h3
                                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent relative z-10`}
                                  animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                  style={{
                                    backgroundSize: "200% 200%"
                                  }}
                                >
                                  {product.name}
                                </motion.h3>
                              </motion.div>
                              
                              <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="text-lg text-gray-600 leading-relaxed"
                              >
                                {product.description}
                              </motion.p>
                            </div>

                            {/* Specifications */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 1.2, duration: 0.6 }}
                              className="space-y-3"
                            >
                              <h4 className="text-lg font-semibold text-gray-800">Key Features:</h4>
                              <ul className="space-y-2">
                                {product.specifications.map((spec, specIndex) => (
                                  <motion.li
                                    key={specIndex}
                                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                      delay: 1.4 + (specIndex * 0.1), 
                                      duration: 0.5 
                                    }}
                                    className="flex items-center gap-3 text-gray-700"
                                  >
                                    <motion.div
                                      className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`}
                                      whileInView={{
                                        scale: [1, 1.3, 1],
                                        rotate: [0, 180, 360]
                                      }}
                                      transition={{
                                        delay: 1.4 + (specIndex * 0.1),
                                        duration: 0.8
                                      }}
                                    />
                                    <span className="font-medium">{spec}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>

                            {/* Action Button */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 1.6, duration: 0.5 }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button 
                                  size="lg"
                                  className={`bg-gradient-to-r ${category.color} hover:opacity-90 transition-all duration-300 text-white border-none shadow-xl px-8 py-4 text-lg font-semibold`}
                                >
                                  <span>Learn More</span>
                                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                                </Button>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Decorative Line */}
                        {index < category.products.length - 1 && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.8, duration: 0.8 }}
                            className={`mt-16 h-px bg-gradient-to-r ${category.color} opacity-30 max-w-2xl mx-auto`}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* No Results */}
          {categoriesToShow.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No categories selected</h3>
              <p className="text-gray-500 mb-6">Choose a category to explore our products</p>
              <Button
                onClick={resetFilters}
                className="bg-red-700 hover:bg-red-800 text-white"
              >
                View All Categories
              </Button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-red-700 via-red-800 to-blue-700 text-white py-20 relative overflow-hidden"
      >
        {/* Background pattern */}
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
                className="bg-white text-red-700 hover:bg-red-50 font-semibold shadow-xl"
              >
                <WrenchScrewdriverIcon className="w-5 h-5 mr-2" />
                Contact Our Engineers
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-red-50 text-red-700 font-semibold"
              >
                Request Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
