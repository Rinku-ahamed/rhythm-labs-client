import { toast } from "react-hot-toast";
import useClasses from "../../../hooks/useClasses";
import Modal from "react-modal";
import { useState } from "react";
const ManageClasses = () => {
  const [classes, refetch] = useClasses();
  const [modalIsOpen, setIsOpen] = useState(false);
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
  let subtitle;
  // const handleFeedback = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   form.reset();
  //   // const message = form.feedback.value;
  //   // fetch(
  //   //   `http://localhost:5000/classes/feedback?feed=${message}&id=${classId}`,
  //   //   {
  //   //     method: "PATCH",
  //   //   }
  //   // )
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //   });
  // };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
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
                  <button
                    onClick={openModal}
                    className="btn-primary py-2 px-3 text-white rounded-md"
                  >
                    feedback
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                  >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                      <input />
                      <button>tab navigation</button>
                      <button>stays</button>
                      <button>inside</button>
                      <button>the modal</button>
                    </form>
                  </Modal>
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
