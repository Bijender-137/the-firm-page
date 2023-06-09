import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Research_img from "../assets/img/png/researche_img.png";
import Our_Blog_3 from "../assets/img/png/our_blog_3.png";

import Slider from "react-slick";
const OurResearch = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true,
        },
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5 back">
        <Container className="py-lg-5">
          <Row>
            <Col xs={12} lg={10} className="mx-auto">
              <div className="text-center ">
                <h2 className="ff_nunito fw_900 fs_4xl">
                  Our Research & Case
                  <span className="position-relative ps-2">
                    Studies
                    <div className="our_research_underline position-absolute"></div>
                  </span>
                </h2>
                <p className="ff_lora fw-normal fs_xsm mt-4 mx-lg-5 px-lg-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
              </div>
            </Col>
          </Row>
          <Slider {...settings} className="">
            <Row className="mt-5 d-flex align-items-center justify-content-between flex-column-reverse flex-lg-row">
              <Col lg={6}>
                <div className="pe-lg-5 mt-4 mt-lg-0 text-center text-lg-start">
                  <p className="ff_nunito fw-bold fs_3xl">
                    Lorem Ipsum is simply
                  </p>
                  <p className="ff_lora fw-normal fs_xsm pe-lg-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took.
                  </p>
                  <button className="nav_btn ff_nunito fw-bold fs_xsm  text-white mt-3 mt-lg-5 px-4">
                    Read More
                  </button>
                </div>
              </Col>
              <Col xs={10} lg={6} className="mx-auto ">
                <div className="img_shadow_bg p-2 position-relative">
                  <div className="research_bg_circel_yellow position-absolute d-none d-md-block"></div>

                  <img
                    className="reaserch_img_w_637 w-100"
                    src={Research_img}
                    alt="Research_img"
                  />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 d-flex align-items-center justify-content-between flex-column-reverse flex-lg-row">
              <Col lg={6}>
                <div className="pe-lg-5 mt-4 mt-lg-0 text-center text-lg-start">
                  <p className="ff_nunito fw-bold fs_3xl">
                    Lorem Ipsum is simply
                  </p>
                  <p className="ff_lora fw-normal fs_xsm pe-lg-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took.
                  </p>
                  <button className="nav_btn ff_nunito fw-bold fs_xsm  text-white mt-3 mt-lg-5 px-4 cursor_pointer">
                    Read More
                  </button>
                </div>
              </Col>
              <Col xs={10} lg={6} className="mx-auto ">
                <div className="img_shadow_bg p-2 position-relative">
                  <div className="research_bg_circel_yellow position-absolute d-none d-md-block"></div>

                  <img
                    className="reaserch_img_w_637 w-100"
                    src={Our_Blog_3}
                    alt="Our_Blog_3"
                  />
                </div>
              </Col>
            </Row>
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default OurResearch;
