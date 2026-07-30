import EnergyInfrastructure from "../components/Services/ManagementTool/EnergyInfrastructure";
import Hero from "../components/Services/ManagementTool/Hero";
import ManagementSuite from "../components/Services/ManagementTool/ManagementSuite";
import ProvenImpact from "../components/Services/ManagementTool/ProvenImpact";
import SmartManagement from "../components/Services/ManagementTool/SmartManagement";

function ManagementTool() {
  return (
    <>
      <Hero />
      <ManagementSuite />
      <SmartManagement />
      <ProvenImpact />
      <EnergyInfrastructure />
    </>
  );
}

export default ManagementTool;
