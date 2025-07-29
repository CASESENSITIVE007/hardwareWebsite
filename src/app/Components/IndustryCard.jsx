
import Image from 'next/image'
function IndustryCard({ imageUrl, title, altText }) {
  return (
     <div className="relative w-72 h-96 overflow-hidden rounded-xl shadow-lg group">
      
      {/* next/image component as the background */}
      {/* The 'fill' prop makes the image cover the parent div. */}
      {/* 'object-cover' ensures the image aspect ratio is maintained. */}
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient overlay for text readability */}
      {/* Placed between the image and the text using z-index. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

      {/* Title text */}
      {/* Positioned at the bottom with padding. */}
      <h3 className="absolute bottom-0 left-0 p-4 text-white text-2xl font-bold z-20">
        {title}
      </h3>
      
    </div>
  )
}

export default IndustryCard