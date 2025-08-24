import { Suspense } from "react";
import { Metadata } from "next";
import ProductsClient from "./products-client";
import { productCategories } from "./productData";

// Generate metadata for SEO
export const metadata = {
  title:
    "Industrial Hardware Products | Bearings, Lubricants & Spare Parts | The Original Traders",
  description:
    "Premium industrial hardware components including precision bearings, high-performance lubricants, and auto spare parts. Trusted by industries across India for reliability and performance.",
  keywords: [
    "industrial bearings",
    "ball bearings",
    "roller bearings",
    "precision bearings",
    "industrial lubricants",
    "engine oils",
    "grease",
    "auto spare parts",
    "hardware components",
    "industrial equipment",
    "SKF bearings",
    "FAG bearings",
    "TIMKEN bearings",
    "Galaxy lubricants",
    "machinery parts",
    "bearing suppliers India",
    "industrial hardware suppliers",
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
    title: "Industrial Hardware Products | The Original Traders",
    description:
      "Premium industrial bearings, lubricants & spare parts. Trusted suppliers of SKF, FAG, TIMKEN bearings and Galaxy lubricants across India.",
    url: "https://www.theoriginaltraders.com/products",
    siteName: "The Original Traders",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "The Original Traders - Industrial Hardware Suppliers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Hardware Products | The Original Traders",
    description:
      "Premium industrial bearings, lubricants & spare parts. Trusted suppliers across India.",
    images: ["/logo.png"],
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
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

// Generate JSON-LD structured data
function generateStructuredData() {
  const baseUrl = "https://www.theoriginaltraders.com";

  // Organization structured data
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Original Traders",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Leading supplier of industrial hardware components including bearings, lubricants, and spare parts.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7827505517",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aligarh",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    sameAs: [
      // Add your social media URLs when available
      // 'https://www.facebook.com/theoriginaltraders',
      // 'https://www.linkedin.com/company/theoriginaltraders',
    ],
  };

  // Product catalog structured data
  const products = productCategories.map((category) => ({
    "@type": "Product",
    name: category.name,
    description: category.description,
    category: "Industrial Hardware",
    brand: {
      "@type": "Brand",
      name: "The Original Traders",
    },
    manufacturer: {
      "@type": "Organization",
      name: "The Original Traders",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: "The Original Traders",
      },
    },
  }));

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${baseUrl}/products`,
      },
    ],
  };

  return {
    organization,
    products,
    breadcrumbList,
  };
}

// Server-side loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6">
          <div className="w-full h-full rounded-full border-4 border-red-700 border-t-transparent animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-red-700 mb-2">
          THE ORIGINAL TRADERS
        </h2>
        <p className="text-blue-700 italic">Loading Premium Hardware...</p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.organization),
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Industrial Hardware Products",
            description: "Complete range of industrial hardware components",
            itemListElement: structuredData.products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: product,
            })),
          }),
        }}
      />

      <Suspense fallback={<LoadingFallback />}>
        <ProductsClient />
      </Suspense>
    </>
  );
}
