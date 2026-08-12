function Build() {
  return <section className="py-20 px-5 sm:px-7 md:px-15 font-inter bg-zinc800 grid grid-cols-1 md:grid-cols-5 gap-10 ">
        <div className="flex flex-col gap-7.5 items-center relative md:justify-center md:col-span-2">
          <h3 className="text-slate font-bold text-2xl font-manrope">
            Let's Build Together
          </h3>
          <p className="text-lg sm:text-xl text-green60 text-center">
            Join us in building the intelligence layer for Africa's clean energy transition.
          </p>
          <button className="max-w-80 w-full h-13 flex items-center justify-center text-sm font-bold font-dmSans cursor-pointer text-white bg-green25 rounded-md hover:border hover:border-green25 hover:text-green25 hover:bg-white transition-all">Explore Our Work</button>
        </div>
        <img src="/build-img.png" alt="" className="md:col-span-3 rounded-3xl w-full h-[500px]"/>
    </section>;
}

export default Build;
