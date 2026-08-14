

function Hero() {
  return (
    <section className='bg-green65 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 gap-6 md:grid-cols-2 pb-0'>
<div className="flex flex-col gap-4 md:justify-center">
    <h1 className="text-[32px] font-manrope text-slate font-bold">Services</h1>
    <p className="text-slate text-lg sm:text-xl max-w-[31ch]">Turning Intelligence Into Energy, Climate & Infrastructure Solutions</p>
</div>
<img src="/services-hero.png" alt="" className="w-full h-full " />
    </section>
  )
}

export default Hero