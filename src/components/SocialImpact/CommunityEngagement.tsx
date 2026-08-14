function CommunityEngagement() {
  return (
    <section className="bg-white px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-8 items-center">
        {/* Content */}
        <div className="flex flex-col gap-5 md:gap-6 order-2 lg:order-1 lg:col-span-3">
          <h2 className="text-green text-lg sm:text-xl md:text-2xl font-bold uppercase leading-tight">
            COMMUNITY ENGAGEMENT & EMPOWERMENT INITIATIVES
          </h2>
          <p className="text-slate50 text-sm sm:text-base leading-relaxed">
            We collaborate with communities to ensure energy and environmental
            projects reflect local priorities and realities. Through participatory
            planning, stakeholder engagement and grassroots advocacy, we build
            trust, foster local ownership and ensure that development is
            community-led and inclusive.
          </p>
        </div>

        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden h-56 sm:h-[300px] lg:h-[350px] order-1 lg:order-2 lg:col-span-2">
          <img
            src="/about-partnership5.jpg"
            alt="Community engagement"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default CommunityEngagement;
