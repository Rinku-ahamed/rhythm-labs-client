import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
const useSelectedClass = () => {
  const { user } = useAuth();
  const {
    data: selectedClass = [],
    refetch,
    isLoading,
  } = useQuery(["isSelectedClasses"], {
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClass?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [selectedClass, refetch, isLoading];
};

export default useSelectedClass;
