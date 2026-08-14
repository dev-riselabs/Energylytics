function HowWeDeliverImpact() {
  return (
    <section className="bg-green px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-15 items-center">
        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden h-56 sm:h-[350px] lg:h-[450px]">
          <img
            src="/about-hero.jpg"
            alt="How we deliver impact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 md:gap-6">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            HOW WE DELIVER SOCIAL IMPACT & OUTCOMES
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
            At Energylytics Africa, our mission extends far beyond data and
            technology. We are deeply committed to creating tangible social
            impact through every initiative we undertake. By leveraging renewable
            energy intelligence, AI-powered solutions, climate and environmental
            innovation and inclusive knowledge-sharing, we empower communities,
            strengthen institutions and accelerate Africa's transition toward a
            sustainable and equitable energy future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowWeDeliverImpact;
