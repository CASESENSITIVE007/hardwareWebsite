"use client";
import { useState } from "react";

function Card({ Name, image, descName, desc }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] lg:max-w-sm m-2 p-2 [perspective:1000px] cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`
          relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] 
          group-hover:[transform:rotateY(180deg)]
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* Front Face */}
        <div className="relative h-full w-full bg-gradient-to-b from-red-200 to-red-500 rounded-xl overflow-hidden [backface-visibility:hidden]">
          {/* Background Image */}
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="absolute inset-0 h-full w-full bg-contain bg-no-repeat   bg-center opacity-50"
          ></div>

          {/* Content */}
          <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
            <h1 className="absolute bottom-0  p-3 sm:p-4 text-white text-lg  sm:text-xl md:text-2xl font-bold z-20">
              {Name}
            </h1>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-red-700 px-6 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden ">
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              {descName || Name}
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-md   ">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
