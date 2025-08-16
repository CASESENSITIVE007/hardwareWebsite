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
        Discover 50+ product choices
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
              desc: "This is the description view",
            },
            {
              image: "/cardlubricantsbg.png",
              Name: "Lubricants",
              desc: "This is the description view",
            },
            {
              image: "/cardsparepartsbg.png",
              Name: "Automotive Spare Parts",
              desc: "This is the description view",
            },
            {
              image: "/logogalaxy.png",
              Name: "Galaxy Brand",
              desc: "This is the description view",
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
