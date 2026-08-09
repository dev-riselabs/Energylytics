import { LuEye, LuGraduationCap, LuTarget } from "react-icons/lu";
import AccentFeature from "../components/LandingPage/AccentFeature";
import Hero from "../components/LandingPage/Hero";
import { BiCoinStack } from "react-icons/bi";
import Powered from "../components/LandingPage/Powered";
import FocusArea from "../components/LandingPage/FocusArea";
import Approach from "../components/LandingPage/Approach";
import ImpactFocus from "../components/LandingPage/ImpactFocus";
import { HiOutlineCpuChip } from "react-icons/hi2";
import Build from "../components/LandingPage/Build";
import Partnership from "../components/LandingPage/Partnership";
import Insight from "../components/LandingPage/Insight";
import StackSection from "../components/animations/Stack";

const featuresAbout = [
  {
    title: "Our Mission",
    description:
      // "To leverage data and artificial intelligence to transform how Africa produces, manages and consumes energy, creating equitable access to power for all.",
      "To utilize data, artificial intelligence, clean energy and environmental innovation to make energy systems smarter, more accessible and sustainable, while helping Nigeria and the rest of Africa become resilient economies and infrastructure for the future.",
    icon: LuTarget,
  },
  {
    title: "Our Vision",
    description:
      // "To become Africa’s leading intelligence hub for clean energy innovation, policy influence and sustainable power management.",
      "To become Africa’s leading platform for clean energy intelligence, climate innovation, waste-to- value and sustainable infrastructure, driving smarter decisions, accelerating the energy transition and enabling a more resilient and sustainable Africa.",
    icon: LuEye,
  },
];

const featuresApproach = [
  {
    title: "Data-Driven, AI Powered Energy Platform",
    description:
      "Providing real-time insights on energy generation, distribution, and consumption through advanced analytics and predictive modelling.",
    icon: BiCoinStack,
  },
  {
    title: "AI-Powered Energy Management Tool",
    description:
      "Leveraging machine learning to optimize energy efficiency, detect anomalies, reduce waste, and improve grid performance.",
    icon: HiOutlineCpuChip,
  },
  {
    title: "Education and Advocacy Initiative",
    description:
      "Building awareness, technical capacity and public understanding of renewable energy through learning programs, campaigns, and partnerships.",
    icon: LuGraduationCap,
  },
];

function Homepage() {
  return (
    <>
      <StackSection index={1} className="">
        <Hero />
      </StackSection>
      <StackSection index={2} className="">
        <AccentFeature
          title="Building Intelligence for Africa’s Energy Future"
          label="About Us"
          // description="Energylytics is more than a tech company we're building the intelligence that powers Africa's renewable energy revolution."
          description="Nigeria's future will be shaped by the quality of its energy systems, the resilience of its environmental/climate infrastructure and the intelligence with which it manages its natural resources."
          features={featuresAbout}
          isColored
        />
      </StackSection>
      {/* <StackSection index={3} className="bg-white">
      <CompanyProfile />
      </StackSection> */}
      <StackSection index={3} className="">
        <AccentFeature
          title="Three Core Pillars"
          label="Our Approach"
          description="Our integrated approach combines cutting-edge technology, data intelligence and human capacity building."
          features={featuresApproach}
        />
      </StackSection>
      <StackSection index={4} className="bg-white">
        <Powered />
      </StackSection>
      <StackSection index={5} className="">
        <FocusArea />
        <Approach />
        <ImpactFocus />
        <Build />
        <Partnership />
        <Insight />
      </StackSection>
    </>
  );
}

export default Homepage;
