import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hero_img from "../assets/img/png/hero_sec_img.png";
import Circel from "../assets/img/png/circel_hero.png";
const MyHeroSection = () => {
  return (
    <>
      <section className="position-relative hero_border over flow-hidden d-flex flex-column flex-grow-1 justify-content-center align-items-center bg_img_hero">
        <Container>
          <Row className=" flex-column-reverse flex-lg-row">
            <Col lg={6} className="py-5">
              <div className="py-xxl-5 text-center text-lg-start">
                <div className="py-xxl-5">
                  <div className="py-xxl-5">
                    <div className="position-relative">
                      <h1 className="ff_nunito fw_900 fs_4xxl clr_black zn_1 position-relative">
                        Get Bussiness <span className="d-xl-block"> Solutions with TheFirm.</span>
                      </h1>
                      <img
                        className="position-absolute circel_set"
                        src={Circel}
                        alt="Circel"
                      />
                    </div>
                    <p className="ff_lora fw-normal fs_xsm clr_black max_w_437 mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                    <button className="ff_nunito fw-bold fs_xsm text-white border-0 nav_btn mt-3">
                      Get in Touch
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={10} lg={6} className="mx-auto">
              <img
                className="posi_abso hero_img_position w_100_xl "
                src={Hero_img}
                alt="Hero_img"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MyHeroSection;
