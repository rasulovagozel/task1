import React, { useEffect } from 'react'
import styled from "./popularlisting.module.scss"
import img1 from "../../../../assets/list1.webp"
import img2 from "../../../../assets/list2.webp"
import img3 from "../../../../assets/list3.webp"
import img4 from "../../../../assets/list4.webp"
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
const PopularListing = () => {
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
            <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={img1} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={burger} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">FOOD & DRINKS</a>
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
            <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={img2} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={review} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">HOTEL</a>
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
            <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={img3} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={shopping} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">SHOPPING</a>
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
            <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className={styled.card}>
                <div className={styled.img}>
                  <img src={img4} alt="" />
                  <span><FaSearch /></span>
                </div>
                <div className={styled.logo}>
                 <img src={burger} alt="" />
                </div>
                <div className={styled.infos}>
                <div className={styled.text}>
                 <a href="">GYM FITNESS</a>
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

export default PopularListing