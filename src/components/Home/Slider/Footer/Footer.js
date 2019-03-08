import React from "react";

import slide1 from "../../../../assets/images/bedsheets.jpg";
import slide2 from "../../../../assets/images/wallsticker.jpg";
import prev from "../../../../assets/images/left.svg";
import next from "../../../../assets/images/right.svg";
import facebook from "../../../../assets/images/facebook.png";
import whatsapp from "../../../../assets/images/whatsapp.png";
import viber from "../../../../assets/images/viber.png";
import instagram from "../../../../assets/images/instagram.png";

const footer = () => (
  <section className="container">
    <div className="row">
      <div className="col-md-1">
        <a
          className="carousel-control-prev"
          href="#smallcarousel"
          role="button"
          role="button"
          data-slide="prev"
        >
          <img src={prev} className="arrow" alt="Left" />
          <span className="sr-only">Previous</span>
        </a>
      </div>
      <div className="col-md-7">
        <div className="carousel slide" data-ride="carousel" id="smallcarousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={slide1} alt="First slide" />
              <div className="carousel-caption">
                <h2>Los Angeles</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide2} alt="Second slide" />
              <div className="carousel-caption">
                <h2>Los Angeles</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1">
        <a
          className="carousel-control-next"
          href="#smallcarousel"
          role="button"
          data-slide="next"
        >
          <img src={next} className="arrow" alt="Right" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="col-md-3">
        <table className="socialmedia">
          <tr>
            <td>
              <a href="#" title="Facebook">
                <img src={facebook} alt="Facebook" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#" title="instagram">
                <img src={instagram} alt="instagram" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#" title="whatsapp">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#" title="viber">
                <img src={viber} alt="viber" />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
);

export default footer;
