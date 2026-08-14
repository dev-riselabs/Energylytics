const experts = [
  { img: "/avatar.png", name: "Tomi Afilaka", title: "Lead Technical Engineer" },
  { img: "/avatar.png", name: "Jerome Mangwat", title: "Community Outreach Lead" },
  { img: "/avatar.png", name: "Nneka Icheoku", title: "Lead Data and AI Analyst" },
  { img: "/avatar.png", name: "Mohammed Ibrahim", title: "Project Manager, Infrastructure & Energy" },
];

function Expert() {
  return (
    <section id='experts' className="bg-zinc500 px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-20 flex flex-col items-center gap-6 md:gap-8">
      <h3 className="text-slate font-bold text-sm sm:text-[15px]">Our Experts</h3>
      <p className="text-base sm:text-lg md:text-xl text-slate50 text-center max-w-[60ch]">
        Our Diverse Team of Analysts, Engineers, Project Managers and Administrators
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 w-full">
        {
            experts.map(({img, name, title}, i) => <div key={`${name}-${i}`} className="flex flex-col items-center gap-4 sm:gap-5">
               <img src={img} alt="" className="w-20 h-20 sm:w-25 sm:h-25 rounded-full object-cover object-top"/>
               <div className="flex flex-col gap-2 items-center font-sora">
                <h5 className="text-sm sm:text-base font-bold text-black200 text-center">{name}</h5>
                <span className="text-black font-light text-xs sm:text-sm text-center">{title}</span>
               </div>
            </div>)
        }
      </div>
    </section>
  );
}

export default Expert;
