import DataDrive from "../components/Services/EnergyPlatform/DataDrive";
import Hero from "../components/Services/EnergyPlatform/Hero";
import Optimize from "../components/Services/EnergyPlatform/Optimize";
import PlatformCapability from "../components/Services/EnergyPlatform/PlatformCapability";
import WhyEnergylytics from "../components/Services/EnergyPlatform/WhyEnergylytics";

function EnergyPlatform() {
  return (
    <>
      <Hero />
      <PlatformCapability />
      <DataDrive />
      <WhyEnergylytics />
      <Optimize />
    </>
  );
}

export default EnergyPlatform;
