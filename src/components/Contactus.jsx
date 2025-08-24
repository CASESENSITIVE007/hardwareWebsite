"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // In a real app, you would send this data to a server
    console.log("Form data submitted:", data);
    alert("Thank you for your message! We will get back to you soon.");
    reset(); // Reset form after submission
  };

  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div id="contactus" className="  flex items-center justify-center p-4">
      <motion.div
        className="max-w-6xl w-full mx-auto bg-white rounded-lg shadow-xl flex flex-col md:flex-row overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Map and Contact Info */}
        <motion.div
          className="w-full md:w-1/2 p-8 text-gray-700"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
          <div className="w-24 h-1 bg-red-700 mb-6"></div>

          <p className="mb-6">
            We're here to help! Fill out the form, and our team in Aligarh will
            get back to you within 24 hours.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {/* SVG Icon for Email */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>sales@theoriginaltraders.com</span>
            </div>
            <div className="flex items-center gap-4">
              {/* SVG Icon for Location */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
                11, Divya Lok, Mathura, Maholi, Mathura, Uttar Pradesh - 281004
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* SVG Icon for Phone */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+919084019676">
                <span>+91 9084019676</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              {/* SVG Icon for Phone */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+919625741370">
                <span>+91 9625741370</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              {/* SVG Icon for Phone */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a href="tel:+919871912068">
                <span>+91 9871912068</span>
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3540.1639982649112!2d77.65984727545882!3d27.46415327632273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDI3JzUxLjAiTiA3N8KwMzknNDQuNyJF!5e0!3m2!1sen!2sin!4v1756046065903!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Mathura"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div className="w-full md:w-1/2 p-8" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-2">Send us a Message </h2>
          <div className="w-24 h-1 bg-red-700 mb-6"></div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Form Fields */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                {...register("name", { required: "Full Name is required." })}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format.",
                  },
                })}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ADDED: Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className={`w-full px-4 py-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                {...register("phone", {
                  required: "Phone number is required.",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Please enter a valid 10-digit phone number.",
                  },
                })}
              />
              <AnimatePresence>
                {errors.phone && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.phone.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={`w-full px-4 py-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                }`}
                {...register("subject", { required: "Subject is required." })}
              />
              <AnimatePresence>
                {errors.subject && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.subject.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className={`w-full px-4 py-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                {...register("message", { required: "Message is required." })}
              ></textarea>
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              className="py-3 px-6 cursor-pointer bg-red-700 text-white font-bold rounded-md hover:bg-red-900 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contactus;
