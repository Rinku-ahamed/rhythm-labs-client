import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isStudent, isStudentLoading } = useStudent();
  const location = useLocation();
  if (loading || isStudentLoading) {
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
