import React from "react";
import styled from "./contactus.module.scss";
const ContactUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className={styled.textPart}>
            <div className={styled.header}>
              <h2>Contact us</h2>
              <h4>We are open for any suggestion or just to have a chat</h4>
            </div>
            <div className={styled.infos}>
              <div className="row">
                <div className="col-lg-4">
                  <div className={styled.address}>
                    <p>ADDRESS:</p>
                    <h5>198 West 21th Street, Suite 721 New York NY 10016</h5>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={styled.email}>
                    <p>EMAIL:</p>
                    <span>info@yoursite.com</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={styled.phone}>
                    <p>PHONE:</p>
                    <span>+1235 2355 98</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styled.inputs}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <input type="text" placeholder="Create a message here" />
              <button>SEND MESSAGE</button>
            </div>
            <div className={styled.followUs}>
              <p>Follow us here</p>
              <div className={styled.apps}>
                <a href="">FACEBOOK</a>
                <a href="">TWITTER</a>
                <a href="">INSTAGRAM</a>
                <a href="">DRIBBLE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={styled.img}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
