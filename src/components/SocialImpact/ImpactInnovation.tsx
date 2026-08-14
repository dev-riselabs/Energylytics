function ImpactInnovation() {
  return (
    <section className="bg-zinc800 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-5">
      <img
        src="/social-impact.png"
        alt=""
        className="rounded-4xl w-full md:col-start-1 md:col-span-3 md:row-start-1 md:h-104"
      />
      <div className="bg-green60 rounded-4xl p-10 flex flex-col gap-7 md:col-start-3 md:col-span-3 md:row-start-1 md:z-10 md:self-center">
        <h3 className="text-white text-2xl font-medium font-manrope">
          INNOVATION FOR SOCIAL IMPACT
        </h3>

        <p className="text-xl text-white">
          We believe technology should solve real problems. Through partnerships
          with young innovators, universities, startups and community
          organisations, we support the development and testing of solutions
          that address energy and environmental challenges at the local level.
        </p>
      </div>
    </section>
  );
}

export default ImpactInnovation;
