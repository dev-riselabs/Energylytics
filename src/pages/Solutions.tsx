import AdvocacyPlatform from "../components/Services/Solution/AdvocacyPlatform";
import EnergyInsight from "../components/Services/Solution/EnergyInsight";
import RenewableEnergy from "../components/Services/Solution/RenewableEnergy";
import ServiceNavigation from "../components/Services/Solution/ServiceNavigation";
import SmartEnergy from "../components/Services/Solution/SmartEnergy";
import Stats from "../components/Services/Solution/Stats";
import Strategy from "../components/Services/Strategy";

function Solutions() {
  return (
    <>
      <RenewableEnergy />
      <Stats />
      <ServiceNavigation />
      <EnergyInsight />
      <SmartEnergy />
      <AdvocacyPlatform />
      <Strategy />
    </>
  );
}

export default Solutions;
