"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

function ContactSection() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Prevent body scroll when modal open
  // useEffect(() => {
  //   if (open) {
  //     const prev = document.body.style.overflow;
  //     document.body.style.overflow = "hidden";
  //     return () => {
  //       document.body.style.overflow = prev;
  //     };
  //   }
  // }, [open]);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-[50vh] overflow-hidden p-4 sm:p-6 lg:p-8   ">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-75"
        autoPlay
        poster="/whyussectionplaceholder.png"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/whyus.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-xl ">
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Have Questions?
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-3xl">
          Reach out to us for any queries.
        </p> */}
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
          className="text-red-100 mb-8 max-w-2xl mx-auto text-lg text-justify backdrop-blur rounded-2xl p-4"
        >
          Our expert engineering team specializes in designing and manufacturing
          precision hardware components tailored to your exact specifications
          and performance requirements.
        </motion.p>
        <Button
          onClick={handleOpen}
          className="mt-8 inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-red-600 to-blue-700 px-6 py-6 text-lg font-semibold text-white shadow-sm transition-all hover:from-red-700 hover:to-blue-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Contact Us
        </Button>
      </div>

      <AnimatePresence>
        {open && <ContactModal onClose={handleClose} />}
      </AnimatePresence>
    </div>
  );
}

const ContactModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [status, setStatus] = useState({ state: "idle", error: null });

  const onSubmit = async (data) => {
    setStatus({ state: "submitting", error: null });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus({
          state: "error",
          error: json.error || "Submission failed.",
        });
        return;
      }
      setStatus({ state: "success", error: null });
      // Auto close a bit later to let user read message
      setTimeout(() => {
        reset();
        onClose();
        setStatus({ state: "idle", error: null });
      }, 1800);
    } catch (e) {
      console.error(e);
      setStatus({ state: "error", error: "Network error. Please try again." });
    }
  };

  // Animations
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const modalVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 220, damping: 22 },
    },
    exit: { opacity: 0, y: 40 },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[990] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backdropVariants}
    >
      {/* Click outside to close */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        variants={modalVariants}
        className="relative max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <button
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl leading-none"
        >
          &times;
        </button>
        <div className="grid md:grid-cols-2 gap-0">
          {/* Info side */}
          <div className="hidden md:block bg-gradient-to-br from-red-700 to-blue-700 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
            <p className="text-sm mb-6 opacity-90">
              We usually respond within 24 hours.
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1">📧</span> company.email@example.com
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">📍</span> 123 Business Rd, Aligarh, UP
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">📞</span> +91 98765 43210
              </li>
            </ul>
            <p className="text-xs mt-8 opacity-70">
              Your info is safe with us.
            </p>
          </div>
          {/* Form side */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-1">Send us a Message</h2>
            <div className="w-20 h-1 bg-red-700 mb-6" />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="modal_name"
                  className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide"
                >
                  Full Name
                </label>
                <input
                  id="modal_name"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("name", { required: "Full Name is required." })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="modal_email"
                  className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide"
                >
                  Email
                </label>
                <input
                  id="modal_email"
                  type="email"
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
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="modal_phone"
                  className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide"
                >
                  Phone
                </label>
                <input
                  id="modal_phone"
                  type="tel"
                  className={`w-full px-4 py-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("phone", {
                    required: "Phone number is required.",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Enter 10 digit phone number.",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="modal_subject"
                  className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide"
                >
                  Subject
                </label>
                <input
                  id="modal_subject"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("subject", { required: "Subject is required." })}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="modal_message"
                  className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="modal_message"
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-md bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("message", { required: "Message is required." })}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={onClose}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={status.state === "submitting"}
                  className="bg-red-700 hover:bg-red-900 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.state === "submitting"
                    ? "Sending..."
                    : status.state === "success"
                    ? "Sent!"
                    : "Send Message"}
                </Button>
              </div>
              {status.state === "error" && (
                <p className="text-red-600 text-sm text-right">
                  {status.error}
                </p>
              )}
              {status.state === "success" && (
                <p className="text-green-600 text-sm text-right">
                  Message sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
