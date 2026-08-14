function Hero() {
  return (
    <section className="bg-white px-5 sm:px-7 md:px-15 py-10 sm:py-15 md:py-20">
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-slate text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
            PARTNERSHIPS
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate max-w-full md:max-w-[80ch]">
            Building Partnerships to Power Africa's Sustainable Future
          </p>
          <p className="text-sm sm:text-base text-slate50 max-w-full md:max-w-[90ch] leading-relaxed">
            At Energylytics Africa, we believe transforming the continent's
            energy landscape, environmental sustainability and climate resilience
            requires deep collaboration, diverse expertise and shared
            commitment. Our partnerships bring together governments, businesses,
            technology innovators, investors, academic institutions and civil
            society to build inclusive, data-driven sustainable infrastructure
            across Africa.
          </p>
        </div>

        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[250px] sm:h-[350px] md:h-[500px]">
          <img
            src="/about-partnership1.jpg"
            alt="Partnerships illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 shadow-xl max-w-[90%]">
              <h2 className="text-green text-xl sm:text-2xl md:text-3xl font-bold text-center">
                PARTNERSHIPS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
