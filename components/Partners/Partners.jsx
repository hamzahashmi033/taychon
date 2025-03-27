'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css"; 

const HomeTwoSponsor = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="sponsor section liner mt-100">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title mb-100 ">
                Our Trusted Technological Partners
                {/* <i className="fa-solid fa-arrow-right"></i> */}
              </span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="sponsor__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={70}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={true}
                centeredSlides={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1400: { slidesPerView: 6 },
                  1200: { slidesPerView: 4 },
                  992: { slidesPerView: 3 },
                  576: { slidesPerView: 2 },
                }}
                modules={[Autoplay]}
                className="sponsor__slider"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="sponsor__slider-item"
                      style={{
                        opacity: index === activeIndex ? 1 : 0.6,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      <Image
                        src={`/assets/imgs/partners/icone-${index + 1}.png`}
                        alt={`Sponsor ${index + 1}`}
                        width={200}
                        height={100}
                        quality={100}
                        style={{ width: index === 4 ? "50px" : "0px",marginTop: index === 4 ? "-10px" : "0px",}}
                        
                        // style={{width:'200px'}}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default HomeTwoSponsor;
