import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex  items-center justify-around gap-10 text-white flex-wrap bg-teal-500 px-6 py-2 rounded-md">
      <div id="links" className="flex flex-col gap-5 font-semibold">
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
      </div>
      <div id="links" className="flex flex-col gap-5 font-semibold">
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
      </div>
      <div>
        <p className="text-lg">
          © {new Date().getFullYear()} All Rights are Reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
