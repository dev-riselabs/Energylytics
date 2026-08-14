function Hero() {
  return (
    <section className="bg-white px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-15">
        {/* Text Content */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          <h1 className="text-slate text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-medium leading-tight">
            Our Social Impact
          </h1>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-2/3">
          <div className="relative rounded-3xl overflow-hidden h-56 sm:h-[350px] md:h-[450px]">
            <img
              src="/hero-edu.jpg"
              alt="Social Impact - Wind turbines at sunset"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
