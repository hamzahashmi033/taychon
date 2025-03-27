"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PinSection = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Function to check window width
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for resize

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useGSAP(() => {
    if (!isDesktop) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1000px)", () => {
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
      gsap.set(".progress-line-fill", { height: "0%" }); // Start with no height
     

      let progressLine =  gsap.to(".progress-line-fill", {
        height: "100%", // Fills as you scroll
        ease: "none",
        scrollTrigger: {
          trigger: ".gallery1",
          start: "top top",
          end: "bottom bottom",
          scrub: true, // Smooth scrolling effect
        },
      });
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      );
      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
      gsap.set(photos, { yPercent: 101 });
      const allPhotos = gsap.utils.toArray(".desktopPhoto");

      ScrollTrigger.create({
        trigger: ".gallery1",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

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
        console.log("mobile");
        progressLine.kill();
      };
    });
  }, [isDesktop]);

  const contentData = [
    {
      title: "Discovery & Research",
      description:
        "We analyze your business goals, user needs, and technical requirements through research and discussions. Key functionalities, integrations, and constraints are documented to align stakeholders. This prevents scope creep, reduces risks, and ensures a structured, goal-oriented approach, meeting client expectations while adhering to industry standards.",
    },
    {
      title: "UI/UX Design",
      description:
        "Our expert designers create intuitive, user-friendly interfaces to enhance engagement. We develop wireframes, mockups, and prototypes, refining usability and branding consistency. Client feedback ensures alignment with the business&apos;s vision. Every element, from typography to colors, is optimized for a seamless, visually appealing experience that boosts satisfaction.",
    },
    {
      title: "Development Phase",
      description:
        "Once designs are finalized, developers use cutting-edge technologies and agile methods for continuous integration and flexibility. Clean, scalable code ensures security and efficiency. Frontend and backend are developed in parallel, with code reviews and version control maintaining quality, resulting in a fully functional product ready for testing.",
    },
    {
      title: "Testing & QA",
      description:
        "Before launch, we conduct extensive testing to fix bugs, performance issues, and security risks. Our QA team performs functional, unit, integration, and stress testing using automated and manual methods. Ensuring compliance with industry standards, we deliver a stable, high-performing, and secure product for real-world use.",
    },
    {
      title: "Deployment & Maintenance",
      description:
        "After approval, we deploy the software, ensuring seamless integration. We monitor performance, address issues, and provide updates for security and efficiency. Our maintenance includes bug fixes, optimizations, and feature enhancements. By analyzing user feedback, we ensure continuous improvements, keeping the software competitive and up-to-date.",
    },
  ];

  return (
    <section className="processSection">
      <div className="sec-head sec-head-proccess mb-20">
        <h6 className="sub-title main-color mb-15 text-bold">Why choose us?</h6>
        <h3 className="text-red-600 p">
          Our Process <br /> From Vision to Execution
        </h3>
      </div>

      {isDesktop ? (
        <div className="gallery1">
          <div className="left" style={{ position: "relative" }}>
            <div className="progress-line">
              <div className="progress-line-fill"></div>{" "}
              {/* The white scrolling fill */}
            </div>
            <div className="desktopContent">
              {contentData.map((item, index) => (
                <div
                  key={index}
                  className={`desktopContentSection desktopContentSection${
                    index + 1
                  }`}
                >
                  <h1 className="p">{item.title}</h1>
                  <p className="p">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <div className="desktopPhotos">
              {contentData.map((_, index) => (
                <img
                  key={index}
                  src={`/assets/imgs/process/process${index + 1}.webp`}
                  alt=""
                  className="desktopPhoto"
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mobileContent">
          {contentData.map((item, index) => (
            <div key={index}>
              <div className="mobilePhoto border">
                <img
                  src={`/assets/imgs/process/process${index + 1}.webp`}
                  alt=""
                />
              </div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PinSection;
