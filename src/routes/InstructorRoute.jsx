import { Bars } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { isInstructor, isInstructorLoading } = useInstructor();
  const location = useLocation();
  if (loading || isInstructorLoading) {
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
  if (user && isInstructor.instructor) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default InstructorRoute;
