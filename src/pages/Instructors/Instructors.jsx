import useUsers from "../../hooks/useUsers";
import Container from "../../shared/Container/Container";
import PageCover from "../../shared/PageCover/PageCover";

const Instructors = () => {
  const { users } = useUsers();
  const instructors = users.filter(
    (instructor) => instructor.role === "instructor"
  );
  return (
    <div>
      <PageCover title="All Instructor" />
      <Container>
        <div className="grid md:grid-cols-3 gap-10 mt-10 pb-10">
          {instructors.slice(0, 8).map((instructor) => (
            <div
              key={instructor._id}
              className="transition duration-300 hover:shadow-xl p-4 text-center"
            >
              <img
                src={instructor.image}
                alt=""
                className=" border-2 border-orange-400 p-2 transition duration-300 hover:border-[4px] hover:p-1 h-[360px] object-cover"
              />
              <h2 className="text-2xl mt-2 text-[#0d1527] font-semibold">
                {instructor.name}
              </h2>
              <p>{instructor.email}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instructors;
