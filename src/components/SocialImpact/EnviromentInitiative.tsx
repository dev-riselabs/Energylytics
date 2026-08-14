function EnviromentInitiative() {
  return (
    <section className="bg-zinc800 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-5">
      <div className="bg-green60 rounded-4xl p-7 sm:p-10 flex flex-col gap-7 md:col-start-1 md:col-span-3 md:row-start-1 md:z-10 md:self-center">
        <h3 className="text-white text-xl sm:text-2xl font-medium font-manrope">
          COMMUNITY ENVIRONMENTAL INITIATIVES
        </h3>

        <p className="text-base sm:text-xl text-white">
          We support community-led initiatives that promote cleaner
          neighbourhoods, responsible waste management, environmental
          restoration and climate resilience.
        </p>
      </div>

      <img
        src="/enviroment-initiative.png"
        alt=""
        className="rounded-4xl w-full md:col-start-3 md:col-span-3 md:row-start-1 md:h-104"
      />
    </section>
  );
}

export default EnviromentInitiative;
