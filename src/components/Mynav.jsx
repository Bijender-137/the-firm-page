import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Nav_logo from "../assets/img/svg/nav_logo.svg";
const Mynav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <header>
        <nav>
          <Container>
            <div className="d-flex align-items-center justify-content-between pt-4 pb-2">
              <a href="#" className="z_index_1">
                <img className="nav_logo_w" src={Nav_logo} alt="Nav_logo" />
              </a>
              <ul
                className={
                  first
                    ? "pt-5 p-0 p-xl-0 m-0 d-xl-flex align-items-center mobile_ul_nav left_100"
                    : "pt-5 p-0 p-xl-0 m-0 d-xl-flex align-items-center mobile_ul_nav left_0"
                }
              >
                <li>
                  <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                    Home
                  </a>
                </li>
                <li className="ms-xl-5">
                  <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                    Solutions
                  </a>
                </li>
                <li className="ms-xl-5">
                  <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                    Cases
                  </a>
                </li>
                <li className="ms-xl-5">
                  <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                    About Us
                  </a>
                </li>
                <li className="ms-xl-5">
                  <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                    Blog
                  </a>
                </li>
                <li className="ms-xl-5">
                  <a href="#" className="ff_nunito fw-bold fs_xsm clr_black">
                    Contact Us
                  </a>
                </li>
                <button className="ff_nunito fw-bold fs_xsm text-white  nav_btn ms-xl-5">
                  Get in Touch
                </button>
              </ul>
              <div
                onClick={() => setfirst(!first)}
                className={first === true ? "nav-menu d-xl-none z_index_1" : "nav-menu-2 d-xl-none z_index_1"}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </Container>
        </nav>
      </header>
    </>
  );
};

export default Mynav;
