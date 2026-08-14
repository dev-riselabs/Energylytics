import { BiCoinStack } from "react-icons/bi";

const features = [
  {
    title: "Dashboards & Analytics",
    description:
      "Interactive, customizable dashboards providing real-time visibility into asset performance. Drill down into granular data to optimize operational efficiency instantly.",
    icon: BiCoinStack,
  },
  {
    title: "Maps & Visualizations",
    description:
      "Advanced geospatial intelligence layers visualizing grid infrastructure, renewable resource potential and transmission lines across the African continent.",
    icon: BiCoinStack,
  },
  {
    title: "Reports & Policy Insights",
    description:
      "Generate investor-grade market reports and access deep regulatory analysis to stay ahead of changing energy policies and legislative frameworks.",
    icon: BiCoinStack,
  },
];

function PlatformCapability() {
  return (
    <section className="py-12 md:py-20 px-5 sm:px-7 md:px-10 lg:px-15 font-inter flex flex-col gap-6 md:gap-10 items-center bg-zinc800">
      <h2 className="text-slate text-xl sm:text-2xl font-medium text-center">Platform Capabilities</h2>
      <p className="text-sm sm:text-base text-slate50 text-center max-w-[60ch]">
        Built specifically to handle the variability and unique infrastructure
        challenges of the African energy grid.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
        {features.map(({ title, icon: Icon, description }) => (
          <div
            key={title}
            className={`rounded-2xl p-6 sm:p-7 md:p-10 flex flex-col gap-5 sm:gap-6 md:gap-7.5 flex-1 border border-zinc `}
          >
            <div className="w-10 h-10 md:w-12.5 md:h-12.5 bg-green85 rounded-md flex items-center justify-center">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base font-bold text-slate60">{title}</h4>
              <p className="text-sm sm:text-base text-slate50">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlatformCapability;
