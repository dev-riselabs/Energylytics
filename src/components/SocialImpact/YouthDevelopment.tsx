import { FaCircleCheck } from "react-icons/fa6";

const energyStats = [
  "Renewable energy",
  "Energy data and analytics",
  "Artificial intelligence",
  "Climate technology",
  "Environmental intelligence",
  "Circular economy",
  "Sustainability",
];

function YouthDevelopment() {
  return (
    <section className="bg-green60 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-5">
      <div className="bg-white rounded-4xl  px-7 sm:px-10 py-7 sm:py-15 flex flex-col gap-5 md:col-start-3 md:col-span-3 md:row-start-1 md:z-10 md:self-center">
        <h2 className="text-green25 font-manrope text-xl sm:text-2xl font-medium">
          YOUTH & SKILLS DEVELOPMENT
        </h2>
        <p className="text-sm sm:text-base text-slate font-manrope">
          Africa's energy and climate transition requires a new generation of
          skilled professionals. We support training, mentorship, innovation
          challenges, internships and capacity-building initiatives in areas
          including:
        </p>

        <div className="flex flex-col gap-3 sm:gap-4">
          {energyStats.map((stat) => (
            <span className="text-sm sm:text-base text-slate50 flex items-center gap-2">
              <FaCircleCheck className="w-4 h-4 text-green25" /> {stat}
            </span>
          ))}
        </div>
      </div>
      <img
        src="/youth-development.png"
        alt=""
        className="rounded-4xl w-full md:col-start-1 md:col-span-3 md:row-start-1 md:h-166 object-cover"
      />
    </section>
  );
}

export default YouthDevelopment;
