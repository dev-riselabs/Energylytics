import { FaCircleCheck } from "react-icons/fa6";

const energyStats = [
  "How much energy you consume",
  "What appliances/equipment drive consumption",
  "Energy-use patterns",
  "Estimated electricity requirements",
  "Energy costs",
  "Potential inefficiencies",
  "Opportunities for savings",
];

const dataStats= [
    'Energy demand analysis', 'Consumption analytics', 'Load profiling', 'Energy forecasting', 'Energy-performance analytics', 'Market and pricing analysis'
]
const decisionStats= [
    'What am I consuming?', 'What am I paying for?', 'What should I be consuming?', 'Where can I reduce my costs?', 'Would renewable energy make economic sense for me?', 
]

function EnergyIntelligence() {
  return (
    <section id='energy-analytics' className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 px-5 sm:px-7 md:px-15 bg-zinc800 py-15">
      <div className="flex flex-col gap-7">
        <h2 className="text-slate font-manrope text-xl sm:text-2xl font-medium">
          1. ENERGY INTELLIGENCE & ANALYTICS
        </h2>
        <p className="text-sm sm:text-base text-slate50">
          Energy Consumption Intelligence <br />
          We help households and businesses understand:
        </p>
        <div className="flex flex-col gap-4">
            {
                energyStats.map(stat => <span className="text-sm sm:text-base text-slate50 flex items-center gap-2"><FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}</span>)
            }
        </div>
      </div>
      <img src="/energy-intelligence-img.png" alt="" className="rounded-4xl h-full" />
      <div className="border border-zinc rounded-3xl p-7 sm:p-10 flex flex-col gap-6 bg-green55">
        <h4 className="text-lg sm:text-xl font-manrope text-slate font-medium">Energy Data Analytics</h4>
        <div className="flex flex-col gap-4">
            {
                dataStats.map(stat => <span className="text-sm sm:text-base text-slate50 flex items-center gap-2"><FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}</span>)
            }
        </div>
      </div>
      <div className="border border-zinc rounded-3xl p-7 sm:p-10 flex flex-col gap-6 bg-green55">
        <h4 className="text-lg sm:text-xl font-manrope text-slate font-medium">Energy Decision Intelligence</h4>
        <p className="text-sm sm:text-base text-slate60">We help our users answer the following questions:</p>
        <div className="flex flex-col gap-4">
            {
                decisionStats.map(stat => <span className="text-sm sm:text-base text-slate50 flex items-center gap-2"><FaCircleCheck className="w-4 h-4 shrink-0 text-green25" /> {stat}</span>)
            }
        </div>
      </div>
    </section>
  );
}

export default EnergyIntelligence;
