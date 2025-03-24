"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function Feat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  const mm = gsap.matchMedia();

  useGSAP(() => {
    mm.add("(min-width: 1000px)", () => {
      gsap.from(".cont", {
        y: 300,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".feat-cont",
          start: "top 80%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          scrub: 2,
        },
      });

      gsap.from(gsap.utils.toArray(".serviceCard"), {
        y: 100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2, // Delay between each animation
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feat-cont",
          start: "top 80%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          scrub: 2,
        },
      });
    });
  });

  return (
    <section className="feat section-padding">
      <div className="container ontop">
        <div className="row feat-cont">
          <div className="col-lg-5">
            <div className="cont md-mb50">
              <h6 className="sub-title main-color mb-15 text-bold">Trusted Services</h6>
              <h3 className="mb-30 color-black">
                The service we offer is specifically designed to meet your
                needs.
              </h3>
              <p className="color-black">
                Driven professional dedicated to making a lasting impact through
                innovative solutions and unwavering excellence.
              </p>
              <a
                href="/page-about"
                className="butn-crev d-flex align-items-center mt-40"
              >
                <span className="hover-this">
                  <span className="circle hover-anim">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </span>
                <span className="text">Learn more</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="item serviceCard mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/web.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Web Development</h5>
                    <p>
                      Our expert developers build responsive, high-performance
                      websites with modern technologies, delivering scalable,
                      secure, and fast solutions tailored to your business
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item serviceCard mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/app.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">App Development</h5>
                    <p>
                      We develop robust, feature-rich mobile and web
                      applications, ensuring smooth performance, scalability,
                      and an exceptional user experience across platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item serviceCard mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/graphic.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Graphic Design</h5>
                    <p>
                      We bring creativity to life with compelling visuals,
                      branding, and multimedia content, ensuring impactful
                      design solutions for businesses and marketing campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item serviceCard">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/marketing.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Marketing</h5>
                    <p>
                      We bring creativity to life with compelling visuals,
                      branding, and multimedia content, ensuring impactful
                      design solutions for businesses and marketing campaigns.
                    </p>
                  </div>
                </div>
              </div>
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

export default Feat;
