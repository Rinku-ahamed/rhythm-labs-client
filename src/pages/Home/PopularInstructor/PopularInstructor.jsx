import useAuth from "../../../hooks/useAuth";
import useUsers from "../../../hooks/useUsers";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

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
        <SectionTitle
          title={"Our Popular Instructor"}
          subTitle={"Our Instructor"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {instructors.slice(0, 8).map((instructor) => (
            <div
              key={instructor._id}
              className="transition duration-300 hover:shadow-xl p-4 text-center"
            >
              <img
                src={instructor.image}
                alt=""
                className="rounded-full border-2 border-orange-400 p-2 transition duration-300 hover:border-[4px] hover:p-1"
              />
              <h2
                className={`text-2xl mt-2 ${
                  darkLight ? "text-white" : "text-[#0d1527]"
                } font-semibold`}
              >
                {instructor.name}
              </h2>
              <p>{instructor.email}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularInstructor;
