import { Link, useNavigate } from "react-router";

const Register = () => {

  const handleSub = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const pass = e.target.pass.value;
    const email = e.target.email.value;
    const url = e.target.url.value;

    
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="mt-5 font-semibold text-3xl text-center">
            Register now
          </h2>
          <div className="card-body">
            <form onSubmit={handleSub} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                required
                type="text"
                className="input"
                placeholder="Name"
              />
              <label className="label">Photo Url</label>
              <input
                name="url"
                required
                type="text"
                className="input"
                placeholder="Photo url"
              />
              <label className="label">Email</label>
              <input
                name="email"
                required
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="pass"
                required
                type="password"
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must have an uppercase letter, a lowercase letter, and be at least 6 characters long."
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <h2>
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-700 underline">
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
