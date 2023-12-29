import React, { useEffect } from "react";
import styled from "./aboutus.module.scss";
import Aos from 'aos'
import "aos/dist/aos.css"

const AboutUs = () => {
  useEffect(()=>{
   Aos.init();
  },[])
  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <div className={styled.img}></div>
        </div>
        <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className={styled.aboutInfos}>
            <div className={styled.text}>
              <a href="">WELCOME TO DIRECTONE</a>
              <h2>Directone A Directory & Listing</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className={styled.numbers}>
              <div className="row g-3">
                <div className="col-lg-3">
                  <div className={styled.number}>
                    <h3>50</h3>
                    <span>YEARS OF EXPERIENCED</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={styled.number}>
                    <h3>210k+</h3>
                    <span>TOTAL LISTING</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={styled.number}>
                    <h3>450</h3>
                    <span>COMPANY STAF</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={styled.number}>
                    <h3>100</h3>
                    <span>HAPPY PEOPLE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
