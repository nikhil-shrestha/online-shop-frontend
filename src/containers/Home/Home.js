import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";

import HeaderSlider from "../../components/Home/Slider/Header/Header";
import Products from "../../components/Home/Products/Products";
import SpecialProducts from "../../components/Home/SpecialProducts/SpecialProducts";
import Categories from "../../components/Home/Categories/Categories";
import Blog from "../../components/Home/Blog/Blog";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import FooterSlider from "../../components/Home/Slider/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <Aux>
        <HeaderSlider />

        <Products />
        <Categories />
        <SpecialProducts />

        <section class="container">
          <div class="subbanner-inner">
            <div class="banner-img">
              <a href="#" class="">
                <img
                  src="assets/images/offer-banner.png"
                  alt="Offer Banner"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="banner-text">
              <div class="bnr-text">get your lovedones</div>
              <div class="bnr-title">a new cushion</div>
            </div>
          </div>
        </section>

        <section class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="sub_banner1 sub_banner">
                <div class="banner_image">
                  <a href="#">
                    <img
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                    />
                  </a>
                </div>
                <div class="banner_text">
                  <div class="text1">Decorative</div>
                  <div class="text2">Painting</div>
                  <div class="view_button">
                    <a href="#"> view collection </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="sub_banner2 sub_banner">
                <div class="banner_image">
                  <a href="#">
                    <img alt="" src="assets/images/curtain.png" />
                  </a>
                </div>
                <div class="banner_text">
                  <div class="text1">Interiors</div>
                  <div class="text2">Curtain</div>
                  <div class="view_button">
                    <a href="#"> view collection </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="sub_banner3 sub_banner">
                <div class="banner_image">
                  <a href="#">
                    <img
                      alt=""
                      src="http://pngimg.com/uploads/pillow/pillow_PNG14167.png"
                    />
                  </a>
                </div>
                <div class="banner_text">
                  <div class="text1">Cushion</div>
                  <div class="text2">Softer</div>
                  <div class="view_button">
                    <a href="#"> view collection </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="row" />
            <Blog />
            <Testimonials />
          </div>
        </section>

        <section>
          <div class="container">
            <div class="col-md-6">
              <div id="latestblog" />
            </div>
          </div>
        </section>

        <FooterSlider />
      </Aux>
    );
  }
}

export default Home;
