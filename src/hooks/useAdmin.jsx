import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const { data: isAdmin, isLoading: loading } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/admin/${user?.email}`
      );
      return res.json();
    },
  });
  return [isAdmin, loading];
};

export default useAdmin;
