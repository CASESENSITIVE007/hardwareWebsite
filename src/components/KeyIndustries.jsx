
import IndustryCard from "./IndustryCard"
function KeyIndustries() {
  return (

    <div id="keyindustries" className="text-center  m-2 overflow-auto" >
      <h1 className="text-center lg:text-5xl text-2xl font-bold m-10" >Key Industries</h1>
      <div className="flex justify-center   flex-wrap">
      <IndustryCard imageUrl={"/hero-bg-image.webp"} altText={""}  title={""} />
      <IndustryCard imageUrl={"/hero-bg-image.webp"} altText={""}  title={""} />
      <IndustryCard imageUrl={"/hero-bg-image.webp"} altText={""}  title={""} />
     
     
    </div>
    </div>
  )
}

export default KeyIndustries
