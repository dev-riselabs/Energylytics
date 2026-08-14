import CivilSociety from "../components/Partnerships/CivilSociety";
import FinancePartner from "../components/Partnerships/FinancePartner";
import Hero from "../components/Partnerships/Hero";
import InnovationPartner from "../components/Partnerships/InnovationPartner";
import KnowledgePartner from "../components/Partnerships/KnowledgePartner";
import PartnershipPhilosophy from "../components/Partnerships/PartnershipPhilosophy";
import PrivateIndustry from "../components/Partnerships/PrivateIndustry";
import PublicInstitution from "../components/Partnerships/PublicInstitution";

function Partnerships() {
  return (
    <>
      <Hero />
      <PublicInstitution />
      <PrivateIndustry />
      <FinancePartner />
      <KnowledgePartner />
      <InnovationPartner />
      <CivilSociety />
      <PartnershipPhilosophy/>
    </>
  );
}

export default Partnerships;
