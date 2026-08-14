import { FaCircleCheck } from "react-icons/fa6";

const renewableStats = [
  "Energy policy analysis",
  "Regulatory intelligence",
  "Energy-transition policy",
  "Market intelligence",
];

const cleanStats = [
  "Climate policy",
  "Environmental policy",
  "Sustainability frameworks",
  "Regulatory analysis",
];

const emergingStats = [
  "Government advisory",
  "Institutional strategy",
  "Programme design",
  "Market-entry strategy",
  "Public-private partnership advisory",
];


function AdvisoryPolicy() {
  return <section id='policy' className="bg-zinc800 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2 flex flex-col gap-12.5">
          <h3 className="text-slate font-manrope text-xl sm:text-2xl font-medium">
            7. POLICY, MARKET INTELLIGENCE & ADVISORY POLICY
          </h3>
          <div className="grid grid-cols-1 gap-7.5">
            <div className="flex flex-col gap-5">
              <h4 className="text-lg sm:text-xlfont-manrope text-slate font-medium">
                Energy Policy
              </h4>
              <div className="flex flex-col gap-4">
                {renewableStats.map((stat) => (
                  <span key={stat} className="text-sm sm:text-base text-slate50 flex items-center gap-2">
                    <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
                  </span>
                ))}
              </div>
            </div>
  
            <div className="flex flex-col gap-5">
              <h4 className="text-lg sm:text-xl font-manrope text-slate font-medium">
                Climate & Environmental Policy
              </h4>
              <div className="flex flex-col gap-4">
                {cleanStats.map((stat) => (
                  <span key={stat} className="text-sm sm:text-base text-slate50 flex items-center gap-2">
                    <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
                  </span>
                ))}
              </div>
            </div>
  
            <div className="flex flex-col gap-5">
              <h4 className="text-lg sm:text-xl font-manrope text-slate font-medium">
                Strategic Advisory
              </h4>
              <div className="flex flex-col gap-4">
                {emergingStats.map((stat) => (
                  <span key={stat} className="text-sm sm:text-base text-slate50 flex items-center gap-2">
                    <FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          src="/service-policy.png"
          alt=""
          className="md:col-span-3 rounded-4xl h-full object-center w-full"
        />
      </section>;
}

export default AdvisoryPolicy;
