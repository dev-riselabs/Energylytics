function Innovation() {
  return (
    <section className="bg-green px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-8 items-center">
        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden h-56 sm:h-[300px] lg:h-[350px] lg:col-span-2">
          <img
            src="/insight.jpg"
            alt="Innovation and knowledge"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 md:gap-6 lg:col-span-3">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold uppercase leading-tight">
            PROMOTING INNOVATION, KNOWLEDGE & RESILIENCE
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            Through our learning hub, research publications, advocacy platform and
            knowledge-sharing initiatives, we build capacity, train professionals
            and democratize access to energy, climate and environmental intelligence.
            By equipping institutions, professionals and communities with the right
            knowledge and tools, we strengthen Africa's ability to lead its own
            sustainable transformation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
