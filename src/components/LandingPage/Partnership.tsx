

const features = [
  {
    title: "Governments & Development Agencies",
    description: "Aligning policies with real-time energy data",
    img: '/partnership1.png',
  },
  {
    title: "Investors & Utilities",
    description:
      "De-risking renewable energy projects through predictive analytics",
      img: '/partnership2.jpg',
  },
  {
    title: "Universities & Research Labs",
    description: "Advancing open energy data science in Africa",
    img: '/partnership3.jpg',
  },
];

function Partnership() {
  return (
    <section className="py-12 md:py-20 px-5 sm:px-7 md:px-10 lg:px-15 font-inter flex flex-col gap-6 md:gap-10 items-center bg-green35">

      <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 rounded-full border border-green50 self-center">
          <div className="w-2 h-2 rounded-full bg-green25"></div>
          <span className="text-green25 text-xs sm:text-sm font-bold text-center">Partnerships & Collaborations</span>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-slate text-center max-w-[55ch]">
        We collaborate across sectors to ensure that renewable energy data
        drives smarter decisions, accelerates investment, and creates lasting
       <span className="text-green25"> impact for communities across Africa.</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
        {features.map(({ title, img, description }) => (
          <div
            key={title}
            className={`h-72 md:h-89 rounded-3xl relative overflow-hidden`}
          >
            <div className="absolute bg-black/60 inset-0 "></div>
            <img src={img} alt="" className="w-full h-full object-cover"/>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 absolute left-5 bottom-5 right-5 font-manrope">
              <h4 className="text-xl md:text-2xl font-medium text-white">{title}</h4>
              <p className="text-base md:text-xl text-white">{description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Partnership;
