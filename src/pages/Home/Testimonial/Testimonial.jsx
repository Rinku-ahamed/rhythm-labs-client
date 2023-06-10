import Slider from "react-slick";
import Container from "../../../shared/Container/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonial = () => {
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
      className="mt-20 pb-20"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <Container>
        <div className="text-center pt-16 pb-14">
          <h4 className="text-3xl text-slate-200 font-semibold">
            Testimonials
          </h4>
          <h3 className="text-6xl font-bold text-white">
            What our clients say
          </h3>
        </div>
        <div className="px-10">
          <Slider {...settings}>
            <div className="p-10 px-20 shadow bg-white">
              <div className="sm:flex justify-center gap-6 mb-6">
                <div className="avatar">
                  <div className="w-20 h-20 rounded-full">
                    <img src="https://i.ibb.co/jgscYX6/1-1.jpg" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">PAULA WILSON</h4>
                  <p>Media Analyst / SkyNet</p>
                  <Rating style={{ maxWidth: 80 }} value="4" readOnly />
                </div>
              </div>
              <p className="text-xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                sem tempor, varius quam at, luctus dui. Mauris magna metus,
                dapibus nec turpis vel, semper malesuada ante, commodo iacul
                viverra.
              </p>
            </div>
            <div className="p-10 px-20 shadow bg-white">
              <div className="sm:flex justify-center gap-6 mb-6">
                <div className="avatar">
                  <div className="w-20 h-20 rounded-full">
                    <img src="https://i.ibb.co/jgscYX6/1-1.jpg" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">PAULA WILSON</h4>
                  <p>Media Analyst / SkyNet</p>
                  <Rating style={{ maxWidth: 80 }} value="4" readOnly />
                </div>
              </div>
              <p className="text-xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                sem tempor, varius quam at, luctus dui. Mauris magna metus,
                dapibus nec turpis vel, semper malesuada ante, commodo iacul
                viverra.
              </p>
            </div>
            <div className="p-10 px-20 shadow bg-white">
              <div className="sm:flex justify-center gap-6 mb-6">
                <div className="avatar">
                  <div className="w-20 h-20 rounded-full">
                    <img src="https://i.ibb.co/jgscYX6/1-1.jpg" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">PAULA WILSON</h4>
                  <p>Media Analyst / SkyNet</p>
                  <Rating style={{ maxWidth: 80 }} value="4" readOnly />
                </div>
              </div>
              <p className="text-xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                sem tempor, varius quam at, luctus dui. Mauris magna metus,
                dapibus nec turpis vel, semper malesuada ante, commodo iacul
                viverra.
              </p>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
