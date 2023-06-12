import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const {
    data: isAdmin,
    isLoading: isAdminLoading,
    refetch,
  } = useQuery({
    queryKey: ["isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://rhythm-labs-server.vercel.app/users/admin/${user?.email}`
      );
      return res.json();
    },
  });

  return { isAdmin, isAdminLoading, refetch };
};

export default useAdmin;
