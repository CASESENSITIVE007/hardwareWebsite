'use client'

// Define the animation CSS as a string
const animationCSS = `
  @keyframes scroll-rtl {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .animate-scroll-rtl {
    animation: scroll-rtl 30s linear infinite;
  }
`;

const cards = [1,2,3,4,5,6,7,8,9,10];

function Clientcards() {
  return (
    <>
      {/* This style tag injects the animation directly */}
      <style>{animationCSS}</style>

      <section className="bg-gradient-to-b  from-[#4A55A2] to-[#acbcdb] py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-5xl font-bold tracking-tight text-white sm:text-5xl">
            Our Esteemed Clientele
          </h2>
        </div>

        <div 
          className="mt-12 sm:mt-16 w-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
          }}
        >
          {/* This div uses the animation class defined in the style tag above */}
          <div className="animate-scroll-rtl flex min-w-full flex-shrink-0 items-center">
            
            {[...cards, ...cards].map((_, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <div className="
                  w-20 h-20
                  sm:w-34 sm:h-34
                  lg:w-40 lg:h-40
                  bg-white rounded-2xl shadow-xl
                ">
                  {/* Card content can go here */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Clientcards;