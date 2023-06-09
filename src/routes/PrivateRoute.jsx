import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";
import { Bars } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isStudent, isStudentLoading } = useStudent();
  const location = useLocation();
  if (loading || isStudentLoading) {
    return (
      <Bars
        height="100"
        width="100"
        color="#ef672a"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
  if (user && isStudent) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
