import DataDrive from "../components/Services/EnergyPlatform/DataDrive";
import Hero from "../components/Services/EnergyPlatform/Hero";

import PlatformCapability from "../components/Services/EnergyPlatform/PlatformCapability";
import WhyEnergylytics from "../components/Services/EnergyPlatform/WhyEnergylytics";
import PartnersCarousel from "../components/Services/PartnerCarousel";
import Strategy from "../components/Services/Strategy";

function EnergyPlatform() {
  return (
    <>
      <Hero />
      <PartnersCarousel />
      <PlatformCapability />
      <DataDrive />
      <WhyEnergylytics />
      <Strategy
        title="Ready to optimize your assets?"
        description="Join the leading renewable energy producers in Africa. Schedule a personalized demo of the Energy Insights Platform today."
        btn1="Request a Demo"
        btn2="Contact Sales"
      />
    </>
  );
}

export default EnergyPlatform;
