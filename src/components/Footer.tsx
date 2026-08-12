import { NavLink } from "react-router";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About Us", path: "/about" },
//   { name: "Our Solutions", path: "#" },
//   { name: "Blog", path: "/blog" },
//   { name: "Contact", path: "#" },
// ];

// const services = [
//   { name: "Energy Data Platform", path: "/energy-platform" },
//   { name: "AI Management Tools", path: "/management-tool" },
//   { name: "Education & Advocacy", path: "/education-advocacy" },
//   { name: "Research & Insights", path: "/research-insight" },
// ];

const footerLinks = [
  {
    label: "info@energylyticsafrica.com",
    href: "mailto:info@energylyticsafrica.com",
  },
  {
    label: "energylyticsafrica.com",
    href: "https://energylyticsafrica.com",
  },
];

function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 sm:px-7 md:px-15 py-15 divide-y-2 divide-zinc font-manrope bg-green35">
      <div className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row lg:justify-between">
         <div className="flex flex-col gap-5">
          <img src="/logo.png" alt="" className="w-50 h-25 object-cover" />
          <span className="text-sm sm:text-base text-slate50 max-w-[30ch]">
            Building the intelligence that powers Africa's renewable energy revolution through data, AI and education.
          </span>
          <span className="text-sm sm:text-base text-slate50">
            <span className="font-semibold">Headquarters:</span> Abuja, Nigeria
          </span>
        </div>
        <div className="flex flex-col gap-6 lg:w-1/2">
          <p className="text-base sm:text-xl text-slate50">Get weekly updates on the newest projects and programms right in your mailbox.
</p>
          <span className="text-base sm:text-xl text-green">Subscribe now!</span>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-col gap-2.5 flex-1">
              <label htmlFor="" className="text-slate text-base">Full Name <span className="text-red">*</span></label>
              <input type="text" name="" id="" placeholder="John Doe" className="rounded-md border border-black/50 text-sm text-slate px-3 py-3 outline-none"/>
            </div>
            <div className="flex flex-col gap-2.5 flex-1">
              <label htmlFor="" className="text-slate text-base">Email Address <span className="text-red">*</span></label>
              <input type="email" name="" id="" placeholder="johndoe@gmail.com" className="rounded-md border border-black/50 text-sm text-slate px-3 py-3 outline-none"/>
            </div>
          </div>
        </div>

      </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-15 justify-between pb-6">
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
        <div className="w-full flex items-start justify-between ">
          <div className="flex flex-col gap-5">
            <h4 className="text-green25 text-lg sm:text-xl font-semibold">
              Our Company
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
      <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between pt-6">
        <span className="font-inter text-sm sm:text-base text-slate50 text-center sm:text-left">
          © 2026 Energylytics Africa Limited | <a href="#">Privacy Policy</a>| <a href="#">Terms of Use</a> | <a href="#">Cookie Policy</a> 
        </span>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="font-inter text-sm sm:text-base text-slate50 transition-all hover:text-green25 flex items-center gap-2 pl-4 relative"
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 block h-0 w-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent border-l-current" />
              {label}
            </a>
          ))}
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
