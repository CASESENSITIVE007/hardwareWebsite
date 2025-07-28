
import { Button } from "@/components/ui/button"
import Hero from "./Components/Hero"
import Contactus from "./Components/Contactus"
import Navbar from "./Components/Navbar";
import KeyIndustries from "./Components/KeyIndustries";
import About from './Components/About';
import Cards from "./Components/Cards";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Cards/>
    <Contactus/>
    <KeyIndustries/>
    <About/>
    

   </div>
  );
}
