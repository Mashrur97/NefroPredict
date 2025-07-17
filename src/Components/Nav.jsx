import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";
import { toast } from "sonner";

const Nav = () => {
  const { user, setUser, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token", { path: "/" });
    setUser(null);
    navigate("/login");
    toast.success("Logged out");
  };

  const handleDashboardRedirect = () => {
    if (user?.role === "admin") {
      navigate("/admin/dashboard");
    } else if (user?.role === "user") {
      navigate("/user/dashboard");
    } else {
      toast.error("Unauthorized or unknown role");
    }
  };

  return (
    <div className="flex justify-between items-center mx-auto px-5 py-3 bg-black">
      <div className="lg:hidden dropdown">
        <div
          tabIndex={0}
          role="button"
          className="cursor-pointer mr-2 text-white"
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
        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-black">
          <li>
            <NavLink to="/hows">How it works</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </div>

      <div>
        <NavLink to="/">
          <div className="flex gap-2 items-center">
            <img src="computer.png" alt="Logo" className="h-8 w-auto" />
            <p className="font-bold text-2xl text-white">
              Nefro<span className="text-blue-400">Predict</span>
            </p>
          </div>
        </NavLink>
      </div>

      <div className="lg:flex hidden gap-5 px-1 text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-400" : "opacity-75 font-medium"
          }
        >
          Home
        </NavLink>
        {user && (
          <NavLink
            to="/predict"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-400" : "opacity-75 font-medium"
            }
          >
            Predict
          </NavLink>
        )}
        <NavLink
          to="/hows"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-400" : "opacity-75 font-medium"
          }
        >
          How it works
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-400" : "opacity-75 font-medium"
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-400" : "opacity-75 font-medium"
          }
        >
          About Us
        </NavLink>
      </div>

      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                alt="User Avatar"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={handleDashboardRedirect}>Dashboard</button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="relative rounded-3xl px-5 py-2 overflow-hidden group bg-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Login</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
