function EquitableEnergy() {
  return (
    <section className="bg-green px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-8 items-center">
        {/* Content - White Box */}
        <div className="flex flex-col gap-5 md:gap-6 order-2 lg:order-1 lg:col-span-3 bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10">
          <h2 className="text-green text-lg sm:text-xl md:text-2xl font-bold uppercase leading-tight">
            ENABLING EQUITABLE & INCLUSIVE ENERGY SYSTEMS
          </h2>
          <p className="text-slate50 text-sm sm:text-base leading-relaxed">
            We incorporate gender, social inclusion and equity analysis into our
            data and advisory work. We highlight how energy projects impact
            different groups, particularly women, youth, rural communities and
            marginalized populations, and ensure they are included in decision-making
            processes. Our work enables fairer energy policies and programmes that
            leave no one behind.
          </p>
        </div>

        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden h-56 sm:h-[300px] lg:h-[350px] order-1 lg:order-2 lg:col-span-2">
          <img
            src="/core-education.jpg"
            alt="Equitable energy systems"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default EquitableEnergy;
