import Accent from "../components/Services/Service/Accent";
import AdvisoryPolicy from "../components/Services/Service/AdvisoryPolicy";
import CapacityBuilding from "../components/Services/Service/CapacityBuilding";
import CircularEconomy from "../components/Services/Service/CircularEconomy";
import ClimateIntelligence from "../components/Services/Service/ClimateIntelligence";
import EnergyIntelligence from "../components/Services/Service/EnergyIntelligence";
import EnergyOptimisation from "../components/Services/Service/EnergyOptimisation";
import EnvironmentalInfrastructure from "../components/Services/Service/EnvironmentalInfrastructure";
import Hero from "../components/Services/Service/Hero";
import InvestmentAdvisory from "../components/Services/Service/InvestmentAdvisory";
import RenewableSolution from "../components/Services/Service/RenewableSolution";

function Services() {
  return (
    <>
      <Hero />
      <Accent />
      <EnergyIntelligence />
      <EnergyOptimisation />
      <RenewableSolution />
      <ClimateIntelligence/>
      <CircularEconomy/>
      <EnvironmentalInfrastructure/>
      <AdvisoryPolicy/>
      <InvestmentAdvisory/>
      <CapacityBuilding/>
    </>
  );
}

export default Services;
