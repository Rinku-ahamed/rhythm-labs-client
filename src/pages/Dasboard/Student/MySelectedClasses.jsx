import { Link } from "react-router-dom";
import useSelectedClass from "../../../hooks/useSelectedClass";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
  const [selectedClass, refetch] = useSelectedClass();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedClass/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
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
            <th className="bg-[#141b29] text-white">Seats</th>
            <th className="bg-[#141b29] text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedClass.map((item, index) => (
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
              <td>{item.seats}</td>
              <td>
                <button
                  className="btn btn-warning btn-xs me-2"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
                <Link to={`/dashboard/payment/${item?._id}`}>
                  <button className="btn btn-secondary btn-xs">Pay Now</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySelectedClasses;
