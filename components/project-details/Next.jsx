'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';

import React, { useEffect } from 'react';

function Next({prevTitle, prevLink, nextTitle, nextLink, prevBanner, nextBanner}) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-md-6 rest">
            <div
              className="text-left box bg-img"
              data-background={prevBanner}
            >
              <div className="cont d-flex align-items-center">
                <div>
                  <span className="mr-30 fz-30 ti-arrow-left"></span>
                </div>
                <div>
                  <h6 className="sub-title fz-16 mb-5">{prevTitle}</h6>
                  <a href="/project-details" className="fz-40 fw-600 stroke">
                    {prevLink}
                  </a>
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
                    <h6 className="sub-title fz-16 mb-5">{nextTitle}</h6>
                    <a href="/project-details" className="fz-40 fw-600 stroke">
                      {nextLink}
                    </a>
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
        <a href="#0" className="all-works-butn text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">all Projects</span>
        </a>
      </div>
    </section>
  );
}

export default Next;
