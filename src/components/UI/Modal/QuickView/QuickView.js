import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Input } from "reactstrap";

import fav from "../../../../assets/images/fav.png";
import unfav from "../../../../assets/images/unfav.png";

class QuickView extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {
    console.log("[Modal] WillUpdate");
  }

  render() {
    return (
      <Modal size="lg" isOpen={this.props.show} toggle={this.props.close}>
        <ModalHeader toggle={this.props.close}> Quick View</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-5">
              <img
                className="w-100"
                src="http://placehold.it/380"
                alt="First slide"
              />
            </div>
            <div className="col-md-7 description">
              <div className="favtoggle float-right">
                <img src={fav} />
                <img src={unfav} style={{ display: "none" }} />
              </div>
              <div className="author">By KAPPA</div>
              <div className="productname">Kappa bedsheet</div>
              <div className="category">
                KAAPA White/Red Floral Printed Single Size Bedsheet
              </div>
              <br />
              <div className="currency">NPR</div>
              <div className="amount">1,500.00</div>
              <br />
              <div className="quantity">Quantity</div>
              <div className="input-group datecounter float-left">
                <button
                  type="button"
                  className="btn btn-default btn-number plus"
                  disabled="disabled"
                  data-type="minus"
                  data-field="quant[1]"
                >
                  -
                </button>
                <Input
                  type="text"
                  name="quant[1]"
                  className="input-number"
                  value="1"
                  min="1"
                  max="10"
                />
                <button
                  type="button"
                  className="btn btn-default btn-number minus"
                  data-type="plus"
                  data-field="quant[1]"
                >
                  +
                </button>
              </div>
              <a href="" className="lgaddtocart">
                Add to Cart
              </a>
              <br />
              <br />
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default QuickView;
