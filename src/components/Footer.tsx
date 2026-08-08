import { NavLink } from "react-router";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Insights", path: "" },
  { name: "Contact", path: "/blog" },
];

const services = [
  { name: "Energy Data Platform", path: "/energy-platform" },
  { name: "AI Management Tools", path: "/management-tool" },
  { name: "Education & Advocacy", path: "/education-advocacy" },
  { name: "Research & Insights", path: "/research-insight" },
];

function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 sm:px-7 md:px-15 py-15 divide-y-2 divide-zinc font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 justify-between pb-6">
        <div className="flex flex-col gap-5">
          <img src="/logo.png" alt="" className="w-50 h-25 object-cover" />
          <span className="text-sm sm:text-base text-slate50 max-w-[50ch]">
            Building the intelligence that powers Africa's renewable energy
            revolution through data, AI, and education.
          </span>
          <span className="text-sm sm:text-base text-slate50">
            <span className="font-semibold">Headquarters:</span> Abuja, Nigeria
          </span>
        </div>
        <div className="w-full flex items-center justify-between ">
          <div className="flex flex-col gap-5">
            <h4 className="text-green25 text-lg sm:text-xl font-semibold">
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  to={path || "/"}
                  key={name}
                  end={path === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm sm:text-base text-green25 font-light transition-all flex items-center gap-2 pl-4 relative"
                      : "text-sm sm:text-base text-slate font-light hover:text-green25 transition-all flex items-center gap-2 pl-4 relative"
                  }
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 block h-0 w-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent border-l-current" />
                  {name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-green25 text-lg sm:text-xl font-semibold">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              {services.map(({ name, path }) => (
                <NavLink
                  to={path}
                  key={name}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm sm:text-base text-green25 font-light transition-all flex items-center gap-2 pl-4 relative"
                      : "text-sm sm:text-base text-slate font-light hover:text-green25 transition-all flex items-center gap-2 pl-4 relative"
                  }
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 block h-0 w-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent border-l-current" />
                  {name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4  items-center md:flex-row md:justify-between">
        <span className="font-inter text-sm sm:text-base text-slate50 text-center sm:text-left">
          © 2026 Energylytics Africa Limited. All rights reserved.
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
