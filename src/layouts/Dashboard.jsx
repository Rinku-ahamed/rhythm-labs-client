import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Container from "../shared/Container/Container";
import useStudent from "../hooks/useStudent";
import useInstructor from "../hooks/useInstructor";
import useSelectedClass from "../hooks/useSelectedClass";

const Dashboard = () => {
  const { isAdmin } = useAdmin();
  const { isStudent } = useStudent();
  const { isInstructor } = useInstructor();
  const [selectedClass] = useSelectedClass();
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
                    <img src="https://i.ibb.co/59w6Bf4/choice.png" alt="" />
                    My Selected Classes ({selectedClass.length})
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolledclasses">
                    <img src="https://i.ibb.co/kBMrfjd/enroll.png" alt="" />
                    My Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/paymentHistory">
                    <img
                      src="https://i.ibb.co/sJM64Nc/transaction-history.png"
                      alt=""
                    />
                    Payment History
                  </Link>
                </li>
                <div className="divide-x"></div>

                <li>
                  <Link to="/">
                    <img src="https://i.ibb.co/c3rTzW3/house.png" alt="" />
                    Home
                  </Link>
                </li>
              </ul>
            )}
            {isInstructor?.instructor && (
              <ul className="menu p-4 w-80 h-full text-white">
                {/* Sidebar content here */}
                <li>
                  <Link to="/dashboard/addclass">
                    <img src="https://i.ibb.co/7kKnLxK/add.png" alt="" />
                    Add a Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myclasses">
                    <img
                      src="https://i.ibb.co/4p5tjDs/my-business.png"
                      alt=""
                    />
                    My Classes
                  </Link>
                </li>
                <div className="divide-x"></div>

                <li>
                  <Link to="/">
                    <img src="https://i.ibb.co/c3rTzW3/house.png" alt="" />
                    Home
                  </Link>
                </li>
              </ul>
            )}
            {isAdmin?.admin && (
              <ul className="menu p-4 w-80 h-full text-white">
                {/* admin content here */}
                <li>
                  <Link to="/dashboard/manageusers">
                    <img
                      src="https://i.ibb.co/hHXwZ1j/project-management.png"
                      alt=""
                    />
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manangeclasses">
                    <img src="https://i.ibb.co/njr4bYM/training.png" alt="" />
                    Manage Classes
                  </Link>
                </li>
                <div className="border border-slate-100 my-3"></div>
                <li>
                  <Link to="/">
                    <img src="https://i.ibb.co/c3rTzW3/house.png" alt="" />
                    Home
                  </Link>
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
