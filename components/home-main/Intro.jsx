"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".imgOne", {
        opacity: 0,
        duration: 1.2,
        delay:1,
        y:-100,
        scrollTrigger: {
          trigger: ".container",
          start: "top 60%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          scrub:1
        },
      });
      gsap.from(".img2", {
        opacity: 0,
        duration: 0.9,
        delay:1,
        y:100,
        scrollTrigger: {
          trigger: ".container",
          start: "top 60%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          
          scrub:1
        },
      });

      gsap.from(".text", {
        opacity: 0,
        x: -50,
        delay:1.6,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".text",
          start: "top 75%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          scrub: 1,
        },
      });

      gsap.from(".numbers .item", {
        opacity: 0,
        y: 30,
        delay:1.6,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".numbers",
          start: "top 90%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="intro section-padding" ref={containerRef}>
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8 md-mb80">
            <div className="row lg-marg align-items-center">
              <div className="col-md-6">
                <div className="img1 sm-mb50">
                  <img
                    src="/assets/imgs/intro/intro2.jpg"
                    alt=""
                    className="imgOne"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text">
                  <h3 className="mb-30 color-black">
                    Empowering Digital Innovation Through{" "}
                    <span className="fw-300">Software</span> &
                    <span className="fw-300">&nbsp; Design.</span>
                  </h3>
                  <p className="color-black">
                    Taychon pioneers cutting-edge software and creative design,
                    enabling digital organizations to harness individual talents
                    for collective success.
                  </p>
                  <a href="/page-about" className="underline main-color mt-40">
                    <span className="text text-bold">
                      More About Us <i className="ti-arrow-top-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="numbers mt-80">
              <div className="row lg-marg">
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                    <div>
                      <h3 className="fw-300 mb-10 color-black">100%</h3>
                      <h6 className="p-color sub-title text-bold">
                        Clients Satisfaction
                      </h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                    <div>
                      <h3 className="fw-300 mb-10 color-black ">100K +</h3>
                      <h6 className="p-color sub-title text-bold">Projects Completed</h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img-full fit-img">
              <img
                src="/assets/imgs/intro/intro1.jpg"
                alt=""
                className="img2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
