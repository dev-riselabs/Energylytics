import PlaformTemplate from "./PlaformTemplate";

function EventWorkshop() {
  return (
    <div className="flex flex-col gap-8 px-5 sm:px-10 md:px-20 py-15 items-center bg-zinc600">
      <h3 className="text-center text-2xl font-medium text-slate">
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
