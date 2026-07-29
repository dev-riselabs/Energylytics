import { BsBullseye } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

const features = [
  {
    title: "Uncompromising Integrity",
    description:
      "We adhere to the highest standards of accuracy. Our data is neutral, verified and trusted by global institutions.",
    icon: BsBullseye,
  },
  {
    title: "Relentless Innovation",
    description:
      "We constantly evolve our methodologies, utilizing AI and satellite tech to see what others miss.",
    icon: LuUsers,
  },
  {
    title: "Deep Sustainability",
    description:
      "We are committed to solutions that ensure long-term environmental health and economic resilience",
    icon: IoBookOutline,
  },
  {
    title: "Collaborative Spirit",
    description:
      "We believe the energy challenge is too big for silos. We actively share knowledge across borders",
    icon: BsBullseye,
  },
  {
    title: "African-First",
    description:
      "Our solutions are tailored to the unique regulatory and geographic realities of the continent.",
    icon: LuUsers,
  },
];

function CoreValues() {
  return (
    <section className="py-20 px-5 sm:px-10 md:px-20 font-inter flex flex-col gap-10 items-center">
      <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-green25 self-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <span className="text-white text-sm font-bold">
          Core Values
        </span>
      </div>
      <p className="text-xl text-slate text-center ">
        The principles that guide every report we publish and every partnership we build.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
        {features.map(({ title, icon: Icon, description }, i) => (
          <div
            key={title}
            className={`rounded-2xl p-10 flex flex-col gap-7.5 flex-1 border border-zinc ${
                i > 2 ? 'sm:col-span-3' : 'sm:col-span-2'
            }`}
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

export default CoreValues;
