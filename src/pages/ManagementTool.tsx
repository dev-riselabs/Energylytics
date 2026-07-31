import Hero from "../components/Services/ManagementTool/Hero";
import ManagementSuite from "../components/Services/ManagementTool/ManagementSuite";
import ProvenImpact from "../components/Services/ManagementTool/ProvenImpact";
import SmartManagement from "../components/Services/ManagementTool/SmartManagement";
import Strategy from "../components/Services/Strategy";

function ManagementTool() {
  return (
    <>
      <Hero />
      <ManagementSuite />
      <SmartManagement />
      <ProvenImpact />
      <Strategy
        title="Ready to optimize your energy Infrastructure?"
        description="Join the energy revolution. Schedule a consultation with our smart energy specialists today and see how much you can save."
        btn1="Schedule Consultation"
        btn2="Request a Demo"
      />
    </>
  );
}

export default ManagementTool;
