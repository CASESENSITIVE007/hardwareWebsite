"use client"
import LogoLoop from './ui/LogoLoop';


// Alternative with image sources
const imageLogos = [
  { src: "/Customer/1.jpeg", alt: "Company 1", href: "" },
  { src: "/Customer/2.jpeg", alt: "Company 1", href: "" },
  { src: "/Customer/3.jpeg", alt: "Company 1", href: "" },
  { src: "/Customer/4.jpeg", alt: "Company 1", href: "" },
  { src: "/Customer/5.jpeg", alt: "Company 1", href: "" },
  { src: "/Customer/6.jpeg", alt: "Company 1", href: "" },
  { src: "/Customer/7.jpeg", alt: "Company 1", href: "" },
  { src: "/Customer/8.jpeg", alt: "Company 1", href: "" },
  { src: "/Customer/9.jpeg", alt: "Company 1", href: "" },
  { src: "/Customer/10.jpeg", alt: "Company 1", href: "" },
  
];

function TestTestimonial() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={100}
        gap={50}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
export default TestTestimonial;