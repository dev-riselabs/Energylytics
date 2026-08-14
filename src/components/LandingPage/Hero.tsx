import { motion } from "framer-motion";
import { fadeUp, fadeDown } from "../../animation";
import { AiFillThunderbolt } from "react-icons/ai";
import { Link } from "react-router";

const stats = [
  { title: "Africans lack electricity", value: "600M+" },
  { title: "Renewables potential by 2040", value: "67%" },
  { title: "Countries tracked", value: "40+" },
];

function Hero() {
  return (
    <section className="hero-bg flex items-center justify-center px-5 sm:px-7 md:px-10 lg:px-15 py-15 sm:py-20 lg:py-25 relative font-inter h-full">
      <div className="absolute inset-0 bg-linear-to-r from-black/20 to-black/30 z-1"></div>
      <div className=" flex flex-col gap-10 md:gap-17.5 w-full z-2 relative">
        <div className="flex flex-col gap-8 md:gap-14 items-start">
          <div className="flex flex-col gap-5">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeDown}
              className="flex items-baseline sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 rounded-full bg-green35 self-start max-w-full"
            >
              <div className="w-2 h-2 rounded-full bg-green shrink-0"></div>
              <span className="text-green text-xs text-center sm:text-sm font-bold">
                {/* Data. Energy. Transformation. */}
                Clean Energy. Climate Intelligence. Sustainable Infrastructure
              </span>
            </motion.div>
            <div className="flex flex-col gap-3">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold max-w-[40ch]"
              >
                {/* Leveraging data, artificial intelligence and knowledge-sharing
                to accelerate Africa's clean energy transition */}
                Energylytics Africa is a renewable energy, climate intelligence, 
                waste-to-value and environmental infrastructure company that uses data, 
                artificial intelligence and on-the-ground technology to accelerate 
                <span className="text-green25"> Nigeria's transition towards sustainable energy systems, 
                circular and low carbon economies</span>
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
            className="flex items-center gap-2 sm:gap-3 justify-start sm:justify-center "
          >
            <Link to='/services' className="px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-green25 bg-green25 text-white text-xs sm:text-sm font-bold font-dmSans whitespace-nowrap hover:bg-white  hover:text-green transition-all cursor-pointer">
              Explore Our Work
            </Link>
            <Link to='/contact-us' className="px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-green30 bg-white text-green25 text-xs sm:text-sm font-bold font-dmSans whitespace-nowrap hover:bg-green25 hover:text-white transition-all cursor-pointer">
              Get in Touch
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 max-w-260 w-full md:border md:border-green25 rounded-xl md:p-7.5 md:divide-x md:divide-slate30">
          {stats.map(({ title, value }) => (
            <div key={title} className="flex items-center gap-4 md:px-4 first:md:pl-0">
              <div className="w-14 h-14 md:w-18.5 md:h-18.5 rounded-full border border-green50 flex items-center justify-center shrink-0"><AiFillThunderbolt className="w-6 h-6 md:w-7 md:h-7 text-green25" /></div>
              <div  className="flex flex-col gap-2 md:gap-3">
              <h4 className="text-green15 text-2xl md:text-3xl lg:text-[32px] font-dmSans font-bold">
                {value}
              </h4>
              <p className="text-sm  text-white font-inter">{title}</p>
            </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
