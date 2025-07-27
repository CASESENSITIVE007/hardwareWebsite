'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // For menu icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '/', label: 'Home', type: 'link'},
    {
      label: 'Products',
      type: 'dropdown',
      href: '/Products',
      subLinks: [
        { href: '/Products?category=category1', label: 'Category 1' },
        { href: '/Products?category=category2', label: 'Category 2' },
        { href: '/Products?category=category3', label: 'Category 3' },
      ],
    },
    { to: 'about', label: 'About', type: 'scroll' },
    { to: 'keyindustries', label: 'Key Industries', type: 'scroll' },
    { to: 'contactus', label: 'Contact', type: 'scroll' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className=" sticky top-0 left-0 right-0 z-50 bg-white/80 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand Name */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-black transition-colors duration-300">
            Logo
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 ">
          {navLinks.map((link) =>
            link.type === 'dropdown' ? (
              <li key={link.label} className="relative group  ">
                <Link
                  href={link.href}
                  className="flex items-center text-gray-600 hover:text-black transition-colors duration-300 font-medium "
                >
                  {link.label}
                  <svg className="ml-1.5 h-4 w-4 fill-current group-hover:rotate-180 hover:transition-transform duration-400 ease-in-out "
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 12l-6-6h12l-6 6z" />
                  </svg>
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-yellow-100 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                  {link.subLinks?.map((subLink) => (
                    <Link
                      key={subLink.label}
                      href={subLink.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:text-black transition-colors duration-200"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </li>
            ) : link.type === 'scroll' ? (
              <li key={link.label}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80} // Offset to account for fixed navbar height
                  className="cursor-pointer text-gray-600 hover:text-black transition-colors duration-300 font-medium"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-black transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                    text-gray-700 hover:text-black focus:outline-none
                      transition-transform duration-500 ease-in-out
                      transform ${isMenuOpen ? 'rotate-180' : ''}`}
>
                      {isMenuOpen ? (
                      <XMarkIcon className="h-7 w-7" />
                      ) : (
                      <Bars3Icon className="h-7 w-7" />
                    )}
            </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-yellow-100 shadow-lg absolute top-full left-0 w-full">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) =>
              link.type === 'dropdown' ? (
                // On mobile, we can simply show the main link and its sub-links
                <li key={link.label} className="text-center">
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-semibold text-gray-800 text-lg"
                  >
                    {link.label}
                  </Link>
                  <ul className="mt-2 space-y-2">
                    {link.subLinks?.map((subLink) => (
                       <li key={subLink.label}>
                         <Link
                          href={subLink.href}
                          onClick={handleLinkClick}
                          className="block text-gray-600 hover:text-black"
                        >
                          {subLink.label}
                        </Link>
                       </li>
                    ))}
                  </ul>
                </li>
              ) : link.type === 'scroll' ? (
                <li key={link.label}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={handleLinkClick}
                    className="cursor-pointer text-lg text-gray-700 hover:text-black"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-lg text-gray-700 hover:text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;