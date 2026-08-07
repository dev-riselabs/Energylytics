import { BiCoinStack } from "react-icons/bi";
import { motion } from "framer-motion";
import { staggerContainer, cardItem } from "../../animation";

const areas = [
  {
    isImage: false,
    title: "Energy Data Analytics",
    items: [
      "Aggregating and analysing real-time generation, distribution, and consumption datasets.",
      "Building open energy intelligence dashboards using satellite, IoT, and public data.",
    ],
  },
  {
    isImage: false,
    title: "AI for Energy Optimization",
    items: [
      "Predictive models for renewable generation forecasting, grid management, and rural electrification planning.",
      "Machine learning for resource allocation, battery optimization, and carbon emission reduction.",
    ],
  },
  {
    isImage: false,
    title: "Policy & Market Insights",
    items: [
      "Evidence-based research on investment trends, tariffs, and financing mechanisms.",
      "Data storytelling and visual analytics for policymakers and investors.",
    ],
  },
  { isImage: true, img: "/windmill.jpg" },
  {
    isImage: false,
    title: "Knowledge-Sharing & Capacity Building",
    items: [
      "Training and workshops to strengthen Africa’s renewable energy data ecosystem.",
      "Collaborations with universities, think tanks, and startups to democratize energy intelligence.",
    ],
  },

  { isImage: true, img: "/area-1.jpg" },
];

function FocusArea() {
  return (
    <section className="flex flex-col gap-7 items-center fonr-inter px-5 sm:px-7 md:px-15 py-20 focus-area-bg">
      <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-white self-center">
        <div className="w-2 h-2 rounded-full bg-green"></div>
        <span className="text-green text-sm font-bold">Our Focus Areas</span>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 items-stretch"
      >
        {areas.map((area, i) => {
          if (area.isImage) {
            return (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="h-auto"
              >
                <img
                  src={area.img}
                  alt=""
                  className="w-full h-full object-cover rounded-xl lg:h-100"
                />
              </motion.div>
            );
          } else {
            return (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="border border-zinc flex flex-col gap-8 p-7 md:p-10 rounded-xl bg-white"
              >
                <div className="w-12.5 h-12.5 bg-green rounded-md flex items-center justify-center">
                  <BiCoinStack className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col gap-6">
                  <h4 className="text-base font-bold text-slate60">
                    {area.title}
                  </h4>
                  <ul className="flex flex-col gap-2 list-disc pl-3">
                    {area.items?.map((item) => (
                      <li key={item} className="text-base text-slate50">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          }
        })}
      </motion.div>
    </section>
  );
}

export default FocusArea;
