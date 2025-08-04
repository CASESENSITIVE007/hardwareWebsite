'use client'
import { useState } from 'react';
import Image from "next/image"

function Card({ Name , descName , desc}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    // 1. Add 'group' back and keep onClick. Add cursor-pointer for a visual cue.
    <div 
      className="group h-96 w-72  [perspective:1000px] cursor-pointer"
      onClick={handleFlip}
    >
      {/* 2. Combine the hover effect with the click state */}
      <div className={`
        relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] 
        group-hover:[transform:rotateY(180deg)] 
        ${isFlipped ? '[transform:rotateY(180deg)]' : ''}
      `}>
        
        {/* Front Face (no changes here) */}
        <div className="absolute inset-0">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-slate-800 px-12 text-center text-slate-100 [backface-visibility:hidden]">
            <h1 className="text-3xl font-bold">{Name}</h1>
          </div>
        </div>
        
        {/* Back Face (no changes here) */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-900 px-12 text-center text-slate-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
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