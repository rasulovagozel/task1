import React, { useEffect } from 'react'
import styled from "./categories.module.scss"
import food from "../../../assets/burger.png"
import review from "../../../assets/review.png"
import shopping from "../../../assets/online-shopping.png"
import skincare from "../../../assets/skincare.png"
import diet from "../../../assets/diet.png"
import club from "../../../assets/night-club.png"
import joystick from "../../../assets/joystick.png"
import point from "../../../assets/meeting-point.png"
import circus from "../../../assets/circus.png"
import cinema from "../../../assets/cinema.png"
import sport from "../../../assets/sport.png"
import healthy from "../../../assets/healthy-food.png"
import PopularListing from './PopularListing'
import Offers from "../../About/Offers"
import OurListing from './OurListing'
import AboutUs from "../../About/AboutUs"
import Aos from 'aos'
import "aos/dist/aos.css"
const Categories = () => {
    useEffect(()=>{
      Aos.init();
    },[])
  return (
    <>
    <div className="container">
        <div className="row g-0">
            <div className="col-lg-12" style={{marginTop:-80}}>
            <div className="row g-3" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className={styled.card}>
                 <img src={food} alt="" />
                 <p>Food & Drink</p>
                 <a href=""><span>103</span> LISTINGS</a>
                 <span className='flaticon-food-and-drink'></span>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" >
                <div className={styled.card}>
                 <img src={review} alt="" />
                 <p>Hotels</p>
                 <a href=""><span>40</span> LISTINGS</a>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className={styled.card}>
                 <img src={shopping} alt="" />
                 <p>Shopping</p>
                 <a href=""><span>100</span> LISTINGS</a>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" >
                <div className={styled.card}>
                 <img src={skincare} alt="" />
                 <p>Beauty</p>
                 <a href=""><span>36</span> LISTINGS</a>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <div className={styled.card}>
                 <img src={diet} alt="" />
                 <p>Fitness</p>
                 <a href=""><span>30</span> LISTINGS</a>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <div className={styled.card}>
                 <img src={club} alt="" />
                 <p>Bar & Club</p>
                 <a href=""><span>12</span> LISTINGS</a>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className={styled.card}>
                 <img src={joystick} alt="" />
                 <p>Games</p>
                 <a href=""><span>103</span> LISTINGS</a>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className={styled.card}>
                 <img src={point} alt="" />
                 <p>Places</p>
                 <a href=""><span>40</span> LISTINGS</a>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <div className={styled.card}>
                 <img src={circus} alt="" />
                 <p>Circus</p>
                 <a href=""><span>100</span> LISTINGS</a>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <div className={styled.card}>
                 <img src={cinema} alt="" />
                 <p>Theater</p>
                 <a href=""><span>36</span> LISTINGS</a>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <div className={styled.card}>
                 <img src={sport} alt="" />
                 <p>Sport</p>
                 <a href=""><span>30</span> LISTINGS</a>
                </div>
            </div>
            <div className="col-lg-2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <div className={styled.card}>
                 <img src={healthy} alt="" />
                 <p>Health</p>
                 <a href=""><span>12</span> LISTINGS</a>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
    <section className={styled.popularListing}>
        <PopularListing />
    </section>
    <section className={styled.offersPart}>
    <div className="container">
        <div className="row">
        <Offers />
        </div>
    </div>
    </section>
    <section className={styled.ourListing}>
     <OurListing />
    </section>
    <section className={styled.directone}>
        <AboutUs />
    </section>
    </>
  )
}

export default Categories