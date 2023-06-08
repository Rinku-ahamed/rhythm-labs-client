import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUsers from "../hooks/useUsers";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { users } = useUsers();
  const isStudent = users.find((usr) => usr.role == "student");
  const location = useLocation();
  if (loading) {
    return <h2>Loading</h2>;
  }
  if (user && isStudent) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
