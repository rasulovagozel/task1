import React, { useEffect } from "react";
import { Pagination,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "./swiperpart.module.scss";
import photo1 from "../../../assets/person1.webp";
import photo2 from "../../../assets/person2.webp";
import photo3 from "../../../assets/person3.webp";
import { ImQuotesLeft } from "react-icons/im";
import Offers from "../Offers";
import Aos from 'aos'
import "aos/dist/aos.css"

const SwiperPart = () => {
  useEffect(()=>{
    Aos.init();
   },[])
  return (
    <section className={styled.swiperPart}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
            <div className={styled.people}>
              <h3>TESTIMONIAL</h3>
              <h2>Happy People</h2>
            </div>
          </div>
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className={styled.cards}>
            <Swiper
            style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}
              modules={[Pagination,Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              breakpoints={{
                992:{
               slidesPerView:3
                },
                768: {
                  slidesPerView: 2,
                },
                500:{
                  slidesPerView:1
                }
              }}
              autoplay={{delay:4000}}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className={styled.peopleBlock}>
                <div className={styled.icon}>
                  <ImQuotesLeft />
                  </div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className={styled.author}>
                    <div className={styled.img}>
                      <img src={photo1} alt="" />
                    </div>
                    <div className={styled.authorName}>
                      <p>Roger Scott</p>
                      <span>MARKETING MANAGER</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styled.peopleBlock}>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className={styled.author}>
                    <div className={styled.img}>
                      <img src={photo2} alt="" />
                    </div>
                    <div className={styled.authorName}>
                      <p>Roger Scott</p>
                      <span>MARKETING MANAGER</span>
                    </div>
                  </div>
                  <div className={styled.icon}>
                  <ImQuotesLeft />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styled.peopleBlock}>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className={styled.author}>
                    <div className={styled.img}>
                      <img src={photo3} alt="" />
                    </div>
                    <div className={styled.authorName}>
                      <p>Roger Scott</p>
                      <span>MARKETING MANAGER</span>
                    </div>
                  </div>
                  <div className={styled.icon}>
                  <ImQuotesLeft />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styled.peopleBlock}>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className={styled.author}>
                    <div className={styled.img}>
                      <img src={photo1} alt="" />
                    </div>
                    <div className={styled.authorName}>
                      <p>Roger Scott</p>
                      <span>MARKETING MANAGER</span>
                    </div>
                  </div>
                  <div className={styled.icon}>
                  <ImQuotesLeft />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
          <div className="col-lg-12">
            <Offers />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwiperPart;
