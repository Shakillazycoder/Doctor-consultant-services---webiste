import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/logo2.jpeg'



const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/services'>Services</NavLink>
      </li>
      <li>
        <details>
          <summary>Login</summary>
          <ul className="bg-[#2c3e50] mt-5 w-52 p-3 space-y-4 rounded-2xl text-[#ffff]">
            <li className='bg-white text-black rounded-xl p-2'>
              <a>Submenu 1</a>
            </li>
            <li className='bg-white text-black rounded-xl p-2'>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div>
      <div className="bg-[#2c3e50] text-[#ffff]">
        <div className="navbar container mx-auto p-3">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-[#2c3e50] text-[#ffff] space-y-6 rounded-box w-60"
            >
              {navLinks}
            </ul>
          </div>
          <Link to='/'>
          <div className='flex items-center'>
            <img src={logo} className='w-10 h-10 md:w-16 md:h-16 rounded-2xl' alt="" />
          <p className="btn btn-ghost text-xl">MedConsultPro</p>
          </div></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5  px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#2c3e50] rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
