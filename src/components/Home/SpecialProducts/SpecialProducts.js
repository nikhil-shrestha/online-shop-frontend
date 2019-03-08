import React from "react";

import fav from "../../../assets/images/fav.png";
import unfav from "../../../assets/images/unfav.png";
import cart from "../../../assets/images/cart.svg";
import product1 from "../../../assets/images/thumb1.jpg";
import product2 from "../../../assets/images/thumb2.jpg";
import product3 from "../../../assets/images/thumb3.jpg";
import product4 from "../../../assets/images/thumb4.jpg";
import product5 from "../../../assets/images/thumb5.jpg";
import product6 from "../../../assets/images/thumb6.jpg";
import product7 from "../../../assets/images/thumb7.jpg";
import product8 from "../../../assets/images/thumb8.jpg";

const specialProducts = () => (
  <section className="container">
    <h2>SPECIAL PRODUCTS</h2>
    <div className="listbundle">
      <div className="productlist animated fadeInUp animation1">
        <img src={product1} alt="Thumb" />
        <a
          href="#"
          title="Quick View"
          className="quickview"
          data-toggle="modal"
          data-target="#quickview"
        >
          QUICK VIEW
        </a>
        <div className="content">
          <div className="listcat">CUSION</div>
          <div className="listsubcat">blue start print with cusion </div>
          <table className="producttable">
            <tr>
              <td>
                <span className="float-left price">Rs. 3,000.00</span>
              </td>
              <td className="">
                <div className="favtoggle">
                  <img src={fav} />
                  <img src={unfav} style={{ display: "none" }} />
                </div>
              </td>
              <td className="">
                <a href="#" title="Add to Cart">
                  <img src={cart} className="addtocart" alt="cart" />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="productlist animated fadeInUp animation2">
        <img src={product2} alt="Thumb" />
        <a
          href="#"
          title="Quick View"
          className="quickview"
          data-toggle="modal"
          data-target="#quickview"
        >
          QUICK VIEW
        </a>
        <div className="content">
          <div className="listcat">CUSION</div>
          <div className="listsubcat">blue start print with cusion </div>
          <table className="producttable">
            <tr>
              <td>
                <span className="float-left price">Rs. 3,000.00</span>
              </td>
              <td className="">
                <div className="favtoggle">
                  <img src={fav} />
                  <img src={unfav} style={{ display: "none" }} />
                </div>
              </td>
              <td className="">
                <a href="#" title="Add to Cart">
                  <img src={cart} className="addtocart" alt="cart" />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="productlist animated fadeInUp animation3">
        <img src={product3} alt="Thumb" />
        <a
          href="#"
          title="Quick View"
          className="quickview"
          data-toggle="modal"
          data-target="#quickview"
        >
          QUICK VIEW
        </a>
        <div className="content">
          <div className="listcat">CUSION</div>
          <div className="listsubcat">blue start print with cusion </div>
          <table className="producttable">
            <tr>
              <td>
                <span className="float-left price">Rs. 3,000.00</span>
              </td>
              <td className="">
                <div className="favtoggle">
                  <img src={fav} />
                  <img src={unfav} style={{ display: "none" }} />
                </div>
              </td>
              <td className="">
                <a href="#" title="Add to Cart">
                  <img src={cart} className="addtocart" alt="cart" />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="productlist animated fadeInUp animation4">
        <img src={product4} alt="Thumb" />
        <a
          href="#"
          title="Quick View"
          className="quickview"
          data-toggle="modal"
          data-target="#quickview"
        >
          QUICK VIEW
        </a>
        <div className="content">
          <div className="listcat">CUSION</div>
          <div className="listsubcat">blue start print with cusion </div>
          <table className="producttable">
            <tr>
              <td>
                <span className="float-left price">Rs. 3,000.00</span>
              </td>
              <td className="">
                <div className="favtoggle">
                  <img src={fav} />
                  <img src={unfav} style={{ display: "none" }} />
                </div>
              </td>
              <td className="">
                <a href="#" title="Add to Cart">
                  <img src={cart} className="addtocart" alt="cart" />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default specialProducts;
