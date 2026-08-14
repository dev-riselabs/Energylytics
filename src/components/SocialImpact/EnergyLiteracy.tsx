function EnergyLiteracy() {
  return (
    <section className="bg-zinc800 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-5">
      <img
        src="/energy-literacy.jpg"
        alt=""
        className="rounded-4xl w-full md:col-start-1 md:col-span-3 md:row-start-1 md:h-104"
      />
      <div className="bg-green60 rounded-4xl p-10 flex flex-col gap-7 md:col-start-3 md:col-span-3 md:row-start-1 md:z-10 md:self-center">
        <h3 className="text-white text-2xl font-medium font-manrope">
          ENERGY LITERACY & CONSUMER EMPOWERMENT
        </h3>

        <p className="text-xl text-white">
          We believe people should understand the energy they consume and have
          the knowledge required to make informed decisions. We support
          programmes that help households, young people and small businesses
          understand energy consumption, efficiency, electricity costs,
          renewable energy and their rights and responsibilities as energy
          consumers.
        </p>
      </div>
    </section>
  );
}

export default EnergyLiteracy;
