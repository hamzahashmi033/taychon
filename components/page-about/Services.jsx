import Link from "next/link";
import React from "react";

function Services() {
  return (
    <section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd">
      <div className="container ontop">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">01</span>
                <div>
                  <span className="sub-title main-color mb-10">
                    Development
                  </span>
                  <h2 className="">
                    WEB <span className="fw-200">DEVELOPMENT</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  We build fast, secure, and scalable websites with modern
                  technologies, ensuring seamless functionality and
                  user-friendly experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/web.jpg" alt="" />
                <Link href="/web-development">
                  <span className="ti-arrow-top-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">02</span>
                <div>
                  <span className="sub-title main-color mb-10">
                    Development
                  </span>
                  <h2>
                    APP <span className="fw-200">DEVELOPMENT</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  Taychon creates high-performance mobile and web apps with
                  intuitive design, smooth performance, and scalable
                  architecture.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/app.jpg" alt="" />
                <Link href="/app-development">
                  <span className="ti-arrow-top-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">03</span>
                <div>
                  <span className="sub-title main-color mb-10">Design</span>
                  <h2>
                    GRAPHIC <span className="fw-200">DESIGN</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  We craft compelling visuals, branding, and marketing materials
                  to enhance brand identity and audience engagement.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/graphic.jpg" alt="" />
                <Link href="/graphic-design">
                  <span className="ti-arrow-top-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item ">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">04</span>
                <div>
                  <span className="sub-title main-color mb-10">Production</span>
                  <h2>
                    DEVOPS <span className="fw-200">ENGINEERING</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  We optimize software deployment with automation, CI/CD, and
                  cloud solutions for faster, reliable, and efficient
                  development.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/devops.jpg" alt="" />
                <Link href="/devops-engineering">
                  <span className="ti-arrow-top-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">05</span>
                <div>
                  <span className="sub-title main-color mb-10">Marketing</span>
                  <h2>
                    DIGITAL <span className="fw-200">Marketing</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  Taychon boosts online presence using SEO, PPC, content, and
                  social media strategies for maximum brand visibility.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/marketing.jpg" alt="" />
                <Link href="/marketing">
                  <span className="ti-arrow-top-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">06</span>
                <div>
                  <span className="sub-title main-color mb-10">
                    Artificial Intelligence
                  </span>
                  <h2>
                    MACHINE <span className="fw-200">LEARNING</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  We develop AI-driven solutions for automation, predictive
                  analytics, and data-driven decision-making.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/ai.jpg" alt="" />
                <Link href="/artificial-intelligence">
                  <span className="ti-arrow-top-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">07</span>
                <div>
                  <span className="sub-title main-color mb-10">Design</span>
                  <h2>
                    UI/UX <span className="fw-200">DESIGN</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  Our team designs user-friendly interfaces with seamless
                  interactions for enhanced digital experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/uiux.jpg" alt="" />
                <Link href="/uiux-design">
                  <span className="ti-arrow-top-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item pb-0">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">08</span>
                <div>
                  <span className="sub-title main-color mb-10">Design</span>
                  <h2>
                    WEB <span className="fw-200">DESIGN</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  We create visually appealing, responsive, and engaging website
                  designs for an optimized user experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/webdesign.jpg" alt="" />
                <Link href="/web-design">
                  <span className="ti-arrow-top-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
