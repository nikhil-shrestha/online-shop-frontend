import React from "react";

import slide1 from "../../../../assets/images/slide1.jpg";
import slide2 from "../../../../assets/images/slide2.jpg";
import slide3 from "../../../../assets/images/slide3.jpg";

const headPanel = () => {
  return (
    <div className="container slider">
      <div className="row">
        <div className="col-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={slide1} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={slide2}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={slide3} alt="Third slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headPanel;
