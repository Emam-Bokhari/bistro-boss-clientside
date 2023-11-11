import { Fragment } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    
  return (
    <Fragment>

    <nav className="navbar fixed z-10 bg-[#151515] opacity-70 max-w-screen-xl mx-auto text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
      <li><Link to="/" >Home</Link></li>
      </ul>
    </div>
    <Link to="/" className="text-xl">Bistro Boss</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul>
        <li><Link to="/" >Home</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="px-3 py-1 rounded bg-green-500">Login</button>
  </div>
</nav>


    </Fragment>
  );
};

export default Navbar;
