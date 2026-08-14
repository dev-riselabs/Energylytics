import { FaCircleCheck } from "react-icons/fa6";

const infrastuctureStats = [
  "Energy research",
  "Climate research",
  "Environmental research",
  "Market studies",
  "Technology assessments",
  "Policy research",
];

const smartStats = [
  "Energy literacy",
  "Renewable-energy training",
  "AI for energy",
  "Climate intelligence",
  "Environmental management",
  "Government capacity development",
  "Industry training",
];

function CapacityBuilding() {
  return (
    <section id='capacity' className="flex flex-col gap-8 px-5 sm:px-7 md:px-15 py-15 bg-green60">
      <h3 className="text-white font-manrope text-xl sm:text-2xl font-medium text-center">
        9. KNOWLEDGE, RESEARCH & CAPACITY BUILDING
      </h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
        <div className="flex flex-col gap-5 md:self-center">
          <h4 className="text-lg sm:text-xl font-manrope text-white font-medium">
            Research & Insights
          </h4>
          <div className="flex flex-col gap-4">
            {infrastuctureStats.map((stat) => (
              <span key={stat} className="text-sm sm:text-base text-white flex items-center gap-2">
                <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
              </span>
            ))}
          </div>
        </div>
        <img
          src="/capacity1.jpg"
          alt=""
          className="h-full md:h-104 rounded-4xl"
        />
        <img
          src="/capacity2.jpg"
          alt=""
          className="h-full md:h-104 rounded-4xl"
        />
        <div className="flex flex-col gap-5 md:self-center">
          <h4 className="text-lg sm:text-xl font-manrope text-white font-medium">
            Capacity Building
          </h4>
          <div className="flex flex-col gap-4">
            {smartStats.map((stat) => (
              <span key={stat} className="text-sm sm:text-base text-white flex items-center gap-2">
                <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CapacityBuilding;
