import { FaGlobeAfrica } from "react-icons/fa";
import { GoBook } from "react-icons/go";

const features = [
  {
    title: "AI Monitoring",
    description:
      "Continuous oversight of your energy assets with real-time performance tracking.",
    icon: GoBook,
  },
  {
    title: "Alerts & Anomaly Detection",
    description:
      "Instant notifications for irregularities to prevent downtime before it happens.",
    icon: GoBook,
  },
  {
    title: "Efficiency Optimization",
    description:
      "Automated adjustments to maximize output and reduce operational waste.",
    icon: GoBook,
  },
  {
    title: "Forecasting Tools",
    description:
      "Predictive algorithms for accurate generation and demand planning.",
    icon: GoBook,
  },
];

function SmartEnergy() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-7 px-5 sm:px-10 md:px-20 py-15">
      <div className="grid grid-cols-2 gap-5">
        {features.map(({ title, icon: Icon, description }, i) => (
          <div
            key={title}
            className={`rounded-2xl p-7 flex flex-col gap-5.5 flex-1 border border-zinc `}
          >
            <div className="w-10.5 h-10.5 bg-green85 rounded-md flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col gap-3.5">
              <h4 className="text-base font-medium text-slate60">{title}</h4>
              <p className="text-sm text-green25">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-7 md:justify-center">
        <div className="flex flex-col gap-6">
          <div className="py-2 px-5 rounded-full items-center justify-center flex gap-2 bg-green45  text-green text-sm font-bold self-start">
            <FaGlobeAfrica className="w-6 h-6" /> SMART MANAGEMENT
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-slate text-2xl font-medium">
              Smart Energy Management Tool
            </h4>
            <p className="text-slate50 text-base">
              Leverage Artificial Intelligence to take control of your energy
              infrastructure. Our smart tools provide comprehensive monitoring,
              automated alerts and powerful forecasting to optimize efficiency
              and ensure reliability.
            </p>
          </div>
        </div>

        <button className="w-full max-w-70 h-13 flex items-center justify-center text-sm font-bold font-dmSans cursor-pointer text-white bg-green25 rounded-md hover:border hover:border-green25 hover:text-green25 hover:bg-white transition-all">
          Request a demo
        </button>
      </div>
    </section>
  );
}

export default SmartEnergy;
