import { useState } from "react";
import Article from "../components/Blog/Article";
import Featured from "../components/Blog/Featured";
import Pagination from "../components/Blog/Pagination";
import Search from "../components/Blog/Search";
import SearchInsight from "../components/Blog/SearchInsight";
import WeeklyIntelligence from "../components/Blog/WeeklyIntelligence";

const articles = [
  {
    id: 1,
    img: "/insight.jpg",
    time: "8 min read",
    date: "Oct 20, 2023",
    label: "THE CHALLENGE",
    description:
      "An in-depth look at new wind farm projects along the Swahili coast and their impact on national grid stability.",
    title: "Harnessing the Trade Winds: Kenya's Coastal Potential",
  },
  {
    id: 2,
    img: "/insight.jpg",
    time: "6 min read",
    date: "Oct 18, 2023",
    label: "ENERGY POLICY",
    description:
      "Exploring the latest renewable energy policies shaping Africa's energy transition.",
    title: "The Future of Renewable Energy in Africa",
  },
  {
    id: 3,
    img: "/insight.jpg",
    time: "7 min read",
    date: "Oct 15, 2023",
    label: "INVESTMENT",
    description:
      "How investment in clean energy infrastructure is changing the African energy landscape.",
    title: "Investing in Africa's Clean Energy Future",
  },
  {
    id: 4,
    img: "/insight.jpg",
    time: "5 min read",
    date: "Oct 12, 2023",
    label: "SOLAR ENERGY",
    description:
      "Solar energy continues to expand across Africa as new technologies reduce costs.",
    title: "Solar Power and Africa's Energy Transformation",
  },
  {
    id: 5,
    img: "/insight.jpg",
    time: "9 min read",
    date: "Oct 10, 2023",
    label: "GRID",
    description:
      "Understanding the challenges and opportunities surrounding Africa's electricity grids.",
    title: "Building Stronger Electricity Grids",
  },

  // Add more articles
  {
    id: 6,
    img: "/insight.jpg",
    time: "6 min read",
    date: "Oct 8, 2023",
    label: "POLICY",
    description: "An overview of emerging energy policies.",
    title: "Africa's Changing Energy Policies",
  },

  {
    id: 7,
    img: "/insight.jpg",
    time: "8 min read",
    date: "Oct 5, 2023",
    label: "TECHNOLOGY",
    description: "How technology is transforming energy management.",
    title: "Technology and the Future of Energy",
  },

  {
    id: 8,
    img: "/insight.jpg",
    time: "5 min read",
    date: "Oct 2, 2023",
    label: "INVESTMENT",
    description: "The investment opportunities emerging across Africa.",
    title: "Clean Energy Investment Opportunities",
  },
];

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 5;

  const totalPages = Math.ceil(
    articles.length / articlesPerPage
  );

  const startIndex = (currentPage - 1) * articlesPerPage;

  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  return (
    <div className="bg-zinc900 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-5 px-5 sm:px-7 md:px-15 py-20">
      <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-7">
        <div className="flex flex-col gap-6.5">
          <h1 className="text-3xl sm:text-[32px] text-slate font-bold">
            Energy Intelligence Insights
          </h1>

          <p className="text-lg sm:text-xl text-slate">
            Leading analysis on renewable energy trends, policy
            and investment across Africa. Stay ahead of the
            transition.
          </p>
        </div>

        <Featured />

        <div className="flex flex-col gap-8">
          {currentArticles.map((article) => (
            <Article
              key={article.id}
              img={article.img}
              time={article.time}
              date={article.date}
              label={article.label}
              description={article.description}
              title={article.title}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <aside className="md:col-span-2 lg:col-span-1 flex flex-col gap-7">
        <Search />
        <SearchInsight />
        <WeeklyIntelligence />
      </aside>
    </div>
  );
}

export default Blog;
