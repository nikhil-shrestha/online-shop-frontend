import React from "react";

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
          <img src="assets/images/left.svg" className="arrow" alt="Left" />
          <span className="sr-only">Previous</span>
        </a>
      </div>
      <div className="col-md-7">
        <div className="carousel slide" data-ride="carousel" id="smallcarousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="assets/images/bedsheets.jpg"
                alt="First slide"
              />
              <div className="carousel-caption">
                <h2>Los Angeles</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="assets/images/wallsticker.jpg"
                alt="Second slide"
              />
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
          <img src="assets/images/right.svg" className="arrow" alt="Right" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="col-md-3">
        <table className="socialmedia">
          <tr>
            <td>
              <a href="#" title="Facebook">
                <img src="assets/images/facebook.png" alt="Facebook" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#" title="instagram">
                <img src="assets/images/instagram.png" alt="instagram" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#" title="whatsapp">
                <img src="assets/images/whatsapp.png" alt="whatsapp" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#" title="viber">
                <img src="assets/images/viber.png" alt="viber" />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
);

export default footer;
