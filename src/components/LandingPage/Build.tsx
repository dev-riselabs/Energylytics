function Build() {
  return <section className="py-20 px-5 sm:px-7 md:px-15 font-inter bg-white">
      <div className="h-75 rounded-4xl flex items-center justify-center gap-6 build-bg relative px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#125749E8]"></div>
        <div className="flex flex-col gap-7.5 items-center relative z-2">
          <h3 className="text-white font-bold text-[15px]">
            Let's Build Together
          </h3>
          <p className="text-lg sm:text-xl text-white text-center">
            Join us in building the intelligence layer for Africa's clean energy transition.
          </p>
          <button className="max-w-80 w-full h-13 flex items-center justify-center text-sm font-bold font-dmSans cursor-pointer text-white bg-green25 rounded-md hover:border hover:border-green25 hover:text-green25 hover:bg-white transition-all">Explore Our Work</button>
        </div>
      </div>
    </section>;
}

export default Build;
