import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-slideshow-image/dist/styles.css";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Banner.css";
const Banner = () => {
  return (
    <Slide autoplay={false}>
      <div className="each-slide-effect">
        <div
          className="bg-image"
          style={{
            backgroundImage: `linear-gradient(#00000096,#00000096),url(https://i.ibb.co/PcvfjCS/SLIDE2.jpg)`,
          }}
        >
          <div className="text-center md:w-2/3">
            <h3 className="text-white text-6xl">Discover the Magic of Music</h3>
            <p className="mb-8 text-slate-300 mt-5 text-lg">
              Rhythm Labs is an innovative music website where the magic of
              rhythm takes center stage. Our mission is to provide a dynamic and
              immersive learning environment for aspiring musicians.{" "}
            </p>
            <Link to="/classes">
              <Button text="Explore Classes"></Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          className="bg-image"
          style={{
            backgroundImage: `linear-gradient(#00000096,#00000096),url(https://i.ibb.co/qCHQmtn/SLIDE1.jpg)`,
          }}
        >
          <div className="text-center  md:w-2/3">
            <h3 className="text-white text-6xl">Elevate Your Musical Skills</h3>
            <p className="mb-8 text-slate-300 mt-5 text-lg">
              At Rhythm Labs, we believe that rhythm is the heartbeat of music,
              and our team of experienced instructors is passionate about
              sharing their knowledge and expertise. From beginner basics to
              advanced techniques,
            </p>
            <Link to="/classes">
              <Button text="Explore Classes"></Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          className="bg-image"
          style={{
            backgroundImage: `linear-gradient(#00000096,#00000096),url(https://i.ibb.co/PcvfjCS/SLIDE2.jpg)`,
          }}
        >
          <div className="text-center  md:w-2/3">
            <h3 className="text-white text-6xl">Empowering Musicianship</h3>
            <p className="mb-8 text-slate-300 mt-5 text-lg">
              Join Rhythm Labs today and embark on a rhythmic adventure that
              will transform your understanding and appreciation of music.
            </p>
            <Link to="/classes">
              <Button text="Explore Classes"></Button>
            </Link>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Banner;
