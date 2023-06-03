import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Question_mark from "../assets/img/svg/question_mark.svg";
import Client_target from "../assets/img/png/client_sec_img.png";
const Clients = () => {
  return (
    <>
      <section className="py-5 client_sec_bg_clr">
        <Container className="py-lg-5">
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <div className="me-lg-5 text-center mt-4 mt-lg-0 text-lg-start">
                <h2 className="ff_nunito  fw_900 fs_4xl">
                  Frustration of Clients
                </h2>
                <p className="ff_lora fw-normal fs_xsm mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="ms-lg-4 mt-2">
                <div className="d-flex align-items-center">
                  <img src={Question_mark} alt="Question_mark" />
                  <p className="ff_lora fw-normal fs_xsm mb-0 ms-2 ps-1">
                    Loren rasion gravida auem is bibenua tase
                  </p>
                </div>
                <div className="d-flex align-items-center mt-2 pt-1">
                  <img src={Question_mark} alt="Question_mark" />
                  <p className="ff_lora fw-normal fs_xsm mb-0 ms-2 ps-1">
                    Lorem Ipsum is simply dummy text of the.{" "}
                  </p>
                </div>
                <div className="d-flex align-items-center mt-2 pt-1">
                  <img src={Question_mark} alt="Question_mark" />
                  <p className="ff_lora fw-normal fs_xsm mb-0 ms-2 ps-1">
                    Printing and typesetting industry. Lorem Ipsum{" "}
                  </p>
                </div>
                <div className="d-flex  mt-2 pt-1">
                  <img src={Question_mark} alt="Question_mark" />
                  <p className="ff_lora fw-normal fs_xsm mb-0 ms-2 ps-1">
                    When an unknown printer took a galley of type and{" "}
                    <span className="d-lg-block">scrambled it </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={10} lg={6}>
              <div className="text-center position-relative zn_1">
                <img
                  className="w-100"
                  src={Client_target}
                  alt="Client_target"
                />
                <div className="light_yellow_cirecle position-absolute d-none d-md-block"></div>
                <div className="yellow_dark_circel position-absolute d-none d-md-block"></div>
                <div className="dark_black_circel position-absolute d-none d-md-block"></div>
                <div className="dark_black_circel_2 position-absolute d-none d-md-block"></div>
                <div className="light_black_circel position-absolute d-none d-md-block"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Clients;
