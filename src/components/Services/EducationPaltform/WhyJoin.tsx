import { BsBullseye } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { LuUsers } from "react-icons/lu";

const features = [
  {
    title: "Expert Learning Hub",
    description:
      "Access structured courses and certifications designed by industry veterans to master African energy markets",
    icon: BsBullseye,
  },
  {
    title: "Advocacy & Articles",
    description:
      "Engage with our blog platform featuring thought leadership, policy, analysis and advocacy pieces",
    icon: LuUsers,
  },
  {
    title: "Research Publications",
    description:
      "Download proprietary reports, whitepapers and datasets grounded in real-world market intelligence",
    icon: GoBook,
  },
];

function WhyJoin() {
  return (
    <section className="py-12 md:py-20 px-5 sm:px-7 md:px-10 lg:px-15 font-inter flex flex-col gap-6 md:gap-10 items-center bg-white">
      <h2 className="text-slate text-xl sm:text-2xl font-medium text-center">
        Why Join Our Platform?
      </h2>
      <p className="text-sm sm:text-base text-slate50 text-center max-w-[60ch]">
        We bridge the gap between knowledge and action, providing tools for
        education, research and advocacy in one place
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
        {features.map(({ title, icon: Icon, description }) => (
          <div
            key={title}
            className={`rounded-2xl p-6 sm:p-7 flex flex-col gap-5 sm:gap-7.5 flex-1 border border-zinc `}
          >
            <div className="w-10 h-10 md:w-12.5 md:h-12.5 bg-green85 rounded-md flex items-center justify-center">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base font-bold text-slate60">{title}</h4>
              <p className="text-sm sm:text-base text-slate50">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyJoin;
