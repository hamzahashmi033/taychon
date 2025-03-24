"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import loadBackgroudImages from "@/common/loadBackgroudImages";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const containerRef = useRef(null);
  const mm = gsap.matchMedia();

  useGSAP(() => {
    mm.add("(min-width: 1000px)", () => {
      gsap.from(".imgOne", {
        opacity: 0,
        x: -1000,
        duration: 1.8, // Slower animation
        delay: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".intro-trigger",
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          scrub: 2, // Slower scrub effect
        },
      });

      gsap.from(".img2", {
        opacity: 0,
        y: 1000,
        duration: 1.5, // Slower effect
        delay: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".intro-trigger",
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          scrub: 2, // More smoothness
        },
      });

      gsap.from(".text", {
        opacity: 0,
        x: -550,
        duration: 1.2, // Slightly longer duration
        delay: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".intro-trigger",
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          scrub: 2,
          // markers:true
        },
      });

      gsap.from(".numbers .item", {
        opacity: 0,
        y: 30,
        duration: 1, // Smoother transition
        delay: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".intro-trigger",
          start: "top 90%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          scrub: 2,
        },
      });
    });
  });

  return (
    <section className="intro section-padding" ref={containerRef}>
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8 md-mb80  intro-trigger">
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
                    <span className="fw-300">Software</span> & Design.
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
                      <h6 className="p-color sub-title text-bold">
                        Projects Completed
                      </h6>
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
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </section>
  );
}

export default Intro;
