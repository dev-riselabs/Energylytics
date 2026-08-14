function Hero() {
  return (
    <section className="bg-zinc600 px-5 sm:px-7 md:px-10 lg:px-15 py-10 md:py-15 grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
      <div className="flex flex-col gap-5 md:gap-6.5 justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-bold text-slate leading-tight">
          Africa’s Premier{" "}
          <span className="text-green25">Learning & Advocacy</span> Platform
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate">
          A comprehensive ecosystem combining a professional learning hub,
          expert article platform, research publications and industry event
          listings to drive the renewable transition
        </p>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="w-full h-11 sm:h-13 px-2 flex items-center justify-center text-xs sm:text-sm font-bold font-dmSans whitespace-nowrap rounded-md border border-green30 bg-green25 text-white  hover:bg-white hover:text-green25 transition-all cursor-pointer">
            Explore Learning Hub
          </button>
          <button className="w-full h-11 sm:h-13 px-2 flex items-center justify-center text-xs sm:text-sm font-bold font-dmSans whitespace-nowrap rounded-md border border-green30 bg-white text-green  hover:bg-green25 hover:text-white transition-all cursor-pointer">
            Read Latest Articles
          </button>
        </div>
      </div>
      <img
        src="/hero-edu.jpg"
        alt=""
        className="object-cover rounded-3xl h-64 sm:h-80 md:h-auto min-h-0 md:min-h-80 w-full"
      />
    </section>
  );
}

export default Hero;
