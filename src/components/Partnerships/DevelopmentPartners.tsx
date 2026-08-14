import { FaCheckCircle } from "react-icons/fa";

const offerings = [
  "Strategic planning",
  "Programme design",
  "Monitoring and evaluation",
  "Community engagement and stakeholder mapping",
  "Gender and social inclusion analysis",
  "Climate finance readiness",
  "Impact measurement and reporting",
  "Knowledge management and capacity building",
];

function DevelopmentPartners() {
  return (
    <section className="bg-zinc200 px-5 sm:px-7 md:px-15 py-10 sm:py-15 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-15 items-center">
        {/* Image */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[250px] sm:h-[350px] lg:h-auto lg:min-h-[400px]">
          <img
            src="/about-partnership2.jpg"
            alt="Development partnerships"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 sm:gap-6 justify-center">
          <h2 className="text-slate text-xl sm:text-2xl md:text-3xl font-bold">
            3. DEVELOPMENT FINANCE & PARTNERS
          </h2>
          <p className="text-slate50 text-sm sm:text-base md:text-lg leading-relaxed">
            We work with development agencies and funders, international
            non-governmental organizations, donor-funded initiatives and
            philanthropic organizations to design, implement and evaluate
            energy access, climate and sustainability programmes grounded in
            reliable data and practical insights.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-slate text-base sm:text-lg font-semibold">
              Our partnership offerings include:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {offerings.map((offering) => (
                <li key={offering} className="flex items-start gap-2 text-slate50">
                  <FaCheckCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-green25 shrink-0 mt-0.5 sm:mt-1" />
                  <span className="text-xs sm:text-sm md:text-base">{offering}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevelopmentPartners;
