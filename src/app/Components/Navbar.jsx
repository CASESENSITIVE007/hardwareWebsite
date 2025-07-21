'use client';
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll";


function Navbar() {
  return (
    <nav className="m-auto">
        <ul className="text-xl flex justify-center gap-10 m-2 " >
            <Link href="/"><li className="hover:text-gray-300 cursor-pointer">Home</li></Link> 
            <Link href="/Products"   ><li className="hover:text-gray-300 cursor-pointer">Products</li></Link>
            <ScrollLink to="about" smooth={true} duration={500} ><li className="hover:text-gray-300 cursor-pointer">About</li></ScrollLink> 
            <ScrollLink to="contactus" smooth={true} duration={500} ><li className="hover:text-gray-300 cursor-pointer">Contact</li></ScrollLink>
            <ScrollLink to="keyindustries"  smooth={true} duration={500}><li className="hover:text-gray-300 cursor-pointer">KeyIndustries</li></ScrollLink>
        </ul>
    </nav>

  )
}

export default Navbar
