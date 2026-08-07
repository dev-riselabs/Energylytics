import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { staggerContainer, cardItem } from "../../animation";

type FeatureProps = {
  icon: IconType;
  title: string;
  description: string;
};

interface AccentProps {
  isColored?: boolean;
  title: string;
  label: string;
  description: string;
  features: FeatureProps[];
}

function AccentFeature({
  label,
  title,
  description,
  features,
  isColored,
}: AccentProps) {
  return (
    <section className="flex flex-col gap-7 items-center font-inter bg-green25 px-5 sm:px-7 md:px-15 py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-white self-center">
          <div className="w-2 h-2 rounded-full bg-green"></div>
          <span className="text-green text-sm font-bold">{label}</span>
        </div>
        <h3 className="text-[15px] font-bold text-white text-center">
          {title}
        </h3>
      </div>
      <p className="text-lg sm:text-xl text-white text-center">{description}</p>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className={`grid grid-cols-1 sm:grid-cols-2  gap-5 ${isColored ? "lg:grid-cols-6" : "lg:grid-cols-3"}`}
      >
        {features.map(({ title, icon: Icon, description }) => (
          <motion.div
            key={title}
            variants={cardItem}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className={`rounded-2xl p-7 sm:p-10 flex flex-col gap-5 sm:gap-7.5 flex-1 ${
              isColored ? "bg-green35 lg:col-span-3" : "bg-white"
            }`}
          >
            <div className="w-10 sm:w-12.5 h-10 sm:h-12.5 bg-green25 rounded-md flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <h4 className="text-base font-bold text-slate60">{title}</h4>
              <p className="text-base text-slate50">{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default AccentFeature;
