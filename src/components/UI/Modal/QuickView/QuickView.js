import React from "react";

const quickView = () => (
  <div
    class="modal fade"
    id="quickview"
    tabindex="-1"
    role="dialog"
    aria-labelledby="quickview"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="quickview">
            Quick View
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-5">
              <img
                class="w-100"
                src="http://placehold.it/380"
                alt="First slide"
              />
            </div>
            <div class="col-md-7 description">
              <div class="favtoggle float-right">
                <img src="assets/images/fav.png" />
                <img src="assets/images/unfav.png" style="display:none" />
              </div>
              <div class="author">By KAPPA</div>
              <div class="productname">Kappa bedsheet</div>
              <div class="category">
                KAAPA White/Red Floral Printed Single Size Bedsheet
              </div>
              <br />
              <div class="currency">NPR</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default quickView;
