function CivilSociety() {
  return (
    <section className="px-5 sm:px-7 md:px-15 py-15 bg-green60 grid grid-cols-1 md:grid-cols-2 gap-7">
      <div className="flex flex-col gap-6 md:justify-center">
        <h2 className="text-white font-manrope text-xl sm:text-2xl font-medium">
          6. COMMUNITIES & CIVIL SOCIETY
        </h2>
        <p className="text-sm sm:text-base text-white font-manrope">
          We work with communities, civil-society organisations and local
          institutions to ensure that solutions are inclusive, locally relevant
          and capable of delivering tangible benefits to the people they are
          designed to serve.
        </p>
      </div>
      <img
        src="/civil-society.png"
        alt=""
        className="w-full h-full rounded-4xl"
      />
    </section>
  );
}

export default CivilSociety;
