function CommunityPartnership() {
  return (
    <section className="bg-white px-5 sm:px-7 md:px-15 py-10 sm:py-15 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-15 items-center">
        {/* Content */}
        <div className="flex flex-col gap-4 sm:gap-6 justify-center order-2 lg:order-1">
          <h2 className="text-slate text-xl sm:text-2xl md:text-3xl font-bold">
            6. COMMUNITIES & CIVIL SOCIETY
          </h2>
          <p className="text-slate50 text-sm sm:text-base md:text-lg leading-relaxed">
            We work with community organizations, civil society groups and advocacy
            networks to ensure that energy and environmental initiatives are inclusive,
            community-led and grounded in local realities and local priorities. We
            support grassroots advocacy, participatory planning, capacity-building and
            knowledge-sharing.
          </p>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[250px] sm:h-[350px] lg:h-auto lg:min-h-[400px] order-1 lg:order-2">
          <img
            src="/about-partnership5.jpg"
            alt="Community partnerships"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default CommunityPartnership;
