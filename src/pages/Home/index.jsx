import React from "react";
import Navbar from "../../features/Layout/Navbar";
import styled from "./home.module.scss";
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import Categories from "./Categories";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
  <>
  <section className={styled.home}>
  <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styled.main_part}>
              <div className={styled.header}>
                <h1>Let`s Explore Your Awesome City</h1>
                <p>
                  Find great places to stay, eat, shop, or visit from local
                  experts.
                </p>
              </div>
              <div className={styled.inputs}>
                <div
                  className="row g-0"
                  style={{ display: "flex", flexDirection: "row",justifyContent:"space-between" }}
                >
                  <div className="col-lg-3">
                    <div className={styled.form}>
                      <CiSearch />
                      <input type="text" placeholder="What are you looking?" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className={styled.form}>
                      <IoLocationSharp />
                      <input type="text" placeholder="Search Location" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className={styled.form}>
                      <select>
                        <option value="">All Categories</option>
                        <option value="">Food & Drinks</option>
                        <option value="">Hotel</option>
                        <option value="">Shopping</option>
                        <option value="">Beauty</option>
                        <option value="">Fitness</option>
                        <option value="">Bar & Club</option>
                        <option value="">Games</option>
                        <option value="">Places</option>
                        <option value="">Circus</option>
                        <option value="">Theater</option>
                        <option value="">Sports</option>
                        <option value="">Health</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className={styled.form}>
                      <CiSearch className={styled.search} />
                      <button>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styled.categories}>
      <Categories />
    </section>
    <section className={styled.howWorks}>
      <HowItWorks />
    </section>
  </>
  );
};

export default Home;
