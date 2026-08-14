function EnergyAccess() {
  return (
   <section className="bg-zinc800 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-5">
  <div className="bg-green60 rounded-4xl p-7  sm:p-10 flex flex-col gap-7 md:col-start-1 md:col-span-3 md:row-start-1 md:z-10 md:self-center">
    <h3 className="text-white text-xl sm:text-2xl font-medium font-manrope">
      ENERGY ACCESS & COMMUNITY POWER
    </h3>

    <p className="text-base sm:text-xl text-white">
      We support initiatives that expand access to clean, reliable and
      affordable energy for underserved communities, schools, healthcare
      facilities, businesses and social institutions. Where appropriate, our
      community programmes may include renewable-energy installations,
      energy-efficiency interventions and energy-literacy initiatives.
    </p>
  </div>

  <img
    src="/energy-access.png"
    alt=""
    className="rounded-4xl w-full h-full md:col-start-3 md:col-span-3 md:row-start-1 md:min-h-104"
  />
</section>
  );
}

export default EnergyAccess;
