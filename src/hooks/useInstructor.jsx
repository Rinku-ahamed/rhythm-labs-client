import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user, loading } = useAuth();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://rhythm-labs-server.vercel.app/users/instructor/${user?.email}`
      );
      return res.json();
    },
  });
  return { isInstructor, isInstructorLoading };
};

export default useInstructor;
