function HowWeDeliverImpact() {
  return (
    <section className="bg-green px-5 sm:px-7 md:px-15 py-15 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 items-center">
        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden h-[350px] lg:h-[450px]">
          <img
            src="/about-hero.jpg"
            alt="How we deliver impact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            HOW WE DELIVER SOCIAL IMPACT & OUTCOMES
          </h2>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
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
