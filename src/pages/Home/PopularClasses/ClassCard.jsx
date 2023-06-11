import { toast } from "react-hot-toast";
import Button from "../../../components/Button/Button";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useInstructor from "../../../hooks/useInstructor";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ item }) => {
  const [selectedClass, refetch, isLoading] = useSelectedClass();
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructor();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return;
  }
  const handleSelect = (item) => {
    const exitingClass = selectedClass.find(
      (slClass) => slClass.classId === item._id
    );

    if (!user) {
      toast.error("Please login before select this course");
      navigate("/login");
      return;
    }
    if (exitingClass) {
      toast.error("Already selected this class");
      return;
    } else {
      const selectedItem = {
        className: item.className,
        classImage: item.classImage,
        instructorEmail: item.instructorEmail,
        instructorName: item.instructorName,
        classId: item._id,
        price: parseFloat(item.price),
        seats: parseInt(item.seats),
        userEmail: user.email,
      };
      fetch("http://localhost:5000/selectedClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          if (data.insertedId) {
            toast.success("Successfully added data in database");
          }
        });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={item?.classImage}
          alt="Shoes"
          className="h-64 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-semibold">{item?.className}</h2>
        <p className="text-lg">Price: ${item?.price}</p>
        <p className="text-lg">Seats: {item?.seats}</p>
        <div className="card-actions justify-start mt-3">
          {isAdmin?.admin || isInstructor?.instructor || item?.seats == 0 ? (
            <button
              className="bg-[#ef672a] text-white text-xl px-8 border py-2 opacity-50 rounded"
              disabled={true}
            >
              Select
            </button>
          ) : (
            <div onClick={() => handleSelect(item)}>
              {/* TODO:button disabled condition */}
              <Button text="Select"></Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
