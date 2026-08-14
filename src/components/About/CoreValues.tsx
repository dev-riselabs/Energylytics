// import { BsBullseye } from "react-icons/bs";
// import { IoBookOutline } from "react-icons/io5";
// import { LuUsers } from "react-icons/lu";

// const features = [
//   {
//     title: "Uncompromising Integrity",
//     description:
//       "We adhere to the highest standards of accuracy. Our data is neutral, verified and trusted by global institutions.",
//     icon: BsBullseye,
//   },
//   {
//     title: "Relentless Innovation",
//     description:
//       "We constantly evolve our methodologies, utilizing AI and satellite tech to see what others miss.",
//     icon: LuUsers,
//   },
//   {
//     title: "Deep Sustainability",
//     description:
//       "We are committed to solutions that ensure long-term environmental health and economic resilience",
//     icon: IoBookOutline,
//   },
//   {
//     title: "Collaborative Spirit",
//     description:
//       "We believe the energy challenge is too big for silos. We actively share knowledge across borders",
//     icon: BsBullseye,
//   },
//   {
//     title: "African-First",
//     description:
//       "Our solutions are tailored to the unique regulatory and geographic realities of the continent.",
//     icon: LuUsers,
//   },
// ];
const features = [
  {
    title: "Uncompromising Integrity",
    description: "We adhere to the highest standards of accuracy. Our data is neutral, verified and trusted by global institutions.",
    img: '/about-partnership1.jpg',
  },
  {
    title: "Relentless Innovation",
    description:
      "We constantly evolve our methodologies, utilizing AI and satellite tech to see what others miss.",
      img: '/about-partnership2.jpg',
  },
  {
    title: "Deep Sustainability",
    description: "We are committed to solutions that ensure long-term environmental health and economic resilience",
    img: '/about-partnership3.jpg',
  },
  {
    title: "Collaborative Spirit",
    description:
      "We believe the energy challenge is too big for silos. We actively share knowledge across borders",
      img: '/about-partnership4.png',
  },
  {
    title: "African-First",
    description: "Our solutions are tailored to the unique regulatory and geographic realities of the continent.",
    img: '/about-partnership5.jpg',
  },
];

function CoreValues() {
  return (
    <section className="py-12 md:py-20 px-5 sm:px-7 md:px-10 lg:px-15 font-inter flex flex-col gap-8 md:gap-10 items-center bg-green35">

      <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 rounded-full border border-green50 self-center">
          <div className="w-2 h-2 rounded-full bg-green25"></div>
          <span className="text-green25 text-xs sm:text-sm font-bold text-center">Our Core Values</span>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-slate text-center max-w-[55ch]">
        The Principles that guide all the 
       <span className="text-green25"> work we do</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {features.map(({ title, img, description }) => (
          <div
            key={title}
            className={`h-72 md:h-89 rounded-3xl relative overflow-hidden`}
          >
            <div className="absolute bg-black/60 inset-0 "></div>
            <img src={img} alt="" className="w-full h-full object-cover"/>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 absolute left-5 bottom-5 right-5 font-manrope">
              <h4 className="text-xl md:text-2xl font-medium text-white">{title}</h4>
              <p className="text-base md:text-xl text-white">{description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>

    // <section className="py-20 px-5 sm:px-7 md:px-15 font-inter flex flex-col gap-10 items-center">
    //   <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-green25 self-center">
    //     <div className="w-2 h-2 rounded-full bg-white"></div>
    //     <span className="text-white text-sm font-bold">Our Core Values</span>
    //   </div>
    //   <p className="text-lg sm:text-xl text-slate text-center ">
    //     {/* The principles that guide every report we publish and every partnership
    //     we build. */}
    //     The Principles that guide all the work we do
    //   </p>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
    //     {features.map(({ title, icon: Icon, description }, i) => (
    //       <div
    //         key={title}
    //         className={`rounded-2xl p-7 sm:p-10 flex flex-col gap-6 sm:gap-7.5 flex-1 border border-zinc ${
    //           i > 2 ? "lg:col-span-3" : "lg:col-span-2"
    //         }`}
    //       >
    //         <div className="w-12.5 h-12.5 bg-green85 rounded-md flex items-center justify-center">
    //           <Icon className="w-6 h-6 text-white" />
    //         </div>
    //         <div className="flex flex-col gap-6">
    //           <h4 className="text-base font-bold text-slate60">{title}</h4>
    //           <p className="text-base text-slate50">{description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}

export default CoreValues;
