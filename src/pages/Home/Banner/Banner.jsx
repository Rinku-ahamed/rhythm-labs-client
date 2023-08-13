import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-slideshow-image/dist/styles.css";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Banner1 from "../../../assets/SLIDE1.jpg";
import "react-slideshow-image/dist/styles.css";
import "./Banner.css";
const Banner = () => {
  return (
    // <Slide autoplay={false}>
    //   <div className="each-slide-effect">
    //     <div
    //       className="bg-image"
    //       style={{
    //         backgroundImage: `linear-gradient(#00000096,#00000096),url(https://i.ibb.co/PcvfjCS/SLIDE2.jpg)`,
    //       }}
    //     >
    //       <div className="text-center px-10 md:px-10 md:w-2/3">
    //         <h3 className="text-white text-2xl sm:text-4xl md:text-6xl">
    //           Discover the Magic of Music
    //         </h3>
    //         <p className="mb-8 text-slate-300 mt-5 text-[16px] sm:text-lg">
    //           Rhythm Labs is an innovative music website where the magic of
    //           rhythm takes center stage. Our mission is to provide a dynamic and
    //           immersive learning environment for aspiring musicians.{" "}
    //         </p>
    //         <Link to="/classes">
    //           <Button text="Explore Classes"></Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="each-slide-effect">
    //     <div
    //       className="bg-image"
    //       style={{
    //         backgroundImage: `linear-gradient(#00000096,#00000096),url(https://i.ibb.co/qCHQmtn/SLIDE1.jpg)`,
    //       }}
    //     >
    //       <div className="text-center  md:w-2/3">
    //         <h3 className="text-white text-6xl">Elevate Your Musical Skills</h3>
    //         <p className="mb-8 text-slate-300 mt-5 text-lg">
    //           At Rhythm Labs, we believe that rhythm is the heartbeat of music,
    //           and our team of experienced instructors is passionate about
    //           sharing their knowledge and expertise. From beginner basics to
    //           advanced techniques,
    //         </p>
    //         <Link to="/classes">
    //           <Button text="Explore Classes"></Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="each-slide-effect">
    //     <div
    //       className="bg-image"
    //       style={{
    //         backgroundImage: `linear-gradient(#00000096,#00000096),url(https://i.ibb.co/PcvfjCS/SLIDE2.jpg)`,
    //       }}
    //     >
    //       <div className="text-center  md:w-2/3">
    //         <h3 className="text-white text-6xl">Empowering Musicianship</h3>
    //         <p className="mb-8 text-slate-300 mt-5 text-lg">
    //           Join Rhythm Labs today and embark on a rhythmic adventure that
    //           will transform your understanding and appreciation of music.
    //         </p>
    //         <Link to="/classes">
    //           <Button text="Explore Classes"></Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </Slide>
    <section
      className="flex items-center justify-center h-[350px] lg:h-[550px] z-10"
      style={{
        backgroundImage: `linear-gradient(#0a0727ad,#0a0727ad),url(${Banner1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center px-6 lg:px-0">
        <h1 className="text-4xl lg:text-6xl text-white font-bold lg:leading-[70px] mb-5">
          Connect with Skilled Mentors for a <br className="hidden md:block" />{" "}
          Transformative Learning Experience
        </h1>
        <p className="text-white">
          We are providing high-quality online courses to improve your skill.
          Our all <br className="hidden md:block" /> instructors are highly
          experienced and experts.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Button>
            <Link to="">Contact Us</Link>
          </Button>
          <Link
            to=""
            className={`bg-white text-[#ef672a] text-xl px-6 md:px-8 border border-[#ef672a] py-2 transition duration-200 rounded cursor-pointer hover:bg-[#ef672a] hover:text-white hover:scale-95 hover:border-[#ef672a] font-semibold`}
          >
            See Classes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
