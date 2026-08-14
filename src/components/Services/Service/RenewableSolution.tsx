import { FaCircleCheck } from "react-icons/fa6";

const renewableStats = [
  "Solar energy",
  "Mini-grids",
  "Distributed energy systems",
  "Rural electrification",
  "Commercial & industrial renewable energy",
  "Energy access solutions",
];

const cleanStats = [
  "Energy resource assessment",
  "Renewable-energy feasibility studies",
  "Project design",
  "Technology assessment",
  "Energy infrastructure planning",
  "Project development",
];

const emergingStats = [
  "Biogas",
  "Biomass",
  "Biomethane",
  "Waste-to-energy",
  "Other appropriate clean-energy technologies",
];

function RenewableSolution() {
  return (
    <section id='clean-energy' className="bg-zinc800 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-5 gap-10">
      <div className="md:col-span-2 flex flex-col gap-12.5">
        <h3 className="text-slate font-manrope text-xl sm:text-2xl font-medium">
          3. RENEWABLE & CLEAN ENERGY SOLUTIONS
        </h3>
        <div className="grid grid-cols-1 gap-7.5">
          <div className="flex flex-col gap-5">
            <h4 className="text-lg sm:text-xl font-manrope text-slate font-medium">
              Renewable Energy
            </h4>
            <div className="flex flex-col gap-4">
              {renewableStats.map((stat) => (
                <span className="text-sm sm:text-base text-slate50 flex items-center gap-2">
                  <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-lg sm:text-xl font-manrope text-slate font-medium">
              Clean Energy Development
            </h4>
            <div className="flex flex-col gap-4">
              {cleanStats.map((stat) => (
                <span className="text-sm sm:text-base text-slate50 flex items-center gap-2">
                  <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-lg sm:text-xl font-manrope text-slate font-medium">
              Emerging Clean Energy
            </h4>
            <div className="flex flex-col gap-4">
              {emergingStats.map((stat) => (
                <span className="text-sm sm:text-base text-slate50 flex items-center gap-2">
                  <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/renewable-service-img.jpg"
        alt=""
        className="md:col-span-3 rounded-4xl h-full object-fill"
      />
    </section>
  );
}

export default RenewableSolution;
