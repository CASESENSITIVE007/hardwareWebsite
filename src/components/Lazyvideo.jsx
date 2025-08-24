"use client";
import { useEffect, useRef } from "react";

export default function LazyVideo({
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  className = "",
}) {
  const videoRef = useRef(null); // ✅ no HTMLVideoElement here

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(videoEl);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      preload="none"
      playsInline
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
