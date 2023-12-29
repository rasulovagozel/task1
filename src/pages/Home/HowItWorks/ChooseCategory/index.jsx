import React, { useEffect } from "react";
import review from "../../../../assets/review.png";
import styled from "./choose.module.scss";
import Aos from 'aos'
import "aos/dist/aos.css"

const ChooseCategory = () => {
  useEffect(()=>{
    Aos.init();
   },[])
  return (
    <div className="container">
      <div
        className="row g-3"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <div className={styled.card}>
            <div className={styled.image}>
              <img src={review} alt="" />
            </div>
            <div className={styled.text}>
              <p>1. Choose A Category</p>
              <span>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <div className={styled.card}>
            <div className={styled.image}>
              <img src={review} alt="" />
            </div>
            <div className={styled.text}>
              <p>2. Find What You Want</p>
              <span>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <div className={styled.card}>
            <div className={styled.image}>
              <img src={review} alt="" />
            </div>
            <div className={styled.text}>
              <p>3. Select The Best Place</p>
              <span>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <div className={styled.card}>
            <div className={styled.image}>
              <img src={review} alt="" />
            </div>
            <div className={styled.text}>
              <p>4. Explore The Place</p>
              <span>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseCategory;
