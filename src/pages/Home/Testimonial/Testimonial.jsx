import Slider from "react-slick";
import Container from "../../../shared/Container/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAuth from "../../../hooks/useAuth";
const Testimonial = () => {
  const { darkLight } = useAuth();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section
      style={{
        backgroundImage:
          "url(https://i.ibb.co/MSqzBqC/portrait-woman-singing-microphone.jpg)",
      }}
      className={`pb-20 ${darkLight && "bg-[#0d1527]"}`}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <Container>
        <div className="text-center pt-16 pb-14">
          <h4 className="text-xl text-slate-200 font-semibold">Testimonials</h4>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            What our clients say
          </h3>
        </div>
        <div className="md:px-10">
          <Slider {...settings}>
            <div className="p-10 px-6 md:px-20 shadow bg-white">
              <div className="flex justify-center gap-6 mb-6">
                <div className="avatar">
                  <div className="w-20 h-20 rounded-full">
                    <img src="https://i.ibb.co/PG9xkd6/download.jpg" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">Emily Thompson</h4>
                  <p>Media Analyst / SkyNet</p>
                  <Rating style={{ maxWidth: 80 }} value="4" readOnly />
                </div>
              </div>
              <p className="text-[14px] sm:text-xl text-center">
                Rhythm Labs has been a game-changer for my piano journey. The
                instructors are incredibly knowledgeable and patient, guiding me
                through complex rhythms with ease. The interactive lessons and
                exercises have helped me improve my timing and precision. I
                highly recommend Rhythm Labs to anyone looking to enhance their
                musical skills!
              </p>
            </div>
            <div className="p-10 px-6 md:px-20 shadow bg-white">
              <div className="flex justify-center gap-6 mb-6">
                <div className="avatar">
                  <div className="w-20 h-20 rounded-full">
                    <img src="https://i.ibb.co/7VSLrXS/methode.jpg" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">David Patel</h4>
                  <p>Media Analyst / SkyNet</p>
                  <Rating style={{ maxWidth: 80 }} value="4" readOnly />
                </div>
              </div>
              <p className="text-xl text-center">
                As a drum enthusiast, Rhythm Labs has been my go-to resource for
                honing my drumming skills. The variety of rhythmic patterns and
                techniques covered in their lessons is impressive. The
                instructors are talented and provide valuable feedback to help
                me improve my drumming. Rhythm Labs has truly elevated my
                drumming game!
              </p>
            </div>
            <div className="p-10 px-6 md:px-20 shadow bg-white">
              <div className="flex justify-center gap-6 mb-6">
                <div className="avatar">
                  <div className="w-20 h-20 rounded-full">
                    <img src="https://i.ibb.co/jgscYX6/1-1.jpg" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">Sophia Miller</h4>
                  <p>Media Analyst / SkyNet</p>
                  <Rating style={{ maxWidth: 80 }} value="4" readOnly />
                </div>
              </div>
              <p className="text-xl text-center">
                Rhythm Labs has been instrumental in my guitar learning journey.
                The comprehensive curriculum and well-structured lessons have
                enabled me to understand complex rhythm patterns and
                syncopation. The instructors are passionate and supportive,
                always pushing me to achieve my best. Rhythm Labs is a fantastic
                platform for aspiring guitarists!
              </p>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
