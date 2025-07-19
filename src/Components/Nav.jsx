import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";
import { toast } from "sonner";
import GradientText from "../../Reactbits/GradientText/GradientText";
const avatarUrls = [
  "/mrf.png",
  "/trm.png",
  "/alm.png",
];
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
  const [avatarUrl, setAvatarUrl] = useState(avatarUrls[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * avatarUrls.length);
    setAvatarUrl(avatarUrls[randomIndex]);
  }, []);
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
            <img
              src="../../public/computer.png"
              alt="Logo"
              className="h-8 w-auto"
            />
            <p className="font-bold text-lg md:text-xl lg:text-2xl text-white">
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
        <div className="flex justify-between lg:gap-3 items-center">
          <div className="lg:flex md:flex hidden">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            {user.name}
          </GradientText>
          </div>
          <div className="dropdown dropdown-end relative">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                <img src={avatarUrl} alt="User Avatar" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="absolute right-0 mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-gray-900 text-white rounded-lg w-52"
            >
              <li>
                <button
                  onClick={handleDashboardRedirect}
                  className="hover:bg-blue-600 rounded px-3 py-2"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:bg-red-600 rounded px-3 py-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
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
