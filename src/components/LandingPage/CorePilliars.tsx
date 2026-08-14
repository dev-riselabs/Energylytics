const stats = [
    {title : 'Data-Driven, AI Powered Energy Platform', img : '/core-data-driven.jpg', description: 'Providing real-time insights on energy generation, distribution, and consumption through advanced analytics and predictive modelling.'},
    {title : 'AI-Powered Energy Management Tool', img : '/core-management-tool.png', description: 'Leveraging machine learning to optimize energy efficiency, detect anomalies, reduce waste and improve grid performance.'},
    {title : 'Education and Advocacy Initiative', img : '/core-education.jpg', description: 'Building awareness, technical capacity and public understanding of renewable energy through learning programs, campaigns and partnerships.'},
]

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
        <h4 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-center text-zinc400">
          Our integrated approach combines cutting-edge technology,
          <span className="text-green">
            data intelligence and human capacity building.
          </span>
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-[280px] sm:auto-rows-auto sm:grid-rows-[350px_350px] gap-5">
        {
            stats.map((stat, i) => <div key={stat.title} className={`rounded-3xl  overflow-hidden relative ${i=== 0 ? 'sm:row-span-2' : ''}`}>
                <div className="absolute inset-0 bg-black/60 z-1"></div>
                <img src={stat.img} alt="" className="w-full h-full object-cover"/>
                <div className="flex flex-col gap-3 md:gap-6 absolute bottom-5 left-5 right-5 z-2 font-manrope">
                    <h5 className="text-white text-xl md:text-2xl font-medium">{stat.title}</h5>
                <p className="text-base md:text-xl text-white">{stat.description}</p>
                </div>

            </div>)
        }
      </div>
    </section>
  );
}

export default CorePilliars;
