import useUsers from "../../hooks/useUsers";
import PageCover from "../../shared/PageCover/PageCover";

const Instructors = () => {
  const { users } = useUsers();
  const instructors = users.filter(
    (instructor) => instructor.role === "instructor"
  );
  return (
    <div>
      <PageCover />
      <div className="grid grid-cols-4 gap-4">
        {instructors.map((instructor) => (
          <div key={instructor._id}>
            <p>{instructor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
