import { FaGlobeAfrica } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoBook } from "react-icons/go";

const stats = [
  { title: "Learning Hub", desc: "Courses & resources" },
  { title: "Article Platform", desc: "Industry news & blogs" },
  { title: "Research Publications", desc: "Deep-dive studies" },
  { title: "Event Listings", desc: "Workshops & webinars" },
];

function AdvocacyPlatform() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-zinc800 px-5 sm:px-10 md:px-20 py-15 md:items-stretch">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-6">
          <div className="py-2 px-5 rounded-full items-center justify-center flex gap-2 bg-green45  text-green text-sm font-bold self-start">
            <FaGlobeAfrica className="w-6 h-6" /> KNOWLEDGE & COMMUNITY
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-slate text-2xl font-medium">
              Education & Advocacy Platform
            </h4>
            <p className="text-slate50 text-base">
              Empowering the renewable energy sector through education and
              engagement. Access a wealth of knowledge through our learning hub,
              stay updated with our publications and connect with peers at our
              events.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
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
          Visit Learning Hub <FaArrowRightLong className="w-5 h-5" />
        </button>
      </div>
      <img
        src="/advocacy.png"
        alt=""
        className="object-cover w-full rounded-2xl"
      />
    </section>
  );
}

export default AdvocacyPlatform;
