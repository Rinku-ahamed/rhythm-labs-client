import useUsers from "../../../hooks/useUsers";

const ManageUsers = () => {
  const { users } = useUsers();

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
                  <button className="btn-primary py-2 px-3 text-white rounded-md me-3">
                    Make Instructor
                  </button>
                  <button className="btn-secondary py-2 px-3 text-white rounded-md">
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
