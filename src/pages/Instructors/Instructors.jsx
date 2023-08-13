import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import Container from "../../shared/Container/Container";
import PageCover from "../../shared/PageCover/PageCover";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Instructors = () => {
  const { users } = useUsers();
  const instructors = users.filter(
    (instructor) => instructor.role === "instructor"
  );
  return (
    <div>
      <PageCover title="All Instructor" />
      <Container>
        <div className="grid md:grid-cols-4 gap-10 mt-10 pb-10 ">
          {instructors.slice(0, 8).map((instructor) => (
            <div key={instructor._id} className="p-4 text-center shadow-xl">
              <div className="w-[230px] h-[230px]">
                <img
                  src={instructor.image}
                  alt=""
                  className=" border-2 border-orange-400 p-2 transition duration-300 hover:border-[4px] hover:p-1 w-full h-full  object-cover rounded-full"
                />
              </div>
              <h2 className="text-2xl mt-2 text-[#0d1527] font-semibold">
                {instructor.name}
              </h2>
              <p>{instructor.email}</p>
              <div className="flex gap-4 items-center justify-center mt-3">
                <Link
                  to="/"
                  className="bg-[#ef672a] rounded-full text-white p-[6px]"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="/"
                  className="bg-[#ef672a] rounded-full text-white p-[6px]"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="/"
                  className="bg-[#ef672a] rounded-full text-white p-[6px]"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instructors;
