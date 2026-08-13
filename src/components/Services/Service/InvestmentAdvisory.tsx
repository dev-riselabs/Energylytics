import { FaCircleCheck } from "react-icons/fa6";

const statsOne = [
  "Project identification",
  "Feasibility studies",
  "Technical assessment",
  "Commercial modelling",
  "Business-case development",
  "Partner/consortium development",
];

const statsTwo = [
  "PPP structuring",
  "Investment readiness",
  "Project finance support",
  "Climate-finance readiness",
  "Carbon-finance opportunities",
  "Implementation support",
];

function InvestmentAdvisory() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 sm:px-7 md:px-15 py-15 bg-green60 font-inter">
      <img
        src="/service-investment.jpg"
        alt=""
        className="w-full h-104 rounded-4xl"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3.5">
          <h3 className="text-white font-manrope text-2xl font-medium">
            8. PROJECT DEVELOPMENT & INVESTMENT ADVISORY
          </h3>
          <p className="text-base text-white">
            This is our bridge between{" "}
            <span className="font-semibold">
              intelligence and infrastructure
            </span>
            .
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base font-medium font-manrope text-white">
            We help take ideas from:
          </p>
          <p className="text-base font-bold text-white">
            Opportunity → Feasibility → Design → Financing → Implementation →
            Impact
          </p>
        </div>
        <p className="text-xl font-medium font-manrope text-white">
          Services include:
        </p>
        <div className="flex gap-3 items-start">
          <div className="flex flex-col gap-4">
            {statsOne.map((stat) => (
              <span className="text-base text-white flex items-center gap-2">
                <FaCircleCheck className="w-4.5 h-4.5 text-green25" /> {stat}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {statsTwo.map((stat) => (
              <span className="text-base text-white flex items-center gap-2">
                <FaCircleCheck className="w-4.5 h-4.5 text-green25" /> {stat}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-green55 rounded-xl px-10 py-7.5 text-base font-bold text-slate font-manrope">We turn intelligence into bankable projects.</div>
      </div>
    </section>
  );
}

export default InvestmentAdvisory;
