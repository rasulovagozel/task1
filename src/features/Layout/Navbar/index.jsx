import React from "react";
import { Link } from 'react-router-dom';
import styled from "./navbar.module.scss";
import { VscCompass } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const location=useLocation();
  return (
    <section className={styled.navPart}>
      <nav className={styled.navbar}>
      <div className="container">
      <div className={styled.row} style={{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"}}>
        <div className="col-lg-3 col-md-3 col-sm-4">
          <div className={styled.logo}>
            <div className={styled.img}>
            <VscCompass />
            </div>
            <div className={styled.texts}>
              <span>Directone</span>
              <p>DIRECTORY AND LISTING</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-0">
          <div className={styled.lists}>
          <ul>
            <Link to="/" className={location.pathname=="/"&&styled.active}>
              <li>HOME</li>
            </Link>
            <Link to="/about" className={location.pathname=="/about"&&styled.active}>
              <li>ABOUT</li>
            </Link>
            <Link to="/listing" className={location.pathname=="/listing"&&styled.active}>
              <li>LISTING</li>
            </Link>
            <Link to="/blog" className={location.pathname=="/blog"&&styled.active}>
              <li>BLOG</li>
            </Link>
            <Link to="/contact" className={location.pathname=="/contact"&&styled.active}>
              <li>CONTACT</li>
            </Link>
          </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4">
          <div className={styled.nav_end}>
          <div className={styled.add_list}>
            <button><span>+</span> ADD LISTING</button>
          </div>
          <div className={styled.menu}>
            <span><IoMenu /> MENU</span>
          </div>
          </div>
        </div>
      </div>
    </div>
    </nav>
    </section>
  );
};

export default Navbar;
