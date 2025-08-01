import Card from "./Card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
function Cards() {
  return (
    <div className="text-center m-10 ">
        <h1 className="md:text-6xl text-5xl font-red m-10  text-center font-bold " >Discover 50+ product choices</h1>
    <div className='md:flex justify-center gap-10  grid text-center  ' >
      
        <div className="gap-10 flex flex-col" >
            <Card Name="Ball Bearing"/>
            <Card Name="Lubricant"/>
            </div>
        <div  className="gap-10 flex flex-col"> 
            <Card/>
            <Card/>
        </div>
    
  
    </div>
   <Link href='/products' > <Button  className="m-10 cursor-pointer" >ALL Products</Button></Link>
    </div>
  )
}

export default Cards