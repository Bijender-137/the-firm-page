import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav_logo from "../assets/img/svg/nav_logo.svg";

const MyFotter = () => {
  return (
    <>
      <footer>
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
              <button className="nav_btn ff_nunito fw-bold fs_xsm border-0 text-white mt-5 px-5">
                Submit{" "}
              </button>
            </div>
          </div>
          <div className="pb-5">
            <div className="text-center ">
              <a href="#">
                <img src={Nav_logo} alt="Nav_logo" />
              </a>
            </div>
            <Row className="mt-5">
              <Col lg={6} className="mx-auto">
                <ul className="p-0 m-0 d-flex align-items-center">
                  <li>
                    <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                      Home
                    </a>
                  </li>
                  <li className="ms-3 ms-xl-5">
                    <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                      Solutions
                    </a>
                  </li>
                  <li className="ms-3 ms-xl-5">
                    <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                      Cases
                    </a>
                  </li>
                  <li className="ms-3 ms-xl-5">
                    <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                      About Us
                    </a>
                  </li>
                  <li className="ms-3 ms-xl-5">
                    <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                      Blog
                    </a>
                  </li>
                  <li className="ms-3 ms-xl-5">
                    <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default MyFotter;
