'use client'
import { useState } from 'react';
import Image from "next/image"

function Card({ Name , image , descName , desc}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    // 1. Add 'group' back and keep onClick. Add cursor-pointer for a visual cue.
    <div 
      className={` group h-96 w-72   [perspective:1000px] cursor-pointer`}
      onClick={handleFlip}
    >
      {/* 2. Combine the hover effect with the click state */}
      <div className={`
        relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] 
        group-hover:[transform:rotateY(180deg)] 
        ${isFlipped ? '[transform:rotateY(180deg)]' : ''}
        `}>
        
        {/* Front Face (no changes here) */}
        <div className="relative h-full w-full bg-gradient-to-b from-red-100 to-red-300 rounded-xl    ">
      
        {/* 2. The Background Layer */}
        <div
        style={{ backgroundImage: `url(${image})` }}
        // These classes center, cover, and set opacity to 50%
        className="absolute inset-0 h-full w-full rounded-xl bg-cover bg-center opacity-10"> 
        </div>

        {/* 3. The Content Layer (sits on top) */}
        <div className="relative flex h-full w-full flex-col items-center justify-center px-12 text-center text-black-100">
        <h1 className="text-3xl font-medium">{Name}</h1>
        </div>

        </div>
        
        {/* Back Face (no changes here) */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-red-700 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">{descName}</h1>
            <p className="mt-2 text-lg">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;