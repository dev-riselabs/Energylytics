import Article from "../components/Blog/Article";
import Featured from "../components/Blog/Featured";
import Pagination from "../components/Blog/Pagination";
import Search from "../components/Blog/Search";
import SearchInsight from "../components/Blog/SearchInsight";
import WeeklyIntelligence from "../components/Blog/WeeklyIntelligence";

function Blog() {
  return (
    <div className="bg-zinc900 grid grid-cols-1 md:grid-cols-3 gap-5 px-5 sm:px-10 md:px-20 py-20">
      <div className="md:col-span-2 flex flex-col gap-7">
        <div className="flex flex-col gap-6.5">
          <h1 className="text-[32px] text-slate font-bold">
            Energy Intelligence Insights
          </h1>
          <p className="text-xl text-slate">
            Leading analysis on renewable energy trends, policy and investment
            across Africa. Stay ahead of the transition.
          </p>
        </div>
        <Featured />
        <div className="flex flex-col gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <Article
              key={i}
              img="/insight.jpg"
              time="8 min read"
              date="Oct 20, 2023"
              label="THE CHALLENGE"
              description="An in-depth look at new wind farm projects along the Swahili cost and their impact on the national grid stability."
              title="Harnessing the Trade Winds: Kenya’s Costal Potential"
            />
          ))}
        </div>
        <Pagination />
      </div>
      <aside className="md:col-span-1 flex flex-col gap-7">
        <Search />
        <SearchInsight />
        <WeeklyIntelligence />
      </aside>
    </div>
  );
}

export default Blog;
