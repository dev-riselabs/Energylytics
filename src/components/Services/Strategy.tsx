type StrategyProps = {
  title: string;
  description: string;
  btn1: string;
  btn2: string;
};

function Strategy({ title, description, btn1, btn2 }: StrategyProps) {
  return (
    <section className="py-20 px-5 sm:px-7 md:px-15 font-inter">
      <div className="h-75 rounded-4xl flex items-center justify-center gap-6 build-bg relative overflow-hidden p-4">
        <div className="absolute inset-0 bg-[#125749E8]"></div>
        <div className="flex flex-col gap-7.5 items-center relative z-2">
          <h3 className="text-white font-bold text-[15px]">{title}</h3>
          <p className="text-lg sm:text-xl text-white text-center max-w-[75ch]">{description}</p>
          <div className="flex items-center gap-4 max-w-190 w-full">
            <button className="w-full h-13 flex items-center justify-center text-sm font-bold font-dmSans cursor-pointer text-white bg-green25 rounded-md hover:border hover:border-green25 hover:text-green25 hover:bg-white transition-all">
              {btn1}
            </button>
            <button className="w-full h-13 flex items-center justify-center text-sm font-bold font-dmSans rounded-md border border-green30 bg-white text-green  hover:bg-green25 hover:text-white transition-all cursor-pointer">
              {btn2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strategy;
