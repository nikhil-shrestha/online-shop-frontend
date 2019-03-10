import React from "react";

import product1 from "../../../assets/images/thumb1.jpg";
import product2 from "../../../assets/images/thumb2.jpg";
import product3 from "../../../assets/images/thumb3.jpg";
import product4 from "../../../assets/images/thumb4.jpg";
import product5 from "../../../assets/images/thumb5.jpg";
import product6 from "../../../assets/images/thumb6.jpg";
import product7 from "../../../assets/images/thumb7.jpg";
import product8 from "../../../assets/images/thumb8.jpg";
import fav from "../../../assets/images/fav.png";
import unfav from "../../../assets/images/unfav.png";
import cart from "../../../assets/images/cart.svg";

const simpleCard = ({ index, showModal }) => {
  let product;
  switch (index) {
    case 1:
      product = product1;
      break;
    case 2:
      product = product2;
      break;
    case 3:
      product = product3;
      break;
    case 4:
      product = product4;
      break;
    case 5:
      product = product5;
      break;
    case 6:
      product = product6;
      break;
    case 7:
      product = product7;
      break;
    case 8:
      product = product8;
      break;
    default:
      product = product1;
      break;
  }

  const classes = "productlist animated fadeInUp animation" + index;
  return (
    <div className={classes}>
      <img src={product} alt="Thumb" />
      <button
        title="Quick View"
        className="quickview"
        onClick={() => showModal()}
      >
        QUICK VIEW
      </button>
      <div className="content">
        <div className="listcat">product {index}</div>
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
  );
};

export default simpleCard;
