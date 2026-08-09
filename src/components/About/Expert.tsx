const experts = [
  { img: "/ceo.jpg", name: "Tomi Afilaka", title: "Lead Technical Engineer" },
  { img: "/john.jpg", name: "Jerome Mangwat", title: "Community Outreach Lead" },
  { img: "/john.jpg", name: "Nneka Icheoku", title: "Lead Data and AI Analyst" },
  { img: "/aisha.jpg", name: "Mohammed Ibrahim", title: "Project Manager, Infrastructure & Energy" },
];

function Expert() {
  return (
    <section className="bg-zinc500 px-5 sm:px-7 md:px-15 py-20 flex flex-col items-center gap-8">
      <h3 className="text-slate font-bold text-[15px]">Our Experts</h3>
      <p className="text-lg sm:text-xl text-slate50 text-center max-w-[60ch]">
        Our Diverse Team of Analysts, Engineers, Project Managers and Administrators
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {
            experts.map(({img, name, title}, i) => <div key={`${name}-${i}`} className="flex flex-col items-center gap-5">
               <img src={img} alt="" className="w-25 h-25 rounded-full object-cover object-top"/>
               <div className="flex flex-col gap-2 items-center font-sora">
                <h5 className="text-base font-bold text-black200 text-center">{name}</h5>
                <span className="text-black font-light text-sm text-center">{title}</span>
               </div>
            </div>)
        }
      </div>
    </section>
  );
}

export default Expert;
