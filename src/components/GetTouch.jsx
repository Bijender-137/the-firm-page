import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bg_img from "../assets/img/png/bg_img_footer.png";
const GetTouch = () => {
  return (
    <>
      <section className="pt-5 ">
        <img className="w-100" src={Bg_img} alt="Bg_img" />
        <Container>
          <div className="form_box mx-auto py-5 transform_top ">
            <h2 className="ff_nunito fw_900 fs_4xl text-center pt-4">
              Get in Touch
            </h2>
            <Row className="px-lg-5 mx-4 mt-4 mt-lg-5">
              <Col lg={6}>
                <div>
                  <p className="ff_nunito fw-normal fs_2nd_smll mb-0">Name</p>
                  <input
                    type="text"
                    placeholder=""
                    className="input_name borde r-0 w-100"
                  />
                </div>
                <div className="mt-lg-5 mt-4 pt-2">
                  <p className="ff_nunito fw-normal fs_2nd_smll mb-0">Phone</p>
                  <input
                    type="number"
                    placeholder=""
                    className="input_name borde r-0 w-100"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mt-5 mt-lg-0">
                  <p className="ff_nunito fw-normal fs_2nd_smll mb-0">Email</p>
                  <input
                    type="email"
                    placeholder=""
                    className="input_name borde r-0 w-100"
                  />
                </div>
                <div className="mt-4 mt-lg-5 pt-2">
                  <p className="ff_nunito fw-normal fs_2nd_smll mb-0">
                    Subject
                  </p>
                  <input
                    type="text"
                    placeholder=""
                    className="input_name borde r-0 w-100"
                  />
                </div>
              </Col>
            </Row>
            <div className="text-center pt-3">
              <button className="nav_btn ff_nunito fw-bold fs_xsm  text-white mt-5 px-5">
                Submit{" "}
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GetTouch;
