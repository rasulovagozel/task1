import React, { useEffect } from "react";
import styled from "./recentblogs.module.scss";
import image1 from "../../../../assets/image11.webp";
import image2 from "../../../../assets/image22.webp";
import image3 from "../../../../assets/image33.webp";
import image4 from "../../../../assets/image44.webp";
import author from "../../../../assets/person1.webp";
import { CiHeart } from "react-icons/ci";
import Aos from 'aos'
import "aos/dist/aos.css"

const RecentBlogs = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
          <div className={styled.blogInfo}>
            <h4>OUR BLOG</h4>
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="col-lg-12">
          <div className={styled.cards}>
            <div className="row g-3">
              <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className={styled.card}>
                  <div className={styled.image}>
                    <img src={image1} alt="" />
                    <div className={styled.author}>
                      <div className={styled.name}>
                        <img src={author} alt="" />
                        <span>John Dorf</span>
                      </div>
                      <div className={styled.heart}>
                        <span>
                          <CiHeart />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styled.texts}>
                    <div className={styled.numbers}>
                      <span>DEC. 05, 2020</span>
                      <a href="">3 COMMENTS</a>
                    </div>
                    <div className={styled.about}>
                      <h3>Explore The Best Restaurant in New York</h3>
                      <h5>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className={styled.card}>
                  <div className={styled.image}>
                    <img src={image2} alt="" />
                    <div className={styled.author}>
                      <div className={styled.name}>
                        <img src={author} alt="" />
                        <span>John Dorf</span>
                      </div>
                      <div className={styled.heart}>
                        <span>
                          <CiHeart />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styled.texts}>
                    <div className={styled.numbers}>
                      <span>DEC. 05, 2020</span>
                      <a href="">3 COMMENTS</a>
                    </div>
                    <div className={styled.about}>
                      <h3>Explore The Best Restaurant in New York</h3>
                      <h5>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className={styled.card}>
                  <div className={styled.image}>
                    <img src={image3} alt="" />
                    <div className={styled.author}>
                      <div className={styled.name}>
                        <img src={author} alt="" />
                        <span>John Dorf</span>
                      </div>
                      <div className={styled.heart}>
                        <span>
                          <CiHeart />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styled.texts}>
                    <div className={styled.numbers}>
                      <span>DEC. 05, 2020</span>
                      <a href="">3 COMMENTS</a>
                    </div>
                    <div className={styled.about}>
                      <h3>Explore The Best Restaurant in New York</h3>
                      <h5>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className={styled.card}>
                  <div className={styled.image}>
                    <img src={image4} alt="" />
                    <div className={styled.author}>
                      <div className={styled.name}>
                        <img src={author} alt="" />
                        <span>John Dorf</span>
                      </div>
                      <div className={styled.heart}>
                        <span>
                          <CiHeart />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styled.texts}>
                    <div className={styled.numbers}>
                      <span>DEC. 05, 2020</span>
                      <a href="">3 COMMENTS</a>
                    </div>
                    <div className={styled.about}>
                      <h3>Explore The Best Restaurant in New York</h3>
                      <h5>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </h5>
                    </div>
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

export default RecentBlogs;
