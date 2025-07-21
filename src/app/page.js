
import { Button } from "@/components/ui/button"
import Hero from "./Components/Hero"
import Contactus from "./Components/Contactus"
import Navbar from "./Components/Navbar";
import KeyIndustries from "./Components/KeyIndustries";
import About from './Components/About';
import Footer from './Components/Footer';
export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Contactus/>
    <KeyIndustries/>
    <About/>
    

   </div>
  );
}
