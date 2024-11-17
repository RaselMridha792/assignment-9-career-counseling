import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/coaching">Coaching</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </>
  );
  return (
    <>
      <div className="relative">
        <div className="navbar bg-base-100 font-Roboto md:w-10/12 w-11/12 mx-auto bg-transparent absolute z-index  absolute top-0 left-0 right-0 z-10 md:py-6">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm flex flex-col dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5 *:text-lg font-Roboto uppercase"
              >
                {links}
              </ul>
            </div>
            <Link
              to="/"
              className="flex items-center justify-center uppercase font-bold text-xl"
            >
              <img className="w-12" src={logo} alt="Career Compass" />
              Career Compass
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 *:text-lg font-Roboto uppercase">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
