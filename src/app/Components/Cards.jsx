import Card from "./Card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
function Cards() {
  return (
    <div className="text-center m-10 ">
        <h1 className="md:text-5xl text-4xl font-red m-10  text-center font-bold " >Discover 50+ product choices</h1>
    <div className='md:flex justify-center gap-10  grid text-center  ' >
      
        <div className="gap-10 flex flex-col" >
            <Card image="/hero-bg-image.webp" Name="Ball Bearing" desc="this is the description view"/>
            <Card image="/hero-bg-image.webp" Name="Lubricant" desc="this is the description view"/>
            </div>
        <div  className="gap-10 flex flex-col"> 
            <Card image="/hero-bg-image.webp" Name="Ball Bearing" desc="this is the description view" />
            <Card image="/hero-bg-image.webp" Name="Ball Bearing" desc="this is the description view" />
        </div>
    
  
    </div>
   <Link href='/products' > <Button  className="inline-flex 
  items-center gap-x-2 rounded-lg bg-gradient-to-r from-red-600 to-purple-700  px-6 py-6 text-lg font-semibold text-white shadow-sm transition-all hover:from-red-700 hover:to-purple-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-purple-500 mt-8" >ALL Products</Button>
  </Link>
    </div>
  )
}

export default Cards