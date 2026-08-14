type ArticleProps = {
    img: string;
    title: string;
    description: string;
    label: string;
    date: string;
    time: string;
}

function Article({img, title, description, label, date, time} : ArticleProps) {
  return <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-5 lg:gap-7.5 p-4 lg:p-7.5 rounded-2xl md:rounded-3xl bg-white">
    <img src={img} alt="" className="sm:col-span-1 rounded-xl object-cover w-full h-40 sm:h-full max-h-56 sm:max-h-50"/>
    <div className="sm:col-span-2 flex flex-col gap-3 sm:gap-2">
        <span className="text-green25 text-xs sm:text-[13px] font-bold">{label}</span>
        <div className="flex flex-col gap-4 sm:gap-5.5">
            <h5 className="text-base sm:text-lg md:text-xl font-medium text-slate50">{title}</h5>
            <p className="text-sm sm:text-base text-green25">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6.5 gap-y-1 text-slate200 font-sora font-light text-xs sm:text-sm">
            <span >{date}</span>
            <span>{time}</span>
        </div>
    </div>

  </div>;
}

export default Article;
