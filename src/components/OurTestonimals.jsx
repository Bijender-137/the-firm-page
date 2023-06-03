import React from "react";
import { Container } from "react-bootstrap";
import Slider_1 from "../assets/img/png/slider_1.png";
import Slider_2 from "../assets/img/png/slider_2.png";
import Slider_3 from "../assets/img/png/slider_3.png";
import Slider_4 from "../assets/img/png/slider_4.png";
import Slider_5 from "../assets/img/png/slider_5.png";
import Slider from "react-slick";

const OurTestonimals = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <>
      <section className="py-5">
        <Container className="py-xl-5">
          <div className="text-center">
            <h2 className="ff_nunito fw_900 fs_4xl">Our Testimonials</h2>
          </div>
          <Slider {...settings}>
            <div>
              <img src={Slider_1} alt="Slider_1" />
            </div>
            <div>
              <img src={Slider_2} alt="Slider_2" />
            </div>
            <div>
              <img src={Slider_3} alt="Slider_3" />
            </div>
            <div>
              <img src={Slider_4} alt="Slider_4" />
            </div>
            <div>
              <img src={Slider_5} alt="Slider_5" />
            </div>
            <div>
              <img src={Slider_1} alt="Slider_1" />
            </div>
            <div>
              <img src={Slider_2} alt="Slider_2" />
            </div>
            <div>
              <img src={Slider_3} alt="Slider_3" />
            </div>
            <div>
              <img src={Slider_4} alt="Slider_4" />
            </div>
            <div>
              <img src={Slider_5} alt="Slider_5" />
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default OurTestonimals;
