import { GoEye } from "react-icons/go";
import { TbTargetArrow } from "react-icons/tb";

const about = [
  {
    title: "Our Mission",
    icon: TbTargetArrow,
    img: "/mission-img.png",
    description:
      "To utilize data, artificial intelligence, clean energy and environmental innovation to make energy systems smarter, more accessible and sustainable, while helping Nigeria and the rest of Africa become resilient economies and infrastructure for the future.",
  },
  {
    title: "Our Vision",
    icon: GoEye,
    img: "/vision-img.png",
    description:
      "To become Africa’s leading platform for clean energy intelligence, climate innovation, waste-to- value and sustainable infrastructure, driving smarter decisions, accelerating the energy transition and enabling a more resilient and sustainable Africa.",
  },
];

function Vision() {
  return (
    
    <section id='about-mission' className="home-about-bg flex flex-col gap-6 px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20">
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 rounded-full border border-green50 self-center">
          <div className="w-2 h-2 rounded-full bg-green25"></div>
          <span className="text-green25 text-xs sm:text-sm font-bold">About Us</span>
        </div>
        <h3 className="text-sm sm:text-[15px] font-bold text-green25 text-center font-manrope">
          Building Intelligence for Africa’s Energy Future
        </h3>
        <h4 className="text-base sm:text-lg md:text-xl text-center text-slate ">
          We combine data, policy insights, AI modelling, climate and
        environmental intelligence, project management and knowledge systems to
        help individuals, governments, businesses and development partners turn
        energy data into better decisions and better decisions into better
        energy infrastructure along the clean energy value chain.

        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
            about.map(({title, description, icon:Icon, img}, i) => <div key={title} className="bg-green35 p-6 sm:p-8 md:p-10 rounded-[20px] gap-5 md:pr-0 grid grid-cols-1 sm:grid-cols-2 place-items-center">
                  <div className="flex flex-col gap-5 md:gap-7 ">
                    <div className="w-14 h-14 md:w-17.5 md:h-17.5 bg-green85 flex items-center justify-center rounded-xl">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h4 className="border-b border-green60 pb-2 text-base font-bold text-slate60 self-start">{title}</h4>
                        <p className="text-sm sm:text-base text-slate50">{description}</p>
                    </div>
                  </div>
                  <img src={img} alt="" className={`w-full h-full object-cover max-h-60 md:max-h-70 ${i === 1? 'rounded-3xl md:skew-y-14' : 'rounded-full'}`} />
            </div>)
        }
      </div>
    </section>
  );
}

export default Vision;
