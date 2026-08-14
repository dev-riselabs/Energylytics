function PositiveImpact() {
  return (
    <section className="bg-white px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-8 items-center">
        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden h-56 sm:h-[300px] lg:h-[350px] lg:col-span-2">
          <img
            src="/smart-energy.png"
            alt="Positive impact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 md:gap-6 lg:col-span-3">
          <h2 className="text-green text-lg sm:text-xl md:text-2xl font-bold uppercase leading-tight">
            THE POSITIVE IMPACT OF CLEAN ENERGY & CLIMATE SOLUTIONS
          </h2>
          <p className="text-slate50 text-sm sm:text-base leading-relaxed">
            Our work directly supports the deployment of solar, wind, mini-grids,
            waste-to-energy, circular economy and other sustainable infrastructure
            across Africa. These projects reduce dependence on fossil fuels, lower
            carbon emissions, improve public health, create local jobs and
            strengthen energy security. We help stakeholders transition from
            polluting energy sources to cleaner, renewable alternatives that
            benefit both people and the planet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PositiveImpact;
