import React from "react";
import { Container } from "react-bootstrap";
import Bg_img from "../assets/img/png/bg_img_footer.png";
const GetTouch = () => {
  return (
    <>
      <section className="pt-5  bg_img_footer">
        <img height={400} className="w-100 d-none d-xl-block" src={Bg_img} alt="Bg_img" />
        <Container></Container>
      </section>
    </>
  );
};

export default GetTouch;
