import { useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { MdClose, MdKeyboardArrowDown, MdPlayArrow } from "react-icons/md";
import { Link, NavLink } from "react-router";

const navLinks = [
  { title: "welcome", path: "/" },
  {
    title: "about us",
    path: "/about",
    children: [
      { title: "Who We Are", path: "/about" },
      { title: "Mission & Vision", path: "/about#about-mission" },
      { title: "Our Approach", path: "" },
      { title: "Our Impact", path: "/social-impact" },
      { title: "Our Team", path: "/about#experts" },
      { title: "Knowledge, Education & Advocacy", path: "" },
    ],
  },
  {
    title: "solutions",
    path: "/solutions",
    children: [
      { title: "Energy Data Platform", path: "/solutions" },
      { title: "Energy Calculator", path: "" },
      { title: "AI Energy Management", path: "" },
      { title: "Clean Energy Solutions", path: "" },
      { title: "Climate & Environmental Solutions", path: "" },
      { title: "Circular Economy & Waste-to-Energy", path: "" },
    ],
  },
  {
    title: "services",
    path: "/services",
    children: [
      { title: "Energy Analytics", path: "/services" },
      { title: "AI & Optimisation", path: "/services#energy-optimisation" },
      { title: "Clean Energy Advisory", path: "/services#clean-energy" },
      { title: "Climate & Environmental Advisory", path: "/sevices#climate" },
      { title: "Project Management", path: "/services#project" },
      { title: "Policy & Market Intelligence", path: "/services#policy" },
      { title: "Research & Capacity Building", path: "/services#capacity" },
    ],
  },
  {
    title: "partnerships",
    path: "/partnerships",
    children: [
      { title: "Government", path: "/partnerships" },
      { title: "Private Sector", path: "/partnerships#private" },
      { title: "Development Partners", path: "/partnerships#development" },
      { title: "Technology", path: "/partnerships#technology" },
      { title: "Research & Academia", path: "/partnerships#knowledge" },
    ],
  },
  {
    title: "insights",
    path: "/insights",
    children: [
      { title: "Research", path: "/insights" },
      { title: "Energy Intelligence", path: "" },
      { title: "Climate & Sustainability", path: "" },
      { title: "Policy & Market Insights", path: "" },
      { title: "News", path: "" },
    ],
  },
  { title: "contact", path: "/contact" },
];

function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleShowMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <header className="flex items-center justify-between bg-white h-20 lg:gap-8 lg:h-30.5 px-5 sm:px-7 md:px-15">
      <Link to="/" className="cursor-pointer">
        <img
          src="/logo.png"
          alt=""
          className="w-24 sm:w-32 md:w-40 lg:w-50 h-12 sm:h-16 lg:h-25 object-contain"
        />
      </Link>
      <button
        onClick={handleToggleShowMenu}
        className={`cursor-pointer text-slate30 hover:text-slate transition-all lg:hidden ${showMenu ? "fixed right-5 top-6 z-40" : ""}`}
        aria-label={showMenu ? "Close menu" : "Open menu"}
      >
        {showMenu ? <MdClose className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>
      <div className="lg:flex items-center gap-5 hidden xl:flex-1 xl:justify-between ">
        <nav className="flex items-center gap-2 xl:gap-4">
  {navLinks.map((navItem) => (
    <div
      key={navItem.title}
      className="relative"
      onMouseEnter={() => {
        if (navItem.children) {
          setOpenDropdown(navItem.title);
        }
      }}
      onMouseLeave={() => {
        if (navItem.children) {
          setOpenDropdown(null);
        }
      }}
    >
      <NavLink
        to={navItem.children ? "#" : navItem.path}
        onClick={(e) => {
          if (navItem.children) {
            e.preventDefault();

            setOpenDropdown(
              openDropdown === navItem.title ? null : navItem.title
            );
          }
        }}
        className={({ isActive }) =>
          `${
            isActive && !navItem.children
              ? "text-green25 font-bold hover:text-green"
              : "text-zinc100 hover:text-slate"
          } transition-all text-xs xl:text-sm capitalize flex items-center gap-1`
        }
      >
        <MdPlayArrow className="w-4 h-4" />

        {navItem.title}

        {navItem.children && (
          <MdKeyboardArrowDown className="w-4 h-4" />
        )}
      </NavLink>

      {navItem.children && openDropdown === navItem.title && (
        <div className="absolute top-full left-0 min-w-40 w-50 max-w-100 rounded-md bg-white shadow-lg p-2 z-20 flex flex-col gap-1">
          {navItem.children.map((child) => (
            <NavLink
              key={child.title}
              to={child.path}
              className="block px-3 py-2 text-sm hover:bg-green25 hover:text-white rounded-md"
            >
              {child.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>

        <div className="flex flex-col lg:flex-row gap-3">
          <button className="px-2 xl:px-5 py-3 rounded-xl border border-green30 text-green text-xs xl:text-sm font-bold font-dmSans hover:bg-green25 hover:text-white transition-all cursor-pointer">
            Get Demo
          </button>
          <button className="px-2 xl:px-5 py-3 rounded-xl border border-green bg-green25 text-white text-xs xl:text-sm font-bold font-dmSans hover:bg-transparent hover:text-green transition-all cursor-pointer">
            {/* Login/Sign Up */} SignUp
          </button>
        </div>
      </div>

      <div
        className={`
    fixed top-0 right-0 z-30
     w-2/3 h-screen
     overflow-y-auto
     bg-white p-4 pt-15
    flex flex-col gap-10
     transition-all duration-500 ease-in-out
     ${
       showMenu
         ? "translate-x-0 opacity-100"
         : "translate-x-full opacity-0 pointer-events-none"
     }
   `}
      >
        <nav className="flex flex-col gap-3">
          {navLinks.map((navItem) => (
            <div
              key={navItem.title}
              className="relative"
              onMouseEnter={() => {
                if (navItem.children) {
                  setOpenDropdown(navItem.title);
                }
              }}
              onMouseLeave={() => {
                if (navItem.children) {
                  setOpenDropdown(null);
                }
              }}
            >
              <NavLink
                to={navItem.path}
                onClick={() => {
                  if (navItem.children) {
                    setOpenDropdown(
                      openDropdown === navItem.title ? null : navItem.title,
                    );
                  }
                }}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-green25 font-bold hover:text-green"
                      : "text-zinc100 hover:text-slate"
                  } transition-all text-sm capitalize flex items-center gap-1`
                }
              >
                {navItem.title}

                {navItem.children && (
                  <MdKeyboardArrowDown className="w-4 h-4" />
                )}
              </NavLink>

              {navItem.children && openDropdown === navItem.title && (
                <div className=" flex flex-col gap-1">
                  {navItem.children.map((child) => (
                    <a
                      key={child.title}
                      href={child.path}
                      className="block px-3 py-2 text-sm hover:bg-green25 hover:text-white rounded-md"
                    >
                      {child.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <button className="px-5 py-3 rounded-xl border border-green30 text-green text-sm font-bold font-dmSans hover:bg-green25 hover:text-white transition-all cursor-pointer">
            Get Demo
          </button>
          <button className="px-5 py-3 rounded-xl border border-green bg-green25 text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green transition-all cursor-pointer">
            Login/Sign Up
          </button>
        </div>
      </div>
    </header>
    //   <header className="flex items-center justify-between px-5 sm:px-7 md:px-15 h-25 sm:h-30.5">
    //     <Link to="/" className="cursor-pointer">
    //       <img
    //         src="/logo.png"
    //         alt=""
    //         className="w-25 md:w-50 h-25 object-cover"
    //       />
    //     </Link>
    //     <button
    //       onClick={handleToggleShowMenu}
    //       className={`cursor-pointer lg:hidden z-40 ${showMenu ? "fixed top-10 right-5" : ""}`}
    //     >
    //       {showMenu ? (
    //         <MdClose className="w-5 h-5 text-black" />
    //       ) : (
    //         <FiMenu className="w-5 h-5" />
    //       )}
    //     </button>
    //     <div
    //       className={`
    //   fixed top-0 right-0 z-30
    //   w-2/3 h-screen
    //   overflow-y-auto
    //   bg-white p-4 pt-15
    //   flex flex-col gap-10
    //   transition-all duration-500 ease-in-out
    //   ${
    //     showMenu
    //       ? "translate-x-0 opacity-100"
    //       : "translate-x-full opacity-0 pointer-events-none"
    //   }
    // `}
    //     >
    //       <nav className="flex flex-col gap-4">
    //         {navLinks.map(({ name, path }) => {
    //           if (name === "Services") {
    //             return (
    //               <div key={name} className="flex flex-col gap-2">
    //                 <button
    //                   type="button"
    //                   onClick={() => setShowServicesMenu((prev) => !prev)}
    //                   className="group relative flex items-center gap-2 text-left text-slate text-base pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
    //                 >
    //                   <span>{name}</span>
    //                   <FiChevronDown
    //                     className={`h-4 w-4 transition-transform duration-200 ${
    //                       showServicesMenu ? "rotate-180" : "rotate-0"
    //                     }`}
    //                   />
    //                 </button>
    //                 {showServicesMenu && (
    //                   <div className="ml-4 flex flex-col gap-2  pl-3">
    //                     {serviceLinks.map(
    //                       ({ name: serviceName, path: servicePath }) => (
    //                         <NavLink
    //                           key={serviceName}
    //                           to={servicePath}
    //                           onClick={() => {
    //                             setShowServicesMenu(false);
    //                             setShowMenu(false);
    //                           }}
    //                           className={({ isActive }) =>
    //                             isActive
    //                               ? "text-green text-sm font-semibold"
    //                               : "text-slate text-sm hover:text-green25"
    //                           }
    //                         >
    //                           {serviceName}
    //                         </NavLink>
    //                       ),
    //                     )}
    //                   </div>
    //                 )}
    //               </div>
    //             );
    //           }

    //           return (
    //             <NavLink
    //               key={name}
    //               to={path || "/"}
    //               end={path === "/"}
    //               onClick={() => setShowMenu(false)}
    //               className={({ isActive }) =>
    //                 isActive
    //                   ? "group relative text-green text-base font-semibold pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
    //                   : "group relative text-slate text-base pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
    //               }
    //             >
    //               {name}
    //             </NavLink>
    //           );
    //         })}
    //       </nav>
    //       <div className="flex flex-col gap-4">
    //         <button className="px-5 py-3 rounded-xl border border-green30 text-green text-sm font-bold font-dmSans hover:bg-green25 hover:text-white transition-all cursor-pointer">
    //           Energy Calculator
    //         </button>
    //         <button className="px-5 py-3 rounded-xl border border-green bg-green25 text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green transition-all cursor-pointer">
    //           Login/Sign Up
    //         </button>
    //       </div>
    //     </div>

    //     <div className="lg:flex hidden flex-col gap-4  md:flex-row md:items-center md:justify-between">
    //       <nav className="flex items-center gap-5 xl:gap-7">
    //         {navLinks.map(({ name, path }) => {
    //           if (name === "Services") {
    //             return (
    //               <div key={name} className="relative" >
    //                 <button
    //                   type="button"
    //                   onClick={() => setShowServicesMenu((prev) => !prev)}
    //                   className="group relative flex items-center gap-2 text-slate text-sm xl:text-base pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
    //                 >
    //                   <span>{name}</span>
    //                   <FiChevronDown
    //                     className={`h-4 w-4 transition-transform duration-200 ${
    //                       showServicesMenu ? "rotate-180" : "rotate-0"
    //                     }`}
    //                   />
    //                 </button>
    //                 {showServicesMenu && (
    //                   <div className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-green25 bg-white p-3 shadow-lg z-40">
    //                     {serviceLinks.map(
    //                       ({ name: serviceName, path: servicePath }) => (
    //                         <NavLink
    //                           key={serviceName}
    //                           to={servicePath}
    //                           onClick={() => setShowServicesMenu(false)}
    //                           className={({ isActive }) =>
    //                             isActive
    //                               ? "block rounded-lg px-3 py-2 text-sm text-green font-semibold"
    //                               : "block rounded-lg px-3 py-2 text-sm text-slate hover:bg-green10 hover:text-green25"
    //                           }
    //                         >
    //                           {serviceName}
    //                         </NavLink>
    //                       ),
    //                     )}
    //                   </div>
    //                 )}
    //               </div>
    //             );
    //           }

    //           return (
    //             <NavLink
    //               key={name}
    //               to={path || "/"}
    //               end={path === "/"}
    //               className={({ isActive }) =>
    //                 isActive
    //                   ? "group relative text-green text-sm xl:text-base font-semibold pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l- befo8re:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
    //                   : "group relative text-slate text-sm xl:text-base pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
    //               }
    //             >
    //               {name}
    //             </NavLink>
    //           );
    //         })}
    //       </nav>
    //       <div className="flex items-center gap-4">
    //         <button className="px-5 py-3 rounded-xl border border-green30 text-green25 text-sm font-bold font-dmSans hover:bg-green25 hover:text-white transition-all cursor-pointer">
    //           Energy Calculator
    //         </button>
    //         <button className="px-5 py-3 rounded-xl border border-green25 bg-green25 text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green25 transition-all cursor-pointer">
    //           Login/Sign Up
    //         </button>
    //       </div>
    //     </div>
    //   </header>
  );
}

export default Header;
