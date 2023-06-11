import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import moment from "moment";
const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxios();
  const { data: history = [] } = useQuery({
    queryKey: ["isPaymentHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:5000/paymentHistory/${user?.email}`
      );
      return res.data;
    },
  });
  const dateFormat = () => {
    const timestamp = "2023-06-11T05:17:44.680Z";
    const formattedDate = moment(timestamp).format("YYYY/M/D");
    return formattedDate;
  };

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
            <th className="bg-[#141b29] text-white">Date</th>
            <th className="bg-[#141b29] text-white">Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
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
              <td>{dateFormat()}</td>
              <td>{item.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
