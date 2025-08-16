"use client";
import React, { useEffect, useRef } from "react";

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const statsSectionNode = sectionRef.current;
    if (!statsSectionNode) return;

    const counters = statsSectionNode.querySelectorAll(".counter");
    const animationDuration = 2000;

    const countUp = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || "";
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / animationDuration,
          1
        );
        const currentVal = Math.floor(progress * target);
        el.textContent = currentVal.toLocaleString("en-US") + suffix;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          el.textContent = target.toLocaleString("en-US") + suffix;
        }
      };
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter) => {
              if (!counter.dataset.animated) {
                countUp(counter);
                counter.dataset.animated = "true";
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(statsSectionNode);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="exact-stats-section"
      className="relative overflow-hidden bg-[#8c2a32] py-12 sm:py-20 md:py-24 "
    >
      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img
          src="https://i.imgur.com/gQV397V.png"
          alt="Alloy wheel background"
          className="h-auto w-full max-w-4xl"
        />
      </div>

      {/* Radial overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(206,44,56,0.85) 0%, rgba(140,42,50,0.95) 70%, rgba(106,29,35,1) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 gap-x-4 sm:gap-x-6 md:grid-cols-4 md:gap-x-8">
          {/* Stat item */}
          {[
            { icon: GlobeIcon, target: "3", suffix: "+", label: "Locations" },
            { icon: BoxIcon, target: "1000", suffix: "+", label: "Products" },
            {
              icon: UsersIcon,
              target: "800",
              suffix: "+",
              label: "Dealer Network",
            },
            {
              icon: FactoryIcon,
              target: "6",
              suffix: "+",
              label: "Export Countries",
            },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-4 sm:mb-6 flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full border border-white/80">
                <stat.icon className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-white" />
              </div>
              <p
                className="counter text-3xl sm:text-4xl md:text-5xl font-semibold text-white"
                data-target={stat.target}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </p>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg font-light leading-snug text-white/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SVG Icons ---
const GlobeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"></path>
    <path d="M2 12h20"></path>
    <path d="M12 2c2.5 2.74 3.92 6.3 4 10-.08 3.71-1.5 7.27-4 10-2.5-2.73-3.92-6.29-4-10 .08-3.7 1.5-7.26 4-10z"></path>
  </svg>
);

const BoxIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M22.42 13.33V31.9L41.54 42.66V24.09L22.42 13.33Z"></path>
    <path d="M3.31 24.09L22.43 13.33L41.54 24.09L22.43 34.85L3.31 24.09Z"></path>
    <path d="M22.43 34.85V53.42L41.55 42.66V24.09L22.43 34.85Z"></path>
    <path d="M41.54 24.09L60.66 13.33"></path>
    <path d="M41.54 42.66L60.66 31.9"></path>
  </svg>
);

const UsersIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
  </svg>
);

const FactoryIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M2 21H22"></path>
    <path d="M4 21V6.31C4 5.45 4.55 4.7 5.39 4.39l6-2.01c.37-.14.77-.14 1.15 0l6.09 2.02C19.45 4.7 20 5.45 20 6.31V21"></path>
    <path d="M15 15h2"></path>
    <path d="M15 11h2"></path>
    <path d="M15 7h2"></path>
    <path d="M7 15h2"></path>
    <path d="M7 11h2"></path>
    <path d="M7 7h2"></path>
  </svg>
);

export default Features;
