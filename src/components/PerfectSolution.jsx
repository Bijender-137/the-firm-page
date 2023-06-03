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
            <Col xs={10} xl={7} className="mx-auto">
              <img
                className="w-100 d-md-none"
                src={Card_group}
                alt="Card_group"
              />
              <div className="d-flex align-items-center justify-content-center justify-content-xl-start  position-relative d-none d-md-flex">
                <img
                  width={405}
                  className="position-absolute ff_img_position"
                  src={FF_img}
                  alt="FF_img"
                />
                <div>
                  <div className="card_border text-center py-5 px-3">
                    <img src={Card_1} alt="Card_1" />
                    <h2 className="ff_nunito fw-bold fs_3xl mt-4">Coaching</h2>
                    <p className="ff_lora fw-normal fs_xsm ">
                      Loren rasion gravida auem
                      <spsn className="d-lg-block"> is bibenua tase</spsn>
                    </p>
                  </div>
                  <div className="card_border text-center py-5 px-3 ms-5 mt-5">
                    <img src={Card_3} alt="Card_3" />
                    <h2 className="ff_nunito fw-bold fs_3xl mt-4">SEO </h2>
                    <p className="ff_lora fw-normal fs_xsm ">
                      Loren rasion gravida auem
                      <spsn className="d-lg-block"> is bibenua tase</spsn>
                    </p>
                  </div>
                </div>

                <div className="card_border text-center py-5 px-3 ms-5 ">
                  <img src={Card_2} alt="Card_2" />
                  <h2 className="ff_nunito fw-bold fs_3xl mt-4">
                    Digital Partner
                  </h2>
                  <p className="ff_lora fw-normal fs_xsm ">
                    Loren rasion gravida auem
                    <spsn className="d-lg-block"> is bibenua tase</spsn>
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={5}>
              <div className="text-center text-lg-start">
                <p className="ff_nunito fw_900 fs_4xl">
                  Perfect Solution for Your Bussiness{" "}
                </p>
                <p className="ff_lora fw-normal fs_xsm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
                <button className="nav_btn ff_nunito fw-bold fs_xsm border-0 text-white mt-5 px-4">
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
