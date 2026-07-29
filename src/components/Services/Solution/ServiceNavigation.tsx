import { Link } from "react-router";

const navLinks = [
  "Energy Insights Platform",
  "Smart Energy Management Tool",
  "Education & Advocacy Platform",
];

function ServiceNavigation() {
  return (
    <section className="bg-zinc700 py-10 px-5 sm:px-10 md:px-20 font-inter flex justify-center">
      <div className="max-w-231.5 w-full bg-white rounded-full flex items-center justify-between px-17.5 py-7.5">
        {
            navLinks.map(link => <Link to="" className="text-zinc100 text-base ">{link}</Link>)
        }
      </div>
    </section>
  );
}

export default ServiceNavigation;
