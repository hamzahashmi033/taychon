"use client";
import initIsotope from "@/common/initIsotope";
import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function Portfolio() {
  useGSAP(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-portfolio-head",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        scrub: 3,
      },
    });

    // Add animations to the timeline
    // Add animations to the timeline
    tl.from([".portfolio-head", ".filtering"], {
      y: 400,
      opacity: 0,
      duration: 0.9,
      stagger: 0, // No stagger, both animate at the same time
    }).from(
      ".portfolio-main",
      {
        y: 800,
        opacity: 0,
        duration: 0.9,
      },
      "+=0.5"
    ); // Add a slight delay before animating portfolio-main
  }, []);
  useEffect(() => {
    initIsotope();
  }, []);
  return (
    <section className="work-grid section-padding pb-0">
      <div className="container-fluid">
        <div className="row mb-80 trigger-portfolio-head">
          <div className="col-lg-4 portfolio-head">
            {/* <div className="sec-head">
              <h6 className="sub-title main-color mb-10">DISCOVER OUR CASES</h6>
              <h3 className="text-black">Latest Projects</h3>
            </div> */}
            <div>
              <span className="sub-title subtitle main-color mb-5 text-bold">
                DISCOVER OUR CASES
              </span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text color-black">
                  Latest <span className="fw-200">Projects</span>
                </span>
              </h3>
            </div>
          </div>
          <div className="filtering col-lg-12 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                <span data-filter="*" className="active" data-count="30">
                  All
                </span>
                <span data-filter=".design" data-count="09">
                  Design
                </span>
                <span data-filter=".development" data-count="12">
                  Development
                </span>
                <span data-filter=".marketing" data-count="09">
                  Marketing
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="container-fluid">
        <div className="gallery portfolio-main row md-marg">
          <div className="col-lg-4 col-md-6 items development">
            {/* <div className="item mb-50" > 
              <div className="img">
                <img src="/assets/imgs/portfolio/Auto Mov.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Auto Mov</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div> */}
            <figure className="mb-50">
              <img src="/assets/imgs/portfolio/Auto Mov.png" alt="Mountains" />
              <figcaption>
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black fontIncreaser">Auto Mov</h6>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            {/* <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/BIXOS.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Bixos</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div> */}
            <figure className="mb-50">
              <img src="/assets/imgs/portfolio/BIXOS.png" alt="Mountains" />
              <figcaption>
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black fontIncreaser">Bixos</h6>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            {/* <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/Grain Grower.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Grain Grower</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div> */}
            <figure className="mb-50">
              <img
                src="/assets/imgs/portfolio/Grain Grower.png"
                alt="Mountains"
              />
              <figcaption>
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black fontIncreaser">Grain Grower</h6>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/Medikor.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Medikor</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/MODHU.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Modhu</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/OCLE.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Ocle</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/Red Business.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Red Business</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/Sell Shop.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Sell Shop</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/SOFTO.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Softo</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/Vitour.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Vitour</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/Web Tech.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Web Tech</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/portfolio/Wia Tech1.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">
                    Web Development
                  </span>
                  <h6 className="text-black">Wia Tech</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/graphic/Card-Design.webp" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Graphic Design</span>
                  <h6 className="text-black">Card Design</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/graphic/Portfolio Design.webp" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Graphic Design</span>
                  <h6 className="text-black">Card Design</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/graphic/Logo Design1.webp" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Graphic Design</span>
                  <h6 className="text-black">Logo Design</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/graphic/Logo Design.webp" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Graphic Design</span>
                  <h6 className="text-black">Logo Design</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/graphic/img5.webp" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Graphic Design</span>
                  <h6 className="text-black">Card Design</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/graphic/img6.webp" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Graphic Design</span>
                  <h6 className="text-black">Card Design</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/graphic/img7.webp" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Graphic Design</span>
                  <h6 className="text-black">Card Design</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/graphic/img8.webp" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Graphic Design</span>
                  <h6 className="text-black">Logo Design</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/graphic/img9.webp" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Graphic Design</span>
                  <h6 className="text-black">Card Design</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/marketing/img1.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6 className="text-black">Modhu</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/marketing/img2.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6 className="text-black">The Verge</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/marketing/img3.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6 className="text-black">Ocle</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/marketing/img4.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6 className="text-black">Red Business</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/marketing/img5.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6 className="text-black">Sell Shop</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/marketing/img6.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6 className="text-black">Softo</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/marketing/img7.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6 className="text-black">Grain Grower </h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/marketing/img8.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6 className="text-black">Bixos</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/marketing/img9.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6 className="text-black">Auto Mov</h6>
                </div>
                <div className="ml-auto">
                  <a href="/portfolio-grid">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default Portfolio;
