import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="navbar bg-base-100 px-3 lg:px-0 pt-5">
      <div className="navbar-start">
        <Link to="/" className="normal-case text-3xl font-bold text-[#141b29]">
          Rhythm <span className="text-[#ef672a]">Labs</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#ef672a] hover:bg-white" : "hover:bg-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) =>
                isActive ? "text-[#ef672a] hover:bg-white" : "hover:bg-white"
              }
            >
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) =>
                isActive ? "text-[#ef672a] hover:bg-white" : "hover:bg-white"
              }
            >
              Classes
            </NavLink>
          </li>

          {user?.role === "student" && (
            <li>
              {" "}
              <NavLink to="/dashboard/studenthome">Dashboard</NavLink>
            </li>
          )}
          {user?.role === "instructor" && (
            <li>
              {" "}
              <NavLink to="/dashboard/instructorhome">Dashboard</NavLink>
            </li>
          )}
          {user?.role === "admin" && (
            <li>
              {" "}
              <NavLink to="/dashboard/adminhome">Dashboard</NavLink>
            </li>
          )}
        </ul>
        {user ? (
          <div className="flex gap-2">
            <div
              onClick={handleLogout}
              className="bg-[#ef672a] text-white text-xl px-8 border py-2 transition duration-200 rounded ms-6 cursor-pointer hover:bg-white hover:text-[#ef672a] hover:scale-95 hover:border-[#ef672a] font-semibold"
            >
              Logout
            </div>

            <div className="w-12 h-12">
              <img src={user.photoURL} className="rounded-full" />
            </div>
          </div>
        ) : (
          <div className="bg-[#ef672a] text-white text-xl px-8 border py-2 transition duration-200 rounded ms-6 cursor-pointer hover:bg-white hover:text-[#ef672a] hover:scale-95 hover:border-[#ef672a] font-semibold">
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
