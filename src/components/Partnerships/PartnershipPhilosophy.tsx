function PartnershipPhilosophy() {
  return (
    <section className="px-5 sm:px-7 md:px-15 py-15 bg-zinc800 flex flex-col gap-8">
      <h4 className="text-slate font-manrope text-xl sm:text-2xl font-medium text-center">
        OUR PARTNERSHIP PHILOSOPHY
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex flex-col gap-1 font-manrope md:justify-center">
          <p className="text-base sm:text-xl text-slate50">
            We do not believe in partnerships for partnership's sake. We build
            collaborations around clearly defined challenges, complementary
            capabilities and measurable outcomes.
          </p>
          <p className="text-base sm:text-xl text-slate50 font-bold">
            Our approach is simple: Identify the challenge. Bring the right
            expertise together. Develop the right solution. Mobilise the
            resources required. Deliver measurable impact. Scale what works.
          </p>
          <p className="text-base sm:text-xl text-slate50">
            Partner with us to build smarter energy systems, stronger climate
            resilience and more sustainable infrastructure for Africa.
          </p>
        </div>
        <img src="/philosophy.png" alt="" className="rounded-4xl object-center object-cover h-full"/>
      </div>
    </section>
  );
}

export default PartnershipPhilosophy;
