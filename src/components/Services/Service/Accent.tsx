function Accent() {
  return (
    <section className="bg-green60 px-5 sm:px-7 md:px-15 py-15 grid grid-cols-1 md:grid-cols-2 gap-5">
      <img src="/accent-service-img.jpg" alt="" className="rounded-4xl" />
      <div className="flex flex-col gap-2.5 md:justify-center">
        <p className="text-xl text-white">
          Energylytics Africa combines data, artificial intelligence, energy
          expertise and environmental intelligence to help individuals,
          businesses, governments and development partners understand complex
          energy and environmental systems, make better decisions and develop
          sustainable solutions.
        </p>
        <p className="text-xl text-white">
          Our services span the full spectrum from data and intelligence to
          strategy, project development and implementation.
        </p>
      </div>
    </section>
  );
}

export default Accent;
