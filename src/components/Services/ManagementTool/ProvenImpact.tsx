const stats = [
  {
    value: "30%",
    title: "Reduction in Downtime",
    desc: "With predictive alerts",
  },
  {
    value: "15&",
    title: "Increase in Output",
    desc: "Through smart optimization",
  },
  { value: "24/7", title: "Grid Monitoring", desc: "Autonomous protection" },
];

function ProvenImpact() {
  return (
    <section className="py-12 md:py-20 px-5 sm:px-7 md:px-10 lg:px-15 font-inter flex flex-col gap-6 md:gap-10 items-center bg-zinc800">
      <h3 className="text-slate font-medium text-xl sm:text-2xl text-center">
        Proven Impact Across the Continent
      </h3>
      <div className="max-w-213 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5">
        {
            stats.map(({value, title, desc}) => <div key={title} className="flex items-center flex-col gap-3 sm:gap-4">
                <h4 className="text-2xl sm:text-3xl md:text-[32px] font-bold font-dmSans text-green25">{value}</h4>
                <div className="flex flex-col items-center gap-2">
                    <h5 className="text-slate text-sm font-semibold text-center">{title}</h5>
                    <p className="text-xs text-slate50 text-center">{desc}</p>
                </div>
            </div>)
        }
      </div>
    </section>
  );
}

export default ProvenImpact;
