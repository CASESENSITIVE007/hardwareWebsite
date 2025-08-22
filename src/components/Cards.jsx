"use client";
import Card from "./Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

function Cards() {
  return (
    <div className="text-center mt-10 px-4 ">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:text-4xl lg:text-5xl text-3xl font-bold m-2"
      >
        Our Products
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
        whileHover={{
          y: -6,
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-8 lg:w-2/3 mx-auto">
          {[
            {
              image: "/cardbearingbg.png",
              Name: "Bearings",
              desc: "You are right place if you need any bearing solution. We are supplying genuine and authentic bearings trusted for durability, precision and performance across industries",
            },
            {
              image: "/cardlubricantsbg.png",
              Name: "Lubricants",
              desc: "Complete lubricant solutions that safeguard your bearings and maximize machine uptime.",
            },
            {
              image: "/cardsparepartsbg.png",
              Name: "Automotive Spare Parts",
              desc: "Supplying quality tested spare parts to exporters serving international market.",
            },
            {
              image: "/logogalaxy.png",
              Name: "Galaxy Brand",
              desc: "The Original Traders is official All India distributor of renowned automotive aftermarket and lubricant brand.",
            },
          ].map((c, i) => (
            <Card {...c} key={i} />
          ))}
        </div>
      </motion.div>

      <Link href="/products">
        <Button className="mt-8 inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-red-600 to-blue-700 px-7 py-7 text-lg font-semibold text-white shadow-sm transition-all hover:from-red-700 hover:to-blue-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500">
          ALL Products
        </Button>
      </Link>
    </div>
  );
}

export default Cards;
