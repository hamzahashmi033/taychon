"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const HomeTwoPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleTabClick = (filter) => {
    setActiveFilter(filter);
  };

  const portfolioItems = [
    {
      category: "development",
      image: "/assets/imgs/portfolio/Auto Mov.png",
      title: "Mobile App",
    },
    {
      category: "development",
      image: "/assets/imgs/portfolio/Grain Grower.png",
      title: "Grain Grower",
    },
    {
      category: "development",
      image: "/assets/imgs/portfolio/Medikor.png",
      title: "Medikor",
    },
    {
      category: "development",
      image: "/assets/imgs/portfolio/MODHU.png",
      title: "Modhu",
    },
    {
      category: "development",
      image: "/assets/imgs/portfolio/OCLE.png",
      title: "Ocle",
    },
    {
      category: "development",
      image: "/assets/imgs/portfolio/Red Business.png",
      title: "Red Business",
    },
    {
      category: "development",
      image: "/assets/imgs/portfolio/Sell Shop.png",
      title: "Sell Shop",
    },
    {
      category: "development",
      image: "/assets/imgs/portfolio/SOFTO.png",
      title: "Softo",
    },
    {
      category: "development",
      image: "/assets/imgs/portfolio/Vitour.png",
      title: "Vitour",
    },
    {
      category: "development",
      image: "/assets/imgs/portfolio/Web Tech.png",
      title: "Web Tech",
    },
    {
      category: "development",
      image: "/assets/imgs/portfolio/Wia Tech1.png",
      title: "Wia Tech",
    },
    {
      category: "design",
      image: "/assets/imgs/graphic/Card-Design.webp",
      title: "Card Design",
    },
    {
      category: "design",
      image: "/assets/imgs/graphic/Portfolio Design.webp",
      title: "Portfolio Design",
    },
    {
      category: "design",
      image: "/assets/imgs/graphic/Logo Design1.webp",
      title: "Logo Design",
    },
    {
      category: "design",
      image: "/assets/imgs/graphic/Logo Design.webp",
      title: "Logo Design",
    },
    {
      category: "design",
      image: "/assets/imgs/graphic/img5.webp",
      title: "Card Design",
    },
    {
      category: "design",
      image: "/assets/imgs/graphic/img6.webp",
      title: "Card Design",
    },
    {
      category: "design",
      image: "/assets/imgs/graphic/img7.webp",
      title: "Card Design",
    },
    {
      category: "design",
      image: "/assets/imgs/graphic/img8.webp",
      title: "Logo Design",
    },
    {
      category: "design",
      image: "/assets/imgs/graphic/img9.webp",
      title: "Card Design",
    },
    {
      category: "marketing",
      image: "/assets/imgs/marketing/img1.png",
      title: "Modhu",
    },
    {
      category: "marketing",
      image: "/assets/imgs/marketing/img2.png",
      title: "The Verge",
    },
    {
      category: "marketing",
      image: "/assets/imgs/marketing/img3.png",
      title: "Ocle",
    },
    {
      category: "marketing",
      image: "/assets/imgs/marketing/img4.png",
      title: "Red Business",
    },
    {
      category: "marketing",
      image: "/assets/imgs/marketing/img5.png",
      title: "Sell Shop",
    },
    {
      category: "marketing",
      image: "/assets/imgs/marketing/img6.png",
      title: "Softo",
    },
    {
      category: "marketing",
      image: "/assets/imgs/marketing/img7.png",
      title: "Grain Grower",
    },
    {
      category: "marketing",
      image: "/assets/imgs/marketing/img8.png",
      title: "Bixos",
    },
    {
      category: "marketing",
      image: "/assets/imgs/marketing/img9.png",
      title: "Auto Mov",
    },
  ];

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="section portfolio portfolio-two portfolio-filter fade-wrapper mt-100">
      <div className="">
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
                <div>
                  <div className="filter">
                    <span
                      onClick={() => handleTabClick("*")}
                      className={activeFilter === "*" ? "active" : ""}
                      data-count="30"
                    >
                      All
                    </span>
                    <span
                      onClick={() => handleTabClick("design")}
                      className={activeFilter === "design" ? "active" : ""}
                      data-count="09"
                    >
                      Design
                    </span>
                    <span
                      onClick={() => handleTabClick("development")}
                      className={activeFilter === "development" ? "active" : ""}
                      data-count="12"
                    >
                      Development
                    </span>
                    <span
                      onClick={() => handleTabClick("marketing")}
                      className={activeFilter === "marketing" ? "active" : ""}
                      data-count="09"
                    >
                      Marketing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row masonry-grid">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`col-12 col-md-6 col-xl-4 filter-item-space mb-50 grid-item-main ${item.category}`}
            >
              <div className="portfolio__single topy-tilt ">
                <Link href="portfolio">
                  <img src={item.image} alt={item.title} />
                </Link>
                <div className="portfolio__single-content">
                  <Link href="portfolio">
                    <FaArrowUpRightFromSquare size={50} color="#2ed06e" />
                  </Link>
                  <h3 className="portfolioText">
                    <Link href="portfolio">{item.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTwoPortfolio;
