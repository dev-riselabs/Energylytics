import CommunityStory from "../components/Services/EducationPaltform/CommunityStory";
import EventWorkshop from "../components/Services/EducationPaltform/EventWorkshop";
import Hero from "../components/Services/EducationPaltform/Hero";
import PlaformTemplate from "../components/Services/EducationPaltform/PlaformTemplate";
import WhoPlatformFor from "../components/Services/EducationPaltform/WhoPlatformFor";
import WhyJoin from "../components/Services/EducationPaltform/WhyJoin";
import Strategy from "../components/Services/Strategy";

function EducationPlatform() {
  return (
    <>
      <Hero />
      
      <WhyJoin />
      <EventWorkshop />
      <div className="bg-white px-5 sm:px-7 md:px-10 lg:px-20 py-10 md:py-15">
        <PlaformTemplate
          label1="EDUCATION"
          label2="CERTIFICATION"
          title="The Learning Hub"
          btn="Start Learning"
          img="/learning-hub.png"
          order={2}
          description="Master the fundamentals of energy markets at your own pace. Our learning hub offers digital tracks covering Energy Policy, Market Analytics and Sustainable Investment Strategies."
        />
      </div>
      <div className="bg-zinc600 px-5 sm:px-7 md:px-10 lg:px-20 py-10 md:py-15">
        <PlaformTemplate
          label1="PUBLICATIONS"
          label2="INSIGHTS"
          title="Research & Advocacy Platform"
          btn="Read Articles"
          img="/research-advocacy.jpg"
          order={1}
          description="Dive into our article and blog platform for expert opinions, or access our library of deep-dive research publications that influence policy and investment decisions."
        />
      </div>
      <WhoPlatformFor />
      <CommunityStory />
      <Strategy
        title="Ready to Advance Your Impact?"
        description="Join over 2,000 professionals utilizing our platform for learning, research and advocacy. "
        btn1="Join Platform"
        btn2="View Features"
      />
    </>
  );
}

export default EducationPlatform;
