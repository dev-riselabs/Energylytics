import { Link } from "react-router";

function ReadySection() {
  return (
    // <section className="py-20 px-5 sm:px-7 md:px-15 font-inter">
    //   <div className="h-75 rounded-4xl flex items-center justify-center gap-6 build-bg relative overflow-hidden px-4">
    //     <div className="absolute inset-0 bg-[#125749E8]"></div>
    //     <div className="flex flex-col gap-7.5 items-center relative z-2">
    //       <h3 className="text-white font-bold text-[15px]">
    //         Ready to Power the Future?
    //       </h3>
    //       <p className="text-lg sm:text-xl text-white text-center max-w-[60ch]">
    //         Whether you are an investor looking for opportunities or a
    //         government entity planning infrastructure, our data lights the way
    //       </p>
    //       <div className="flex items-center gap-4 max-w-190 w-full">
    //         <button className="w-full h-13 flex items-center justify-center text-sm font-bold font-dmSans cursor-pointer text-white bg-green25 rounded-md hover:border hover:border-green25 hover:text-green25 hover:bg-white transition-all">
    //           Contact Us
    //         </button>
    //         <button className="w-full h-13 flex items-center justify-center text-sm font-bold font-dmSans rounded-md border border-green30 bg-white text-green  hover:bg-green25 hover:text-white transition-all cursor-pointer">
    //           View Services
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-zinc300 px-5 sm:px-7 md:px-10 lg:px-15 py-12 md:py-15 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
      <div className="flex flex-col gap-4 items-center md:col-span-2 md:justify-center">
        <h3 className="text-white text-xl sm:text-2xl font-manrope text-center">Ready to Power the Future?</h3>
        <p className="text-base sm:text-lg md:text-xl text-white text-center">Whether you are an investor looking for opportunities or a government entity planning infrastructure, our data lights the way</p>
        <div className="flex items-center gap-3 sm:gap-5 md:gap-7.5 w-full">
          <Link to='/contact-us' className="px-3 sm:px-5 py-2 sm:py-3 flex-1 flex items-center justify-center rounded-lg sm:rounded-xl border border-green bg-green25 text-white text-xs sm:text-sm font-bold font-dmSans whitespace-nowrap hover:bg-transparent hover:text-white transition-all cursor-pointer">
            Contact Us
          </Link>
          <Link to='/services' className="px-3 sm:px-5 py-2 sm:py-3 flex-1 flex items-center justify-center rounded-lg sm:rounded-xl border border-green30 bg-white text-green text-xs sm:text-sm font-bold font-dmSans whitespace-nowrap hover:bg-green25 hover:text-white transition-all cursor-pointer">
           View Services
          </Link>

        </div>
      </div>
      <img src="/about-power-img.jpg" alt="" className="md:col-span-3 w-full h-64 sm:h-80 md:h-125 rounded-3xl object-cover" />


    </section>
  );
}

export default ReadySection;
