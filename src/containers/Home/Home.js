import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";
import HeaderSlider from "../../components/Home/Slider/Header/Header";
import Products from "../../components/Home/Products/Products";
import SpecialProducts from "../../components/Home/SpecialProducts/SpecialProducts";
import Categories from "../../components/Home/Categories/Categories";
import Blog from "../../components/Home/Blog/Blog";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import FooterSlider from "../../components/Home/Slider/Footer/Footer";
import Modal from "../../components/UI/Modal/QuickView/QuickView";

import banner from "../../assets/images/offer-banner.png";
import curtain from "../../assets/images/curtain.png";

class Home extends Component {
  state = {
    quickView: false
  };

  showQuickView = () => {
    this.setState({ quickView: true });
  };

  closeQuickView = () => {
    this.setState({ quickView: false });
  };

  render() {
    return (
      <Aux>
        <Modal show={this.state.quickView} close={this.closeQuickView} />

        <HeaderSlider />

        <Products showModal={this.showQuickView} />

        <Categories />

        <SpecialProducts />

        <section className="container">
          <div className="subbanner-inner">
            <div className="banner-img">
              <a href="#" className="">
                <img src={banner} alt="Offer Banner" className="img-fluid" />
              </a>
            </div>
            <div className="banner-text">
              <div className="bnr-text">get your lovedones</div>
              <div className="bnr-title">a new cushion</div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="sub_banner1 sub_banner">
                <div className="banner_image">
                  <a href="#">
                    <img
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                    />
                  </a>
                </div>
                <div className="banner_text">
                  <div className="text1">Decorative</div>
                  <div className="text2">Painting</div>
                  <div className="view_button">
                    <a href="#"> view collection </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sub_banner2 sub_banner">
                <div className="banner_image">
                  <a href="#">
                    <img alt="" src={curtain} />
                  </a>
                </div>
                <div className="banner_text">
                  <div className="text1">Interiors</div>
                  <div className="text2">Curtain</div>
                  <div className="view_button">
                    <a href="#"> view collection </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sub_banner3 sub_banner">
                <div className="banner_image">
                  <a href="#">
                    <img
                      alt=""
                      src="http://pngimg.com/uploads/pillow/pillow_PNG14167.png"
                    />
                  </a>
                </div>
                <div className="banner_text">
                  <div className="text1">Cushion</div>
                  <div className="text2">Softer</div>
                  <div className="view_button">
                    <a href="#"> view collection </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 blog">
                <Blog />
              </div>
              <div className="col-md-6 blog">
                <Testimonials />
              </div>
            </div>
          </div>
        </section>

        <FooterSlider />
      </Aux>
    );
  }
}

export default Home;
