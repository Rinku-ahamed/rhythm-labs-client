import { toast } from "react-hot-toast";
import Button from "../../../components/Button/Button";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useInstructor from "../../../hooks/useInstructor";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { useNavigate } from "react-router-dom";
import ShowAnimation from "../../../components/ShowAnimation/ShowAnimation";

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
      fetch("https://rhythm-labs-server.vercel.app/selectedClass", {
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
    <ShowAnimation>
      <div className="flex flex-col bg-base-100 shadow-xl border rounded-t">
        <div>
          <figure>
            <img
              src={item?.classImage}
              alt="Shoes"
              className="h-40 md:h-48 w-full object-cover rounded-t"
            />
          </figure>
        </div>
        <div className={`flex flex-col gap-1 px-3 py-2 mb-3`}>
          <h2 className="text-xl font-semibold">{item?.className}</h2>
          <p className="text-lg">Price: ${item?.price}</p>
          <p className="text-lg mt-auto">Seats: {item?.seats}</p>
        </div>
        <div className="mt-auto w-full">
          {isAdmin?.admin || isInstructor?.instructor || item?.seats == 0 ? (
            <button
              className="bg-[#ef672a] text-white text-xl px-8 border py-2 opacity-50 rounded w-full mt-auto"
              disabled={true}
            >
              Select
            </button>
          ) : (
            <div onClick={() => handleSelect(item)}>
              {/* TODO:button disabled condition */}
              <Button size={"100%"} className="mt-auto">
                Select
              </Button>
            </div>
          )}
        </div>
      </div>
    </ShowAnimation>
  );
};

export default ClassCard;
