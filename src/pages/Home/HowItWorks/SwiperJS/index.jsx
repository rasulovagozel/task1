import React, { useEffect } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "./swiperjs.module.scss";
import photo1 from "../../../../assets/person1.webp";
import photo2 from "../../../../assets/person2.webp";
import photo3 from "../../../../assets/person3.webp";
import { ImQuotesLeft } from "react-icons/im";
import Aos from 'aos'
import "aos/dist/aos.css"

const SwiperJS = () => {
  useEffect(()=>{
    Aos.init();
   },[])
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
          <div className={styled.people}>
            <h3>TESTIMONIAL</h3>
            <h2>Happy People</h2>
          </div>
        </div>
          </div>
      </div>
      <div className="container">
        <div className="row g-0">
        <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="row">
            <Swiper
            style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}
              modules={[Pagination,Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              autoplay={{delay:2000}}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
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
            >
              <div className="row g-3">
                <div className="col-lg-4 col-md-6 col-sm-12">
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
                </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
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
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
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
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
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
              </div>
              </div>
            </Swiper>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SwiperJS;
