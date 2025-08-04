
import { Button } from "@/components/ui/button"

import Hero from "./Components/Hero"
import Contactus from "./Components/Contactus"
import Features from "./Components/Features"
import Navbar from "./Components/Navbar";
import KeyIndustries from "./Components/KeyIndustries";
import ReviewsGrid from "./Components/ReviewsGrid"
import Cards from "./Components/Cards";
import Clientcards from "./Components/Clientcards";
import WhyUs from "./Components/WhyUs";
export default function Home() {
  return (
   <div>
    <Navbar/>
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
