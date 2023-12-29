import React, { useEffect } from "react";
import ChooseCategory from "./ChooseCategory";
import RecentBlogs from "./RecentBlogs";
import styled from "./howitworks.module.scss";
import luvr from "../../../assets/luvr.webp";
import { FaPlay } from "react-icons/fa";
import SwiperJS from "./SwiperJS";
import Aos from 'aos'
import "aos/dist/aos.css"

const HowItWorks = () => {
  useEffect(()=>{
    Aos.init();
   },[])
  return (
    <>
        <section className={styled.swiperJS}>
        <SwiperJS />
      </section>
      <section className={styled.howItWorks}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
              <div className={styled.text}>
                <h4>LET`S FIND OUT</h4>
                <h2>How It Works</h2>
              </div>
              <div className="row">
                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <div className={styled.img}>
                    <img src={luvr} alt="" />
                    <span><FaPlay /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styled.chooseCategory}>
        <ChooseCategory />
      </section>
      <section className={styled.recentBlogs}>
        <RecentBlogs />
      </section>
    </>
  );
};

export default HowItWorks;
