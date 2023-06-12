import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
const MyEnrolledClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxios();
  const { data: enrolledClass = [] } = useQuery({
    queryKey: ["enrolled"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://rhythm-labs-server.vercel.app/enrolledClass/${user?.email}`
      );
      return res.data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="bg-[#141b29] text-white">#</th>
            <th className="bg-[#141b29] text-white">ClassName</th>
            <th className="bg-[#141b29] text-white">ClassImage</th>
            <th className="bg-[#141b29] text-white">instructorName</th>
            <th className="bg-[#141b29] text-white">instructorEmail</th>
            <th className="bg-[#141b29] text-white">Price</th>
          </tr>
        </thead>
        <tbody>
          {enrolledClass.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{item.className}</td>
              <td>
                <div>
                  <img
                    src={item.classImage}
                    alt="Avatar Tailwind CSS Component"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </td>
              <td>{item.instructorName}</td>
              <td>{item.instructorEmail}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEnrolledClasses;
