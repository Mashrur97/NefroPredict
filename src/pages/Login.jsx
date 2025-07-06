import { Link } from "react-router";
import MagnetLines from "../../Reactbits/MagnetLines/MagnetLines";

const Login = () => {
  const handleSub = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
  };

  const handleClick = () => {};

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <MagnetLines
          rows={22}
          columns={22}
          containerSize="300vmin"
          lineColor="blue"
          lineWidth="0.5vmin"
          lineHeight="5vmin"
          baseAngle={0}
        />
      </div>
      <div className="relative z-10 w-full max-w-md bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
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
          <button className="relative w-full rounded-3xl px-5 py-2 overflow-hidden group bg-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
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
    </div>
  );
};

export default Login;
