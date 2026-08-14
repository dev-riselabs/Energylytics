function InnovationPartner() {
  return (
    <section id='technology' className="px-5 sm:px-7 md:px-15 py-15 bg-green60 grid grid-cols-1 md:grid-cols-2 gap-7">
      <img
        src="/innovation-partner.jpg"
        alt=""
        className="w-full h-full rounded-4xl"
      />
      <div className="flex flex-col gap-6 md:justify-center">
        <h2 className="text-white font-manrope text-xl sm:text-2xl font-medium">
          5. TECHNOLOGY & INNOVATION PARTNERS
        </h2>
        <p className="text-sm sm:text-base text-white font-manrope">
          We partner with technology companies, startups, engineering firms and
          solution providers to bring proven and emerging technologies into
          African energy and environmental markets.
        </p>
      </div>
    </section>
  );
}

export default InnovationPartner;
