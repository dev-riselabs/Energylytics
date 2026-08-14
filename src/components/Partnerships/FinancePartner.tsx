import { FaCircleCheck } from "react-icons/fa6";

const energyStats = [
  "Energy access",
  "Climate resilience",
  "Clean-energy transition",
  "Sustainable infrastructure",
  "Green investment",
  "Climate finance",
  "Carbon reduction",
  "Inclusive economic development",
];

function FinancePartner() {
  return <section id='development' className="px-5 sm:px-7 md:px-15 py-15 bg-zinc800 grid grid-cols-1 md:grid-cols-2 gap-7">
    <img
      src="/finance-partner.png"
      alt=""
      className="w-full h-full rounded-4xl object-cover"
    />
    <div className="flex flex-col gap-7">
      <h2 className="text-slate font-manrope text-2xl font-medium">
        3. DEVELOPMENT FINANCE PARTNERS
      </h2>
      <p className="text-base text-slate50 font-manrope">
        We work with development agencies, multilateral institutions, development finance institutions, climate funds, philanthropic organisations and impact investors to design programmes and projects capable of delivering measurable development outcomes.
      </p>
      <p className="text-base text-slate font-manrope font-medium">
        Our partnerships can support:
      </p>
      <div className="flex flex-col gap-4">
        {energyStats.map((stat) => (
          <span className="text-base text-slate50 flex items-center gap-2">
            <FaCircleCheck className="w-5 h-5 text-green25" /> {stat}
          </span>
        ))}
      </div>
    </div>
  </section>;
}

export default FinancePartner;
