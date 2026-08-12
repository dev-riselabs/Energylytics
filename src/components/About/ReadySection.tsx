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
    <section className="bg-zinc300 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-5 gap-10">
      <div className="flex flex-col gap-4 items-center md:col-span-2 md:justify-center">
        <h3 className="text-white text-2xl font-manrope">Ready to Power the Future?</h3>
        <p className="text-xl text-white text-center">Whether you are an investor looking for opportunities or a government entity planning infrastructure, our data lights the way</p>
        <div className="flex items-center gap-7.5 w-full">
          <button className="px-5 py-3 flex-1 rounded-xl border border-green bg-green25 text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-white transition-all cursor-pointer">
            Contact Us
          </button>
          <button className="px-5 py-3 flex-1 rounded-xl border border-green30 bg-white text-green text-sm font-bold font-dmSans hover:bg-green25 hover:text-white transition-all cursor-pointer">
           View Services
          </button>
          
        </div>
      </div>
      <img src="/about-power-img.jpg" alt="" className="md:col-span-3 h-[500px] rounded-3xl object-cover" />


    </section>
  );
}

export default ReadySection;
