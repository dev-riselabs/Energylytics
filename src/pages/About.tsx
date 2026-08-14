// import { LuEye, LuTarget } from "react-icons/lu";
import RenewableFuture from "../components/About/RenewableFuture";
import Vision from "../components/About/Vision";
import CoreValues from "../components/About/CoreValues";
import ReadySection from "../components/About/ReadySection";
import Expert from "../components/About/Expert";

// const featuresAbout = [
//   {
//     title: "Our Mission",
//     description:
//       // "To leverage data and artificial intelligence to transform how Africa produces, manages and consumes energy, creating equitable access to power for all.",
//       "To utilize data, artificial intelligence, clean energy and environmental innovation to make energy systems smarter, more accessible and sustainable, while helping Nigeria and the rest of Africa become resilient economies and infrastructure for the future.",
//     icon: LuTarget,
//   },
//   {
//     title: "Our Vision",
//     description:
//       // "To become Africa’s leading intelligence hub for clean energy innovation, policy influence and sustainable power management.",
//       "To become Africa’s leading platform for clean energy intelligence, climate innovation, waste-to- value and sustainable infrastructure, driving smarter decisions, accelerating the energy transition and enabling a more resilient and sustainable Africa.",
//     icon: LuEye,
//   },
// ];

function About() {
  return (
    <>
      <RenewableFuture />
      <Vision  />
      <CoreValues />
      <ReadySection />
      <Expert />
    </>
  );
}

export default About;
