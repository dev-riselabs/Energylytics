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

      
    </footer>
  );
}

export default Footer;
