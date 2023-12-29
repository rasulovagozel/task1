import React from 'react'
import Navbar from "../../features/Layout/Navbar";
import { Link } from 'react-router-dom';
import styled from "./blog.module.scss"
import { IoIosArrowForward } from "react-icons/io";
const Blog = () => {
  return (
    <section className={styled.blog}>
      <Navbar />
      <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={styled.main_part}>
            <div className={styled.otherParts}>
             <Link to="/">HOME <span><IoIosArrowForward /></span></Link>
             <Link to="/blog">BLOG <span><IoIosArrowForward /></span></Link>
            </div>
           <div className={styled.ourBlog}>
           <h1>Our Blog</h1>
           </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Blog