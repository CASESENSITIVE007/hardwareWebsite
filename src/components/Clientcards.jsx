'use client'

const animationCSS = `
  @keyframes scroll-rtl {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  .animate-scroll-rtl {
    animation: scroll-rtl 30s linear infinite;
  }
`;

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Clientcards() {
  return (
    <>
      <style>{animationCSS}</style>

      <section className="bg-gradient-to-b from-[#4A55A2] to-[#acbcdb] py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
            Our Esteemed Clientele
          </h2>
        </div>

        <div
          className="mt-12 sm:mt-16 w-full"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
          }}
        >
          <div className="animate-scroll-rtl flex items-center gap-8">
            {[...cards, ...cards].map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-2xl shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                style={{
                  width: 'clamp(70px, 8vw, 150px)',
                  height: 'clamp(70px, 8vw, 150px)',
                }}
              >
                <img
                  src={`/Customer/${card}.jpeg`}
                  alt={`Client logo ${card}`}
                  className="w-full h-full object-contain p-3 "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Clientcards;
