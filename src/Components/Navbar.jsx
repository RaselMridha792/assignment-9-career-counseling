import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AllContext } from "../contextprovider/DataContext";
import { CgProfile } from "react-icons/cg";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { signOutUser, user } = useContext(AllContext);
  const navigate = useNavigate()
  const handleNavigateProfile = ()=>{
    navigate('/profile')
  }

  const handleSignOut = (e) => {
    e.preventDefault();
    signOutUser()
      .then(() => {
        toast.success('signout successfully');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const links = (
    <>
      <NavLink className="btn btn-outline" to="/">
        Home
      </NavLink>
      <NavLink className="btn btn-outline" to="/about">
        About
      </NavLink>
      <NavLink className="btn btn-outline" to="/coaching">
        Coaching
      </NavLink>
      <NavLink className="btn btn-outline active:bg-neutral" to="/dashboard">
        Dashboard
      </NavLink>
    </>
  );
  return (
    <>
      <div className="relative">
        <ToastContainer></ToastContainer>
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
              <h1 className="font-bold md:text-2xl text-blue-800">
                {" "}
                Career Compass
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 *:text-sm font-Roboto uppercase">
              {links}
            </ul>
          </div>
          <div className="navbar-end gap-5">
            <div className="bg-white rounded-full text-2xl relative group">
              {user && user?.email ? (
                <>
                  <div onClick={handleNavigateProfile}>
                    <img className="w-10 rounded-full" src={user.photoURL} alt={user.displayName} />
                  </div>
                  <div className="absolute top-12 opacity-0 group-hover:opacity-100 duration-300">
                    {user.displayName}
                  </div>
                </>
              ) : (
                <><div className="text-5xl"><CgProfile /></div></>
              )}
            </div>
            <div>
              {user ? (
                <>
                  <Link to="/" onClick={handleSignOut} className="btn btn-neutral">
                    Log Out
                  </Link>
                </>
              ) : (
                <>
                  <Link className="btn btn-neutral" to="/login">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
