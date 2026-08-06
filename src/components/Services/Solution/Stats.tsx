const stats = [
    {value : '50+', title : 'Projects Analyzed'},
    {value : '12', title : 'Countries Covered'},
    {value : '1.2GW', title : 'Potential Mapped'},
    {value : '500+', title : 'Graduates Trained'},
]

function Stats() {
  return <section className="px-5 sm:px-7 md:px-15 py-10 bg-slate60 grid grid-cols-2 sm:grid-cols-4 gap-4">

{
    stats.map(({value, title}) => <div key={value} className="flex flex-col gap-3">
        <h4 className="text-3xl sm:text-[32px] font-bold text-green15">{value}</h4>
        <span className="text-white text-sm sm:text-base">{title}</span>
    </div>)
}
  </section>;
}

export default Stats;
