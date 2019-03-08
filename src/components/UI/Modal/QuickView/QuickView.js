import React from "react";

const quickView = () => (
  <div
    className="modal fade"
    id="quickview"
    tabindex="-1"
    role="dialog"
    aria-labelledby="quickview"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="quickview">
            Quick View
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
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
                <img src="assets/images/fav.png" />
                <img src="assets/images/unfav.png" style="display:none" />
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
                <input
                  type="text"
                  name="quant[1]"
                  className="form-control input-number"
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
        </div>
      </div>
    </div>
  </div>
);

export default quickView;
