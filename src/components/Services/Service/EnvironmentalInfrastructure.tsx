import { FaCircleCheck } from "react-icons/fa6";

const infrastuctureStats = [
  "Clean-energy infrastructure",
  "Environmental infrastructure",
  "Climate-resilient infrastructure",
  "Smart environmental systems",
  "Energy infrastructure",
  "Waste-resource infrastructure",
];

const smartStats = [
  "IoT-enabled monitoring",
  "Digital infrastructure",
  "Environmental command centres",
  "Infrastructure performance analytics",
  "Predictive infrastructure management",
];

function EnvironmentalInfrastructure() {
  return (
    <section className="flex flex-col gap-8 px-5 sm:px-7 md:px-15 py-15 bg-green60">
      <h3 className="text-white font-manrope text-xl sm:text-2xl font-medium text-center">
        6. SUSTAINABLE & ENVIRONMENTAL INFRASTRUCTURE
      </h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
        <div className="flex flex-col gap-5 md:self-center">
          <h4 className="text-lg sm:text-xl font-manrope text-white font-medium">
            Infrastructure Development
          </h4>
          <div className="flex flex-col gap-4">
            {infrastuctureStats.map((stat) => (
              <span className="text-sm sm:text-base text-white flex items-center gap-2">
                <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
              </span>
            ))}
          </div>
        </div>
        <img
          src="/service-infrastructure1.jpg"
          alt=""
          className="h-full md:h-104 rounded-4xl"
        />
        <img
          src="/service-infrastructure2.png"
          alt=""
          className="h-full md:h-104 rounded-4xl"
        />
        <div className="flex flex-col gap-5 md:self-center">
          <h4 className="text-lg sm:text-xl font-manrope text-white font-medium">
            Smart Infrastructure
          </h4>
          <div className="flex flex-col gap-4">
            {smartStats.map((stat) => (
              <span className="text-sm sm:text-base text-white flex items-center gap-2">
                <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnvironmentalInfrastructure;
