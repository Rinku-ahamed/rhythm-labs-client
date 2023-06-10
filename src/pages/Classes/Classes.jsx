import { toast } from "react-hot-toast";
import Button from "../../components/Button/Button";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useClasses from "../../hooks/useClasses";
import useInstructor from "../../hooks/useInstructor";
import Container from "../../shared/Container/Container";
import PageCover from "../../shared/PageCover/PageCover";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const [classes] = useClasses();
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructor();
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleSelect = (id) => {
    if (!user) {
      toast.error("Please login before select this course");
      navigate("/login");
      return;
    }
    console.log(id);
  };
  return (
    <>
      <PageCover title="Classes"></PageCover>
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {classes.map((cls) => (
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
              <div className="card-body">
                <h2 className="text-2xl font-bold text-amber-500">
                  {cls?.className}
                </h2>
                <p className="text-lg">Instructor: {cls.instructorName}</p>
                <p>Available Seats: {cls?.seats}</p>
                <p>Price: ${cls?.price}</p>
                <div className="card-actions justify-start mt-3">
                  {isAdmin?.admin ||
                  isInstructor?.instructor ||
                  cls?.seats == 0 ? (
                    <button
                      className="bg-[#ef672a] text-white text-xl px-8 border py-2 opacity-50 rounded"
                      disabled={true}
                    >
                      Select
                    </button>
                  ) : (
                    <div onClick={() => handleSelect(cls._id)}>
                      <Button text="Select"></Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Classes;
