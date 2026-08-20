const stats = [
  {
    title: "INTELLIGENCE",
    sub: "Data, AI & Digital Intelligence",
    img: "/pillar1.png",
    description:
      "We leverage energy, environmental and climate data, artificial intelligence, geospatial intelligence and advanced analytics to transform complex information into actionable insights for households, businesses, governments and investors.",
  },
  {
    title: "ENERGY & ENVIRONMENTAL TRANSFORMATION",
    sub: "Clean Energy, Climate & Sustainable Infrastructure",
    img: "/pillar2.png",
    description:
      "We develop and support innovative solutions across renewable and clean energy, energy access, climate resilience, circular economy, waste-to-value and environmental infrastructure, turning intelligence into practical, scalable solutions.",
  },
  {
    title: "KNOWLEDGE & CAPACITY",
    sub: "Research, Policy & Human Capital",
    img: "/pillar3.jpg",
    description:
      "We build the knowledge, skills, partnerships and institutional capabilities required to accelerate Africa's energy and sustainability transition through research, policy intelligence, training, knowledge platforms and strategic collaboration.",
  },
];

function CorePilliars() {
  return (
    <section className="flex flex-col gap-10 px-5 sm:px-7 md:px-15 py-15 bg-green35">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4 px-5 py-2 rounded-full border border-green50 self-center">
          <div className="w-2 h-2 rounded-full bg-green25"></div>
          <span className="text-green25 text-sm font-bold">Our Approach</span>
        </div>
        <h3 className="text-[15px] font-bold text-green25 text-center font-manrope">
          Three Core Pillars
        </h3>
        <h4 className="text-md font-semibold text-center text-zinc400">
         Our integrated approach combines cutting-edge technology,  
          <span className="text-green"> data intelligence and human capacity building
          </span>
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-70 sm:auto-rows-auto sm:grid-rows-[320px_320px] gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.title}
            className={`rounded-3xl  overflow-hidden relative ${i === 0 ? "sm:row-span-2" : ""}`}
          >
            <div className="absolute inset-0 bg-black/60 z-1"></div>
            <img src={stat.img} alt="" className="w-full h-full object-cover" />
            <div className="flex flex-col gap-3 md:gap-6 absolute bottom-5 left-5 right-5 z-2 font-manrope">
              <h5 className="text-white text-lg font-medium">
                {stat.title}
              </h5>
              <div className="flex flex-col gap-2.5">
                <h6 className="text-base font-extrabold text-green25">
                  {stat.sub}
                </h6>
                <p className="text-sm text-white">
                  {stat.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CorePilliars;
