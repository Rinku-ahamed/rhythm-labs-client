import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
const useStudent = () => {
  const { user, loading } = useAuth();
  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/student/${user?.email}`
      );
      return res.json();
    },
  });

  return { isStudent, isStudentLoading };
};

export default useStudent;
