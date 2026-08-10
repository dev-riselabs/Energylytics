import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router";

const serviceLinks = [
  { name: "Energy Data Platform", path: "/energy-platform" },
  { name: "AI Management Tools", path: "/management-tool" },
  { name: "Education & Advocacy", path: "/education-advocacy" },
  { name: "Research & Insights", path: "/research-insight" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "#" },
  { name: "Insights", path: "/blog" },
  { name: "Contact", path: "#" },
];

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  // const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (
  //       servicesMenuRef.current &&
  //       !servicesMenuRef.current.contains(event.target as Node)
  //     ) {
  //       setShowServicesMenu(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  function handleToggleShowMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <header className="flex items-center justify-between px-5 sm:px-7 md:px-15 h-25 sm:h-30.5">
      <Link to="/" className="cursor-pointer">
        <img
          src="/logo.png"
          alt=""
          className="w-25 md:w-50 h-25 object-cover"
        />
      </Link>
      <button
        onClick={handleToggleShowMenu}
        className={`cursor-pointer lg:hidden z-40 ${showMenu ? "fixed top-10 right-5" : ""}`}
      >
        {showMenu ? (
          <MdClose className="w-5 h-5 text-black" />
        ) : (
          <FiMenu className="w-5 h-5" />
        )}
      </button>
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
        <nav className="flex flex-col gap-4">
          {navLinks.map(({ name, path }) => {
            if (name === "Services") {
              return (
                <div key={name} className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setShowServicesMenu((prev) => !prev)}
                    className="group relative flex items-center gap-2 text-left text-slate text-base pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
                  >
                    <span>{name}</span>
                    <FiChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        showServicesMenu ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {showServicesMenu && (
                    <div className="ml-4 flex flex-col gap-2  pl-3">
                      {serviceLinks.map(
                        ({ name: serviceName, path: servicePath }) => (
                          <NavLink
                            key={serviceName}
                            to={servicePath}
                            onClick={() => {
                              setShowServicesMenu(false);
                              setShowMenu(false);
                            }}
                            className={({ isActive }) =>
                              isActive
                                ? "text-green text-sm font-semibold"
                                : "text-slate text-sm hover:text-green25"
                            }
                          >
                            {serviceName}
                          </NavLink>
                        ),
                      )}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={name}
                to={path || "/"}
                end={path === "/"}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "group relative text-green text-base font-semibold pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
                    : "group relative text-slate text-base pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
                }
              >
                {name}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex flex-col gap-4">
          <button className="px-5 py-3 rounded-xl border border-green30 text-green text-sm font-bold font-dmSans hover:bg-green25 hover:text-white transition-all cursor-pointer">
            Energy Calculator
          </button>
          <button className="px-5 py-3 rounded-xl border border-green bg-green25 text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green transition-all cursor-pointer">
            Login/Sign Up
          </button>
        </div>
      </div>

      <div className="lg:flex hidden flex-col gap-4  md:flex-row md:items-center md:justify-between">
        <nav className="flex items-center gap-5 xl:gap-7">
          {navLinks.map(({ name, path }) => {
            if (name === "Services") {
              return (
                <div key={name} className="relative" >
                  <button
                    type="button"
                    onClick={() => setShowServicesMenu((prev) => !prev)}
                    className="group relative flex items-center gap-2 text-slate text-sm xl:text-base pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
                  >
                    <span>{name}</span>
                    <FiChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        showServicesMenu ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {showServicesMenu && (
                    <div className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-green25 bg-white p-3 shadow-lg z-40">
                      {serviceLinks.map(
                        ({ name: serviceName, path: servicePath }) => (
                          <NavLink
                            key={serviceName}
                            to={servicePath}
                            onClick={() => setShowServicesMenu(false)}
                            className={({ isActive }) =>
                              isActive
                                ? "block rounded-lg px-3 py-2 text-sm text-green font-semibold"
                                : "block rounded-lg px-3 py-2 text-sm text-slate hover:bg-green10 hover:text-green25"
                            }
                          >
                            {serviceName}
                          </NavLink>
                        ),
                      )}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={name}
                to={path || "/"}
                end={path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "group relative text-green text-sm xl:text-base font-semibold pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l- befo8re:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
                    : "group relative text-slate text-sm xl:text-base pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:border-t-[6px] before:border-b-[6px] before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-l-current before:content-[''] before:block before:h-0 before:w-0"
                }
              >
                {name}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <button className="px-5 py-3 rounded-xl border border-green30 text-green25 text-sm font-bold font-dmSans hover:bg-green25 hover:text-white transition-all cursor-pointer">
            Energy Calculator
          </button>
          <button className="px-5 py-3 rounded-xl border border-green25 bg-green25 text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green25 transition-all cursor-pointer">
            Login/Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
