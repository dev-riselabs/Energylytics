function Hero() {
  return (
    <section className="bg-zinc600 px-5 sm:px-7 md:px-10 lg:px-15 py-10 md:py-15 grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
        <div className="flex flex-col gap-5 md:gap-6.5 justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-bold text-slate leading-tight">Intelligence for Africa's Energy Future</h1>
            <p className="text-base sm:text-lg md:text-xl text-slate">The comprehensive Energy Insights Platform for real-time monitoring, predictive modeling and automated reporting on renewable assets across the continent.</p>
            <button className="max-w-80 w-full h-11 sm:h-13 flex items-center justify-center text-xs sm:text-sm font-bold font-dmSans rounded-md border border-green30 bg-white text-green25  hover:bg-green25 hover:text-white transition-all cursor-pointer">
            Request a Demo
          </button>
        </div>
      <img src="/grid.png" alt="" className="object-cover rounded-3xl h-64 sm:h-90 md:h-103 w-full"/>
    </section>
  );
}

export default Hero;
