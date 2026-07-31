import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/blog" },
];

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleShowMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <header className="flex items-center justify-between px-5 sm:px-10 md:px-20 h-25 sm:h-30.5">
      <Link to="/" className="cursor-pointer">
        <img
          src="/logo.png"
          alt=""
          className="w-25 md:w-50 h-25 object-cover"
        />
      </Link>
      <button
        onClick={handleToggleShowMenu}
        className="cursor-pointer md:hidden z-20"
      >
        {showMenu ? (
          <MdClose className="w-5 h-5" />
        ) : (
          <FiMenu className="w-5 h-5" />
        )}
      </button>
      <div
        className={`${showMenu ? "fixed right-0 top-0 w-2/3 h-screen" : "hidden"} bg-white p-4 pt-20 flex flex-col gap-10 `}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map(({ name, path }) => (
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-green text-base font-semibold"
                  : "text-slate text-base"
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <div className="flex flex-col gap-4">
          <button className="px-5 py-3 rounded-xl border border-green30 text-green text-sm font-bold font-dmSans hover:bg-green25 hover:text-white transition-all cursor-pointer">
            Get a demo
          </button>
          <button className="px-5 py-3 rounded-xl border border-green bg-green25 text-white text-sm font-bold font-dmSans hover:bg-transparent hover:text-green transition-all cursor-pointer">
            Login/Sign Up
          </button>
        </div>
      </div>

      <div className="md:flex hidden flex-col gap-4 md:w-2/3 md:flex-row md:items-center md:justify-between">
        <nav className="flex items-center gap-4">
          {navLinks.map(({ name, path }) => (
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-green text-base font-semibold"
                  : "text-slate text-base"
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="px-5 py-3 rounded-xl border border-green30 text-green25 text-sm font-bold font-dmSans hover:bg-green25 hover:text-white transition-all cursor-pointer">
            Get a demo
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
