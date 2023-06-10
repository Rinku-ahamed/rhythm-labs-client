import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dasboard/Admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../pages/Dasboard/Admin/ManageClasses";
import MyEnrolledClasses from "../pages/Dasboard/Student/MyEnrolledClasses";
import MySelectedClasses from "../pages/Dasboard/Student/MySelectedClasses";
import AddClass from "../pages/Dasboard/Instructor/AddClass";
import MyClasses from "../pages/Dasboard/Instructor/MyClasses";
import InstructorRoute from "./InstructorRoute";
import UpdatedClass from "../pages/Dasboard/Instructor/UpdatedClass";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Payment from "../pages/Dasboard/Student/Payment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manangeclasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "selectedclasses",
        element: (
          <PrivateRoute>
            <MySelectedClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "enrolledclasses",
        element: (
          <PrivateRoute>
            <MyEnrolledClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      {
        path: "updatedClass/:id",
        element: (
          <InstructorRoute>
            <UpdatedClass />
          </InstructorRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
      },
      {
        path: "payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
