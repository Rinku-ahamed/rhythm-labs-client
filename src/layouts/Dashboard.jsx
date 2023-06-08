import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useUsers from "../hooks/useUsers";
import useAuth from "../hooks/useAuth";
import Container from "../shared/Container/Container";

const Dashboard = () => {
  const { isAdmin } = useAdmin();
  const { user } = useAuth();
  const { users } = useUsers();
  const userRole = users.find((usr) => usr.email === user.email);
  return (
    <div>
      <Container>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ps-8 pt-4">
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side bg-[#141b29]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            {userRole.role === "student" && (
              <ul className="menu p-4 w-80 h-full text-white">
                {/* Sidebar content here */}
                <li>
                  <Link to="/dashboard/selectedclasses">
                    My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolledclasses">
                    My Enrolled Classes
                  </Link>
                </li>
              </ul>
            )}
            {userRole.role === "instructor" && (
              <ul className="menu p-4 w-80 h-full text-white">
                {/* Sidebar content here */}
                <li>
                  <Link to="/dashboard/addclass">Add a Class</Link>
                </li>
                <li>
                  <Link to="/dashboard/myclasses">My Classes</Link>
                </li>
              </ul>
            )}
            {isAdmin && (
              <ul className="menu p-4 w-80 h-full text-white">
                {/* admin content here */}
                <li>
                  <Link to="/dashboard/manageusers">Manage Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/manangeclasses">Manage Classes</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
