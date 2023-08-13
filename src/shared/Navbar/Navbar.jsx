import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useUsers from "../../hooks/useUsers";
import Container from "../Container/Container";
import {
  FaBars,
  FaRegEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiPhone } from "react-icons/bi";

const Navbar = () => {
  const [showHide, setShowHide] = useState(false);
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
    <header>
      {/* top bar */}
      <div className="bg-[#0e0a38] py-5 hidden sm:block">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <ul className="flex gap-3 text-slate-100">
                <li className="flex items-center gap-2">
                  <FaRegEnvelope />
                  <span className="text-[15px]">admin@example.com</span>
                </li>
                <li className="flex  items-center gap-2">
                  <BiPhone />
                  <span className="text-[15px]">+880 01760100000</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 items-center text-slate-100">
              <Link to="/">
                <FaFacebookF />
              </Link>
              <Link to="/">
                <FaLinkedinIn />
              </Link>
              <Link to="/">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex items-center justify-between lg:px-0 py-5">
          <div className="w-1/2 lg:w-2/12">
            <Link
              to="/"
              className="normal-case text-3xl font-bold text-[#130f40]"
            >
              Rhythm <span className="text-[#ef672a]">Labs</span>
            </Link>
          </div>
          <div className="hidden lg:block lg:w-8/12">
            <ul className="flex justify-center gap-7 px-1 text-xl font-semibold text-[#130f40]">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#ef672a]" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive ? "text-[#ef672a]" : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructors"
                  className={({ isActive }) =>
                    isActive ? "text-[#ef672a] bg-transparent" : ""
                  }
                >
                  Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? "text-[#ef672a] bg-transparent" : ""
                  }
                >
                  Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? "text-[#ef672a] bg-transparent" : ""
                  }
                >
                  Contact Us
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
          </div>
          <div className="navbar-end hidden lg:flex md:w-2/12">
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
              <div className="bg-[#ef672a] text-white text-lg border py-1 rounded cursor-pointer px-2 flex justify-between gap-4 relative  font-medium">
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>
                <span className="absolute w-[1px] h-[15px] bg-slate-200 bg-opacity-70 top-[12px] left-[42%]"></span>
              </div>
            )}
          </div>
          <div>
            <div className="block lg:hidden">
              <button
                className=" text-2xl mt-2"
                onClick={() => setShowHide(!showHide)}
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={`bg-black w-full h-full top-0 bottom-0 left-0 right-0 fixed z-0 bg-opacity-50 cursor-pointer duration-100 ${
            showHide ? "block opacity-100" : "hidden opacity-0"
          }`}
          onClick={() => setShowHide(false)}
        ></div>
        <div
          className={`bg-[#0d1527] fixed bottom-0 top-0 left-0 transition-all duration-300 ${
            showHide
              ? "w-[70%] -translate-x-0 visible opacity-100"
              : "-translate-x-96 w-[0px]  invisible opacity-0"
          }  z-[999]`}
        >
          <div className="z-50 px-6 sm:px-12 pt-5">
            <ul className="flex flex-col lg:flex-row justify-center gap-7 px-1 text-xl font-semibold text-white">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#ef672a]" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive ? "text-[#ef672a]" : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructors"
                  className={({ isActive }) =>
                    isActive ? "text-[#ef672a] bg-transparent" : ""
                  }
                >
                  Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? "text-[#ef672a] bg-transparent" : ""
                  }
                >
                  Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? "text-[#ef672a] bg-transparent" : ""
                  }
                >
                  Contact Us
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
              <div className="bg-[#ef672a] text-white text-lg border py-1 rounded cursor-pointer px-2 flex justify-between gap-4 relative  font-medium mt-4">
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>
                <span className="absolute w-[1px] h-[15px] bg-slate-200 bg-opacity-70 top-[12px] left-[42%]"></span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
