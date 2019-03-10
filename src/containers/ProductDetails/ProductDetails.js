import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";

class ProductDetails extends Component {
  render() {
    return (
      <Aux>
        <main role="main" class="container afternav">
          <div class="breadcrum">
            <span>
              <a href="#">Home</a>
            </span>
            <span>
              <a href="#">Home & Living</a>
            </span>
            <span>
              <a href="#">Home Decor</a>
            </span>
            <span>
              <a href="#">Bedding</a>
            </span>
            <span>
              <a href="#">Bed Linen</a>
            </span>
            <span>
              <a href="#">Bedsheets</a>
            </span>
            <span>
              <a href="#">Single Bed</a>
            </span>
          </div>
          <div class="row">
            <div class="col-md-7">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  >
                    <img src="http://placehold.it/38x20" />
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  >
                    <img src="http://placehold.it/38x20" />
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  >
                    <img src="http://placehold.it/38x20" />
                  </li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="w-100"
                      src="http://placehold.it/380"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="w-100"
                      src="http://placehold.it/380"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="w-100"
                      src="http://placehold.it/380"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="col-md-5 description">
              <div class="favtoggle float-right">
                <img src="assets/images/fav.png" />
                <img
                  src="assets/images/unfav.png"
                  style={{ display: "none" }}
                />
              </div>
              <div class="author">By KAPPA</div>
              <div class="productname">Kappa bedsheet</div>
              <div class="category">
                KAAPA White/Red Floral Printed Single Size Bedsheet
              </div>
              <br />
              <div class="currency">NPR</div>
              <div class="features float-right">
                <a
                  href="javascript:"
                  class="return"
                  data-toggle="tooltip"
                  title="30 Days Return"
                >
                  <img src="assets/images/return.svg" alt="return" />
                </a>
                <a
                  href="javascript:"
                  class="shipping"
                  data-toggle="tooltip"
                  title="Free delivery within 10kms"
                >
                  <img src="assets/images/shipping.svg" alt="Shipping" />
                </a>
                <a
                  href="javascript:"
                  class="support"
                  data-toggle="tooltip"
                  title=" Support 24/24 for all order "
                >
                  <img src="assets/images/support.svg" alt="Support" />
                </a>
              </div>
              <div class="amount">1,500.00</div>
              <br />
              <div class="quantity">Quantity</div>
              <div class="input-group datecounter float-left">
                <button
                  type="button"
                  class="btn btn-default btn-number plus"
                  disabled="disabled"
                  data-type="minus"
                  data-field="quant[1]"
                >
                  -
                </button>
                <input
                  type="text"
                  name="quant[1]"
                  class="form-control input-number"
                  value="1"
                  min="1"
                  max="10"
                />
                <button
                  type="button"
                  class="btn btn-default btn-number minus"
                  data-type="plus"
                  data-field="quant[1]"
                >
                  +
                </button>
              </div>
              <a href="" class="lgaddtocart">
                Add to Cart
              </a>
              <br />
              <br />
              <div class="shippingcharge">
                <span>Shipping Charge</span>
                <br />
                <span class="data">Inside kathmandu valley NPR 300/-</span>
                <br />
                <span class="data">Outside kathmandu valley NPR 500/-</span>
              </div>
              <div class="share">
                <table>
                  <tr>
                    <td>
                      <a href="javascript:">
                        <img src="assets/images/twitter.svg" alt="Twitter" />
                      </a>
                    </td>
                    <td>
                      <a href="javascript:">
                        <img src="assets/images/facebook.svg" alt="Facebook" />
                      </a>
                    </td>
                    <td>
                      <a href="javascript:">
                        <img src="assets/images/viber.svg" alt="Viber" />
                      </a>
                    </td>
                    <td>
                      <a href="javascript:">
                        <img src="assets/images/gplus.svg" alt="Google plus" />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
              <br />
              <br />
              <div class="additionalinfo">
                <table>
                  <tr>
                    <td class="freesp">Free Shipping</td>
                    <td class="moneyback">100% Money Back Guaratee</td>
                    <td class="support">Online support 24*7</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="row textinfo">
            <div class="col-md-9">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  DESCRIPTION
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  SIZE GUIDE
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  ADDITIONAL INFORMATION
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-review"
                  role="tab"
                  aria-controls="nav-review"
                  aria-selected="false"
                >
                  RATING(12)
                </a>
              </div>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <strong>ITEM#: 16437098</strong>
                  <br />
                  <br />
                  Bring a luxurious feel to your bed with this solid-color
                  microfiber sheet set. Featuring a plain weave, these solid
                  sheets coordinate effortlessly with your existing bedding set.
                  The 100-percent polyester microfiber construction gives this
                  ultra-soft sheet set a plush texture, while the
                  machine-washable fabrics allow for quick, convenient cleaning.
                  <br />
                  <br />
                  <strong>Features:</strong>
                  <ul>
                    <li>Plain weave</li>
                    <li>Solid color</li>
                    <li>Machine washable</li>
                    <li>Fully elasticized fitted sheet</li>
                    <li>100-percent polyester microfiber</li>
                    <li>Fitted sheet pocket depth of 15 inches</li>
                    <li>1 flat sheet, 1 fitted sheet, 2 pillowcases</li>
                    <li>Twin and twin XL sets come with 1 pillowcase</li>
                    <li>
                      White, cream, gold, sage, grey, burgundy, aqua, navy,
                      purple, chocolate
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  ..g.
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  .h..
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-review"
                  role="tabpanel"
                  aria-labelledby="nav-review-tab"
                >
                  <div class="media">
                    <img
                      class="mr-3"
                      src="https://placehold.it/80"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <strong>Media heading</strong>
                      <br />
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                  <div class="media">
                    <img
                      class="mr-3"
                      src="https://placehold.it/80"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <strong>Media heading</strong>
                      <br />
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">asd</div>
          </div>
        </main>
        <br class="hidden-xs" />
        <br class="hidden-xs" />
        <br class="hidden-xs" />
        <section class="container">
          <h2>Featured Products</h2>
          <div class="listbundle">
            <div class="productlist animated fadeInUp animation1">
              <img src="assets/images/thumb2.jpg" alt="Thumb" />
              <a
                href="#"
                title="Quick View"
                class="quickview"
                data-toggle="modal"
                data-target="#quickview"
              >
                QUICK VIEW
              </a>
              <div class="content">
                <div class="listcat">CUSION</div>
                <div class="listsubcat">blue start print with cusion </div>
                <table class="producttable">
                  <tr>
                    <td>
                      <span class="float-left price">Rs. 3,000.00</span>
                    </td>
                    <td class="">
                      <div class="favtoggle">
                        <img src="assets/images/fav.png" />
                        <img
                          src="assets/images/unfav.png"
                          style={{ display: "none" }}
                        />
                      </div>
                    </td>
                    <td class="">
                      <a href="#" title="Add to Cart">
                        <img
                          src="assets/images/cart.svg"
                          class="addtocart"
                          alt="cart"
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="productlist animated fadeInUp animation2">
              <img src="assets/images/thumb1.jpg" alt="Thumb" />
              <a
                href="#"
                title="Quick View"
                class="quickview"
                data-toggle="modal"
                data-target="#quickview"
              >
                QUICK VIEW
              </a>
              <div class="content">
                <div class="listcat">CUSION</div>
                <div class="listsubcat">blue start print with cusion </div>
                <table class="producttable">
                  <tr>
                    <td>
                      <span class="float-left price">Rs. 3,000.00</span>
                    </td>
                    <td class="">
                      <div class="favtoggle">
                        <img src="assets/images/fav.png" />
                        <img
                          src="assets/images/unfav.png"
                          style={{ display: "none" }}
                        />
                      </div>
                    </td>
                    <td class="">
                      <a href="#" title="Add to Cart">
                        <img
                          src="assets/images/cart.svg"
                          class="addtocart"
                          alt="cart"
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="productlist animated fadeInUp animation3">
              <img src="assets/images/thumb3.jpg" alt="Thumb" />
              <a
                href="#"
                title="Quick View"
                class="quickview"
                data-toggle="modal"
                data-target="#quickview"
              >
                QUICK VIEW
              </a>
              <div class="content">
                <div class="listcat">CUSION</div>
                <div class="listsubcat">blue start print with cusion </div>
                <table class="producttable">
                  <tr>
                    <td>
                      <span class="float-left price">Rs. 3,000.00</span>
                    </td>
                    <td class="">
                      <div class="favtoggle">
                        <img src="assets/images/fav.png" />
                        <img
                          src="assets/images/unfav.png"
                          style={{ display: "none" }}
                        />
                      </div>
                    </td>
                    <td class="">
                      <a href="#" title="Add to Cart">
                        <img
                          src="assets/images/cart.svg"
                          class="addtocart"
                          alt="cart"
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="productlist animated fadeInUp animation4">
              <img src="assets/images/thumb4.jpg" alt="Thumb" />
              <a
                href="#"
                title="Quick View"
                class="quickview"
                data-toggle="modal"
                data-target="#quickview"
              >
                QUICK VIEW
              </a>
              <div class="content">
                <div class="listcat">CUSION</div>
                <div class="listsubcat">blue start print with cusion </div>
                <table class="producttable">
                  <tr>
                    <td>
                      <span class="float-left price">Rs. 3,000.00</span>
                    </td>
                    <td class="">
                      <div class="favtoggle">
                        <img src="assets/images/fav.png" />
                        <img
                          src="assets/images/unfav.png"
                          style={{ display: "none" }}
                        />
                      </div>
                    </td>
                    <td class="">
                      <a href="#" title="Add to Cart">
                        <img
                          src="assets/images/cart.svg"
                          class="addtocart"
                          alt="cart"
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </section>
      </Aux>
    );
  }
}

export default ProductDetails;
