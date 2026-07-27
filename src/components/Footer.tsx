import { Link } from "react-router";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Energy Data Platform",
  "AI Management Tools",
  "Education & Advocacy",
  "Research & Insights",
];

function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 sm:px-10 md:px-20 py-15 divide-y-2 divide-zinc">
      <div className="flex flex-col md:flex-row md:items-center gap-15 justify-between pb-6">
        <div className="flex flex-col gap-5">
          <img src="/logo.png" alt="" className="w-50 h-25 object-cover" />
          <span className="text-sm sm:text-base text-slate50 max-w-[50ch]">
            Building the intelligence that powers Africa's renewable energy
            revolution through data, AI, and education.
          </span>
          <span className="text-sm sm:text-base text-slate50">
            Headquarters: Abuja, Nigeria
          </span>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-between font-sora">
          <div className="flex flex-col gap-5">
            <h4 className="text-slate text-lg sm:text-xl font-semibold">Company</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ name, path }) => (
                <Link
                  to={path}
                  key={name}
                  className="text-sm sm:text-base text-slate font-light"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-slate text-lg sm:text-xl font-semibold">Services</h4>
            <nav className="flex flex-col gap-3">
              {services.map((name) => (
                <span
                  key={name}
                  className="text-sm sm:text-base text-slate font-light"
                >
                  {name}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4  items-center md:flex-row md:justify-between">
        <span className="font-inter text-sm sm:text-base text-slate50 text-center sm:text-left">
          © 2025 Energylytics Africa Limited. All rights reserved.
        </span>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
          <span className="font-inter text-sm sm:text-base text-slate50">
            info@energylyticsafrica.com
          </span>
          <span className="font-inter text-sm sm:text-base text-slate50">
            energylyticsafrica.com
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
