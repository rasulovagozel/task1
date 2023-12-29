import React from 'react'
import styled from "./footer.module.scss"
import { TiSocialTwitter } from "react-icons/ti";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoMap } from "react-icons/io5";
import { HiPhone } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";

const Footer= () => {
  return (
    <>
    <section className={styled.footer}>
      <div className="container">
      <div className="row g-3">
        <div className="col-lg-3">
         <div className={styled.logo_infos}>
          <div className={styled.header}>
            <h2>Directone</h2>
            <p>DIRECTORY AND LISTING</p>
          </div>
          <div className={styled.info}>
            <span>A small river named Duden flows by their place and supplies it with the necessary regelialia.</span>
          </div>
          <div className={styled.apps}>
            <div className={styled.app}>
              <span><TiSocialTwitter /></span>
            </div>
            <div className={styled.app}>
              <span><CgFacebook /></span>
            </div>
            <div className={styled.app}>
              <span><IoLogoInstagram /></span>
            </div>
          </div>
         </div>
        </div>
        <div className="col-lg-9">
        <div className="row g-3">
        <div className="col-lg-3">
          <div className={styled.list}>
          <p>Explore</p>
            <div className={styled.list_items}>
            <span><IoIosArrowForward /> About Us</span>
            <span><IoIosArrowForward /> Account</span>
            <span><IoIosArrowForward /> Listing</span>
            <span><IoIosArrowForward /> Pricing Packages</span>
            <span><IoIosArrowForward /> Pricing Packages</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={styled.list}>
          <p>Quick Links</p>
            <div className={styled.list_items}>
            <span><IoIosArrowForward /> Contact Us</span>
            <span><IoIosArrowForward /> Terms & Conditions</span>
            <span><IoIosArrowForward /> Privacy</span>
            <span><IoIosArrowForward /> Feedbacks</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={styled.list}>
          <p>Categories</p>
            <div className={styled.list_items}>
            <span><IoIosArrowForward /> Food & Drinks</span>
            <span><IoIosArrowForward /> Hotels</span>
            <span><IoIosArrowForward /> Shopping</span>
            <span><IoIosArrowForward /> Beauty</span>
            <span><IoIosArrowForward /> Fitness</span>
            <span><IoIosArrowForward /> Bar & Club</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className={styled.list}>
          <p>Have a Questions?</p>
            <div className={styled.text_infos}>
            <span><IoMap /> 203 Fake St. Mountain View, San Francisco, California, USA</span>
            <span><HiPhone /> +2 392 3929 210</span>
            <span><FaTelegramPlane /> info@yourdomain.com</span>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    </section>
    <section className={styled.fluid}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styled.fluidText}>
          <p>Copyright ©2023 All rights reserved | This template is made with  by <span>Colorlib</span></p>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Footer