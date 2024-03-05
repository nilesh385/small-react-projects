import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-around text-white flex-wrap bg-teal-500 px-6 py-2 rounded-md">
        <div id="logo">
          <h1 className="text-2xl font-bold font-serif">Logo</h1>
        </div>

        <div id="links">
          <ul className="flex gap-5 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-all ${
                    isActive
                      ? "text-neutral-700  text-lg"
                      : "text-white hover:text-zinc-500"
                  } `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-all ${
                    isActive
                      ? "text-neutral-700  text-lg"
                      : "text-white hover:text-zinc-500"
                  } `
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-all ${
                    isActive
                      ? "text-neutral-700  text-lg"
                      : "text-white hover:text-zinc-500"
                  } `
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `transition-all ${
                    isActive
                      ? "text-neutral-700  text-lg"
                      : "text-white hover:text-zinc-500"
                  } `
                }
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
