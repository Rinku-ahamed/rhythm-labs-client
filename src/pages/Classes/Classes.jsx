import { toast } from "react-hot-toast";
import Button from "../../components/Button/Button";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useClasses from "../../hooks/useClasses";
import useInstructor from "../../hooks/useInstructor";
import Container from "../../shared/Container/Container";
import PageCover from "../../shared/PageCover/PageCover";
import { useNavigate } from "react-router-dom";
import useSelectedClass from "../../hooks/useSelectedClass";

const Classes = () => {
  const [selectedClass, refetch, isLoading] = useSelectedClass();
  const [classes] = useClasses();
  const classData = classes.filter((cls) => cls.status === "approved");
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructor();
  const { user } = useAuth();
  const navigate = useNavigate();
  if (isLoading) {
    return;
  }
  console.log(selectedClass);
  const handleSelect = (item) => {
    const exitingClass = selectedClass.find(
      (slClass) => slClass.classId === item._id
    );
    console.log(item);
    console.log(exitingClass);
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
    <>
      <PageCover title="Classes"></PageCover>
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-5">
          {classData.map((cls) => (
            <div
              key={cls._id}
              className={`card ${
                cls?.seats == 0 ? "bg-red-600" : "bg-base-100"
              } shadow-xl`}
            >
              <figure>
                <img
                  src={cls?.classImage}
                  alt="Shoes"
                  className="h-60 w-full object-cover object-center"
                />
              </figure>
              <div className="flex flex-col py-2 px-2">
                <h2 className="text-2xl font-bold text-amber-500">
                  {cls?.className}
                </h2>
                <p className="text-lg">Instructor: {cls.instructorName}</p>
                <p>Available Seats: {cls?.seats}</p>
                <p>Price: ${cls?.price}</p>
              </div>
              <div className=" mt-auto">
                {isAdmin?.admin ||
                isInstructor?.instructor ||
                cls?.seats == 0 ? (
                  <button
                    className="bg-[#ef672a] text-white text-xl px-8 border py-2 opacity-50 rounded w-full"
                    disabled={true}
                  >
                    Select
                  </button>
                ) : (
                  <div onClick={() => handleSelect(cls)}>
                    {/* TODO:button disabled condition */}
                    <Button size={"100%"}>Select</Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Classes;
