import { BsBullseye } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

const features = [
  {
    title: "Governments & Development Agencies",
    description: "Aligning policies with real-time energy data",
    icon: BsBullseye,
  },
  {
    title: "Investors & Utilities",
    description:
      "De-risking renewable energy projects through predictive analytics",
    icon: LuUsers,
  },
  {
    title: "Universities & Research Labs",
    description: "Advancing open energy data science in Africa",
    icon: IoBookOutline,
  },
];

function Partnership() {
  return (
    <section className="py-20 px-5 sm:px-10 md:px-20 font-inter flex flex-col gap-10 items-center">
      <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-green25 self-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <span className="text-white text-sm font-bold">
          Partnerships & Collaborations
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {features.map(({ title, icon: Icon, description }) => (
          <div
            key={title}
            className={`rounded-2xl p-7 sm:p-10 flex flex-col gap-6 sm:gap-7.5 flex-1 border border-zinc `}
          >
            <div className="w-12.5 h-12.5 bg-green85 rounded-md flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <h4 className="text-base font-bold text-slate60">{title}</h4>
              <p className="text-base text-slate50">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-lg sm:text-xl text-slate text-center ">
        We collaborate across sectors to ensure that renewable energy data
        drives smarter decisions, accelerates investment, and creates lasting
        impact for communities across Africa.
      </p>
    </section>
  );
}

export default Partnership;
