
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

export const metadata = {
  title: "The Original Traders",
  description: "Your trusted partner for precision hardware components and genuine auto parts in the automotive and industrial sectors.",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="6h2mn5zgYOzBImonwxEXdJxwnqB4tJSupFBVcr2cih4" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
      >
       <Navbar />
        {children}
         <WhatsAppButton />
        <Footer/>
      </body>
    </html>
  );
}
