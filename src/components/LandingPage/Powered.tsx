function Powered() {
  return (
    <section className="py-12 md:py-20 px-5 sm:px-7 md:px-10 lg:px-15 font-inter">
      <div className="min-h-64 md:h-75 rounded-3xl md:rounded-4xl flex items-center justify-center gap-6 data-bg relative overflow-hidden p-6 sm:p-8 md:p-4">
        <div className="absolute inset-0 bg-linear-to-r from-green/90 via-green/90 to-green/90"></div>
        <div className="flex flex-col gap-5 md:gap-7.5 items-center relative z-2">
          <h3 className="text-white font-bold text-sm sm:text-[15px] text-center">
            Powered by Data & Intelligence
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-[50ch] text-center">
            We use analytics, AI and education to drive the shift toward clean,
            affordable and reliable energy for all.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Powered;
