import { FaCheckCircle } from "react-icons/fa";

const services = [
  "Data-driven policy formulation and implementation",
  "National and sub-national energy planning and electrification mapping",
  "Climate resilience and sustainability planning",
  "Renewable energy and environmental resource assessment",
  "Public sector project management and procurement support",
  "Capacity building for energy officials and policymakers",
  "Research, analysis and evidence-based decision support",
  "Public awareness and engagement campaigns",
];

function GovernmentPartnership() {
  return (
    <section className="bg-green px-5 sm:px-7 md:px-15 py-10 sm:py-15 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-15 items-center">
        {/* Image */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[250px] sm:h-[350px] lg:h-auto lg:min-h-[400px]">
          <img
            src="/about-hero.jpg"
            alt="Government building"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 sm:gap-6 justify-center">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            1. GOVERNMENT & PUBLIC INSTITUTIONS
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
            We partner with federal, state and local governments, regulatory
            bodies, public agencies and multilateral institutions to integrate
            data, intelligence and practical solutions into energy policy, climate
            action and sustainable infrastructure development.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-white text-base sm:text-lg font-semibold">
              Our government partnerships:
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-2 sm:gap-3 text-white/90">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green15 shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-xs sm:text-sm md:text-base">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GovernmentPartnership;
