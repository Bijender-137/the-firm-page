import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card_1 from "../assets/img/png/card_1_img.png";
import Card_2 from "../assets/img/png/card_2_img.png";
import Card_3 from "../assets/img/png/card_3_img.png";
import FF_img from "../assets/img/png/bg_ff_page.png";
import Card_group from "../assets/img/png/card_group_img.png";
const PerfectSolution = () => {
  return (
    <>
      <section className="py-5">
        <Container className="py-xl-5">
          <Row className="align-items-center">
            <Col xl={7} className="mx-auto">
              <Row className="justify-content-center justify-content-xl-start align-items-center position-relative">
                <img
                  className="position-absolute ff_img_position d-none d-md-block z_index_1"
                  src={FF_img}
                  alt="FF_img"
                />
                <Col md={6} lg={5} xl={6} xxl={5}>
                  <div className="card_border text-center py-5 px-3 position-relative ">
                    <div className="perfect_solution_bg_circel position-absolute z_index_minus perfect_solution_bg_circel_position_2"></div>
                    <img src={Card_1} alt="Card_1" />
                    <h2 className="ff_nunito fw-bold fs_3xl mt-4">Coaching</h2>
                    <p className="ff_lora fw-normal fs_xsm ">
                      Loren rasion gravida auem
                      <spsn className="d-lg-block"> is bibenua tase</spsn>
                    </p>
                  </div>
                  <div className="card_border text-center py-5 px-3 ms-md-5 mt-xl-5 position-relative mt-4 mt-md-5 pt-md-4">
                    <div className="black_circel_perfect position-absolute"></div>
                    <img src={Card_3} alt="Card_3" />
                    <h2 className="ff_nunito fw-bold fs_3xl mt-4">SEO </h2>
                    <p className="ff_lora fw-normal fs_xsm ">
                      Loren rasion gravida auem
                      <spsn className="d-lg-block"> is bibenua tase</spsn>
                    </p>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={6} xxl={6}>
                  <div className="card_border text-center py-5 px-3  position-relative mt-4 mt-md-0 ms-xl-3 ms-xxl-5 mx-auto">
                    <div className="perfect_solution_bg_circel position-absolute z_index_minus perfect_solution_bg_circel_position"></div>
                    <img src={Card_2} alt="Card_2" />
                    <h2 className="ff_nunito fw-bold fs_3xl mt-4">
                      Digital Partner
                    </h2>
                    <p className="ff_lora fw-normal fs_xsm ">
                      Loren rasion gravida auem
                      <spsn className="d-lg-block"> is bibenua tase</spsn>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={5}>
              <div className="d-flex justify-content-center flex-column align-items-center mt-4 mt-xl-0 justify-content-xl-start d-xl-block">
                <p className="ff_nunito fw_900 fs_4xl">
                  Perfect Solution for Your
                  <span className="position-relative ps-1">
                    Bussiness
                    <div className="bussiness_underline position-absolute z_index_minus"></div>
                  </span>
                </p>
                <p className="ff_lora fw-normal fs_xsm text-center text-xl-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
                <button className="nav_btn ff_nunito fw-bold fs_xsm text-white mt-3 mt-md-5 px-4">
                  Read More
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PerfectSolution;
