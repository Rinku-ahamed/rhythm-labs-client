import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import PaymentTableRow from "./PaymentTableRow";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxios();
  const { data: history = [] } = useQuery({
    queryKey: ["isPaymentHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://rhythm-labs-server.vercel.app/paymentHistory/${user?.email}`
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
            <th className="bg-[#141b29] text-white">Date</th>
            <th className="bg-[#141b29] text-white">Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <PaymentTableRow
              key={item._id}
              index={index}
              item={item}
            ></PaymentTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
