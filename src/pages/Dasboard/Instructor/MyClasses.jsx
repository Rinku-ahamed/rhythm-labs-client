import { Bars } from "react-loader-spinner";
import useClasses from "../../../hooks/useClasses";
import useAuth from "../../../hooks/useAuth";

const MyClasses = () => {
  const { user } = useAuth();
  const [classes, , isLoading] = useClasses();
  const myClasses = classes.filter((cls) => cls.instructorEmail === user.email);
  if (isLoading) {
    return (
      <Bars
        height="100"
        width="100"
        color="#ef672a"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
  // className,
  // classImage: img,
  // instructorEmail,
  // instructorName,
  // price: parseFloat(price),
  // seats: parseInt(seats),
  // status: "pending",
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="bg-[#141b29] text-white">#</th>
            <th className="bg-[#141b29] text-white">ClassName</th>
            <th className="bg-[#141b29] text-white">ClassImage</th>
            <th className="bg-[#141b29] text-white">Price</th>
            <th className="bg-[#141b29] text-white">Seats</th>
            <th className="bg-[#141b29] text-white">Status</th>
            <th className="bg-[#141b29] text-white">Enrolled Students</th>
            <th className="bg-[#141b29] text-white">Feedback</th>
            <th className="bg-[#141b29] text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {myClasses.map((item, index) => (
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
              <td>${item.price}</td>
              <td>{item.seats}</td>
              <td>
                <span className="bg-green-500 text-white px-2 py-1 font-semibold rounded">
                  {item.status}
                </span>
              </td>
              <td>0</td>
              <td>
                <button className="btn btn-primary btn-xs">See Feedback</button>
              </td>
              <th>
                <button className="btn btn-warning btn-xs">Update</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
