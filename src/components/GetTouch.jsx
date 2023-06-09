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
              Get in
              <span className="position-relative ps-2">
                Touch
                <div className="get_touch_underline position-absolute"></div>
              </span>
            </h2>
            <Row className="px-lg-5 mx-4 mt-4 mt-lg-5 justify-content-between">
              <Col lg={6}>
                <div className="me-lg-4">
                  <p className="ff_nunito fw-normal fs_2nd_smll mb-0 ps-2">
                    Name
                  </p>
                  <input
                    type="text"
                    className="input_name  w-100 ff_nunito fw-bold fs_xsm placeholder_clr_black ps-1"
                    placeholder=" Lorem Ipusum"
                  />
                </div>
                <div className="mt-lg-5 mt-4 pt-2 me-lg-4 ">
                  <p className="ff_nunito fw-normal fs_2nd_smll mb-0 ps-2">
                    Phone
                  </p>
                  <input
                    type="number"
                    placeholder="+0 968 856 1524"
                    className="input_name ps-2  w-100 ff_nunito fw-bold fs_xsm placeholder_clr_black"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mt-4 pt-2 pt-lg-0 mt-lg-0 ms-lg-4 ">
                  <p className="ff_nunito fw-normal fs_2nd_smll mb-0  ps-2">
                    Email
                  </p>
                  <input
                    type="email"
                    className="input_name w-100 ff_nunito fw-bold fs_xsm placeholder_clr_black ps-2"
                    placeholder="LoremIpusum@mail.com"
                  />
                </div>

                <div className="d-flex flex-column mt-4 mt-lg-5 pt-1  ms-lg-4 ">
                  <label for="cars">Subject</label>
                  <select
                    className="mt-1 input_name w-100 ff_nunito fw-bold fs_xsm placeholder_clr_black"
                    name="cars"
                    id="cars"
                  >
                    <option value="volvo">Chose your subject</option>
                    <option value="saab">React</option>
                    <option value="saab">Vue</option>
                  </select>

                  {/* <div className="d-flex align-items-center">
                    <input
                      type="text"
                      className="input_name w-100 ff_nunito fw-bold fs_xsm placeholder_clr_black ps-1"
                      placeholder="Choose your subject"
                    />
                    <select id="" className="input_name  w-100 pt-lg-1 w-100">
                      <option value="volvo"></option>
                      <option
                        value="saab"
                        className="ff_nunito fw-normal fs_2nd_smll"
                      >
                        Jerry wilson
                      </option>
                      <option
                        value="opel"
                        className="ff_nunito fw-normal fs_2nd_smll mt-5"
                      >
                        Digital partner
                      </option>
                      <option
                        value="audi"
                        className="ff_nunito fw-normal fs_2nd_smll"
                      >
                        Coaching
                      </option>
                    </select>
                  </div> */}
                </div>
              </Col>
            </Row>
            <div className="text-center pt-3">
              <button className="nav_btn ff_nunito fw-bold fs_xsm  text-white mt-5 px-5">
                Submit
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GetTouch;
