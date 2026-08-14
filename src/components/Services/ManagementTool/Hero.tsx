function Hero() {
  return (
    <section className="bg-zinc600 px-5 sm:px-7 md:px-10 lg:px-15 py-10 md:py-15 grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
      <div className="flex flex-col gap-5 md:gap-6.5 justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-bold text-slate leading-tight">
          Smart Energy Management for a Sustainable Africa
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate">
          Deploy our comprehensive smart energy toolset to monitor, predict and
          optimize renewable assets with real-time AI intelligence.
        </p>
        <button className="max-w-80 w-full h-11 sm:h-13 flex items-center justify-center text-xs sm:text-sm font-bold font-dmSans rounded-md border border-green30 bg-white text-green25  hover:bg-green25 hover:text-white transition-all cursor-pointer">
          Book Consultation
        </button>
      </div>
      <img
        src="/smart-energy.png"
        alt=""
        className="rounded-3xl h-64 sm:h-80 md:h-auto min-h-0 md:min-h-80 w-full object-cover md:object-fill"
      />
    </section>
  );
}

export default Hero;
