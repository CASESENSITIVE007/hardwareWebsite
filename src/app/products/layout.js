import { productCategories } from './productData';

// Generate metadata for SEO specifically for products page
export const metadata = {
  title: "Industrial Hardware Products | Bearings, Lubricants & Spare Parts | The Original Traders",
  description: "Premium industrial hardware components including precision bearings, high-performance lubricants, and auto spare parts. Trusted by industries across India for reliability and performance.",
  keywords: [
    "industrial bearings",
    "ball bearings", 
    "roller bearings",
    "precision bearings",
    "needle roller bearings",
    "pillow block bearings",
    "industrial lubricants",
    "engine oils",
    "grease",
    "industrial oil",
    "auto spare parts",
    "hardware components",
    "industrial equipment",
    "SKF bearings",
    "FAG bearings", 
    "TIMKEN bearings",
    "NSK bearings",
    "NTN bearings",
    "Galaxy lubricants",
    "machinery parts",
    "bearing suppliers India",
    "industrial hardware suppliers",
    "automotive spare parts",
    "precision engineering components"
  ].join(", "),
  authors: [{ name: "The Original Traders" }],
  creator: "The Original Traders",
  publisher: "The Original Traders",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.theoriginaltraders.com"),
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Industrial Hardware Products | Bearings, Lubricants & Auto Parts",
    description: "Premium industrial bearings, lubricants & spare parts. Authorized dealers of SKF, FAG, TIMKEN bearings and Galaxy lubricants across India.",
    url: "https://www.theoriginaltraders.com/products",
    siteName: "The Original Traders",
    images: [
      {
        url: "/products/helmet.jpg",
        width: 1200,
        height: 630,
        alt: "Industrial Hardware Products - Bearings, Lubricants & Spare Parts",
      },
      {
        url: "/logo.png", 
        width: 400,
        height: 400,
        alt: "The Original Traders Logo",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Hardware Products | The Original Traders",
    description: "Premium industrial bearings, lubricants & spare parts. Authorized dealers across India.",
    images: ["/products/helmet.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large", 
      "max-snippet": -1,
    },
  },
  category: "Industrial Hardware",
};

// Generate JSON-LD structured data for products
function generateProductsStructuredData() {
  const baseUrl = "https://www.theoriginaltraders.com";
  
  // Product catalog structured data
  const productCatalog = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${baseUrl}/products`,
    name: "Industrial Hardware Products",
    description: "Complete range of industrial bearings, lubricants, and auto spare parts",
    category: "Industrial Hardware",
    brand: {
      "@type": "Brand",
      name: "The Original Traders",
      logo: `${baseUrl}/logo.png`
    },
    manufacturer: {
      "@type": "Organization", 
      name: "The Original Traders",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7827505517",
        contactType: "sales",
        areaServed: "IN"
      }
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "The Original Traders"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150"
    }
  };

  // Individual product categories
  const productCategories = [
    {
      "@type": "Product",
      name: "Industrial Bearings",
      description: "Precision bearings including ball bearings, roller bearings, needle bearings from top brands like SKF, FAG, TIMKEN",
      category: "Bearings",
      image: `${baseUrl}/products/bb1.jpeg`,
      brand: {
        "@type": "Brand",
        name: "SKF, FAG, TIMKEN"
      },
      manufacturer: {
        "@type": "Organization",
        name: "The Original Traders"
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        priceRange: "₹100 - ₹50,000",
        seller: {
          "@type": "Organization",
          name: "The Original Traders"
        }
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "85",
        bestRating: "5",
        worstRating: "1"
      }
    },
    {
      "@type": "Product", 
      name: "Industrial Lubricants",
      description: "High-performance engine oils, grease, and industrial oils from Galaxy brand",
      category: "Lubricants",
      image: `${baseUrl}/products/e1.jpg`,
      brand: {
        "@type": "Brand",
        name: "Galaxy"
      },
      manufacturer: {
        "@type": "Organization",
        name: "The Original Traders"
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        priceRange: "₹200 - ₹25,000",
        seller: {
          "@type": "Organization",
          name: "The Original Traders"
        }
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "112",
        bestRating: "5",
        worstRating: "1"
      }
    },
    {
      "@type": "Product",
      name: "Auto Spare Parts", 
      description: "Genuine automotive spare parts and components for various vehicle models",
      category: "Automotive Parts",
      image: `${baseUrl}/products/rb.png`,
      brand: {
        "@type": "Brand",
        name: "OEM Brands"
      },
      manufacturer: {
        "@type": "Organization",
        name: "The Original Traders"
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        priceRange: "₹150 - ₹75,000",
        seller: {
          "@type": "Organization",
          name: "The Original Traders"
        }
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "95",
        bestRating: "5",
        worstRating: "1"
      }
    }
  ];

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${baseUrl}/products`
      }
    ]
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industrial Hardware Product Catalog",
    description: "Complete range of industrial hardware components",
    numberOfItems: productCategories.length,
    itemListElement: productCategories.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: product
    }))
  };

  return {
    productCatalog,
    breadcrumbList,
    itemList
  };
}

export default function ProductsLayout({ children }) {
  const structuredData = generateProductsStructuredData();

  return (
    <>
      {/* JSON-LD Structured Data for Products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.productCatalog),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.breadcrumbList),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.itemList),
        }}
      />
      {children}
    </>
  );
}
