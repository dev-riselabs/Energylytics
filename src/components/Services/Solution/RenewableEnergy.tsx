function RenewableEnergy() {
  return (
    <section className="py-15 px-5 sm:px-7 md:px-15 font-inter bg-zinc600">
      <div className=" rounded-4xl flex items-center justify-center gap-6 about-bg relative overflow-hidden p-6">
        <div className="absolute inset-0 bg-linear-to-b from-black/80  to-black/80"></div>
        <div className="flex flex-col gap-7.5 items-center relative z-2">
          <h3 className="text-white font-bold text-3xl sm:text-[32px] text-center leading-12">
            Comprehensive Intelligence for{" "}
            <span className="bg-zinc500 p-1 text-green rounded-md">
              Renewable Energy
            </span>
          </h3>
          <p className="text-lg sm:text-xl text-white max-w-[75ch] text-center">
            We Provide the data, tools and training necessary to accelerate
            Africa’s renewable energy future. Explore our suite of integrated
            solutions tailored for investors, governments and developers
          </p>
          <button className="max-w-100 w-full h-13 flex items-center justify-center text-sm font-bold font-dmSans rounded-md border border-green30 bg-white text-green25  hover:bg-green25 hover:text-white transition-all cursor-pointer self-center">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}

export default RenewableEnergy;
