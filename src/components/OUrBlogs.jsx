import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Our_Blog_1 from "../assets/img/png/our_blog_1.png";
import Our_Blog_2 from "../assets/img/png/our_blog_2.png";
import Our_Blog_3 from "../assets/img/png/our_blog_3.png";
import Elips_1 from "../assets/img/png/elips_1.png";
import Elips_2 from "../assets/img/png/elips_2.png";
import Elips_3 from "../assets/img/png/elips_3.png";
import Timing_img from "../assets/img/svg/timing_img.svg";

const OUrBlogs = () => {
  return (
    <>
      <section className="py-5 client_sec_bg_clr">
        <Container className="py-xl-5">
          <div className="text-center">
            <h2 className="ff_nunito fw_900 fs_4xl">Our Blogs</h2>
          </div>
          <Row className="mt-5 justify-content-center">
            <Col md={6} lg={4}>
              <div className="our_blog_card_shadow p-3 mt-3">
                <img className="w-100" src={Our_Blog_1} alt="Our_Blog_1" />
                <p className="ff_nunito fw-bold fs_sm mt-3">Lorem Ipsum is </p>
                <p className="ff_lora fw-normal fs_xsm">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
                <div className="hr_gray_line"></div>
                <div className="mt-3 pt-1 d-flex justify-content-between">
                  <div className=" d-flex align-items-center">
                    <img src={Elips_1} alt="Elips_1" />
                    <p className="ff_nunito fw-normal fs_2nd_smll mb-0 ms-2">
                      Alex Liones
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={Timing_img} alt="Timing_img" />
                    <p className="ff_nunito fw-normal fs_small mb-0 ms-2">
                      28,Aug 2020, 09:48:00
                    </p>
                  </div>
                </div>
                <div className="text-center py-4">
                  <button className="btn_read_more ff_nunito fw-bold fs_xsm text-white border-0 ">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="our_blog_card_shadow p-3 mt-3">
                <img className="w-100" src={Our_Blog_2} alt="Our_Blog_2" />
                <p className="ff_nunito fw-bold fs_sm mt-3">Lorem Ipsum is </p>
                <p className="ff_lora fw-normal fs_xsm">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
                <div className="hr_gray_line"></div>
                <div className="mt-3 pt-1 d-flex justify-content-between">
                  <div className=" d-flex align-items-center">
                    <img src={Elips_2} alt="Elips_1" />
                    <p className="ff_nunito fw-normal fs_2nd_smll mb-0 ms-2">
                      Alex Liones
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={Timing_img} alt="Timing_img" />
                    <p className="ff_nunito fw-normal fs_small mb-0 ms-2">
                      28,Aug 2020, 09:48:00
                    </p>
                  </div>
                </div>
                <div className="text-center py-4">
                  <button className="btn_read_more ff_nunito fw-bold fs_xsm text-white border-0 ">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="our_blog_card_shadow p-3 mt-3">
                <img className="w-100" src={Our_Blog_3} alt="Our_Blog_3" />
                <p className="ff_nunito fw-bold fs_sm mt-3">Lorem Ipsum is </p>
                <p className="ff_lora fw-normal fs_xsm">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
                <div className="hr_gray_line"></div>
                <div className="mt-3 pt-1 d-flex justify-content-between">
                  <div className=" d-flex align-items-center">
                    <img src={Elips_3} alt="Elips_1" />
                    <p className="ff_nunito fw-normal fs_2nd_smll mb-0 ms-2">
                      Alex Liones
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={Timing_img} alt="Timing_img" />
                    <p className="ff_nunito fw-normal fs_small mb-0 ms-2">
                      28,Aug 2020, 09:48:00
                    </p>
                  </div>
                </div>
                <div className="text-center py-4">
                  <button className="btn_read_more ff_nunito fw-bold fs_xsm text-white border-0 ">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
            <div className="text-center">
              <button className="nav_btn ff_nunito fw-bold fs_xsm  text-white mt-4 mt-md-5 px-4">
                Read More
              </button>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OUrBlogs;
