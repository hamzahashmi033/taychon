"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import Link from "next/link";

import React, { useEffect } from "react";

function Next({
  prevSubTitle,
  prevTitle,
  prevLink,
  prevBanner,
  nextSubTitle,
  nextTitle,
  nextLink,
  nextBanner,
}) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-md-6 rest">
            <div className="text-left box bg-img" data-background={prevBanner}>
              <div className="cont d-flex align-items-center">
                <div>
                  <span className="mr-30 fz-30 ti-arrow-left"></span>
                </div>
                <div>
                  <h6 className="sub-title fz-16 mb-5">{prevSubTitle}</h6>
  <Link href={prevLink} className="fz-40 fw-600 stroke1">
                    {prevTitle}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 rest">
            <div
              className="text-right d-flex box bg-img"
              data-background={nextBanner}
            >
              <div className="ml-auto">
                <div className="cont d-flex align-items-center">
                  <div>
                    <h6 className="sub-title fz-16 mb-5">{nextSubTitle}</h6>
<Link href={nextLink} className="fz-40 fw-600 stroke1">
                      {nextTitle}
                    </Link>
                  </div>
                  <div>
                    <span className="ml-30 fz-30 ti-arrow-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="/page-services" className="all-works-butn text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">all Services</span>
        </a>
      </div>
    </section>
  );
}

export default Next;
