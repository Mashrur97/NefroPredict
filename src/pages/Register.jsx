import { Link, useNavigate } from "react-router";
import MagnetLines from "../../Reactbits/MagnetLines/MagnetLines";

const Register = () => {
  const handleSub = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const pass = e.target.pass.value;
    const email = e.target.email.value;
    const url = e.target.url.value;
  };

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
        <h2 className="text-3xl font-semibold text-center mb-6">
          Register now
        </h2>
        <form onSubmit={handleSub} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              required
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              required
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="pass"
              required
              type="password"
              pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must include uppercase, lowercase, and at least 6 characters."
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="relative w-full rounded-3xl px-5 py-2 overflow-hidden group bg-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 mt-2">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Register</span>
          </button>
        </form>
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
