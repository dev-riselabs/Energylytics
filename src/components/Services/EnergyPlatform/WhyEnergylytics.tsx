import { FaTriangleExclamation } from "react-icons/fa6";

const reasons = [
    {title : 'Unpredictable Grid Instability', description: 'Frequent load shedding and voltage fluctuations make it difficult to predict revenue and maintain equipment health.', solution: 'Grid-aware analytics that adjust forecasts based on regional sheddling schedules.'},
    {title : 'Fragmented Data Sources', description: 'Data lives in siloes-SCADA systems, weather APIs and spreadsheets-making holistic analysis impossible.', solution: 'One unified data lake that ingests formats from any hardware manufacturer or API.'},
]

function WhyEnergylytics() {
  return <section className="bg-zinc600 px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20 flex flex-col items-center gap-6 md:gap-8">
    <h3 className="text-xl sm:text-2xl font-medium text-slate text-center">Why energy leaders choose Energylytics</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {
            reasons.map(({title, description, solution }) => <div key={title} className="border border-zinc p-6 sm:p-7.5 gap-6 md:gap-10.75 flex flex-col divide-y divide-zinc rounded-2xl">
              <div className="flex flex-col gap-4 md:gap-5 pb-6 md:pb-10">
                <div className="flex items-center gap-3 sm:gap-4.5 text-red font-bold text-xs sm:text-[13px]"> <FaTriangleExclamation className="w-4 h-4 sm:w-5 sm:h-5" />THE CHALLENGE</div>
                <div className="flex flex-col gap-3 md:gap-4">
                    <h4 className="text-base text-slate font-semibold">{title}</h4>
                    <p className="text-sm sm:text-base text-slate50">{description}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="flex items-center gap-3 sm:gap-4.5 text-green font-bold text-xs sm:text-[13px]"> <FaTriangleExclamation className="w-4 h-4 sm:w-5 sm:h-5" />THE CHALLENGE</div>

                    <p className="text-sm sm:text-base text-slate font-semibold">{solution}</p>

              </div>
            </div>)
        }
    </div>

  </section>;
}

export default WhyEnergylytics;
