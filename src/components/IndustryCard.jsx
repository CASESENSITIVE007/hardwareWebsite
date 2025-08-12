import Image from 'next/image'

function IndustryCard({ imageUrl, title, altText }) {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm aspect-[3/4] overflow-hidden rounded-xl shadow-lg m-2 p-2 group mx-auto">
      
      {/* Background image */}
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, 
               (max-width: 1024px) 50vw, 
               25vw"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

      {/* Title */}
      <h3 className="absolute bottom-0 left-0 p-3 sm:p-4 text-white text-lg sm:text-xl md:text-2xl font-bold z-20">
        {title}
      </h3>

    </div>
  )
}

export default IndustryCard
