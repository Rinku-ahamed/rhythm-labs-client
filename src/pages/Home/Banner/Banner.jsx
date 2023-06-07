import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <Carousel className="text-center">
      <div className="relative">
        <img src="https://i.ibb.co/PcvfjCS/SLIDE2.jpg" />
        <div className="absolute top-1/2 left-1/2 z-30 w-2/3 text-center -translate-y-1/2 -translate-x-1/2">
          <h2 className="text-5xl text-white font-bold mb-4">
            Discover the Magic of Music
          </h2>
          <p className="text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem modi praesentium recusandae voluptates voluptatum est
            tempora deleniti. Blanditiis ullam voluptate officia? Nulla fuga
            quis molestiae soluta consequatur, aspernatur cum illum.
          </p>
          <Link to="/classes">
            <Button text="Explore Classes"></Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.ibb.co/qCHQmtn/SLIDE1.jpg" />
        <div className="absolute top-1/2 left-1/2 z-30 w-2/3 text-center -translate-y-1/2 -translate-x-1/2">
          <h2 className="text-5xl text-white font-bold mb-4">
            Your Musical Skills
          </h2>
          <p className="text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem modi praesentium recusandae voluptates voluptatum est
            tempora deleniti. Blanditiis ullam voluptate officia? Nulla fuga
            quis molestiae soluta consequatur, aspernatur cum illum.
          </p>
          <Link to="/classes">
            <Button text="Explore Classes"></Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.ibb.co/PcvfjCS/SLIDE2.jpg" />
        <div className="absolute top-1/2 left-1/2 z-30 w-2/3 text-center -translate-y-1/2 -translate-x-1/2">
          <h2 className="text-5xl text-white font-bold mb-4">
            The Destination for Music Education
          </h2>
          <p className="text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem modi praesentium recusandae voluptates voluptatum est
            tempora deleniti. Blanditiis ullam voluptate officia? Nulla fuga
            quis molestiae soluta consequatur, aspernatur cum illum.
          </p>
          <Link to="/classes">
            <Button text="Explore Classes"></Button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
