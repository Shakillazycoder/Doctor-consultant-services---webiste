import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../src/assets/logo2.jpeg";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, SignOutUser } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default"); // State to manage theme

  const handleLogOut = () => {
    SignOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "default" ? "synthwave" : "default");
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      {user?.email ? (
        <li>
          <details>
            <summary>Dashboard</summary>
            <ul className="bg-base-100 mt-5 w-52 z-50 p-3 space-y-4 rounded-2xl ">
              <li className="bg-white text-black rounded-xl p-2">
                <NavLink to="/addServices">Add Service</NavLink>
              </li>
              <li className="bg-white text-black rounded-xl p-2">
                <NavLink to="/manageServices">Manage Service</NavLink>
              </li>
              <li className="bg-white text-black rounded-xl p-2">
                <NavLink to="/bookServices">Booked-Services</NavLink>
              </li>
              <li className="bg-white text-black rounded-xl p-2">
                <NavLink to="/servicesToDo">Service-To-Do</NavLink>
              </li>
            </ul>
          </details>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="bg-base-100 mt-5 z-50 shadow-xl">
        <div className="navbar container mx-auto p-3">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={toggleTheme} // 
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
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100  space-y-6 rounded-box w-60"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/">
              <div className="flex items-center">
                <img
                  src={logo}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-2xl"
                  alt=""
                />
                <p className="btn btn-ghost text-xl">MedConsultPro</p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-5  px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                checked={theme === "synthwave"} // Add checked attribute based on theme
                onChange={toggleTheme} // Add onChange handler for theme toggle
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            {user ? (
              <div
                className="dropdown tooltip ml-5 tooltip-bottom dropdown-end"
                data-tip={user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {user.photoURL ? (
                      <img alt="User Photo" src={user.photoURL} />
                    ) : (
                      <img
                        alt="User Photo"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-y-3 w-52"
                >
                  <li>
                    <h2 className="bg-[#3498db] ">{user.displayName}</h2>
                  </li>
                  <li>
                    <a className="bg-red-600 text-white" onClick={handleLogOut}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
