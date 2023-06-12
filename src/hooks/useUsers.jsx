import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    isLoading,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://rhythm-labs-server.vercel.app/users", {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.json();
    },
  });
  return { isLoading, users, refetch };
};

export default useUsers;
