import { FaCheckCircle } from "react-icons/fa";

const impactAreas = [
  "Health and education",
  "Agriculture and food security",
  "Job creation and entrepreneurship",
  "Water and sanitation",
  "Climate resilience",
];

function GlobalReach() {
  return (
    <section className="bg-green px-5 sm:px-7 md:px-15 py-15 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 items-center">
        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden h-[300px] lg:h-[350px] lg:col-span-2">
          <img
            src="/featured.jpg"
            alt="Global reach and local impact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content - White Box */}
        <div className="flex flex-col gap-6 lg:col-span-3 bg-white rounded-3xl p-8 sm:p-10">
          <h2 className="text-green text-xl sm:text-2xl font-bold uppercase">
            OUR IMPACT REACH EXTENDS ACROSS SECTORS
          </h2>
          <p className="text-slate50 text-sm sm:text-base leading-relaxed">
            Beyond electricity, energy access enables progress in multiple
            dimensions of development. By supporting clean energy infrastructure,
            we contribute to:
          </p>

          <ul className="flex flex-col gap-3">
            {impactAreas.map((area) => (
              <li key={area} className="flex items-center gap-3 text-slate50">
                <FaCheckCircle className="w-5 h-5 text-green25 shrink-0" />
                <span className="text-sm sm:text-base">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GlobalReach;
