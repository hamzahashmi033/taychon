"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PinSection = () => {
  useGSAP(() => {
    gsap.from(".sec-head-proccess", {
      y: 400,
      opacity: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: ".sec-head-proccess",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        scrub: 3,
      },
    });
    gsap.from(".desktopContentSection1", {
      y: 300,
      opacity: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: ".desktopContentSection1",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        scrub: 3,
      },
    });
    gsap.from(".desktopContentSection2", {
      y: 300,
      opacity: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: ".desktopContentSection2",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        scrub: 3,
      },
    });
    gsap.from(".desktopContentSection3", {
      y: 300,
      opacity: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: ".desktopContentSection3",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        scrub: 3,
      },
    });
    gsap.from(".desktopContentSection4", {
      y: 300,
      opacity: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: ".desktopContentSection4",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        scrub: 3,
      },
    });
    gsap.from(".desktopContentSection5", {
      y: 300,
      opacity: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: ".desktopContentSection5",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        scrub: 3,
      },
    });

    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {
      // this setup code only runs when viewport is at least 600px wide
      console.log("desktop");

      ScrollTrigger.create({
        trigger: ".gallery1",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      // create scrolltrigger for each details section
      // trigger photo animation when headline of each details section
      // reaches 80% of window height
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile");
      };
    });
  }, []);

  return (
    <section className="processSection">
      <div className="sec-head sec-head-proccess mb-20 ">
        <h6 className="sub-title main-color mb-15 text-bold">Why choose us?</h6>
        <h3 className="text-red-600 text-black">
          Our Process <br /> From Vision to Execution
        </h3>
      </div>
      <div className="gallery1">
        <div className="left">
          <div className="desktopContent">
            <div className="desktopContentSection desktopContentSection1">
              <h1 className="text-black">Discovery & Research</h1>
              <p className="text-black">
                We analyze your business goals, user needs, and technical
                requirements through research and discussions. Key
                functionalities, integrations, and constraints are documented to
                align stakeholders. This prevents scope creep, reduces risks,
                and ensures a structured, goal-oriented approach, meeting client
                expectations while adhering to industry standards.
              </p>
            </div>
            <div className="desktopContentSection desktopContentSection2">
              <h1 className="text-black">UI/UX Design</h1>
              <p className="text-black">
                Our expert designers create intuitive, user-friendly interfaces
                to enhance engagement. We develop wireframes, mockups, and
                prototypes, refining usability and branding consistency. Client
                feedback ensures alignment with the business's vision. Every
                element, from typography to colors, is optimized for a seamless,
                visually appealing experience that boosts satisfaction.
              </p>
            </div>
            <div className="desktopContentSection desktopContentSection3">
              <h1 className="text-black">Development Phase</h1>
              <p className="text-black">
                Once designs are finalized, developers use cutting-edge
                technologies and agile methods for continuous integration and
                flexibility. Clean, scalable code ensures security and
                efficiency. Frontend and backend are developed in parallel, with
                code reviews and version control maintaining quality, resulting
                in a fully functional product ready for testing.
              </p>
            </div>
            <div className="desktopContentSection desktopContentSection4">
              <h1 className="text-black">Testing & QA</h1>
              <p className="text-black">
                Before launch, we conduct extensive testing to fix bugs,
                performance issues, and security risks. Our QA team performs
                functional, unit, integration, and stress testing using
                automated and manual methods. Ensuring compliance with industry
                standards, we deliver a stable, high-performing, and secure
                product for real-world use.
              </p>
            </div>
            <div className="desktopContentSection desktopContentSection5">
              <h1 className="text-black">Deployment & Maintenance</h1>
              <p className="text-black">
                After approval, we deploy the software, ensuring seamless
                integration. We monitor performance, address issues, and provide
                updates for security and efficiency. Our maintenance includes
                bug fixes, optimizations, and feature enhancements. By analyzing
                user feedback, we ensure continuous improvements, keeping the
                software competitive and up-to-date.
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="mobileContent">
            <div className="mobilePhoto red"></div>
            <h1>Red</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It&apos;s a bold and attention-grabbing
              color that can evoke feelings of excitement, warmth, and energy.
            </p>

            <div className="mobilePhoto green"></div>
            <h1>Green</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.
            </p>

            <div className="mobilePhoto pink"></div>
            <h1>Pink</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing. In the world of
              branding and marketing, pink is often used to target a female
              audience or to promote products that are associated with beauty,
              love, or romance.
            </p>

            <div className="mobilePhoto blue"></div>
            <h1>Blue</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>

          <div className="desktopPhotos">
            <img
              src={`/assets/imgs/process/process1.webp`}
              alt=""
              className="desktopPhoto"
            />
            <img
              src={`/assets/imgs/process/process2.webp`}
              alt=""
              className="desktopPhoto"
            />
            <img
              src={`/assets/imgs/process/process3.webp`}
              alt=""
              className="desktopPhoto"
            />
            <img
              src={`/assets/imgs/process/process4.webp`}
              alt=""
              className="desktopPhoto"
            />
            <img
              src={`/assets/imgs/process/process5.webp`}
              alt=""
              className="desktopPhoto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinSection;
