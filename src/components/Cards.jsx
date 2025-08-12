import Card from "./Card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function Cards() {
  return (
    <div className="text-center mt-10 px-4 ">
      <h1 className="md:text-4xl lg:text-5xl text-3xl font-bold m-2">
        Discover 50+ product choices
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-8">
        <Card image="/hero-bg-image.webp" Name="Ball Bearing" desc="This is the description view" />
        <Card image="/hero-bg-image.webp" Name="Lubricant" desc="This is the description view" />
        <Card image="/hero-bg-image.webp" Name="Automotive Spare Parts" desc="This is the description view" />
        <Card image="/hero-bg-image.webp" Name="Galaxy Brand" desc="This is the description view" />
      </div>

      <Link href="/products">
        <Button className="mt-8 inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-red-600 to-blue-700 px-7 py-7 text-lg font-semibold text-white shadow-sm transition-all hover:from-red-700 hover:to-blue-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500">
          ALL Products
        </Button>
      </Link>
    </div>
  )
}

export default Cards
