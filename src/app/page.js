
import { Button } from "@/components/ui/button"

import Hero from "../components/Hero"
import Contactus from "../components/Contactus"
import Features from "../components/Features"
import Navbar from "../components/Navbar";
import KeyIndustries from "../components/KeyIndustries";
import ReviewsGrid from "../components/ReviewsGrid"
import Cards from "../components/Cards";
import Clientcards from "../components/Clientcards";
import WhyUs from "../components/WhyUs";
import ContactSection from "../components/ContactSection";
export default function Home() {
  return (
   <div>
    
    <Hero/>
    <Features/>
    <Cards/>
    <KeyIndustries/>
    <Clientcards/>
    <ReviewsGrid/>
    <Contactus/>
    <WhyUs/>
    <ContactSection/>

   </div>
  );
}
