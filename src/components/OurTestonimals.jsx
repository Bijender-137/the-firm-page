import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider_1 from "../assets/img/png/slider_1.png";
import Slider_2 from "../assets/img/png/slider_2.png";
import Slider_3 from "../assets/img/png/slider_3.png";
import Slider_4 from "../assets/img/png/slider_4.png";
import Slider_5 from "../assets/img/png/slider_5.png";
import Img_circel from "../assets/img/png/yellow_circel.png";
import Circel_icon from "../assets/img/png/circel_icon.png";
import Slider from "react-slick";

const OurTestonimals = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
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
          autoplay: false,
        },
      },
      {
        breakpoint: 1200,
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
          slidesToShow: 1,
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
        <Container className="py-xl-5 custom_container">
          <div className="text-center position-relative">
            <h2 className="ff_nunito fw_900 fs_4xl">Our Testimonials</h2>
            <div className="testonimals_underline position-absolute"></div>
          </div>
          <Slider
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            {...settings}
            className="mt-5 "
          >
            <div className="p-4 d-flex justify-content-center">
              <div className="p-5  position-relative ">
                <img
                  className="slider_img_w_90"
                  src={Slider_1}
                  alt="Slider_1"
                />
                <img
                  className="position-absolute img_icon_white"
                  src={Circel_icon}
                  alt="Circel_icon"
                />
                <img
                  className="position-absolute img_yellow_cercel "
                  src={Img_circel}
                  alt="Img_circel"
                />
              </div>
            </div>

            <div className="p-4 d-flex justify-content-center">
              <div className="p-5  position-relative ">
                <img
                  className="slider_img_w_90"
                  src={Slider_2}
                  alt="Slider_2"
                />
                <img
                  className="position-absolute img_icon_white"
                  src={Circel_icon}
                  alt="Circel_icon"
                />
                <img
                  className="position-absolute img_yellow_cercel "
                  src={Img_circel}
                  alt="Img_circel"
                />
              </div>
            </div>

            <div className="p-4 d-flex justify-content-center">
             <div className="p-5  position-relative ">
                <img
                  className="slider_img_w_90"
                  src={Slider_3}
                  alt="Slider_3"
                />
                <img
                  className="position-absolute img_icon_white"
                  src={Circel_icon}
                  alt="Circel_icon"
                />
                <img
                  className="position-absolute img_yellow_cercel "
                  src={Img_circel}
                  alt="Img_circel"
                />
              </div>
            </div>

            <div className="p-4 d-flex justify-content-center">
             <div className="p-5  position-relative ">
                <img
                  className="slider_img_w_90"
                  src={Slider_4}
                  alt="Slider_4"
                />
                <img
                  className="position-absolute img_icon_white"
                  src={Circel_icon}
                  alt="Circel_icon"
                />
                <img
                  className="position-absolute img_yellow_cercel "
                  src={Img_circel}
                  alt="Img_circel"
                />
              </div>
            </div>

            <div className="p-4 d-flex justify-content-center">
             <div className="p-5  position-relative ">
                <img
                  className="slider_img_w_90"
                  src={Slider_5}
                  alt="Slider_5"
                />
                <img
                  className="position-absolute img_icon_white"
                  src={Circel_icon}
                  alt="Circel_icon"
                />
                <img
                  className="position-absolute img_yellow_cercel "
                  src={Img_circel}
                  alt="Img_circel"
                />
              </div>
            </div>

            <div className="p-4 d-flex justify-content-center">
            <div className="p-5  position-relative ">
                <img
                  className="slider_img_w_90"
                  src={Slider_5}
                  alt="Slider_5"
                />
                <img
                  className="position-absolute img_icon_white"
                  src={Circel_icon}
                  alt="Circel_icon"
                />
                <img
                  className="position-absolute img_yellow_cercel "
                  src={Img_circel}
                  alt="Img_circel"
                />
              </div>
            </div>
          </Slider>
          <Slider
            className="text-center"
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={1}
            speed={500}
            fade={true}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            dots={true}
          >
            <div className="d-flex justify-content-center align-items-center flex-column px-lg-5">
              <p className="ff_lora fw-normal  fs_xsm px-xl-5 mx-lg-5 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took type
                scrambled it to make a type specimen book. It has survived not
                only five centuries,
              </p>
              <p className="ff_nunito fw-bold fs_sm mt-3 text-center">
                Jenny Wilson |
                <span className="ff_lora fw_normal fs_xsm"> Digital Agency</span>
              </p>
            </div>
            <div className="text-center mx-lg-5 px-lg-5 mt-4">
              <p className="ff_lora fw-normal  fs_xsm px-xl-5 mx-lg-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,  It has survived not
                only five centuries,
              </p>
              <p className="ff_nunito fw-bold fs_sm mt-3 letter_spacing text-center">
                Jenny Wilson |
                <span className="ff_lora fw_normal fs_xsm">Digital Agency</span>
              </p>
            </div>
            <div className="text-center mx-lg-5 px-lg-5 mt-4">
              <p className="ff_lora fw-normal  fs_xsm px-xl-5 mx-lg-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took type
                scrambled it to make a type 
              </p>
              <p className="ff_nunito fw-bold fs_sm mt-3 text-center">
                Jenny Wilson |
                <span className="ff_lora fw_normal fs_xsm">Digital Agency</span>
              </p>
            </div>
            <div className="text-center mx-lg-5 px-lg-5 mt-4">
              <p className="ff_lora fw-normal  fs_xsm px-xl-5 mx-lg-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took type
                scrambled it to make a type specimen book. It has survived not
                only five centuries,
              </p>
              <p className="ff_nunito fw-bold fs_sm mt-3 text-center">
                Jenny Wilson |
                <span className="ff_lora fw_normal fs_xsm">Digital Agency</span>
              </p>
            </div>
            <div className="text-center mx-lg-5 px-lg-5 mt-4">
              <p className="ff_lora fw-normal  fs_xsm px-xl-5 mx-lg-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took type
                scrambled it to make a type specimen book. It has survived not
                only five centuries,
              </p>
              <p className="ff_nunito fw-bold fs_sm mt-3 text-center">
                Jenny Wilson |
                <span className="ff_lora fw_normal fs_xsm">Digital Agency</span>
              </p>
            </div>
            <div className="text-center mx-lg-5 px-lg-5 mt-4">
              <p className="ff_lora fw-normal  fs_xsm px-xl-5 mx-lg-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took type
                scrambled it to make a type specimen book. It has survived not
                only five centuries,
              </p>
              <p className="ff_nunito fw-bold fs_sm mt-3 text-center">
                Jenny Wilson |
                <span className="ff_lora fw_normal fs_xsm">Digital Agency</span>
              </p>
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default OurTestonimals;
