import { BiCoinStack } from "react-icons/bi";
import { motion } from "framer-motion";
import { staggerContainer, cardItem } from "../../animation";

type Area = {
  isImage: boolean;
  title: string;
  subtitle: string;
  items?: string[];
  img?: string;
};

const areas: Area[] = [
  {
    isImage: false,
    title: "Energy Data & Analytics",
    subtitle:
      "Turning energy data into actionable intelligence for better decisions.",
    items: [
      "Aggregating and analysing energy generation, distribution, consumption and market data to reveal trends, opportunities and inefficiencies.",
      "Developing energy intelligence platforms and dashboards using public data, IoT, geospatial and other emerging data sources.",
      "Helping households, businesses, utilities and institutions understand, measure and optimise their energy consumption and costs.",
    ],
  },
  {
    isImage: false,
    title: "AI for Energy Optimisation",
    subtitle: "Applying artificial intelligence to make energy systems smarter, more efficient and more reliable.",
    items: [
      "Developing AI and predictive models for energy demand, renewable-energy generation, grid performance and rural electrification planning.",
      "Using machine learning to optimise energy resources, storage, distributed energy systems and operational performance.",
      "Building intelligent tools that help households, businesses, utilities and energy operators reduce costs, improve efficiency and make better energy decisions.",
    ],
  },
  {
    isImage: false,
    title: "Clean & Renewable Energy",
    subtitle: "Accelerating Africa's transition to cleaner, more accessible and sustainable energy.",
    items: [
      "Supporting renewable-energy development across solar, distributed energy, mini-grids, rural electrification and other clean-energy systems.",
      "Developing and assessing opportunities in emerging energy solutions including biomass, biogas, biomethane and waste-to-energy.",
      "Providing energy resource assessment, feasibility, project development and strategic advisory for clean-energy infrastructure.",
    ],
  },
  // { isImage: true, img: "/windmill.jpg" },
  {
    isImage: false,
    title: "Climate & Environmental Intelligence",
    subtitle: "Using data, AI and technology to understand environmental risks and build climate-resilient systems.",
    items: [
      "Developing climate and environmental intelligence for risk assessment, resilience planning and sustainable infrastructure.",
      "Applying geospatial intelligence, environmental data and AI to monitor ecosystems, infrastructure and environmental conditions.",
      "Supporting carbon intelligence, sustainability measurement, ESG and climate-impact assessment.",
    ],
  },
  {
    isImage: false,
    title: "Circular Economy & Waste-to-Value",
    subtitle: "Transforming waste and underutilised resources into energy, materials and economic value.",
    items: [
      "Designing data-driven waste-to-value and resource-recovery systems that maximise recycling, reuse and productive utilisation of waste.",
      "Developing opportunities for organic waste conversion, biomass, biogas and appropriate waste-to-energy solutions.",
      "Supporting governments, businesses and communities in building more efficient, resilient and commercially viable circular-economy systems.",
    ],
  },
  {
    isImage: false,
    title: "Policy, Market Intelligence & Capacity Building",
    subtitle: "Building the knowledge, capabilities and partnerships needed to accelerate Africa's energy and sustainability transition.",
    items: [
      "Providing evidence-based research and intelligence on energy, climate and environmental policy, markets, investment and regulation.",
      "Translating complex data into insights, visualisations and decision-support tools for governments, businesses, investors and development partners.",
      "Delivering training, knowledge platforms and strategic collaborations that strengthen Africa's energy, climate and environmental intelligence ecosystem.",
    ],
  },

  // { isImage: true, img: "/area-1.jpg" },
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
          if (area.isImage && area.img) {
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
                  <p>{area.subtitle}</p>
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
