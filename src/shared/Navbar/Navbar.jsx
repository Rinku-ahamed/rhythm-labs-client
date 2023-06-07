import { Link } from "react-router-dom";

const Navbar = () => {
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
            <Link
              to="/"
              className={(isActive) => (isActive ? "text-[#141b29]" : "")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/instructors"
              className={(isActive) => (isActive ? "text-[#141b29]" : "")}
            >
              Instructors
            </Link>
          </li>
          <li>
            <Link
              to="/classes"
              className={(isActive) => (isActive ? "text-[#141b29]" : "")}
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={(isActive) => (isActive ? "text-[#141b29]" : "")}
            >
              Dashboard{" "}
            </Link>
          </li>
        </ul>
        <div className="bg-[#ef672a] text-white text-xl px-8 border py-2 transition duration-200 rounded ms-6 cursor-pointer hover:bg-white hover:text-[#ef672a] hover:scale-95 hover:border-[#ef672a] font-semibold">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
