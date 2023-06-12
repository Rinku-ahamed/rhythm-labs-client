import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useUsers from "../../hooks/useUsers";
import Container from "../Container/Container";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showHide, setShowHide] = useState(false);
  const { user, logoutUser, darkLight, setDarkLight } = useContext(AuthContext);
  const { users } = useUsers();
  const userRole = users.find((usr) => usr.email === user?.email);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <header className="absolute top-0 w-full z-30 bg-black bg-opacity-30">
      <Container>
        <div className="navbar justify-between px-4 lg:px-0 py-5">
          <div className="navbar-start w-1/2 md:w-1/3">
            <Link
              to="/"
              className="normal-case text-xl sm:text-2xl md:text-3xl font-bold text-white"
            >
              Rhythm <span className="text-[#ef672a]">Labs</span>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex w-2/3">
            <ul className="menu menu-horizontal px-1 text-xl font-semibold text-slate-200">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#ffffff]" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructors"
                  className={({ isActive }) =>
                    isActive ? "text-[#ffffff] " : ""
                  }
                >
                  Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? "text-[#ffffff] " : ""
                  }
                >
                  Classes
                </NavLink>
              </li>

              {userRole?.role === "student" && (
                <li>
                  <NavLink to="/dashboard/selectedclasses">Dashboard</NavLink>
                </li>
              )}
              {userRole?.role === "instructor" && (
                <li>
                  <NavLink to="/dashboard/addclass">Dashboard</NavLink>
                </li>
              )}
              {userRole?.role === "admin" && (
                <li>
                  <NavLink to="/dashboard/manageusers">Dashboard</NavLink>
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

                <div>
                  <img src={user.photoURL} className="rounded-full w-12 h-12" />
                </div>
              </div>
            ) : (
              <div className="bg-[#ef672a] text-white text-xl px-8 border py-2 transition duration-200 rounded ms-6 cursor-pointer hover:bg-white hover:text-[#ef672a] hover:scale-95 hover:border-[#ef672a] font-semibold">
                <Link to="/login">Login</Link>
              </div>
            )}
          </div>
          <div>
            <div className="block lg:hidden">
              <button
                className="text-white text-xl mt-2"
                onClick={() => setShowHide(!showHide)}
              >
                <FaBars />
              </button>
            </div>
            <button
              className="btn btn-primary btn-sm ms-3"
              onClick={() => setDarkLight(!darkLight)}
            >
              {darkLight ? "Dark" : "Light"}
            </button>
          </div>
        </div>
        {/* mobile menu */}
        {showHide && (
          <div
            className={`bg-[#0d1527] transition duration-1000 absolute ${
              showHide ? "w-[100%] opacity-100" : "w-[0px] opacity-0"
            }  left-0 top-20 h-[100vh] `}
          >
            <div className="px-6 sm:px-12 pt-5">
              <ul className="flex gap-4 flex-col px-1 text-xl font-semibold text-slate-200">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-[#ffffff]" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/instructors"
                    className={({ isActive }) =>
                      isActive ? "text-[#ffffff] " : ""
                    }
                  >
                    Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classes"
                    className={({ isActive }) =>
                      isActive ? "text-[#ffffff] " : ""
                    }
                  >
                    Classes
                  </NavLink>
                </li>

                {userRole?.role === "student" && (
                  <li>
                    <NavLink to="/dashboard/selectedclasses">Dashboard</NavLink>
                  </li>
                )}
                {userRole?.role === "instructor" && (
                  <li>
                    <NavLink to="/dashboard/addclass">Dashboard</NavLink>
                  </li>
                )}
                {userRole?.role === "admin" && (
                  <li>
                    <NavLink to="/dashboard/manageusers">Dashboard</NavLink>
                  </li>
                )}
              </ul>
              {user ? (
                <div className="flex gap-2 mt-4">
                  <div
                    onClick={handleLogout}
                    className="bg-[#ef672a] text-white text-xl px-8 border py-2 transition duration-200 rounded  cursor-pointer hover:bg-white hover:text-[#ef672a] hover:scale-95 hover:border-[#ef672a] font-semibold"
                  >
                    Logout
                  </div>

                  <div>
                    <img
                      src={user.photoURL}
                      className="rounded-full w-12 h-12"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-[#ef672a] text-white text-xl px-8 border py-2 transition duration-200 rounded cursor-pointer hover:bg-white hover:text-[#ef672a] hover:scale-95 hover:border-[#ef672a] font-semibold mt-4">
                  <Link to="/login">Login</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
