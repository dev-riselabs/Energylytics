import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import { GiWindTurbine } from "react-icons/gi";
import { LuGrid3X3 } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
// import { motion } from "framer-motion";
// import { staggerContainer, cardItem } from "../../animation";

const chains = [
  { icon: GiWindTurbine, title: "Renewable Energy Optimization"},
  // { icon: LuGrid3X3, title: "Smart Grid Development" },
  { icon: LuGrid3X3, title: "Smart Grid & Climate Tech"},
  // { icon: FaRegLightbulb, title: "Climate Technology Innovation" },
  { icon: FaRegLightbulb, title: "Waste-to-Value Conversion"},
  { icon: BiSolidBarChartAlt2, title: "Data-Driven Energy Policy"},
  { icon: RiGraduationCapLine, title: "Sustainable Development Education"},
];

function ImpactFocus() {
  return (
    <section className="flex flex-col gap-6 md:gap-7 items-center font-inter bg-green25 px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 rounded-full border border-white self-center">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <span className="text-white text-xs sm:text-sm font-bold">Our Impact Focus</span>
        </div>
        <h3 className="text-sm sm:text-[15px] font-bold text-white text-center">
          Driving Change Across the Value Chain
        </h3>

      </div>
      <p className="text-base sm:text-lg md:text-xl text-white text-center max-w-[50ch]">
        Our work creates measurable impact across renewable energy optimization, policy development and sustainable innovation.
      </p>
      {/* <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 w-full"
      >
        {chains.map(({ icon: Icon, title }) => (
          <motion.div
            variants={cardItem}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            key={title}
            className="flex border border-zinc px-2 py-10 gap-7.5 rounded-2xl items-center flex-col bg-white"
          >
            <div className="w-12.5 h-12.5 rounded-md flex items-center justify-center bg-green45">
              <Icon className="w-6 h-6 text-green25" />
            </div>
            <h4 className="text-center text-slate60 text-base font-medium">
              {title}
            </h4>
          </motion.div>
        ))}
      </motion.div> */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
        <img src="/impact-focus.jpg" alt="" className="w-full md:col-span-3 h-full max-h-[600px] object-cover md:object-center rounded-3xl"/>
        <div className="flex flex-col gap-4 md:col-span-2 md:p-7.5 md:justify-center">
          {chains.map(({ icon: Icon, title }) => (
            <div key={title} className="flex items-center gap-4  w-full">
              <div className="w-18.5 h-18.5 shrink-0 rounded-md flex items-center justify-center bg-green45">
                <Icon className="w-6 h-6 text-green25" />
              </div>
              <h5 className="text-xl text-white ">{title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactFocus;
