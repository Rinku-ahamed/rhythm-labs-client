import { toast } from "react-hot-toast";
import useClasses from "../../../hooks/useClasses";
import { useState } from "react";
const ManageClasses = () => {
  const [classes, refetch] = useClasses();
  const [classId, setClassId] = useState("");
  const handleApprovedStatus = (id) => {
    fetch(
      `https://rhythm-labs-server.vercel.app/classes/statusUpdate?id=${id}&status=approved`,
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
    fetch(
      `https://rhythm-labs-server.vercel.app/classes/statusUpdate?id=${id}&status=deny`,
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

  const handleFeedback = (event) => {
    console.log(classId);
    event.preventDefault();
    const form = event.target;
    const message = form.feedback.value;
    fetch(
      `https://rhythm-labs-server.vercel.app/classes/feedback?feed=${message}&id=${classId}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        console.log(data);
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
                    className={`btn-primary py-2 px-3 text-white rounded-md ${
                      item.status === "deny"
                        ? "opacity-50"
                        : item.status === "approved"
                        ? "opacity-50"
                        : ""
                    }`}
                    onClick={() => handleApprovedStatus(item._id)}
                  >
                    Approve
                  </button>
                  <button
                    className={`btn-secondary py-2 px-3 text-white rounded-md ${
                      item.status === "deny"
                        ? "opacity-50"
                        : item.status === "approved"
                        ? "opacity-50"
                        : ""
                    }`}
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
                  {/* TODO:very import word */}
                  <div onClick={() => setClassId(item._id)}>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      className="btn-primary py-2 px-3 text-white rounded-md"
                    >
                      feedback
                    </button>
                  </div>
                  <dialog id="my_modal_1" className="modal">
                    <div method="dialog" className="modal-box">
                      <div className="modal-action">
                        <button
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                          onClick={() =>
                            document.getElementById("my_modal_1").close()
                          }
                        >
                          X
                        </button>
                      </div>
                      <form onSubmit={handleFeedback}>
                        <textarea
                          className="textarea textarea-bordered w-full"
                          placeholder="Bio"
                          name="feedback"
                        ></textarea>
                        <input
                          type="submit"
                          value="Submit"
                          className="cursor-pointer"
                        />
                      </form>
                    </div>
                  </dialog>
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
