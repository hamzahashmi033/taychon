import React from "react";

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/imgs/intro/i1.jpg" alt="" />
                  <div className="img-icon">
                    <img src="/assets/imgs/arw0.png" alt="" />
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <img src="/assets/imgs/intro/i2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30 text-black">
                Taychon is innovative <span className="fw-200">& advance</span>{" "}
                software and creative agency which has{" "}
                <span className="fw-200">experienced</span> &{" "}
                <span className="fw-200">skilled</span>
                team members.
              </h3>
              <p className="text-black">
                Taychon is a forward-thinking software and creative design
                company dedicated to building cutting-edge digital solutions. We
                specialize in web development, app creation, AI integration, and
                UI/UX design to drive business success.
              </p>
              <a href="/page-services" className="main-color mt-40">
                <span className="text">
                  Our Services <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
