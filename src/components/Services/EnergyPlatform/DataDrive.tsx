import { FaArrowRightLong } from "react-icons/fa6";
import { GoBook } from "react-icons/go";

const stats = [
  {
    title: "Granular Asset Control",
    desc: "Drill down from country level to site level in seconds.",
  },
  {
    title: "Financial Integration",
    desc: "Overlay revenue data on top of production metrics.",
  },
];

function DataDrive() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-zinc800 px-5 sm:px-10 md:px-20 py-15 md:items-stretch">
      <img
        src="/data-drive.png"
        alt=""
        className="object-cover w-full rounded-2xl"
      />
      <div className="flex flex-col gap-7 justify-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h4 className="text-slate text-2xl font-medium">
              Data that drive decisions
            </h4>
            <p className="text-slate50 text-base">
              Stop relying on outdated spreadsheets. Our dashboard gives you a
              centralized view of your entire portfolio's health, from
              individual inverter performance to regional grid stability.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {stats.map(({ title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-7.5 h-7.5 flex items-center justify-center bg-green95 rounded-sm">
                <GoBook className="w-5 h-5 text-green25" />
              </div>

              <div className="flex flex-col gap-2">
                <h5 className="text-sm font-semibold text-slate60">{title}</h5>
                <span className="text-xs text-slate50">{desc}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-3.5 border-b-3 pb-2.5 self-start border-green25 font-sora text-sm text-slate font-semibold ">
          Explore Dashboard Features <FaArrowRightLong className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default DataDrive;
