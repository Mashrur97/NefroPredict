import { Link, useNavigate } from "react-router";
import { toast, Toaster } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const handleSub = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const password = e.target.pass.value;
    const email = e.target.email.value;
    const user = {
      name,
      email,
      password,
    };
    console.log(user);
    fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Registration successful:", data);
          toast.success("Registration successful!");
          navigate("/login");
          e.target.reset();
        } else {
          toast.error("Registration failed: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred during registration.");
      });
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
      <Toaster />
    </div>
  );
};

export default Register;
