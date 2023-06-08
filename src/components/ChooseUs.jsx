import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Circel_line from "../assets/img/svg/circel_line_img.svg";
import Brand_img from "../assets/img/png/brand_img.png";
import Reporting from "../assets/img/png/reporting_img.png";
import Speaker_img from "../assets/img/svg/speaker_img.svg";
import Grouping_line from "../assets/img/svg/grouping_line.svg";
const ChooseUs = () => {
  const [first, setfirst] = useState(2);
  return (
    <>
      <section className="py-5 client_sec_bg_clr zn_1 overflow-hidden">
        <Container className="py-xl-5">
          <Row>
            <Col xs={12} className="mx-auto">
              <div className="text-center  mx-xl-5 px-xl-5">
                <h2 className="ff_nunito fw_900 fs_4xl">
                  Reason to Choose
                  <span className="position-relative ps-2">
                    Us
                    <div className="choose_us_underline position-absolute"></div>
                  </span>
                </h2>
                <p className="ff_lora fw-normal fs_xsm mt-4 mx-lg-5 px-xl-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
                <div className="d-flex align-items-center scroll_hide justify-content-xl-center max_1200   mt-5 gap-3 gap-lg-5 ">
                  <div className="d-flex justify-content-center align-items-center">
                    <div
                      onClick={() => setfirst(1)}
                      className="d-flex align-items-center cursor_pointer justify-content-center"
                    >
                      <svg
                        width="49"
                        height="22"
                        viewBox="0 0 49 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          className={
                            first === 1 ? "tab_arrows_2" : "tab_arrows"
                          }
                          x1="49"
                          y1="12"
                          x2="21"
                          y2="12"
                          stroke="#F7F7F7"
                          stroke-width="2"
                        />
                        <circle
                          className={
                            first === 1 ? "tab_arrows_2" : "tab_arrows"
                          }
                          cx="11"
                          cy="11"
                          r="10"
                          fill="#F7F7F7"
                          stroke="#F7F7F7"
                          stroke-width="2"
                        />
                      </svg>
                      <div
                        className={
                          first === 1
                            ? "position-relative d-flex align-items-center justify-justify-content-center slide_border_2"
                            : "position-relative d-flex align-items-center justify-justify-content-center slide_border"
                        }
                      >
                        <p className="ff_nunito fw-bold fs_xsm text_clr_gray mb-0  py-3 px-4 text-nowrap ">
                          Market Research
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-md-flex justify-content-center align-items-center ">
                    <div
                      onClick={() => setfirst(2)}
                      className="d-flex align-items-center cursor_pointer justify-content-center"
                    >
                      <svg
                        width="49"
                        height="22"
                        viewBox="0 0 49 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          className={
                            first === 2 ? "tab_arrows_2" : "tab_arrows"
                          }
                          x1="49"
                          y1="12"
                          x2="21"
                          y2="12"
                          stroke="#F7F7F7"
                          stroke-width="2"
                        />
                        <circle
                          className={
                            first === 2 ? "tab_arrows_2" : "tab_arrows"
                          }
                          cx="11"
                          cy="11"
                          r="10"
                          fill="#F7F7F7"
                          stroke="#F7F7F7"
                          stroke-width="2"
                        />
                      </svg>

                      <div
                        className={
                          first === 2
                            ? "position-relative d-flex align-items-center justify-content-center slide_border_2"
                            : "position-relative d-flex align-items-center justify-content-center slide_border"
                        }
                      >
                        <p
                          className={
                            first === 2
                              ? "ff_nunito fw-bold fs_xsm text_clr_gray mb-0  py-3 px-4 text-nowrap "
                              : "ff_nunito fw-bold fs_xsm text_clr_gray mb-0  py-3 px-4 text-nowrap "
                          }
                        >
                          Branding
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-md-flex justify-content-center align-items-center">
                    <div
                      onClick={() => setfirst(3)}
                      className="d-flex align-items-center cursor_pointer justify-content-center"
                    >
                      <svg
                        width="49"
                        height="22"
                        viewBox="0 0 49 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          className={
                            first === 3 ? "tab_arrows_2" : "tab_arrows"
                          }
                          x1="49"
                          y1="12"
                          x2="21"
                          y2="12"
                          stroke="#F7F7F7"
                          stroke-width="2"
                        />
                        <circle
                          className={
                            first === 3 ? "tab_arrows_2" : "tab_arrows"
                          }
                          cx="11"
                          cy="11"
                          r="10"
                          fill="#F7F7F7"
                          stroke="#F7F7F7"
                          stroke-width="2"
                        />
                      </svg>

                      <div
                        className={
                          first === 3
                            ? "position-relative d-flex align-items-center justify-content-center slide_border_2"
                            : "position-relative d-flex align-items-center justify-content-center slide_border"
                        }
                      >
                        <p
                          className={
                            first === 3
                              ? "ff_nunito fw-bold fs_xsm text_clr_gray mb-0  py-3 px-4 text-nowrap "
                              : "ff_nunito fw-bold fs_xsm text_clr_gray mb-0  py-3 px-4 text-nowrap "
                          }
                        >
                          Reporting
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-md-flex justify-content-center align-items-center">
                    <div
                      onClick={() => setfirst(4)}
                      className="d-flex align-items-center cursor_pointer justify-content-center"
                    >
                      <svg
                        width="49"
                        height="22"
                        viewBox="0 0 49 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          className={
                            first === 4 ? "tab_arrows_2" : "tab_arrows"
                          }
                          x1="49"
                          y1="12"
                          x2="21"
                          y2="12"
                          stroke="#F7F7F7"
                          stroke-width="2"
                        />
                        <circle
                          className={
                            first === 4 ? "tab_arrows_2" : "tab_arrows"
                          }
                          cx="11"
                          cy="11"
                          r="10"
                          fill="#F7F7F7"
                          stroke="#F7F7F7"
                          stroke-width="2"
                        />
                      </svg>

                      <div
                        className={
                          first === 4
                            ? "position-relative d-flex align-items-center justify-content-center slide_border_2"
                            : "position-relative d-flex align-items-center justify-content-center slide_border"
                        }
                      >
                        <p
                          className={
                            first === 4
                              ? "ff_nunito fw-bold fs_xsm text_clr_gray mb-0  py-3 px-4 text-nowrap "
                              : "ff_nunito fw-bold fs_xsm text_clr_gray mb-0  py-3 px-4 text-nowrap "
                          }
                        >
                          Data Analysis
                        </p>
                      </div>
                    </div>
                  </div>
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
              <img className="w-100" src={Brand_img} alt="Brand_img" />
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-center">
                <div className="speaker_shadow d-flex justify-content-center align-items-center">
                  <img src={Speaker_img} alt="Speaker_img" />
                </div>
                <div className="ms-3 mt-2">
                  <h2 className="fw-bold ff_nunito fs_3xl mb-0 ">
                    <span className=" position-relative z_index_1">
                      Branding
                      <div className="branding_underline position-absolute z_index_minus"></div>
                    </span>
                  </h2>
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
              first === 3
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
                  <h2 className="fw-bold ff_nunito fs_3xl mb-0 ">
                    <span className=" position-relative z_index_1">
                      Reporting
                      <div className="branding_underline position-absolute z_index_minus"></div>
                    </span>
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
                    <span className=" position-relative z_index_1">
                      Data Analysis
                      <div className="branding_underline position-absolute z_index_minus"></div>
                    </span>
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
                  <h2 className="fw-bold ff_nunito fs_3xl mb-0 ">
                    <span className=" position-relative z_index_1">
                      Market Research
                      <div className="branding_underline position-absolute z_index_minus"></div>
                    </span>
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
