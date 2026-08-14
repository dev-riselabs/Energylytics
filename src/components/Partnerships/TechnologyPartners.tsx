function TechnologyPartners() {
  return (
    <section className="bg-green px-5 sm:px-7 md:px-15 py-10 sm:py-15 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-15 items-center">
        {/* Image */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[250px] sm:h-[350px] lg:h-auto lg:min-h-[400px]">
          <img
            src="/about-partnership4.png"
            alt="Technology partnerships"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 sm:gap-6 justify-center">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            5. TECHNOLOGY & INNOVATION PARTNERS
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
            We partner with technology companies that share our ambition to
            leverage data, artificial intelligence, geospatial intelligence and
            innovative digital tools to accelerate Africa's energy and environmental
            transformation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechnologyPartners;
