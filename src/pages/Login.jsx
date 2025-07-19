import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast, Toaster } from "sonner";
import Cookies from "js-cookie";
import DarkVeil from "../../Reactbits/DarkVeil/DarkVeil";
import { AuthContext } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  const handleSub = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;

    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Cookies.set("token", data.data, { expires: 7, path: "/" });
          const decoded = jwtDecode(data.data);
          setUser(decoded);
          toast.success("Login successful!");
          navigate(from, { replace: true });
          e.target.reset();
        } else {
          toast.error("Login failed: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred during login");
      });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <DarkVeil />
      </div>

      <div className="relative z-10 w-full max-w-md bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSub} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="pass">
              Password
            </label>
            <input
              id="pass"
              name="pass"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="relative w-full rounded-3xl px-5 py-2 overflow-hidden group bg-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Login</span>
          </button>
        </form>
        <p className="text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-500 underline"
          >
            Signup now
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
