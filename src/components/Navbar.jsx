import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="shadow-md rounded-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-around">
          <Link to={"/"}>
            <div className="flex gap-3 items-center">
              <img
                src="https://th.bing.com/th/id/OIP.Vy5PUdCk1nZpeE31MCa1pwHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                className="h-7 mix-blend-color-burn"
              />
              <h3 className=" font-semibold text-lg">React Job</h3>
            </div>
          </Link>
          <div>
            <ul className=" font-semibold flex gap-4 items-center">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-red-500 hover:bg-red-300 hover:text-black rounded-md px-3 py-2"
                    : ""
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/jobs"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-red-500 hover:bg-red-300 hover:text-black rounded-md px-3 py-2"
                    : ""
                }
              >
                <li>Jobs</li>
              </NavLink>
              <NavLink
                to={"/add-job"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-red-500 hover:bg-red-300 hover:text-black rounded-md px-3 py-2"
                    : ""
                }
              >
                <li>Add Job</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
