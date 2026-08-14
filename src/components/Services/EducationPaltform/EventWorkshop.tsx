import PlaformTemplate from "./PlaformTemplate";

function EventWorkshop() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 px-5 sm:px-7 md:px-10 lg:px-15 py-10 md:py-15 items-center bg-zinc600">
      <h3 className="text-center text-xl sm:text-2xl font-medium text-slate">
        Explore the Platform
      </h3>
      <PlaformTemplate
        label1="NETWORKING"
        label2="LIVE EVENTS"
        title="Event & Workshop Listings"
        btn="View Calendar"
        img="/event-listing.png"
        order={1}
        description="Stay connected with the heartbeat of the industry. Browse our curated calendar of in-person workshops, webinars and major energy conferences across the continent."
      />
    </div>
  );
}

export default EventWorkshop;
