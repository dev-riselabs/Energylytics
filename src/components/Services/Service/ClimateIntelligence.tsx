import { FaCircleCheck } from "react-icons/fa6";

const renewableStats = [
  "Climate-risk analytics",
  "Climate vulnerability assessments",
  "Climate forecasting",
  "Adaptation planning",
  "Resilience strategy",
];

const cleanStats = [
  "Environmental data analytics",
  "Geospatial intelligence",
  "Environmental monitoring",
  "Environmental dashboards",
  "AI for environmental management",
  "Environmental risk analytics",
];

const emergingStats = [
  "Carbon accounting",
  "Emissions measurement",
  "ESG intelligence",
  "Sustainability reporting",
  "Climate-impact measurement",
  "Carbon-market readiness",
];

function ClimateIntelligence() {
  return (
    <section id='climate' className="bg-green60 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-5 gap-10">
      <img
        src="/service-climate-img.jpg"
        alt=""
        className="md:col-span-3 rounded-4xl h-full max-h-228.75 w-full md:self-center object-center"
      />
      <div className="md:col-span-2 flex flex-col gap-12.5">
        <h3 className="text-white font-manrope text-xl sm:text-2xl font-medium">
          4. CLIMATE & ENIRONMENTAL INTELLIGENCE
        </h3>
        <div className="grid grid-cols-1 gap-7.5">
          <div className="flex flex-col gap-5">
            <h4 className="text-lg sm:text-xl font-manrope text-white font-medium">
              Climate Intelligence
            </h4>
            <div className="flex flex-col gap-4">
              {renewableStats.map((stat) => (
                <span className="text-sm sm:text-base text-white flex items-center gap-2">
                  <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-lg sm:text-xl font-manrope text-white font-medium">
              Environmental Intelligence
            </h4>
            <div className="flex flex-col gap-4">
              {cleanStats.map((stat) => (
                <span className="text-sm sm:text-base text-white flex items-center gap-2">
                  <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-lg sm:text-xl font-manrope text-white font-medium">
              Carbon & Sustainability Intelligence
            </h4>
            <div className="flex flex-col gap-4">
              {emergingStats.map((stat) => (
                <span className="text-sm sm:text-base text-white flex items-center gap-2">
                  <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClimateIntelligence;
