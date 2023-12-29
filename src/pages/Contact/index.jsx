import React from "react";
import styled from "./contact.module.scss";
import Navbar from "../../features/Layout/Navbar";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ContactUs from "./ContactUs";

const Contact = () => {
  return (
    <>
    <section className={styled.contact}>
    <Navbar />
      <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styled.main_part}>
            <div className={styled.otherParts}>
             <Link to="/">HOME <span><IoIosArrowForward /></span></Link>
             <Link to="/contact">CONTACT <span><IoIosArrowForward /></span></Link>
            </div>
           <div className={styled.contactUs}>
           <h1>Contact us</h1>
           </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <section>
    <ContactUs />
    </section>
    </>
  );
};

export default Contact;
