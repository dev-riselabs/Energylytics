function ResearchAcademia() {
  return (
    <section className="bg-white px-5 sm:px-7 md:px-15 py-10 sm:py-15 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-15 items-center">
        {/* Content */}
        <div className="flex flex-col gap-4 sm:gap-6 justify-center order-2 lg:order-1">
          <h2 className="text-slate text-xl sm:text-2xl md:text-3xl font-bold">
            4. RESEARCH, ACADEMIA & KNOWLEDGE PARTNERS
          </h2>
          <p className="text-slate50 text-sm sm:text-base md:text-lg leading-relaxed">
            We collaborate with universities, research institutions and think tanks
            to co-develop knowledge, train the next generation of energy and
            environmental professionals and bridge the gap between academic
            research and real-world application.
          </p>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[250px] sm:h-[350px] lg:h-auto lg:min-h-[400px] order-1 lg:order-2">
          <img
            src="/about-partnership3.jpg"
            alt="Research and academia"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default ResearchAcademia;
