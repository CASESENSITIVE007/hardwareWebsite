import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-7 h-7 mr-2"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.33 3.48 16.8L2 22L7.33 20.53C8.75 21.32 10.36 21.79 12.04 21.79C17.5 21.79 21.95 17.34 21.95 11.88C21.95 6.42 17.5 2 12.04 2M12.04 20.13C10.56 20.13 9.12 19.71 7.89 18.9L7.54 18.69L4.3 19.55L5.18 16.41L4.95 16.05C4.08 14.71 3.6 13.21 3.6 11.91C3.6 7.29 7.39 3.5 12.04 3.5C16.69 3.5 20.48 7.29 20.48 11.88C20.48 16.47 16.69 20.13 12.04 20.13M17.37 14.39C17.11 14.26 15.95 13.7 15.73 13.62C15.51 13.54 15.36 13.5 15.21 13.74C15.06 13.98 14.63 14.5 14.49 14.66C14.35 14.82 14.21 14.86 13.95 14.74C13.69 14.62 12.83 14.32 11.82 13.4C11.02 12.68 10.49 11.83 10.33 11.57C10.17 11.31 10.29 11.19 10.41 11.07C10.52 10.96 10.65 10.79 10.77 10.65C10.89 10.51 10.93 10.41 11.01 10.25C11.09 10.09 11.05 9.95 10.99 9.83C10.93 9.71 10.49 8.55 10.29 8.07C10.1 7.59 9.91 7.63 9.77 7.62H9.28C9.04 7.62 8.7 7.7 8.44 7.94C8.18 8.18 7.5 8.78 7.5 9.94C7.5 11.1 8.46 12.22 8.6 12.38C8.74 12.54 10.49 15.04 12.96 16.02C13.53 16.26 13.92 16.41 14.22 16.53C14.76 16.74 15.25 16.7 15.45 16.48C15.67 16.25 16.51 15.29 16.71 15.01C16.91 14.73 17.11 14.65 17.25 14.58C17.39 14.52 17.51 14.48 17.37 14.39Z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Top Section */}
      <div className="bg-[#4a5482] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
            {/* Column 1: Company Info */}
            <div>
              <h3 className="text-2xl font-bold uppercase">
                The Original Traders
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                At The Original Traders, we provide genuine auto parts with
                quality, reliability, and trust. Our focus is on competitive
                pricing, timely delivery, and minimizing downtime for your
                business. From single pieces to bulk supply, we’re your
                dependable partner for all bearing solutions.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-xl font-bold">Links</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#keyindustries"
                    className="hover:text-white transition-colors"
                  >
                    Key Industries
                  </a>
                </li>
                <li>
                  <a
                    href="#contactus"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-xl font-bold">Contact</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li className="flex items-center justify-center md:justify-start">
                  <Mail className="mr-2" />
                  <a
                    href="mailto:sales@theoriginaltraders.in"
                    className="hover:text-white transition-colors"
                  >
                    theoriginaltraders@gmail.com
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <Phone className="mr-2" />
                  <a
                    href="tel:+919800000009"
                    className="hover:text-white transition-colors"
                  >
                    +91-9800000009
                  </a>
                </li>
                <a
                  href="https://wa.me/919876543210" // Replace with your WhatsApp number (with country code, no + or spaces)
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-center md:justify-start hover:text-white transition-colors">
                    <WhatsAppIcon />
                    <span>WhatsApp</span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <img
              src="/logo.png"
              alt="The Original Traders Logo"
              className="h-20 w-auto"
            />
            <p className="text-sm text-gray-500 text-center">
              © Copyright 2025 | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
