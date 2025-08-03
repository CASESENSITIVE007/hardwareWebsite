'use client'
import React, { useEffect, useRef } from 'react';

const Features = () => {
  // Create a ref to attach to the section element
  const sectionRef = useRef(null);

  // useEffect hook runs after the component mounts to the DOM
  useEffect(() => {
    const statsSectionNode = sectionRef.current;
    if (!statsSectionNode) return;

    const counters = statsSectionNode.querySelectorAll('.counter');
    const animationDuration = 2000; // 2 seconds

    const countUp = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / animationDuration, 1);
        const currentVal = Math.floor(progress * target);
        
        el.textContent = currentVal.toLocaleString('en-US') + suffix;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          el.textContent = target.toLocaleString('en-US') + suffix;
        }
      };
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => {
            if (!counter.dataset.animated) {
              countUp(counter);
              counter.dataset.animated = 'true';
            }
          });
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of the section is visible
    });

    observer.observe(statsSectionNode);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section ref={sectionRef} id="exact-stats-section" className="relative overflow-hidden bg-[#8c2a32] py-20  sm:py-24">
      
      {/* Faint Background Image (Alloy Wheel) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img src="https://i.imgur.com/gQV397V.png" alt="Alloy wheel background" className="h-auto w-full max-w-4xl"/>
      </div>
      
      {/* Red Radial Gradient Overlay */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(206,44,56,0.85) 0%, rgba(140,42,50,0.95) 70%, rgba(106,29,35,1) 100%)' }}></div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-16 gap-x-6 text-center md:grid-cols-4 md:gap-x-8">

          {/* Stat 1: Global Presence */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-white/80">
              <svg className="h-14 w-14 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.2" stroke="currentColor">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeOpacity="1"></path>
                <path d="M2 12H22" strokeOpacity="0.8"></path>
                <path d="M12 2C14.5013 4.73635 15.922 8.29203 16 12C15.922 15.708 14.5013 19.2636 12 22C9.49872 19.2636 8.07803 15.708 8 12C8.07803 8.29203 9.49872 4.73635 12 2Z" strokeOpacity="0.8"></path>
              </svg>
            </div>
            <p className="counter text-5xl font-semibold text-white" data-target="60" data-suffix="+">0+</p>
            <p className="mt-2 text-lg font-light leading-snug text-white/90">Countries In 6<br/>Continents</p>
          </div>

          {/* Stat 2: Variants */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-white/80">
              <svg className="h-14 w-14 text-white" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2.5">
                <path d="M22.42 13.33V31.9L41.54 42.66V24.09L22.42 13.33Z"></path>
                <path d="M3.31 24.09L22.43 13.33L41.54 24.09L22.43 34.85L3.31 24.09Z"></path>
                <path d="M22.43 34.85V53.42L41.55 42.66V24.09L22.43 34.85Z"></path>
                <path d="M41.54 24.09L60.66 13.33"></path>
                <path d="M41.54 42.66L60.66 31.9"></path>
              </svg>
            </div>
            <p className="counter text-5xl font-semibold text-white" data-target="2500" data-suffix="+">0+</p>
            <p className="mt-2 text-lg font-light leading-snug text-white/90">Variants</p>
          </div>

          {/* Stat 3: Dealer Network */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-white/80">
              <svg className="h-14 w-14 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
              </svg>
            </div>
            <p className="counter text-5xl font-semibold text-white" data-target="800" data-suffix="+">0+</p>
            <p className="mt-2 text-lg font-light leading-snug text-white/90">Dealer Network</p>
          </div>

          {/* Stat 4: Plants */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-white/80">
              <svg className="h-14 w-14 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke="currentColor">
                <path d="M2 21H22"></path>
                <path d="M4 21V6.3131C4 5.45233 4.54569 4.69839 5.38562 4.38562L11.3856 2.38562C11.7519 2.24896 12.1581 2.23968 12.5291 2.36199L18.6144 4.38562C19.4543 4.69839 20 5.45233 20 6.3131V21"></path>
                <path d="M15 15H17"></path>
                <path d="M15 11H17"></path>
                <path d="M15 7H17"></path>
                <path d="M7 15H9"></path>
                <path d="M7 11H9"></path>
                <path d="M7 7H9"></path>
              </svg>
            </div>
            <p className="counter text-5xl font-semibold text-white" data-target="6">0</p>
            <p className="mt-2 text-lg font-light leading-snug text-white/90">PLANTS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;