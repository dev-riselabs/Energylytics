

function Hero() {
  return (
    <section className="bg-green65 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-2 font-inter pr-0 pb-0 md:pr-0 md:pb-0">
      <div className="flex flex-col gap-4 md:justify-center">
        <h1 className="text-green25 font-manrope text-[32px] font-bold">Our Solutions</h1>
        <p className="text-base sm:text-xl text-slate max-w-[35ch]">Turning Intelligence into Practical Solutions for Nigeria and the rest of Africa</p>
      </div>
      <img src="/solutions-hero.png" alt="" className="-scale-x-100 w-full "/>
    </section>
  )
}

export default Hero