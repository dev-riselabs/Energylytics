function EnergyAccess() {
  return (
    <section className="bg-green px-5 sm:px-7 md:px-15 py-15 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 lg:col-span-3">
          <h2 className="text-white text-xl sm:text-2xl font-bold uppercase">
            ENERGY ACCESS THROUGH DATA-DRIVEN PLANNING
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            We use geospatial intelligence and AI to assist governments, donors,
            development partners and energy providers identify underserved regions,
            optimize electrification strategies and design mini-grid and off-grid
            solutions that meet the needs of rural and peri-urban communities. By
            mapping energy poverty and analyzing demand patterns, we help bring
            reliable and affordable electricity to millions who currently live
            without it.
          </p>
        </div>

        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden h-[300px] lg:h-[350px] order-1 lg:order-2 lg:col-span-2">
          <img
            src="/project3.png"
            alt="Energy access planning"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default EnergyAccess;
