"use client";
import React from "react";

function Intro2() {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }
  return (
    <section className="intro-accord">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-12 valign">
            <div style={{ width: "100%" }}>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15 ">Why choose us?</h6>
                <h3 className="text-red-600">
                  Our Process <br /> From Vision to Execution
                </h3>
              </div>
              <div className="accordion   bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>Discovery & Research</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      We analyze your business needs, market trends, and user
                      requirements to define clear objectives and ensure a
                      strong foundation for your software solution.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Planning & Strategy</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Our team creates a detailed roadmap, outlining project
                      scope, technologies, timelines, and resources to ensure a
                      smooth development process.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>UI/UX Design</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      We design intuitive, user-centric interfaces and
                      experiences, focusing on aesthetics, functionality, and
                      seamless interactions to enhance user engagement.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Development & Coding</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Our developers write clean, scalable, and efficient code,
                      leveraging modern frameworks and best practices to build
                      robust software solutions.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Testing & Quality Assurance</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      We conduct rigorous testing, including functionality,
                      performance, security, and usability checks, ensuring a
                      bug-free and reliable product.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Deployment & Launch</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      After final refinements, we deploy the software in a live
                      environment, ensuring smooth integration and optimal
                      performance for end users.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Monitoring & Optimization</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      We continuously monitor system performance, fix issues,
                      and optimize functionality to maintain efficiency and
                      scalability.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Maintenance & Support</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Our team provides ongoing updates, security patches, and
                      technical support to ensure your software remains
                      up-to-date and high-performing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
