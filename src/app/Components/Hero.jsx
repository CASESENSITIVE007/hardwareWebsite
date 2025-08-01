function Hero() {
  return (
    <div className=" relative inset-0 h-full lg:min-h-screen flex flex-col justify-center  ">
      {/* Faded Bearings image */}
      <img 
        src="/hero-bg-image.webp"
        alt="Bearings background"
        className="absolute left-1/2  top-1/2 -translate-y-1/2 -translate-x-1/2  fill opacity-20  md:w-2/3 w-full mx-auto"
      />
      {/* Main Content */}
      <div className="relative mt-0 md:mb-30 md:m-20 m-10 z-10 text-center md:text-left md:place-items-start   ">
        <div className="lg:text-9xl md:text-6xl text-4xl leading-tight font-extrabold  text-red-700 " >
          THE<br/>ORIGINAL<br/>TRADERS
        </div>
        <div className="italic text-blue-700 text-xl font-medium  lg:text-4xl md:text-2xl " >
          Keeping Machines in Motion
        </div>
      </div>
    </div>
  );
}

export default Hero;