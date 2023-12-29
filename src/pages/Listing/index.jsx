import React from 'react'
import Navbar from "../../features/Layout/Navbar";
import { Link } from 'react-router-dom';
import styled from "./listing.module.scss"
import { IoIosArrowForward } from "react-icons/io";

const Listing = () => {
  return (
    <section className={styled.listing}>
      <Navbar />
    <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className={styled.main_part}>
          <div className={styled.otherParts}>
           <Link to="/">HOME <span><IoIosArrowForward /></span></Link>
           <Link to="/listing">LISTING <span><IoIosArrowForward /></span></Link>
          </div>
         <div className={styled.ourListing}>
         <h1>Our Listing</h1>
         </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  )
}

export default Listing