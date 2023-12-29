import React from "react";
import styled from "./about.module.scss";
import Navbar from "../../features/Layout/Navbar";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import AboutUs from "./AboutUs";
import SwiperPart from "./SwiperPart";

const About = () => {
  return (
    <>
    <section className={styled.about}>
    <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.main_part}>
              <div className={styled.otherParts}>
                <Link to="/">
                  HOME{" "}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </Link>
                <Link to="/about">
                  ABOUT US{" "}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </Link>
              </div>
              <div className={styled.contactUs}>
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <AboutUs />
      <SwiperPart />
    </section>
    </>
  );
};

export default About;
