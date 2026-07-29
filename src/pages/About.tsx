import { LuEye, LuTarget } from "react-icons/lu";
import RenewableFuture from "../components/About/RenewableFuture";
import Vision from "../components/About/Vision";
import CoreValues from "../components/About/CoreValues";
import ReadySection from "../components/About/ReadySection";
import Expert from "../components/About/Expert";

const featuresAbout = [
  {
    title: "Our Mission",
    description:
      "To leverage data and artificial intelligence to transform how Africa produces, manages and consumes energy, creating equitable access to power for all.",
    icon: LuTarget,
  },
  {
    title: "Our Vision",
    description:
      "To become Africa’s leading intelligence hub for clean energy innovation, policy influence and sustainable power management.",
    icon: LuEye,
  },
];

function About() {
  return (
    <>
      <RenewableFuture />
      <Vision features={featuresAbout} />
      <CoreValues />
      <ReadySection />
      <Expert />
    </>
  );
}

export default About;
