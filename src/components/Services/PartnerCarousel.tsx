import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const logos = [
  "/amazon_logo.svg.png",
  "/teachers_pay_teachers__new_york_ny_logo.svg.png",
  "/tech_advisor_logo.svg.png",
  "/partner3.png",
  "/partner4.png",
  "/partner5.png",
   "/amazon_logo.svg.png",
  "/teachers_pay_teachers__new_york_ny_logo.svg.png",
  "/tech_advisor_logo.svg.png",
];

const PartnersCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full bg-white py-15 flex flex-col gap-8 px-5 sm:px-7 md:px-15">
      <h2 className=" text-center text-lg font-medium uppercase tracking-[0.2em] text-black/80 font-inria">
        TRUSTED BY ENERGY LEADERS ACROSS AFRICA
      </h2>

      <div className="mx-auto flex items-center gap-4 px-4 w-full">
        {/* Left Button */}
        <button
          onClick={scrollPrev}
          className="flex h-8 sm:h-10 w-8 sm:w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100"
        >
          <MdKeyboardArrowLeft className="w-6 h-6" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden flex-1" ref={emblaRef}>
          <div className="flex">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="min-w-50 px-2 sm:min-w-45 md:min-w-40 lg:min-w-40"
              >
                <div className="flex h-18 w-full items-center justify-center border border-slate-200 bg-white">
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="max-h-10 max-w-25 w-full h-full object-contain grayscale transition hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={scrollNext}
          className="flex h-8 sm:h-10 w-8 sm:w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100"
        >
          <MdKeyboardArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default PartnersCarousel;
