import { toast } from "react-hot-toast";
import useClasses from "../../../hooks/useClasses";

const ManageClasses = () => {
  const [classes, refetch] = useClasses();
  console.log(classes);
  const handleApprovedStatus = (id) => {
    fetch(
      `http://localhost:5000/classes/statusUpdate?id=${id}&status=approved`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`Successfully updated status!!`);
        }
      });
  };
  const handleApprovedDeny = (id) => {
    fetch(`http://localhost:5000/classes/statusUpdate?id=${id}&status=deny`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`Successfully updated status!!`);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-[#141b29] text-white">#</th>
              <th className="bg-[#141b29] text-white">Class Image</th>
              <th className="bg-[#141b29] text-white">Class name</th>
              <th className="bg-[#141b29] text-white">Instructor name</th>
              <th className="bg-[#141b29] text-white">Instructor email</th>
              <th className="bg-[#141b29] text-white">Available seats</th>
              <th className="bg-[#141b29] text-white">Price</th>
              <th className="bg-[#141b29] text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div>
                    <img
                      src={item.classImage}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                </td>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>{item.seats}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    disabled={
                      item.status === "approved"
                        ? true
                        : item.status === "deny"
                        ? true
                        : false
                    }
                    className="btn-primary py-2 px-3 text-white rounded-md"
                    onClick={() => handleApprovedStatus(item._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn-secondary py-2 px-3 text-white rounded-md"
                    disabled={
                      item.status === "approved"
                        ? true
                        : item.status === "deny"
                        ? true
                        : false
                    }
                    onClick={() => handleApprovedDeny(item._id)}
                  >
                    Deny
                  </button>
                  <button className="btn-primary py-2 px-3 text-white rounded-md">
                    feedback
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
