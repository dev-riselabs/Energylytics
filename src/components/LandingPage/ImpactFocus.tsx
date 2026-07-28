import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import { GiWindTurbine } from "react-icons/gi";
import { LuGrid3X3 } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";

const chains = [
  { icon: GiWindTurbine, title: "Renewable Energy Optimization" },
  { icon: LuGrid3X3, title: "Smart Grid Development" },
  { icon: FaRegLightbulb, title: "Climate Technology Innovation" },
  { icon: BiSolidBarChartAlt2, title: "Data-Driven Energy Policy" },
  { icon: RiGraduationCapLine, title: "Sustainable Development Education" },
];

function ImpactFocus() {
  return (
    <section className="flex flex-col gap-7 items-center fonr-inter bg-green25 px-5 sm:px-10 md:px-20 py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-white self-center">
          <div className="w-2 h-2 rounded-full bg-green"></div>
          <span className="text-green text-sm font-bold">Our Impact Focus</span>
        </div>
        <h3 className="text-[15px] font-bold text-white">
          Driving Change Across the Value Chain
        </h3>
      </div>
      <p className="text-xl text-white text-center">
        Our work creates measurable impact across renewable energy optimization,
        policy development, and sustainable innovation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 w-full">
        {
            chains.map(({icon:Icon, title }) => <div key={title} className="flex border border-zinc px-2 py-10 gap-7.5 rounded-2xl items-center flex-col bg-white">
                <div className="w-12.5 h-12.5 rounded-md flex items-center justify-center bg-green45"><Icon className="w-6 h-6 text-green25"/></div>
                <h4 className="text-center text-slate60 text-base font-medium">{title}</h4>
            </div>)
        }
      </div>
    </section>
  );
}

export default ImpactFocus;
