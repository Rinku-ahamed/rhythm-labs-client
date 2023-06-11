import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
  const [axiosSecure] = useAxios();
  const { data: popularClasses = [] } = useQuery({
    queryKey: ["isPopularClass"],
    queryFn: async () => {
      const res = await axiosSecure.get("http://localhost:5000/popularClasses");
      return res.data;
    },
  });
  return (
    <section className="pt-20">
      <Container>
        <SectionTitle
          subTitle={"Our Classes"}
          title={"Most Popular Classes"}
        ></SectionTitle>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularClasses.map((pClass) => (
            <ClassCard key={pClass._id} item={pClass}></ClassCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularClasses;
