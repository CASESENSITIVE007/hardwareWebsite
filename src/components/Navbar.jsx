'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { usePathname } from 'next/navigation';; // ADDED: Import the useRouter hook

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  // ADDED: Initialize the router to get the current path
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', type: 'link' },
    {
      label: 'Products',
      type: 'dropdown',
      href: '/products',
      subLinks: [
        { href: '/products?id=galaxy', label: 'Galaxy' },
        { href: '/products?id=gears', label: 'Gears' },
        { href: '/products?id=lubricants', label: 'Lubricants' },
        { href: '/products?id=bearings', label: 'Bearings' },
        { href: '/products?id=fasteners', label: 'Fasteners' },
      ],
    },
    { href: '/about', label: 'About', type: 'link' },
    { to: 'keyindustries', label: 'Key Industries', type: 'scroll' },
    { to: 'contactus', label: 'Contact', type: 'scroll' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Variants for Framer Motion (no changes here)
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2, ease: 'easeOut' } },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  };

  const accordionVariants = {
    collapsed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md ">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/logo.png" width={100} height={100} alt="Company Logo" className=" lg:w-40 " />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.type === 'dropdown' ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setIsProductsHovered(true)}
                onMouseLeave={() => setIsProductsHovered(false)}
              >
                <Link href={link.href} className="flex items-center text-gray-600 hover:text-black transition-colors font-medium">
                  {link.label}
                  <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform duration-300 ${isProductsHovered ? 'rotate-180' : ''}`} />
                </Link>
                <AnimatePresence>
                  {isProductsHovered && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                    >
                      {link.subLinks?.map((subLink) => (
                        <Link key={subLink.label} href={subLink.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">
                          {subLink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : link.type === 'scroll' ? (
              // CHANGED: Conditional logic for scroll links
              <li key={link.label}>
                {pathname === '/' ? (
                  <ScrollLink to={link.to} smooth={true} duration={500} offset={-80} className="cursor-pointer text-gray-600 hover:text-black transition-colors font-medium">
                    {link.label}
                  </ScrollLink>
                ) : (
                  <Link href={`/#${link.to}`} className="cursor-pointer text-gray-600 hover:text-black transition-colors font-medium">
                    {link.label}
                  </Link>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <Link href={link.href} className="text-gray-600 hover:text-black transition-colors font-medium">
                  {link.label}
                </Link>
              </li>
            )
          )}
          {/* CHANGED: Conditional logic for the Enquiry button */}
          {pathname === '/' ? (
            <ScrollLink to="contactus" smooth={true} duration={500} offset={-80}>
              <li className="bg-red-700 rounded-md py-2 px-4 cursor-pointer font-medium text-white hover:bg-red-800 transition-all">Enquiry</li>
            </ScrollLink>
          ) : (
            <Link href="/#contactus">
              <li className="bg-red-700 rounded-md py-2 px-4 cursor-pointer font-medium text-white hover:bg-red-800 transition-all">Enquiry</li>
            </Link>
          )}
        </ul>
        <div className="md:hidden flex font-medium items-center gap-4">
          {/* CHANGED: Conditional logic for the mobile Enquiry button */}
          {pathname === '/' ? (
            <ScrollLink to="contactus" smooth={true} duration={500} offset={-80}>
              <div className="bg-red-700 rounded-md py-2 px-3 cursor-pointer font-medium text-white hover:bg-red-800 transition-all text-sm">Enquiry</div>
            </ScrollLink>
          ) : (
            <Link href="contactus">
              <div className="bg-red-700 rounded-md py-2 px-3 cursor-pointer font-medium text-white hover:bg-red-800 transition-all text-sm">Enquiry</div>
            </Link>
          )}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-black font-medium focus:outline-none">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMenuOpen ? 'x' : 'bars'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
          >
            <ul className="flex flex-col items-center space-y-2 py-6">
              {navLinks.map((link) =>
                link.type === 'dropdown' ? (
                  <li key={link.label} className="w-full text-center">
                    <button onClick={() => handleDropdownToggle(link.label)} className="w-full flex justify-center items-center font-semibold text-gray-800 text-lg py-2">
                      {link.label}
                      <ChevronDownIcon className={`ml-2 h-5 w-5 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.ul
                          variants={accordionVariants}
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          className="mt-2 space-y-2 overflow-hidden bg-gray-50"
                        >
                          {link.subLinks?.map((subLink) => (
                            <li key={subLink.label}>
                              <Link href={subLink.href} onClick={handleLinkClick} className="block py-2 text-gray-600 hover:text-black">
                                {subLink.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : link.type === 'scroll' ? (
                  // CHANGED: Conditional logic for mobile scroll links
                  <li key={link.label}>
                    {pathname === '/' ? (
                      <ScrollLink to={link.to} smooth={true} duration={500} offset={-80} onClick={handleLinkClick} className="cursor-pointer text-lg text-gray-700 hover:text-black py-2 block">
                        {link.label}
                      </ScrollLink>
                    ) : (
                      <Link href={`/#${link.to}`} onClick={handleLinkClick} className="cursor-pointer text-lg text-gray-700 hover:text-black py-2 block">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link href={link.href} onClick={handleLinkClick} className="text-lg text-gray-700 hover:text-black py-2 block">
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}