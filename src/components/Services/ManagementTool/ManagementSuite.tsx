import { BiCoinStack } from "react-icons/bi";
import { BsBullseye } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { LuUsers } from "react-icons/lu";

const features = [
  {
    title: "AI Monitoring",
    description:
      "Real-time oversight of all assets with granular data ingestion and AI-processed visualization",
    icon: BsBullseye,
  },
  {
    title: "Alerts & Anamaly",
    description:
      "Instant notifications for irregularities, helping prevent equipment failures before they occur.",
    icon: GoBook,
  },
  {
    title: "Efficiency Optimization",
    description:
      "Automated tuning of grid parameters to maximize output and extend battery lifespan.",
    icon: BiCoinStack,
  },
  {
    title: "Forecasting Tools",
    description:
      "Precision demand and generation forecasting using historical data and weather patterns",
    icon: LuUsers,
  },
];

function ManagementSuite() {
  return <section className="py-20 px-5 sm:px-7 md:px-15 font-inter flex flex-col gap-10 items-center bg-zinc800">
      <h2 className="text-slate text-2xl font-medium text-center">Enterprise-grade Smart Management Suite</h2>
      <p className="text-base text-slate50 text-center max-w-[60ch]">
        Our integrated toolset offers complete visibility and control over your energy infrastructure through advanced AI monitoring and forecasting.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {features.map(({ title, icon: Icon, description }) => (
          <div
            key={title}
            className={`rounded-2xl p-7 flex flex-col gap-7.5 flex-1 border border-zinc `}
          >
            <div className="w-12.5 h-12.5 bg-green85 rounded-md flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-base font-bold text-slate60">{title}</h4>
              <p className="text-base text-slate50">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>;
}

export default ManagementSuite;
