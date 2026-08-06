const insights = [
    {title: 'Solar Energy', value : 23},
    {title: 'Wind Power', value : 32},
    {title: 'Policy & Regulation', value : 22},
    {title: 'Investment & Finance', value : 11 },
    {title: 'Grid Infrastructure', value : 3},
]

function SearchInsight() {
  return <div className="flex flex-col gap-6 p-5 lg:p-7.5 bg-white rounded-xl font-inter">
     <h3 className="text-lg sm:text-xl font-inria font-bold text-slate">Search Insights</h3>
     <div className="flex flex-col gap-5">
        {
          insights.map(({title, value}) => <div key={title} className="flex items-center justify-between">
            <h4 className="text-slate font-bold text-sm sm:text-base">{title}</h4>
            <span className="w-6 h-6 flex items-center justify-center border border-zinc text-xs font-bold text-slate50 rounded-full">{value}</span>
          </div>)
        }
     </div>
  </div>;
}

export default SearchInsight;
