import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Container from "../shared/Container/Container";
import useStudent from "../hooks/useStudent";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const { isAdmin } = useAdmin();
  const { isStudent } = useStudent();
  const { isInstructor } = useInstructor();
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
            {isStudent?.student && (
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
            {isInstructor?.instructor && (
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
            {isAdmin?.admin && (
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
