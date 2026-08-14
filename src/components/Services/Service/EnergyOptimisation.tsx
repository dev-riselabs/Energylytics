import { FaCircleCheck } from "react-icons/fa6";

const energyStats = [
  "Demand forecasting",
  "Load forecasting",
  "Energy optimisation",
  "Predictive analytics",
  "Equipment performance monitoring",
  "Predictive maintenance",
  "Renewable-energy optimisation",
  "Battery/storage optimisation",
  "Energy-efficiency analytics",
];

function EnergyOptimisation() {
  return (
    <section id='energy-optimisation' className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 bg-green60 px-5 sm:px-7 md:px-15 py-15">
      <img
        src="/ai-optimisation.jpg"
        alt=""
        className="rounded-3xl h-full object-cover"
      />
      <div className="flex flex-col gap-7">
        <h2 className="text-white font-manrope text-xl sm:text-2xl font-medium">
          2. AI FOR ENERGY OPTIMISATION
        </h2>
        <p className="text-sm sm:text-base text-white">AI-Powered Energy Analytics</p>
        <div className="flex flex-col gap-4">
          {energyStats.map((stat) => (
            <span className="text-sm sm:text-base text-white flex items-center gap-2">
              <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 p-7 sm:p-10 rounded-3xl bg-green55 font-manrope md:col-span-2">
        <h4 className="text-lg sm:text-xl  text-slate font-medium">
          Intelligent Energy Management
        </h4>
        <p className="text-sm sm:text-base text-slate50">
          For households, businesses, mini-grids, energy companies and public
          infrastructure.
        </p>
        <p className="text-sm sm:text-base text-slate50">
          We use AI to make energy systems more efficient, affordable, reliable
          and predictable.
        </p>
      </div>
    </section>
  );
}

export default EnergyOptimisation;
