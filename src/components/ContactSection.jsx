
'use client'
import { Link as ScrollLink } from 'react-scroll';
import { Button } from './ui/button';
function ContactSection() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-[50vh] overflow-hidden p-4 sm:p-6 lg:p-8">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-75"
        autoPlay
        poster='/whyussectionplaceholder.png'
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/whyus.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
 

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Have Questions?
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-3xl">
          Reach out to us for any queries.
        </p>
        <ScrollLink to="contactus" smooth={true} duration={500}>
        <Button className="mt-8 inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-red-600 to-blue-700 px-6 py-6 text-lg font-semibold text-white shadow-sm transition-all hover:from-red-700 hover:to-blue-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500">
          Contact Us
        </Button>
      </ScrollLink>
      </div>
    </div>
  )
}

export default ContactSection
