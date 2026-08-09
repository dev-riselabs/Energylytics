import { FaGlobeAfrica } from "react-icons/fa";

const actions = [
  {
    isProject: true,
    project: "Project 1",
    title: "Africa Renewable Energy Data Observatory (AREDO)",
    desc: "A continent-wide data platform aggregating and visualizing energy metrics from 40+ countries.",
    items: [
      "Installed renewable capacity by source and country",
      "Electrification rates and off-grid adoption",
      "Carbon intensity of national grids",
      "Investment inflows and project pipelines",
    ],
  },
  {
    isProject: false,
    title: "48%",
    description:
      "Nigeria, Kenya and South Africa collectively attracted 48% of Africa's clean energy investment in 2023, but 70% of off-grid funding still targets East Africa.",
  },
  {
    isProject: false,
    title: "92%",
    description:
      "Our AI models help development agencies deploy resources where impact is maximized.",
  },
  {
    isProject: true,
    project: "Project 2",
    title: "AI-Powered Electrification Modelling",
    desc: "Using satellite imagery and demographic data, our AI models map unserved and underserved regions to identify optimal mini-grid deployment sites.",
    items: [
      "Predictive accuracy: 92% on grid expansion simulation",
      "Model trained on 12 million+ household energy data points",
      "Enables utilities and investors to maximize impact",
    ],
  },
  
  {
    isProject: true,
    project: "Project 3",
    title: "Climate & Finance Intelligence",
    desc: "Analyzing green finance flows, ESG data and carbon market trends to guide sustainable investments.",
    items: [
      "Renewable energy ROI across African regions",
      "Climate risk-adjusted investment scoring",
      "Public-private financing benchmarks",
    ],
  },
  {
    isProject: false,
    title: "22%",
    description:
      "In 2024, Africa's renewable energy financing grew by 22%, yet only 18% of deals included data-backed impact metrics a gap Energylytics aims to close.",
  },
];

function Approach() {
  return (
    <section className="flex flex-col gap-7 items-center fonr-inter bg-white px-5 sm:px-7 md:px-15 py-20">
      <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-green25 self-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <span className="text-white text-sm font-bold">Our Approach</span>
      </div>
      <h3 className="text-[15px] font-bold text-slate">
        Transforming Energy Data into Action
      </h3>

      <p className="text-lg sm:text-xl text-slate50 text-center">
        We deliver actionable intelligence through three flagship initiatives
        that are reshaping Africa's energy landscape.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 items-center gap-12.5">
        {actions.map((action, i) => {
          if (action.isProject) {
            return (
              <div
                key={action.title}
                className="md:col-span-4 flex flex-col gap-7"
              >
                <div className="flex flex-col gap-6">
                  <div className="py-2 px-5 rounded-full items-center justify-center flex gap-2 bg-green45  text-green text-sm font-bold self-start">
                    <FaGlobeAfrica className="w-6 h-6" /> {action.project}
                  </div>
                  <div className="flex flex-col gap-5">
                    <h4 className="text-slate60 text-base font-medium">
                      {action.title}
                    </h4>
                    <p className="text-slate50 text-base">{action.desc}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-3 list-disc pl-3">
                  {action.items?.map((item) => (
                    <li key={item} className="text-base text-slate50">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else {
            return (
              <div
                key={`${action.title}-${i}`}
                className={` border-zinc border rounded-2xl md:col-span-5 flex flex-col p-10 gap-7.5 ${
                  i === 1 ? 'bg-green55':
                  i === 2 ? 'bg-green75' :
                  'bg-green65'
                }`}
              >
                <h4 className="text-green text-5xl font-medium">
                  {action.title}
                </h4>
                <p className="text-base text-slate50">{action.description}</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default Approach;
