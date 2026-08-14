import { FaGlobeAfrica } from "react-icons/fa";

type SolutionProps = {
  accent: boolean;
  position: number;
  title: string;
  descriptions: string[];
  order : number;
  img : string;
};

function Solution({ accent, position, title, descriptions, order, img }: SolutionProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 px-5 sm:px-7 md:px-10 lg:px-15 py-10 md:py-15 ${accent ? "bg-green60" : "bg-zinc800"}`}
    >
      <img src={img} alt="" className={`${order === 2 ? 'md:order-2' : ''} rounded-3xl md:rounded-4xl h-64 sm:h-80 md:h-103 w-full object-cover`}/>
      <div className="flex flex-col gap-5 md:gap-6 justify-center">
        <div className="bg-green45 rounded-full py-2 px-4 sm:px-5 flex items-center gap-2 text-xs sm:text-[13px] font-bold font-manrope text-green25 self-start">
          <FaGlobeAfrica className="w-5 h-5 sm:w-6 sm:h-6" />
          Solution {position}
        </div>
        <div className="flex flex-col gap-5 md:gap-6">
          <h3 className={`text-xl md:text-2xl font-manrope font-medium ${accent ? 'text-white' : 'text-slate'}`}>
            {title}
          </h3>
          <div className="flex flex-col gap-2.5">
            {descriptions.map((description, i) => (
              <p key={i} className={`text-base sm:text-lg md:text-xl font-manrope ${accent ? 'text-white' : 'text-slate'}`}>
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
