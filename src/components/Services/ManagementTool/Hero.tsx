function Hero() {
  return (
    <section className="bg-zinc600 px-5 sm:px-10 md:px-20 py-15 grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
      <div className="flex flex-col gap-6.5 justify-center">
        <h1 className="text-[32px] font-bold text-slate">
          Smart Energy Management for a Sustainable Africa
        </h1>
        <p className="text-xl text-slate">
          Deploy our comprehensive smart energy toolset to monitor, predict and
          optimize renewable assets with real-time AI intelligence.
        </p>
        <button className="max-w-80 w-full h-13 flex items-center justify-center text-sm font-bold font-dmSans rounded-md border border-green30 bg-white text-green25  hover:bg-green25 hover:text-white transition-all cursor-pointer">
          Book Consultation
        </button>
      </div>
      <img
        src="/smart-energy.png"
        alt=""
        className="object-cover rounded-3xl h-103 w-full"
      />
    </section>
  );
}

export default Hero;
