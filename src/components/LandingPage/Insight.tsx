import { motion } from "framer-motion";
import { scaleIn } from "../../animation";

const insights = [
  "Africa’s Solar and Wind Energy Outlooks",
  "Financing the Net-Zero Transition",
  "Gender and Energy Access Analytics",
  "AI Applications in Renewable Energy Systems",
];
function Insight() {
  return (
    <section className="flex flex-col gap-6 md:gap-7 items-center font-inter bg-zinc300 px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20">
      <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 rounded-full bg-green25 self-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <span className="text-white text-xs sm:text-sm font-bold">
          Insights & Publications
        </span>
      </div>
      <p className="text-base sm:text-lg md:text-xl text-white text-center max-w-[60ch]">
        Stay informed with Energylytics' data-driven analyses and research on
        Africa's renewable energy landscape.
      </p>
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-11.5 md:grid-cols-2 w-full">
        <div className="flex flex-col gap-4 md:gap-6 ">
          {insights.map((insight) => (
            <div
              key={insight}
              className="bg-zinc400 rounded-2xl py-5 md:py-6 px-4 md:px-10 flex items-center gap-3 md:gap-4.5"
            >
              <div className="w-2 h-2 bg-green25 rounded-full shrink-0"></div>
              <span className="text-white text-sm sm:text-base">{insight}</span>
            </div>
          ))}
        </div>
        <motion.img
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          src="/insight.jpg"
          alt=""
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </section>
  );
}

export default Insight;
