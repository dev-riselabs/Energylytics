import { FaCircleCheck } from "react-icons/fa6";

const renewableStats = [
  "Waste resource mapping",
  "Waste characterisation",
  "Resource recovery",
  "Recycling systems",
  "Organic waste recovery",
  "Waste-to-energy",
];

const cleanStats = [
  "Circular-economy strategy",
  "Material recovery",
  "Industrial resource efficiency",
  "Waste diversion",
  "Circular infrastructure",
];

const emergingStats = [
  "Biogas",
  "Biomass",
  "Anaerobic digestion",
  "Appropriate waste-to-energy systems",
  "RDF/resource recovery where appropriate",
];


function CircularEconomy() {
  return <section className="bg-zinc800 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2 flex flex-col gap-12.5">
          <h3 className="text-slate font-manrope text-2xl font-medium">
            5. CIRCULAR ECONOMY & WASTE-TO-VALUE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-7.5">
            <div className="flex flex-col gap-5">
              <h4 className="text-xl font-manrope text-slate font-medium">
                Waste-to-Value
              </h4>
              <div className="flex flex-col gap-4">
                {renewableStats.map((stat) => (
                  <span className="text-base text-slate50 flex items-center gap-2">
                    <FaCircleCheck className="w-4.5 h-4.5 text-green25" /> {stat}
                  </span>
                ))}
              </div>
            </div>
  
            <div className="flex flex-col gap-5">
              <h4 className="text-xl font-manrope text-slate font-medium">
                Circular Economy
              </h4>
              <div className="flex flex-col gap-4">
                {cleanStats.map((stat) => (
                  <span className="text-base text-slate50 flex items-center gap-2">
                    <FaCircleCheck className="w-4.5 h-4.5 text-green25" /> {stat}
                  </span>
                ))}
              </div>
            </div>
  
            <div className="flex flex-col gap-5">
              <h4 className="text-xl font-manrope text-slate font-medium">
                Clean Energy from Waste
              </h4>
              <div className="flex flex-col gap-4">
                {emergingStats.map((stat) => (
                  <span className="text-base text-slate50 flex items-center gap-2">
                    <FaCircleCheck className="w-4.5 h-4.5 text-green25" /> {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          src="/service-economy-img.png"
          alt=""
          className="md:col-span-3 rounded-4xl h-full object-right w-full"
        />
      </section>;
}

export default CircularEconomy;
