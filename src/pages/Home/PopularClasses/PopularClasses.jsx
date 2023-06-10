import Button from "../../../components/Button/Button";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const PopularClasses = () => {
  return (
    <section className="pt-20">
      <Container>
        <SectionTitle
          subTitle={"Our Classes"}
          title={"Most Popular Classes"}
        ></SectionTitle>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/8bBZDXy/Class-1-770x440.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl font-semibold">Shoes!</h2>
              <p className="text-lg">Price: $120</p>
              <p className="text-lg">Seats: 20</p>
              <div className="card-actions justify-start">
                <Button text="Select"></Button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/8bBZDXy/Class-1-770x440.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl font-semibold">Shoes!</h2>
              <p className="text-lg">Price: $120</p>
              <p className="text-lg">Seats: 20</p>
              <div className="card-actions justify-start">
                <Button text="Select"></Button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/8bBZDXy/Class-1-770x440.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-3xl font-semibold">Shoes!</h2>
              <p className="text-lg">Price: $120</p>
              <p className="text-lg">Seats: 20</p>
              <div className="card-actions justify-start">
                <Button text="Select"></Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PopularClasses;
