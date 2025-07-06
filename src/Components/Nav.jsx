import { Link, NavLink } from 'react-router';
const Nav = () => {
    return (
<div className="flex justify-between items-center mx-auto px-5 py-3 bg-black">

  <div className="lg:hidden dropdown">
    <div tabIndex={0} role="button" className="cursor-pointer mr-2 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-black">
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold border-b border-white' : 'opacity-75 font-medium'}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/hows" className={({ isActive }) => isActive ? 'font-bold border-b border-white' : 'opacity-75 font-medium'}>How it works</NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? 'font-bold border-b border-white' : 'opacity-75 font-medium'}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold border-b border-white' : 'opacity-75 font-medium'}>About Us</NavLink>
      </li>
    </ul>
  </div>

  <div>
    <NavLink to="/">
      <div className="flex gap-2 items-center">
        <img src="computer.png" alt="Logo" className="h-8 w-auto" />
        <p className="font-bold text-2xl text-white">Nefro<span className='text-blue-400'>Predict</span> </p>
      </div>
    </NavLink>
  </div>

  <div className="lg:flex hidden gap-5 px-1 text-white">
    <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold  text-blue-400' : 'opacity-75 font-medium'}>Home</NavLink>
    <NavLink to="/hows" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'opacity-75 font-medium'}>How it works</NavLink>
    <NavLink to="/blogs" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'opacity-75 font-medium'}>Blogs</NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold text-blue-400' : 'opacity-75 font-medium'}>About Us</NavLink>
  </div>

  <div>
    <Link to="/login">
    <button class="relative rounded-3xl px-5 py-2 overflow-hidden group bg-blue-600 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span class="relative">Login</span>
    </button></Link>
  </div>
</div>

    );
};

export default Nav;