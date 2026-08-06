import { BsBullseye } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { LuUsers } from "react-icons/lu";

const features = [
  {
    title: "Learners & Professionals",
    description:
      "Individuals seeking certification and upskilling in grid integration, solar PV systems and project finance.",
    icon: BsBullseye,
  },
  {
    title: "Advocates & Policymakers",
    description:
      "Decision-makers needing research-backed insights to shape regulatory environments and drive energy adoption.",
    icon: LuUsers,
  },
  {
    title: "Investors & Researchers",
    description:
      "Analysts looking for data-driven reports to evaluate project viability and identify high-growth opportunities.",
    icon: GoBook,
  },
];

function WhoPlatformFor() {
  return (
    <section className="py-20 px-5 sm:px-7 md:px-15 font-inter flex flex-col gap-10 items-center bg-black300">
      <h2 className="text-white text-2xl font-medium">
        Who Is This Platform For?
      </h2>
      <p className="text-base text-white text-center max-w-[60ch]">
        We serve a diverse community of professionals dedicated to advancing the
        African energy sector
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {features.map(({ title, icon: Icon, description }) => (
          <div
            key={title}
            className={`rounded-2xl p-7 flex flex-col gap-7.5 flex-1 border border-zinc bg-white`}
          >
            <div className="w-12.5 h-12.5 bg-green85 rounded-md flex items-center justify-center">
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

export default WhoPlatformFor;
