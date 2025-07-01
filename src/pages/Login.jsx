import { Link } from "react-router";

const Login = () => {

  const handleSub = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    
  };

  const handleClick = ()=>{
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="mt-5 font-semibold text-3xl text-center">Log in</h2>
          <div className="card-body">
            <form onSubmit={handleSub} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="pass"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <h2>
              Dont have an account?{" "}
              <Link to={"/signup"} className="text-blue-700 underline">
                Signup now
              </Link>
            </h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
