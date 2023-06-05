import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Circel_line from "../assets/img/svg/circel_line_img.svg";
import Brand_img from "../assets/img/png/brand_img.png";
import Reporting from "../assets/img/png/reporting_img.png";
import Speaker_img from "../assets/img/svg/speaker_img.svg";
import Grouping_line from "../assets/img/svg/grouping_line.svg";
const ChooseUs = () => {
  const [first, setfirst] = useState(1);
  return (
    <>
      <section className="py-5 client_sec_bg_clr zn_1 overflow-hidden">
        <Container className="py-xl-5">
          <Row>
            <Col xs={10} className="mx-auto">
              <div className="text-center">
                <h2 className="ff_nunito fw_900 fs_4xl">Reason to Choose Us</h2>
                <p className="ff_lora fw-normal fs_xsm mt-4 mx-lg-5 px-xl-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
                <div className="d-xl-flex align-items-center  mt-5 ps-3  mx-4 mx-xl-0 mx-xxl-5 gap-5 ">
                  <div className="d-md-flex justify-content-between align-items-center gap-md-5">
                    <div
                      onClick={() => setfirst(1)}
                      className={
                        first === 1
                          ? "position-relative  cursor_pointer slide_border_2"
                          : "position-relative  cursor_pointer slide_border"
                      }
                    >
                      <div
                        className="position-absolute z_index_minus"
                        onClick={() => setfirst(1)}
                      >
                        <img
                          className={
                            first === 1
                              ? " first_circel d-none"
                              : " first_circel d-block"
                          }
                          src={Circel_line}
                          alt="Circel_line"
                        />
                        <img
                          className={
                            first === 1
                              ? "first_circel d-block"
                              : "first_circel d-none"
                          }
                          src={Grouping_line}
                          alt="Grouping_line"
                        />
                      </div>
                      <p className="ff_nunito fw-bold fs_xsm text_clr_gray mb-0  py-3 px-4 text-nowrap">
                        Market Research
                      </p>
                    </div>
                    <div
                      onClick={() => setfirst(2)}
                      className={
                        first === 2
                          ? "position-relative  cursor_pointer slide_border_2 mt-4 mt-md-0 ms-lg-4"
                          : "position-relative  cursor_pointer slide_border mt-4 mt-md-0 ms-lg-4"
                      }
                    >
                      <div className="position-absolute z_index_minus">
                        <img
                          className={
                            first === 2
                              ? " first_circel d-none"
                              : " first_circel d-block"
                          }
                          src={Circel_line}
                          alt="Circel_line"
                        />
                        <img
                          className={
                            first === 2
                              ? "first_circel d-block"
                              : "first_circel d-none"
                          }
                          src={Grouping_line}
                          alt="Grouping_line"
                        />
                      </div>
                      <p className="ff_nunito fw-bold fs_xsm text_clr_gray mb-0  px-5 py-3">
                        Branding
                      </p>
                    </div>
                  </div>
                  <div className="d-md-flex justify-content-between align-items-center mt-4 gap-5 mt-xl-0">
                    <div
                      onClick={() => setfirst(3)}
                      className={
                        first === 3
                          ? "position-relative  cursor_pointer slide_border_2 ms-lg-4"
                          : "position-relative  cursor_pointer slide_border ms-lg-4"
                      }
                    >
                      <div className="position-absolute z_index_minus">
                        <img
                          className={
                            first === 3
                              ? " first_circel d-none"
                              : " first_circel d-block"
                          }
                          src={Circel_line}
                          alt="Circel_line"
                        />
                        <img
                          className={
                            first === 3
                              ? "first_circel d-block"
                              : "first_circel d-none"
                          }
                          src={Grouping_line}
                          alt="Grouping_line"
                        />
                      </div>
                      <p className="ff_nunito fw-bold fs_xsm text_clr_gray mb-0  px-5  py-3">
                        Reporting
                      </p>
                    </div>
                    <div
                      onClick={() => setfirst(4)}
                      className={
                        first === 4
                          ? "position-relative  cursor_pointer slide_border_2 mt-4 mt-md-0 ms-lg-4"
                          : "position-relative  cursor_pointer slide_border mt-4 mt-md-0 ms-lg-4"
                      }
                    >
                      <div className="position-absolute z_index_minus ">
                        <img
                          className={
                            first === 4
                              ? " first_circel d-none"
                              : " first_circel d-block"
                          }
                          src={Circel_line}
                          alt="Circel_line"
                        />
                        <img
                          className={
                            first === 4
                              ? "first_circel d-block"
                              : "first_circel d-none"
                          }
                          src={Grouping_line}
                          alt="Grouping_line"
                        />
                      </div>
                      <p className="ff_nunito fw-bold fs_xsm text_clr_gray mb-0  py-3 px-4 text-nowrap">
                        Data Analysis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            className={
              first === 1
                ? "branding_border py-5 mt-5 justify-content-center align-items-center d-flex"
                : "branding_border py-5 mt-5 justify-content-center align-items-center d-none"
            }
          >
            <Col lg={6}>
              <img className="w-100" src={Brand_img} alt="Brand_img" />
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-center">
                <div className="speaker_shadow d-flex justify-content-center align-items-center">
                  <img src={Speaker_img} alt="Speaker_img" />
                </div>
                <div className="ms-3 mt-2">
                  <h2 className="fw-bold ff_nunito fs_3xl mb-0 ">Branding</h2>
                  <p className="ff_lora fw-normal fs_xsm me-lg-5 mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button className="btn_read_more ff_nunito fw-bold fs_xsm text-white border-0 mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            className={
              first === 2
                ? "branding_border py-5 mt-5 justify-content-center align-items-center d-flex"
                : "branding_border py-5 mt-5 justify-content-center align-items-center d-none"
            }
          >
            <Col lg={6}>
              <img className="w-100" src={Reporting} alt="Reporting" />
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-center">
                <div className="speaker_shadow d-flex justify-content-center align-items-center">
                  <img src={Speaker_img} alt="Speaker_img" />
                </div>
                <div className="ms-3 mt-2">
                  <h2 className="fw-bold ff_nunito fs_3xl mb-0 ">Reporting</h2>
                  <p className="ff_lora fw-normal fs_xsm me-5 mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button className="btn_read_more ff_nunito fw-bold fs_xsm text-white border-0 mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            className={
              first === 3
                ? "branding_border py-5 mt-5 justify-content-center align-items-center d-flex"
                : "branding_border py-5 mt-5 justify-content-center align-items-center d-none"
            }
          >
            <Col lg={6}>
              <img className="w-100" src={Brand_img} alt="Brand_img" />
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-center">
                <div className="speaker_shadow d-flex justify-content-center align-items-center">
                  <img src={Speaker_img} alt="Speaker_img" />
                </div>
                <div className="ms-3 mt-2">
                  <h2 className="fw-bold ff_nunito fs_3xl mb-0 ">
                    Data Analysis
                  </h2>
                  <p className="ff_lora fw-normal fs_xsm me-5 mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button className="btn_read_more ff_nunito fw-bold fs_xsm text-white border-0 mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            className={
              first === 4
                ? "branding_border py-5 mt-5 justify-content-center align-items-center d-flex"
                : "branding_border py-5 mt-5 justify-content-center align-items-center d-none"
            }
          >
            <Col lg={6}>
              <img className="w-100" src={Brand_img} alt="Brand_img" />
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-center">
                <div className="speaker_shadow d-flex justify-content-center align-items-center">
                  <img src={Speaker_img} alt="Speaker_img" />
                </div>
                <div className="ms-3 mt-2">
                  <h2 className="fw-bold ff_nunito fs_3xl mb-0 ">
                    Market Research
                  </h2>
                  <p className="ff_lora fw-normal fs_xsm me-5 mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button className="btn_read_more ff_nunito fw-bold fs_xsm text-white border-0 mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ChooseUs;
