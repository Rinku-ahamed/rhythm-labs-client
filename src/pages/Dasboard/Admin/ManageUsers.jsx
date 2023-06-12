import { toast } from "react-hot-toast";
import useUsers from "../../../hooks/useUsers";

const ManageUsers = () => {
  const { users, refetch } = useUsers();
  const handleMakeInstructor = (id) => {
    fetch(
      `https://rhythm-labs-server.vercel.app/users/roleUpdate?id=${id}&role=instructor`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`Successfully updated user role!!`);
        }
      });
  };
  const handleMakeAdmin = (id) => {
    fetch(
      `https://rhythm-labs-server.vercel.app/users/roleUpdate?id=${id}&role=admin`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`Successfully updated user role!!`);
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
              <th className="bg-[#141b29] text-white">User Name</th>
              <th className="bg-[#141b29] text-white">User Email</th>
              <th className="bg-[#141b29] text-white">User Role</th>
              <th className="bg-[#141b29] text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <th>
                  <button
                    onClick={() => handleMakeInstructor(user._id)}
                    disabled={user.role === "instructor" && true}
                    className="btn-primary py-2 px-3 text-white rounded-md me-3"
                  >
                    Make Instructor
                  </button>
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    disabled={user.role === "admin" && true}
                    className="btn-secondary py-2 px-3 text-white rounded-md"
                  >
                    Make Admin
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

export default ManageUsers;
