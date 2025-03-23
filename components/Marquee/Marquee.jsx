"use client";
import React from "react";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi"; 

const Marquee = ({title}) => {
  return (
    <section className="section portfolio portfolio-two portfolio-filter fade-wrapper overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {/* Duplicate content for a seamless loop */}
          {Array(2).fill(
            <>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div className="portfolio__text-slider-single" key={index}>
                    <h3 className={`h1 ${index % 2 === 0 ? "" : "str"}`}>
                      <Link href="portfolio">
                        {title} <BiRightArrowAlt />
                      </Link>
                    </h3>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
