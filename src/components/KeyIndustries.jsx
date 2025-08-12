import IndustryCard from "./IndustryCard"

function KeyIndustries() {
  return (
    <section id="keyindustries" className="text-center mx-auto m-4">
      {/* Heading */}
      <h1 className="text-center lg:text-5xl text-3xl font-bold mb-10">
        Key Industries
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        <IndustryCard imageUrl={"/keyindustries/infrastructure.jpg"} altText={"Infrastructure"} title={"Infrastructure"} />
        <IndustryCard imageUrl={"/keyindustries/cement.jpg"} altText={"Cement"} title={"Cement"} />
        <IndustryCard imageUrl={"/keyindustries/automotive.png"} altText={"Automotive"} title={"Automotive"} />
        <IndustryCard imageUrl={"/keyindustries/motor.jpeg"} altText={"Motor and Gearbox"} title={"Motor and Gearbox"} />
        <IndustryCard imageUrl={"/keyindustries/papermills.jpg"} altText={"Paper Mills"} title={"Paper Mills"} />
        <IndustryCard imageUrl={"/keyindustries/Textile.jpg"} altText={"Textile"} title={"Textile"} />
      </div>
    </section>
  )
}

export default KeyIndustries
