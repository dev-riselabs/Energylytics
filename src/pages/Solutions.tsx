// import AdvocacyPlatform from "../components/Services/Solution/AdvocacyPlatform";
// import EnergyInsight from "../components/Services/Solution/EnergyInsight";
// import RenewableEnergy from "../components/Services/Solution/RenewableEnergy";
// import ServiceNavigation from "../components/Services/Solution/ServiceNavigation";
// import SmartEnergy from "../components/Services/Solution/SmartEnergy";
// import Stats from "../components/Services/Solution/Stats";
// import Strategy from "../components/Services/Strategy";
import DataImpact from "../components/Services/Solution/DataImpact";
import Hero from "../components/Services/Solution/Hero";
import Quote from "../components/Services/Solution/Quote";
import Solution from "../components/Services/Solution/Solution";

const solutions = [
  {
    accent: false,
  position: 1,
  title: 'ENERGY INTELLIGENCE SOLUTIONS',
  descriptions: [
    'We develop digital tools and intelligence platforms that help individuals, businesses, utilities and governments understand energy consumption, demand, performance and cost.','Our solutions enable users to measure energy use, identify inefficiencies, assess energy needs, make informed decisions and engage more effectively with energy providers, regulators and policymakers.'
  ],
  order : 1,
  img : '/solution1.jpg',
  },
  {
    accent: false,
  position: 2,
  title: 'AI-POWERED ENERGY SOLUTIONS',
  descriptions: [
    'We apply artificial intelligence and advanced analytics to improve energy forecasting, optimisation, efficiency and infrastructure performance. From energy-demand forecasting and renewable-energy optimisation to predictive maintenance and intelligent energy management, our solutions help make energy systems smarter, more efficient and more reliable.'
  ],
  order : 2,
  img : '/solution2.jpg',
  },
  {
    accent: true,
  position: 3,
  title: 'RENEWABLE & CLEAN ENERGY SOLUTIONS',
  descriptions: [
    "We support the development and deployment of renewable and clean-energy solutions that expand energy access and accelerate Africa's energy transition.",'Our solutions include renewable-energy systems, distributed energy, mini-grids, rural electrification, energy-efficiency solutions, biomass, biogas and other emerging clean-energy technologies.'
  ],
  order : 1,
  img : '/solution3.jpg',
  },
  {
    accent: true,
  position: 4,
  title: 'CLIMATE & ENVIRONMENTAL INTELLIGENCE SOLUTIONS',
  descriptions: [
'We use data, AI, geospatial intelligence and environmental science to help organisations understand climate and environmental risks and make better decisions. Our solutions support climate resilience, environmental monitoring, carbon intelligence, sustainability measurement and intelligent environmental management.'
  ],
  order : 2,
  img : '/solution4.png',
  },
  {
    accent: false,
  position: 5,
  title: 'CIRCULAR ECONOMY & WASTE-TO-VALUE SOLUTIONS',
  descriptions: [
    "We help transform waste from an environmental liability into a source of energy, materials and economic value. Our solutions include waste-resource mapping, recycling and recovery systems, organic-waste conversion, biomass, biogas, waste-to-energy and other circular-economy applications."
  ],
  order : 1,
  img : '/solution5.jpg',
  },
  {
    accent: false,
  position: 6,
  title: 'SUSTAINABLE INFRASTRUCTURE SOLUTIONS',
  descriptions: [
    "We help governments, businesses and development partners identify, design and develop sustainable energy and environmental infrastructure. We combine intelligence, technology, project development and strategic partnerships to move solutions from concept to implementation."
  ],
  order : 2,
  img : '/solution6.png',
  },
]

function Solutions() {
  return (
    <>
      <Hero />
      <Quote />
      {
        solutions.map(solution => <Solution {...solution}/>)
      }
      <DataImpact/>
      {/* <RenewableEnergy />
      <Stats />
      <ServiceNavigation /> 
      <EnergyInsight />
      <SmartEnergy />
      <AdvocacyPlatform />
      <Strategy title='Ready to transform your energy strategy?' description="Join the leading organizations using Energylytics Africa to power the continent’s green transition." btn1="Get Started Now" btn2="Contact Sales" /> */}
    </>
  );
}

export default Solutions;
