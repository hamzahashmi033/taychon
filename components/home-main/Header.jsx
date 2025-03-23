"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );
    // GSAP animation for title and description
    tl.fromTo(".caption h1", { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 1 });
    tl.fromTo(".caption .text p", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
    tl.fromTo(".info", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");
    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="header main-header bg-img valign">
      {/* Video Background */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/imgs/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container ontop">
        <div className="row">
          <div className="col-lg-11">
            <div className="caption">
              <h1>Innovate, Create, Connect</h1>
              <div className="d-flex align-items-end">
                <div>
                  <h1 className="nowrap">
                    <span className="main-color text-bold">The Taychon Way.</span>
                  </h1>
                </div>
                <div>
                  <div className="text ml-20">
                    <p>
                      Taychon builds cutting-edge software and creative designs,
                      empowering digital organizations to harness individual
                      talents for collective innovation{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-80">
          <div className="col-lg-6 order-md-2"></div>
          <div className="col-lg-6 d-flex justify-content-end order-md-1">
            <div className="info">
              <h2 className="mb-10">100k +</h2>
              <h6>
                Projects completed <br />
                <span className="main-color">successfully</span>
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Background Video Styling */}
      <style jsx>{`
        .background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}

export default Header;
