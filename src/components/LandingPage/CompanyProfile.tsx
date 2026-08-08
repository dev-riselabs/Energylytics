import { PiBuildingApartment } from "react-icons/pi";

const stats = [
  { title: "Renewable Energy Intelligence & Technology", value: "Industry" },
  { title: "Abuja, Nigeria", value: "Headquarters" },
  { title: "Date Science & AI for Clean Energy", value: "Focus" },
];

function CompanyProfile() {
  return (
    <section className="px-5 sm:px-7 md:px-15 py-20 flex items-center flex-col gap-10 font-inter">
      <div className="bg-zinc200 p-7 sm:p-10 rounded-2xl flex w-full flex-col gap-12.5">
        <div className="flex items-center gap-3 ">
          <div className="w-10 sm:w-12.5 h-10 sm:h-12.5 rounded-md bg-slate flex items-center justify-center">
            <PiBuildingApartment className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <h4 className="text-base font-bold text-slate60">
              Company Profile
            </h4>
            <p className="text-base text-slate50">
              Energylytics Africa Limited
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
          {stats.map(({ title, value }) => (
            <div key={title} className="flex flex-col gap-3">
              <span className="text-base text-slate40">{value}</span>
              <span className="text-base font-bold text-slate50">{title}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-lg sm:text-xl text-slate50 text-center max-w-[80ch]">
        At Energylytics, we combine{" "}
        <span className="text-green40">innovation, analytics</span>  and   
        <span className="text-green40"> impact</span> to power a smarter,
        greener and more equitable energy future. We believe that data holds the
        power to light up Africa sustainably.
      </p>
    </section>
  );
}

export default CompanyProfile;
