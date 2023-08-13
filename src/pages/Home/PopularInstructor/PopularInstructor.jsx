import { Link } from "react-router-dom";
import ShowAnimation from "../../../components/ShowAnimation/ShowAnimation";
import useAuth from "../../../hooks/useAuth";
import useUsers from "../../../hooks/useUsers";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const PopularInstructor = () => {
  const { darkLight } = useAuth();
  const { users } = useUsers();
  const instructors = users.filter(
    (instructor) => instructor.role === "instructor"
  );
  return (
    <section
      className={`pt-20 ${darkLight && "bg-[#0d1527] text-white"}  pb-10`}
    >
      <Container>
        <ShowAnimation>
          <SectionTitle
            title={"Our Popular Instructor"}
            subTitle={"Our Instructor"}
          ></SectionTitle>
        </ShowAnimation>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2 mt-10 pb-10">
          {instructors.slice(0, 4).map((instructor) => (
            <div
              key={instructor._id}
              className="transition duration-300 shadow-md md:p-4 text-center gap-5 py-4"
            >
              <div className="w-[130px] h-[130px] sm:w-[230px] sm:h-[230px] mx-auto">
                <img
                  src={instructor.image}
                  alt=""
                  className=" border-2 border-orange-400 p-2 transition duration-300 hover:border-[4px] hover:p-1 w-full h-full  object-cover rounded-full"
                />
              </div>

              <ShowAnimation>
                <h2
                  className={`text-xl sm:text-2xl mt-2 ${
                    darkLight ? "text-white" : "text-[#0d1527]"
                  } font-semibold`}
                >
                  {instructor.name}
                </h2>
              </ShowAnimation>
              <p>{instructor.email}</p>
              <div className="flex gap-4 items-center justify-center mt-3">
                <Link
                  to="/"
                  className="bg-[#ef672a] rounded-full text-white p-[3px]"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="/"
                  className="bg-[#ef672a] rounded-full text-white p-[3px]"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="/"
                  className="bg-[#ef672a] rounded-full text-white p-[3px]"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularInstructor;
