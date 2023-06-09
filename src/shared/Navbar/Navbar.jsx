import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useUsers from "../../hooks/useUsers";
import Container from "../Container/Container";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
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
        <div className="navbar px-3 lg:px-0 py-5">
          <div className="navbar-start w-1/3">
            <Link to="/" className="normal-case text-3xl font-bold text-white">
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
      </Container>
    </header>
  );
};

export default Navbar;
