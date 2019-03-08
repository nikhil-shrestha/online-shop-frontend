import React from "react";

const footer = () => (
  <section class="container">
    <div class="row">
      <div class="col-md-1">
        <a
          class="carousel-control-prev"
          href="#smallcarousel"
          role="button"
          role="button"
          data-slide="prev"
        >
          <img src="assets/images/left.svg" class="arrow" alt="Left" />
          <span class="sr-only">Previous</span>
        </a>
      </div>
      <div class="col-md-7">
        <div class="carousel slide" data-ride="carousel" id="smallcarousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="assets/images/bedsheets.jpg"
                alt="First slide"
              />
              <div class="carousel-caption">
                <h2>Los Angeles</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="assets/images/wallsticker.jpg"
                alt="Second slide"
              />
              <div class="carousel-caption">
                <h2>Los Angeles</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <a
          class="carousel-control-next"
          href="#smallcarousel"
          role="button"
          data-slide="next"
        >
          <img src="assets/images/right.svg" class="arrow" alt="Right" />
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="col-md-3">
        <table class="socialmedia">
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
