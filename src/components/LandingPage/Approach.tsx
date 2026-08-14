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
    img : '/project1.png'
  },
  {
    isProject: false,
    title: "48%",
    description:
      "Nigeria, Kenya and South Africa collectively attracted 48% of Africa's clean energy investment in 2023, but 70% of off-grid funding still targets East Africa.",
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
    img: '/project2.jpg'
  },
  {
    isProject: false,
    title: "92%",
    description:
      "Our AI models help development agencies deploy resources where impact is maximized.",
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
    img: '/project3.png'
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
    <section className="flex flex-col gap-6 md:gap-7 items-center fonr-inter bg-white px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20">

      <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 rounded-full border border-green50 self-center">
          <div className="w-2 h-2 rounded-full bg-green25"></div>
          <span className="text-green25 text-xs sm:text-sm font-bold">Our Approach</span>
        </div>
      <h3 className="text-sm sm:text-[15px] font-bold text-slate text-center">
        Transforming Energy Data into Action
      </h3>

      <p className="text-sm sm:text-md md:text-lg text-slate50 text-center max-w-[85ch]">
        We deliver actionable intelligence through three flagship initiatives
       <span className="text-green25"> that are reshaping Africa's energy landscape.</span>
      </p>
      <div className="flex flex-col gap-8 md:gap-12.5 w-full">
        {actions.map((action, i) => {
          if (action.isProject) {
            return (
              <div key={action.title} className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0">
              <div

                className=" flex flex-col gap-6 md:gap-7 md:col-span-2 md:justify-center"
              >
                <div className="flex flex-col gap-5 md:gap-6">
                  <div className="py-2 px-4 sm:px-5 rounded-full items-center justify-center flex gap-2 bg-green45  text-green text-xs sm:text-sm font-bold self-start">
                    <FaGlobeAfrica className="w-5 h-5 sm:w-6 sm:h-6" /> {action.project}
                  </div>
                  <div className="flex flex-col gap-4 md:gap-5">
                    <h4 className="text-slate60 text-base md:text-lg font-medium">
                      {action.title}
                    </h4>
                    <p className="text-slate50 text-sm sm:text-base">{action.desc}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2 md:gap-3 list-disc pl-4">
                  {action.items?.map((item) => (
                    <li key={item} className="text-sm sm:text-base text-slate50">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <img src={action.img} alt="" className="rounded-2xl md:rounded-3xl md:col-span-3 object-cover w-full h-64 sm:h-80 md:h-auto"/>
              </div>
            );
          } else {
            return (
              <div
                key={`${action.title}-${i}`}
                className={` border-zinc border rounded-2xl flex flex-col p-6 sm:p-8 md:p-10 gap-5 md:gap-7.5 ${
                  i === 1 ? 'bg-green55':
                  i === 2 ? 'bg-green75' :
                  'bg-green65'
                }`}
              >
                <h4 className="text-green text-3xl sm:text-4xl md:text-5xl font-medium">
                  {action.title}
                </h4>
                <p className="text-sm sm:text-base text-slate50">{action.description}</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default Approach;
