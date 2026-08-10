import type { IconType } from "react-icons";

type FeatureProps = {
  icon: IconType;
  title: string;
  description: string;
};

type VisionProps = {
  features: FeatureProps[];
};

function Vision({ features }: VisionProps) {
  return (
    <section className="flex flex-col gap-7 items-center font-inter bg-green25 px-5 sm:px-7 md:px-15 py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-white self-center">
          <div className="w-2 h-2 rounded-full bg-green"></div>
          <span className="text-green text-sm font-bold">About Us</span>
        </div>
        {/* <h3 className="text-[15px] font-bold text-white text-center">
          Building Intelligence for Africa’s Energy Future
        </h3> */}
      </div>
      <p className="text-lg sm:text-xl text-white text-center">
        {/* Energylytics Africa Limited is a Renewable Energy Intelligence Company
        leveraging data science, artificial intelligence, and education to drive
        the transition to clean, reliable and sustainable power across Africa. */}
        We combine data, policy insights, AI modelling, climate and
        environmental intelligence, project management and knowledge systems to
        help individuals, governments, businesses and development partners turn
        energy data into better decisions and better decisions into better
        energy infrastructure along the clean energy value chain.
      </p>
      {/* <p className="text-lg sm:text-xl text-white text-center">
        Our mission is to enable smarter, data-driven decisions for governments,
        utilities, industries and communities working toward a carbon-neutral
        continent. By combining energy analytics, technology innovation, and
        public advocacy, we are building the intelligence that powers Africa’s
        renewable energy future.
      </p> */}
      <div className="flex flex-col sm:flex-row gap-5">
        {features.map(({ title, icon: Icon, description }) => (
          <div
            key={title}
            className={`rounded-2xl p-7 sm:p-10 flex flex-col gap-6 sm:gap-7.5 flex-1 bg-green35`}
          >
            <div className="w-12.5 h-12.5 bg-green25 rounded-md flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-base font-bold text-slate60">{title}</h4>
              <p className="text-base text-slate50">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vision;
