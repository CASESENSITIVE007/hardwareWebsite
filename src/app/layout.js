
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate home page organization schema
function generateHomeStructuredData() {
  const baseUrl = "https://www.theoriginaltraders.com";
  
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "The Original Traders",
    alternateName: "Original Traders",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 400,
      height: 400
    },
    image: `${baseUrl}/hero-bg-image.webp`,
    description: "Leading supplier of industrial hardware components including precision bearings, lubricants, and auto spare parts in Aligarh, India.",
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "The Original Traders Team"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aligarh",
      addressRegion: "Uttar Pradesh", 
      addressCountry: "IN",
      postalCode: "202001"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7827505517",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00"
        }
      }
    ],
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Hardware Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Industrial Bearings",
            category: "Industrial Hardware"
          }
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Product",
            name: "Industrial Lubricants",
            category: "Industrial Hardware"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product", 
            name: "Auto Spare Parts",
            category: "Automotive"
          }
        }
      ]
    },
    sameAs: [
      // Add social media URLs when available
      // "https://www.facebook.com/theoriginaltraders",
      // "https://www.linkedin.com/company/theoriginaltraders",
      // "https://www.instagram.com/theoriginaltraders"
    ]
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "The Original Traders",
    description: "Industrial hardware and auto parts suppliers in Aligarh, India",
    publisher: {
      "@id": `${baseUrl}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/products?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return { organization, website };
}

export const metadata = {
  title: {
    default: "The Original Traders - Industrial Hardware & Auto Parts Suppliers | Aligarh, India",
    template: "%s | The Original Traders"
  },
  description: "Leading supplier of precision industrial bearings, lubricants, and genuine auto parts in Aligarh, India. Authorized dealers of SKF, FAG, TIMKEN bearings and Galaxy lubricants. Trusted by industries across North India since inception.",
  keywords: [
    "industrial hardware suppliers Aligarh",
    "auto parts dealers Aligarh", 
    "bearing suppliers North India",
    "industrial lubricants Aligarh",
    "precision bearings India",
    "automotive parts dealers",
    "machinery components suppliers",
    "industrial equipment Aligarh",
    "SKF authorized dealer",
    "FAG bearings dealer",
    "TIMKEN bearings supplier",
    "Galaxy lubricants distributor",
    "the original traders Aligarh",
    "hardware components North India",
    "industrial supplies Uttar Pradesh"
  ].join(", "),
  authors: [{ name: "The Original Traders" }],
  creator: "The Original Traders",
  publisher: "The Original Traders",
  metadataBase: new URL("https://www.theoriginaltraders.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.theoriginaltraders.com",
    siteName: "The Original Traders",
    title: "The Original Traders - Industrial Hardware & Auto Parts Suppliers",
    description: "Leading supplier of precision bearings, industrial lubricants, and genuine auto parts in Aligarh, India. Authorized dealers of top brands across North India.",
    images: [
      {
        url: "/hero-bg-image.webp",
        width: 1200,
        height: 630,
        alt: "The Original Traders - Industrial Hardware Suppliers in Aligarh",
      },
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "The Original Traders Company Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Original Traders - Industrial Hardware & Auto Parts",
    description: "Leading supplier of precision bearings, industrial lubricants, and genuine auto parts in Aligarh, India.",
    images: ["/hero-bg-image.webp"],
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
    google: "6h2mn5zgYOzBImonwxEXdJxwnqB4tJSupFBVcr2cih4",
  },
  category: "Industrial Hardware",
  other: {
    "google-site-verification": "6h2mn5zgYOzBImonwxEXdJxwnqB4tJSupFBVcr2cih4"
  }
};

export default function RootLayout({ children }) {
  const structuredData = generateHomeStructuredData();

  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#9a2700" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data for Home/Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
      >
       <Navbar />
        <main role="main">
          {children}
        </main>
         <WhatsAppButton />
        <Footer/>
      </body>
    </html>
  );
}
