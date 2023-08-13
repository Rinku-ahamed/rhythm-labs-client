import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import ClassCard from "./ClassCard";
import useAuth from "../../../hooks/useAuth";
import ShowAnimation from "../../../components/ShowAnimation/ShowAnimation";

const PopularClasses = () => {
  const { darkLight } = useAuth();
  const [axiosSecure] = useAxios();
  const { data: popularClasses = [] } = useQuery({
    queryKey: ["isPopularClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "https://rhythm-labs-server.vercel.app/popularClasses"
      );
      return res.data;
    },
  });
  return (
    <section
      className={`pt-20 pb-20 ${darkLight && "bg-[#0d1527] text-white"}`}
    >
      <Container>
        <ShowAnimation>
          <SectionTitle
            subTitle={"Our Classes"}
            title={"Most Popular Classes"}
          ></SectionTitle>
        </ShowAnimation>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularClasses.map((pClass) => (
            <ClassCard key={pClass._id} item={pClass}></ClassCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularClasses;
