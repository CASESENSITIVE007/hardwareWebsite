
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
export default function Home() {
  return (
   <div>
    
    <Hero/>
    <Features/>
    <Cards/>
    <Clientcards/>
    <Contactus/>
    <ReviewsGrid/>
    <KeyIndustries/>
    <WhyUs/>
 
    

   </div>
  );
}
