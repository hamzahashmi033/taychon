import React from 'react';
function Works({banner1,banner2}) {
  return (
    <div className="img-column ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb30">
              <img src={banner1} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src={banner2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Works;