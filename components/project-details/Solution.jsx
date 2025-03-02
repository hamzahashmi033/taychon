import React from "react";

function Solution({title,description}) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">{title}</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <h5 className="mb-30 fw-400 line-height-40">
                   {description}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
