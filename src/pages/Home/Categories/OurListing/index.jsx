import React, { useEffect } from 'react'
import styled from "./ourlisting.module.scss"
import image1 from "../../../../assets/list11.webp"
import image2 from "../../../../assets/list22.webp"
import image3 from "../../../../assets/list33.webp"
import image4 from "../../../../assets/list44.webp"
import image5 from "../../../../assets/list55.webp"
import image6 from "../../../../assets/list66.webp"
import image7 from "../../../../assets/list77.webp"
import image8 from "../../../../assets/list88.webp"
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import burger from "../../../../assets/burger.png"
import review from "../../../../assets/review.png"
import shopping from "../../../../assets/online-shopping.png"
import Aos from 'aos'
import "aos/dist/aos.css"

const OurListing = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
          <div className={styled.texts}>
            <h4>OUR LISTING</h4>
            <h2>Popular Listing</h2>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row g-3">
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={image1} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={burger} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">Beauty</a>
                 <p>Japanese Restaurant</p>
                 <span><FaLocationDot />Suite 721 New York NY 10016</span>
                 <span><BsFillTelephoneFill />+00 123 456 7890</span>
                </div>
                <hr />
                <div className={styled.rate}>
                 <div className={styled.review}>
                 <span>Review <b>5.0/5</b></span>
                 <a href=''><FaStar />(100)</a>
                 </div>
                 <div className={styled.heart}>
                 <span><CiHeart /></span>
                 </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={image2} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={review} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">Bar & Club</a>
                 <p>Harbor Lights Hotel</p>
                 <span><FaLocationDot />Suite 721 New York NY 10016</span>
                 <span><BsFillTelephoneFill />+00 123 456 7890</span>
                </div>
                <hr />
                <div className={styled.rate}>
                <div className={styled.review}>
                 <span>Review <b>5.0/5</b></span>
                 <a href=''><FaStar />(100)</a>
                 </div>
                 <div className={styled.heart}>
                 <span><CiHeart /></span>
                 </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={image3} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={shopping} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">CIRCUS</a>
                 <p>MS Center Mall of Asia</p>
                 <span><FaLocationDot />Suite 721 New York NY 10016</span>
                 <span><BsFillTelephoneFill />+00 123 456 7890</span>
                </div>
                <hr />
                <div className={styled.rate}>
                <div className={styled.review}>
                 <span>Review <b>5.0/5</b></span>
                 <a href=''><FaStar />(100)</a>
                 </div>
                 <div className={styled.heart}>
                 <span><CiHeart /></span>
                 </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={image4} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={burger} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">THEATER</a>
                 <p>Maxout Fitness Gym</p>
                 <span><FaLocationDot />Suite 721 New York NY 10016</span>
                 <span><BsFillTelephoneFill />+00 123 456 7890</span>
                </div>
                <hr />
                <div className={styled.rate}>
                <div className={styled.review}>
                 <span>Review <b>5.0/5</b></span>
                 <a href=''><FaStar />(100)</a>
                 </div>
                 <div className={styled.heart}>
                 <span><CiHeart /></span>
                 </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={image5} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={burger} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">THEATER</a>
                 <p>Japanese Restaurant</p>
                 <span><FaLocationDot />Suite 721 New York NY 10016</span>
                 <span><BsFillTelephoneFill />+00 123 456 7890</span>
                </div>
                <hr />
                <div className={styled.rate}>
                 <div className={styled.review}>
                 <span>Review <b>5.0/5</b></span>
                 <a href=''><FaStar />(100)</a>
                 </div>
                 <div className={styled.heart}>
                 <span><CiHeart /></span>
                 </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={image6} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={review} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">SPORTS</a>
                 <p>Harbor Lights Hotel</p>
                 <span><FaLocationDot />Suite 721 New York NY 10016</span>
                 <span><BsFillTelephoneFill />+00 123 456 7890</span>
                </div>
                <hr />
                <div className={styled.rate}>
                 <div className={styled.review}>
                 <span>Review <b>5.0/5</b></span>
                 <a href=''><FaStar />(100)</a>
                 </div>
                 <div className={styled.heart}>
                 <span><CiHeart /></span>
                 </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={image7} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={shopping} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">GAMES</a>
                 <p>MS Center Mall of Asia</p>
                 <span><FaLocationDot />Suite 721 New York NY 10016</span>
                 <span><BsFillTelephoneFill />+00 123 456 7890</span>
                </div>
                <hr />
                <div className={styled.rate}>
                 <div className={styled.review}>
                 <span>Review <b>5.0/5</b></span>
                 <a href=''><FaStar />(100)</a>
                 </div>
                 <div className={styled.heart}>
                 <span><CiHeart /></span>
                 </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={image8} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={burger} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">PLACES</a>
                 <p>Maxout Fitness Gym</p>
                 <span><FaLocationDot />Suite 721 New York NY 10016</span>
                 <span><BsFillTelephoneFill />+00 123 456 7890</span>
                </div>
                <hr />
                <div className={styled.rate}>
                 <div className={styled.review}>
                 <span>Review <b>5.0/5</b></span>
                 <a href=''><FaStar />(100)</a>
                 </div>
                 <div className={styled.heart}>
                 <span><CiHeart /></span>
                 </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurListing