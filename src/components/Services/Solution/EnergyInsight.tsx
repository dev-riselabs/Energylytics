import { FaGlobeAfrica } from "react-icons/fa";
import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";

function EnergyInsight() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-zinc800 px-5 sm:px-10 md:px-20 py-10">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-6">
          <div className="py-2 px-5 rounded-full items-center justify-center flex gap-2 bg-green45  text-green text-sm font-bold self-start">
            <FaGlobeAfrica className="w-6 h-6" /> DATA INTELLIGENCE
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-slate text-2xl font-medium">
              Energy Insights Platform
            </h4>
            <p className="text-slate50 text-base">
              A unified platform for data-driven decision making. Access
              comprehensive market intelligence through interactive dashboard,
              detailed geospatial maps and authoritative reports on policy and
              regulatory frameworks.
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaCircleCheck className="w-4 h-4 text-green25" />
            <li className="text-base text-slate50">Dashboards & analytics</li>
          </div>

          <div className="flex items-center gap-2">
            <FaCircleCheck className="w-4 h-4 text-green25" />
            <li className="text-base text-slate50">
              Maps & data visualizations
            </li>
          </div>
          <div className="flex items-center gap-2">
            <FaCircleCheck className="w-4 h-4 text-green25" />
            <li className="text-base text-slate50">
              Reports & policy insights
            </li>
          </div>
        </ul>
        <button className="flex items-center gap-3.5 border-b-3 pb-2.5 self-start border-green25 font-sora text-sm text-slate font-semibold ">Explore Platform Features <FaArrowRightLong className="w-5 h-5" /></button>
      </div>
      <img
        src="/reliability.png"
        alt=""
        className="object-cover w-full rounded-2xl h-100"
      />
    </section>
  );
}

export default EnergyInsight;
