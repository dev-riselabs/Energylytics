function Hero() {
  return (
    <section className="bg-white px-5 sm:px-7 md:px-15 py-15 md:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-15">
        {/* Text Content */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          <h1 className="text-slate text-2xl sm:text-3xl font-medium">
            Our Social Impact
          </h1>
        </div>

        {/* Hero Image */}
        <div className="lg:w-2/3">
          <div className="relative rounded-3xl overflow-hidden h-[350px] sm:h-[450px]">
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
