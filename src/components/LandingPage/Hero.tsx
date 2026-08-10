import { motion } from "framer-motion";
import { fadeUp, fadeDown } from "../../animation";

const stats = [
  { title: "Africans lack electricity", value: "600M+" },
  { title: "Renewables potential by 2040", value: "67%" },
  { title: "Countries tracked", value: "40+" },
];

function Hero() {
  return (
    <section className="hero-bg flex items-center justify-center px-5 sm:px-7 py-15  sm:py-25 relative font-inter h-full">
      <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/60 z-1"></div>
      <div className="max-w-250 flex flex-col gap-17.5 items-center w-full z-2 relative">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeDown}
              className="flex items-baseline sm:items-center justify-center gap-4 px-5 py-2 rounded-full bg-green10 self-center"
            >
              <div className="w-2 h-2 rounded-full bg-green shrink-0"></div>
              <span className="text-green text-xs text-center sm:text-sm font-bold">
                {/* Data. Energy. Transformation. */}
                Clean Energy. Climate Intelligence. Sustainable Infrastructure
              </span>
            </motion.div>
            <div className="flex flex-col gap-3 items-center">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="text-white text-2xl sm:text-[32px] font-bold text-center"
              >
                {/* Leveraging data, artificial intelligence and knowledge-sharing
                to accelerate Africa's clean energy transition */}
                Energylytics Africa is a renewable energy, climate intelligence, 
                waste-to-value and environmental infrastructure company that uses data, 
                artificial intelligence and on-the-ground technology to accelerate 
                Nigeria's transition towards sustainable energy systems, 
                circular and low carbon economies
              </motion.h1>
              {/* <p className="text-lg sm:text-xl text-white text-center">
                We bring together energy data, analytics, policy insights and AI
                modelling to help stakeholders understand emerging opportunities
                and barriers across the clean energy value chain.
              </p> */}
            </div>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 justify-center "
          >
            <button className="px-5 py-3 rounded-xl border border-green bg-green text-white text-sm font-bold font-dmSans hover:bg-white  hover:text-green transition-all cursor-pointer">
              Explore Our Work
            </button>
            <button className="px-5 py-3 rounded-xl border border-green30 bg-white text-green text-sm font-bold font-dmSans hover:bg-green hover:text-white transition-all cursor-pointer">
              Get in Touch
            </button>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-193 w-full">
          {stats.map(({ title, value }) => (
            <div key={title} className="flex flex-col gap-3">
              <h4 className="text-green15 text-2xl sm:text-[32px] font-dmSans font-bold">
                {value}
              </h4>
              <p className="text-sm sm:text-base text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
