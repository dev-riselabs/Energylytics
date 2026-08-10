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
    title: "INTELLIGENCE",
    subtitle: "Data, AI & Digital Intelligence",
    description:
      "We leverage energy, environmental and climate data, artificial intelligence, geospatial intelligence and advanced analytics to transform complex information into actionable insights for households, businesses, governments and investors.",
    icon: BiCoinStack,
  },
  {
    title: "ENERGY & ENVIRONMENTAL TRANSFORMATION",
    subtitle: "Clean Energy, Climate & Sustainable Infrastructure",
    description:
      "We develop and support innovative solutions across renewable and clean energy, energy access, climate resilience, circular economy, waste-to-value and environmental infrastructure, turning intelligence into practical, scalable solutions.",
    icon: HiOutlineCpuChip,
  },
  {
    title: "KNOWLEDGE & CAPACITY",
    subtitle: "Research, Policy & Human Capital",
    description:
      "We build the knowledge, skills, partnerships and institutional capabilities required to accelerate Africa's energy and sustainability transition through research, policy intelligence, training, knowledge platforms and strategic collaboration.",
    icon: LuGraduationCap,
  },
];

function Homepage() {
  return (
    <>
      <Hero />
      <AccentFeature
        // title="Building Intelligence for Africa’s Energy Future"
        title=""
        label="About Us"
        // description="Energylytics is more than a tech company we're building the intelligence that powers Africa's renewable energy revolution."
        description="Nigeria's future will be shaped by the quality of its energy systems, the resilience of its environmental/climate infrastructure and the intelligence with which it manages its natural resources."
        features={featuresAbout}
        isColored
      />
      {/* <StackSection index={3} className="bg-white">
      <CompanyProfile />
      </StackSection> */}
      <AccentFeature
        title="Three Core Pillars"
        label="Our Approach"
        description="Our integrated approach combines cutting-edge technology, data intelligence and human capacity building."
        features={featuresApproach}
      />
      <Powered />
      <FocusArea />
      <Approach />
      <ImpactFocus />
      <Build />
      <Partnership />
      <Insight />
    </>
  );
}

export default Homepage;
