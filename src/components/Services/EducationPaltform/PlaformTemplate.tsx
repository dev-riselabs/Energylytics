type Props = {
    label1: string;
    label2: string;
    title : string;
    description: string;
    btn: string;
    img : string;
    order : number;
}

function PlaformTemplate({label1, label2, title, description, btn, img, order} : Props) {
  return <section className="grid grid-cols-1 gap-6 md:gap-5 md:grid-cols-2">
    <img src={img} alt={title} className={`h-64 sm:h-80 md:h-auto object-cover w-full rounded-2xl self-center ${order ===1 ? '' : 'md:order-2'}`} />
    <div className="flex flex-col gap-6 md:gap-7.5 justify-center">
        <div className="flex flex-col gap-4 md:gap-5">
            <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-purple px-3 sm:px-4 py-2 rounded-sm text-xs font-bold text-purple10">{label1}</div>
                <div className="bg-brown px-3 sm:px-4 py-2 rounded-sm text-xs font-bold text-brown10">{label2}</div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
                <h4 className="text-lg sm:text-xl font-medium text-slate60">{title}</h4>
                <p className="text-sm sm:text-base text-slate50">{description}</p>
            </div>
        </div>
        <button className="py-3 sm:py-4 w-full sm:w-50 bg-green25 font-dmSans text-xs sm:text-sm font-bold text-white border border-green25 rounded-md hover:bg-white hover:text-green25 transition-all cursor-pointer">{btn}</button>

    </div>

  </section>;
}

export default PlaformTemplate;
