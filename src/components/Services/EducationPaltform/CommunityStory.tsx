import { IoStar } from "react-icons/io5";

const stories = [
  {
    story:
      "“The research reports available on the platform were crucial for our latest funding round. We secured investment within 3 months.”",
    avatar: "/story1.jpg",
    name: "Sarah O.",
    title: "Investment Analyst, Nairobi",
    rate: 5,
  },
  {
    story:
      "“The combination of self-paced learning and expert advocacy articles helps me stay updated on both technical skills and market trends.”",
    avatar: "/story2.jpg",
    name: "Dark K.",
    title: "Project Manager, Lagos",
    rate: 5,
  },
  {
    story:
      "“Energylytics provides the most comprehensive overview of African energy policy I have seen. Essential for government liaisons.”",
    avatar: "/story3.jpg",
    name: "Amina T.",
    title: "Policy Adviser, Accra",
    rate: 3,
  },
];

function CommunityStory() {
  return (
    <section className="bg-zinc600 px-5 sm:px-7 md:px-10 lg:px-15 py-10 md:py-15 flex flex-col gap-6 md:gap-8 items-center">
      <h2 className="text-slate text-xl sm:text-2xl font-medium text-center">
        Community Success Stories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 w-full">
        {stories.map(({ story, avatar, title, name, rate }) => (
          <div key={name} className="flex flex-col divide-y divide-zinc border border-zinc rounded-xl p-6 sm:p-7.5 gap-6 md:gap-10.75 ">
            <div className="flex flex-col gap-5 md:gap-6 pb-6 md:pb-10">
                <div className="flex items-center gap-2">{
                    [1,2,3,4,5].map(i => <IoStar key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i <= rate ? 'text-green25' : 'text-slate50'}`} />)
                }</div>
                <p className="text-sm sm:text-base text-slate50">{story}</p>
            </div>
            <div className="flex items-center gap-3">
                <img src={avatar} alt="" className="w-11 h-11 sm:w-12.5 sm:h-12.5 object-cover rounded-full"/>
                <div className="flex flex-col gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-slate60">{name}</h4>
                    <p className="text-xs sm:text-base text-slate50">{title}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommunityStory;
