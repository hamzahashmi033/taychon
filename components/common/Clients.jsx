"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
function Clients() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-client-section",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        scrub: 3,
      },
    });
    tl.from(".client-head-section", {
      y: 400,
      opacity: 0,
      duration: 0.9,
      stagger: 0, // No stagger, both animate at the same time
    }).from(
      ".swiper5",
      {
        y: 400,
        opacity: 0,
        duration: 0.9,
      },
      "+=0.5"
    ) // Add a slight delay before animating portfolio-main
    .from(
      ".client-sec-bottom",
      {
        y: 400,
        opacity: 0,
        duration: 0.9,
      },
      "+=0.5"
    ); // Add a slight delay before animating portfolio-main
  }, []);
  const swiperOptions = {
    speed: 600,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 40,
    centeredSlides: true,
    breakpoints: {
      300: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: false,
      },
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      600: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1000: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 40,
        centeredSlides: true,
      },
    },
  };
  return (
    <section className="clients-carso in-circle section-padding bg-black">
      <div className="container">
        <div className="row justify-content-center trigger-client-section">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head client-head-section text-center mb-80">
              <h3>
                We&apos;re proud to work with <br /> a{" "}
                <span className="opacity-7">diverse range of companies.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="swiper5" data-carousel="swiper">
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-clients"
            className="swiper-container"
            data-swiper="container"
          >
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c1.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c2.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c3.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c4.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c5.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="sec-bottom client-sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <h6 className="fz-14 fw-400 text-black">
              More than <span className="fw-600"> 200+ companies &nbsp;</span>
              trusted us worldwide
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
