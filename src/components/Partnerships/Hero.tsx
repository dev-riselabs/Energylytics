function Hero() {
  return (
    <section className="bg- px-5 sm:px-7 md:px-15 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 bg-green65 font-inter">
      <div className="flex flex-col gap-4 md:justify-center">
        <h1 className="text-slate text-[32px] font-manrope font-bold">
          PARTNERSHIPS
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-xl text-slate">
            Building Partnerships to Power Africa's Sustainable Future Africa's
            energy and environmental challenges are too complex for any one
            organisation to solve alone.
          </p>
          <p className="text-xl text-slate">
            At Energylytics Africa, we build strategic partnerships that bring
            together government, industry, technology, finance, research and
            communities to develop and scale practical solutions. We work with
            partners who share our commitment to cleaner energy, stronger
            environmental systems, climate resilience and inclusive sustainable
            development.
          </p>
        </div>
      </div>
      <img src="/partnership-hero.png" alt="" />
    </section>
  );
}

export default Hero;
