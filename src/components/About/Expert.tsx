const experts = [
  { img: "/ceo.jpg", name: "Jane Doe", title: "Founder & CEO" },
  { img: "/john.jpg", name: "John Smith", title: "Lead Developer" },
  { img: "/john.jpg", name: "John Smith", title: "Lead Developer" },
  { img: "/aisha.jpg", name: "Aisha Khan", title: "Community Outreach Lead" },
];

function Expert() {
  return (
    <section className="bg-zinc500 px-5 sm:px-7 md:px-15 py-20 flex flex-col items-center gap-8">
      <h3 className="text-slate font-bold text-[15px]">Made the Experts</h3>
      <p className="text-lg sm:text-xl text-slate50 text-center max-w-[60ch]">
        The diverse team of analysts, engineers and strategies powering our
        intelligence.
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
