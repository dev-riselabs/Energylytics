import { Link } from "react-router";

// const navLinks = [
//   "Energy Insights Platform",
//   "Smart Energy Management Tool",
//   "Education & Advocacy Platform",
// ];

const services = [
  { name: "Energy Data Platform", path: "/energy-platform" },
  { name: "Smart Energy Management Tool", path: "/management-tool" },
  { name: "Education & Advocacy Platform", path: "/education-advocacy" },
];

function ServiceNavigation() {
  return (
    <section className="bg-zinc700 py-10  sm:px-7 md:px-15 font-inter flex justify-center">
      <div className="max-w-231.5 w-full bg-white sm:rounded-full flex flex-col items-center gap-4 justify-between px-5 sm:px-17.5 py-7.5">
        {
            services.map(({name, path}) => <Link key={name} to={path} className="text-zinc100 text-base hover:text-zinc400 transition-all">{name}</Link>)
        }
      </div>
    </section>
  );
}

export default ServiceNavigation;
