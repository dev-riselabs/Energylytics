const stats = [
    {value : '50+', title : 'Projects Analyzed'},
    {value : '12', title : 'Countries Covered'},
    {value : '1.2GW', title : 'Potential Mapped'},
    {value : '500+', title : 'Graduates Trained'},
]

function Stats() {
  return <section className="px-5 sm:px-10 md:px-20 py-10 bg-slate60 flex  justify-between gap-2">

{
    stats.map(({value, title}) => <div key={value} className="flex flex-col gap-3">
        <h4 className="text-[32px] font-bold text-green15">{value}</h4>
        <span className="text-white text-base">{title}</span>
    </div>)
}
  </section>;
}

export default Stats;
