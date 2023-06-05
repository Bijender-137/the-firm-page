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
    autoplay:true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5 active_mode">
        <Container className="py-xl-5">
          <div className="text-center">
            <h2 className="ff_nunito fw_900 fs_4xl">Our Testimonials</h2>
          </div>
          <Slider {...settings} className="mt-5 ">
            <div className="p-5">
              <img className="slider_img_w_140 " src={Slider_1} alt="Slider_1" />
            </div>
            <div className="p-5">
              <img className="slider_img_w_140" src={Slider_2} alt="Slider_2" />
            </div>
            <div className="p-5">
              <img className="slider_img_w_140" src={Slider_3} alt="Slider_3" />
            </div>
            <div className="p-5">
              <img className="slider_img_w_140" src={Slider_4} alt="Slider_4" />
            </div>
            <div className="p-5">
              <img className="slider_img_w_140" src={Slider_5} alt="Slider_5" />
            </div>
            <div className="p-5">
              <img className="slider_img_w_140" src={Slider_1} alt="Slider_1" />
            </div>
            <div className="p-5">
              <img className="slider_img_w_140" src={Slider_2} alt="Slider_2" />
            </div>
            <div className="p-5">
              <img className="slider_img_w_140" src={Slider_3} alt="Slider_3" />
            </div>
            <div className="p-5">
              <img className="slider_img_w_140" src={Slider_4} alt="Slider_4" />
            </div>
            <div className="p-5">
              <img className="slider_img_w_140" src={Slider_5} alt="Slider_5" />
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default OurTestonimals;
