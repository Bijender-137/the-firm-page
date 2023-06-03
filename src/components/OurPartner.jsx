import React from "react";
import { Col, Container } from "react-bootstrap";
import Hand_over from "../assets/img/svg/handover_img.svg";
import Googel from "../assets/img/svg/googel.svg";
import Fire_fox from "../assets/img/svg/firefox.svg";
import Sfari from "../assets/img/svg/sfari.svg";
import Slider from "react-slick";
const OurPartner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          autoplay: true,
          arrows: false,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5 overflow-hidde n">
        <Container className="py-lg-5">
          <div className="text-center">
            <h2 className="ff_nunito fs_4xl fw_900">Our Partner</h2>
          </div>
          <Slider {...settings} className=" mt-lg-5 mt-4">
            <Col sm={3} className="ms-md-5 ms-5 ms-sm-3">
              <div className="img_shadow d-flex align-items-center justify-content-center logo_clr">
                <img className="img_w_167 " src={Hand_over} alt="Hand_over" />
              </div>
            </Col>
            <Col sm={3} className="ms-md-5 ms-5 ms-sm-3">
              <div className="img_shadow d-flex align-items-center justify-content-center logo_clr">
                <img className="img_w_167" src={Googel} alt="Googel" />
              </div>
            </Col>
            <Col sm={3} className="ms-md-5 ms-5 ms-sm-3">
              <div className="img_shadow d-flex align-items-center justify-content-center logo_clr">
                <img className="img_w_167" src={Fire_fox} alt="Fire_fox" />
              </div>
            </Col>
            <Col sm={3} className="ms-md-5 ms-5 ms-sm-3">
              <div className="img_shadow d-flex align-items-center justify-content-center logo_clr">
                <img className="img_w_167" src={Sfari} alt="Sfari" />
              </div>
            </Col>
            <Col sm={3} className="ms-md-5 ms-5 ms-sm-3">
              <div className="img_shadow d-flex align-items-center justify-content-center logo_clr">
                <img className="img_w_167" src={Hand_over} alt="Hand_over" />
              </div>
            </Col>
            <Col sm={3} className="ms-md-5 ms-5 ms-sm-3">
              <div className="img_shadow d-flex align-items-center justify-content-center logo_clr">
                <img className="img_w_167" src={Googel} alt="Googel" />
              </div>
            </Col>
            <Col sm={3} className="ms-md-5 ms-5 ms-sm-3">
              <div className="img_shadow d-flex align-items-center justify-content-center logo_clr">
                <img className="img_w_167" src={Fire_fox} alt="Fire_fox" />
              </div>
            </Col>
            <Col sm={3} className="ms-md-5 ms-5 ms-sm-3">
              <div className="img_shadow d-flex align-items-center justify-content-center logo_clr">
                <img className="img_w_167" src={Sfari} alt="Sfari" />
              </div>
            </Col>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default OurPartner;