import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery(["isClasses"], {
    queryFn: async () => {
      const res = await fetch("https://rhythm-labs-server.vercel.app/classes");
      return res.json();
    },
  });
  return [classes, refetch, isLoading];
};

export default useClasses;
