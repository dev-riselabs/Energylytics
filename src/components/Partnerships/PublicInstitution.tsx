import { FaCircleCheck } from "react-icons/fa6";

const energyStats = [
  "Energy access and rural electrification programmes",
  "Renewable-energy and clean-energy development",
  "Energy and environmental intelligence systems",
  "Climate resilience and adaptation",
  "Circular economy and waste-to-value programmes",
  "Environmental infrastructure",
  "Policy and regulatory intelligence",
  "Institutional capacity development",
  "Public-private partnership development",
];

function PublicInstitution() {
  return <section id='government' className="px-5 sm:px-7 md:px-15 py-15 bg-green60 grid grid-cols-1 md:grid-cols-2 gap-7">
    <img src="/public-institution.jpg" alt="" className="w-full h-full rounded-4xl object-cover"/>
    <div className="flex flex-col gap-7">
            <h2 className="text-white font-manrope text-2xl font-medium">
              1. GOVERNMENT & PUBLIC INSTITUTIONS
            </h2>
            <p className="text-base text-white font-manrope">We partner with federal, state and local governments, regulators, public agencies and development authorities to strengthen energy systems, develop sustainable infrastructure, improve environmental management and translate data and evidence into better public policy and investment decisions.</p>
            <p className="text-base text-white font-manrope font-medium">Our government partnerships may include:</p>
            <div className="flex flex-col gap-4">
              {energyStats.map((stat) => (
                <span className="text-base text-white flex items-center gap-2">
                  <FaCircleCheck className="w-5 h-5 text-green25" /> {stat}
                </span>
              ))}
            </div>
          </div>
  </section>;
}

export default PublicInstitution;
