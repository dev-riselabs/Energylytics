function Philosophy() {
  return (
    <section className="bg-zinc200 px-5 sm:px-7 md:px-15 py-10 sm:py-15 md:py-20">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 items-center">
        <h2 className="text-slate text-xl sm:text-2xl md:text-3xl font-bold text-center">
          OUR PARTNERSHIP PHILOSOPHY
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-15 max-w-[1200px] items-center">
          {/* Content */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center">
            <p className="text-slate50 text-sm sm:text-base md:text-lg leading-relaxed">
              We don't just collaborate; we co-create. Our partnerships are built
              on deep mutual respect, shared values and real collaboration. Whether
              we're co-designing policy with government, optimizing assets with the
              private sector, deploying community projects with donors or building
              analytical tools with researchers, we listen, we adapt and we
              deliver.
            </p>
            <p className="text-slate50 text-sm sm:text-base md:text-lg leading-relaxed">
              Our approach is simple: identify the challenge, bring the right
              expertise together, leverage the best available data and
              technology, implement sustainable solutions that work in the African
              context.
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[250px] sm:h-[350px] lg:h-auto lg:min-h-[350px]">
            <img
              src="/partnership1.png"
              alt="Partnership philosophy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg max-w-[900px] w-full">
          <p className="text-slate text-sm sm:text-base md:text-lg text-center leading-relaxed">
            Interested in building a partnership with us? Whether you represent
            government, business, a development organization, a research
            institution or a community group, we'd love to hear from you.
          </p>
          <div className="flex justify-center mt-6 sm:mt-8">
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-green25 text-white text-sm sm:text-base font-bold font-dmSans hover:bg-green transition-all cursor-pointer">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
