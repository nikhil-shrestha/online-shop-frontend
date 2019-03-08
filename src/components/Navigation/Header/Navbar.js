import React from "react";

import logo from "../../../assets/images/logo.png";
import search from "../../../assets/images/search.svg";
import account from "../../../assets/images/account.svg";
import cart from "../../../assets/images/basket.svg";

const upperHeader = () => {
  return (
    <nav className="navbar navbar-expand-md sticky-top">
      <div className="container">
        <div className="d-flex align-items-center w-100">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="navbar-toggler-icon" />
            <br />
            <div className="navbar-toggler-icon" />
            <br />
            <div className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="nav navbar-nav ml-auto w-25 justify-content-start mainav actionbuttons">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-toggle="dropdown"
                >
                  SHOP
                  <br />
                  NOW
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown">
                  <ul className="list-inline">
                    <li className="wow bounceInUp">
                      <a href="#">
                        bedsheet
                        <br />
                        <img src="assets/images/nav1.jpg" />
                      </a>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                        <li>
                          <a href="#" title="type 2">
                            type 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        canvas
                        <br />
                        <img src="assets/images/nav2.jpg" />
                      </a>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" title="1 panel canvas">
                            1 panel canvas
                          </a>
                        </li>
                        <li>
                          <a href="#" title="3 panel canvas">
                            3 panel canvas
                          </a>
                        </li>
                        <li>
                          <a href="#" title="5 panel canvas">
                            5 panel canvas
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        clock
                        <br />
                        <img src="assets/images/nav3.jpg" />
                      </a>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                        <li>
                          <a href="#" title="type 2">
                            type 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        curtains
                        <br />
                        <img src="assets/images/nav4.jpg" />
                      </a>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                        <li>
                          <a href="#" title="type 2">
                            type 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        cushion
                        <br />
                        <img src="assets/images/nav5.jpg" />
                      </a>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        duvet
                        <br />
                        <img src="assets/images/nav6.jpg" />
                      </a>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        wall paper
                        <br />
                        <img src="assets/images/nav7.jpg" />
                      </a>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" title="type 1">
                            type 1
                          </a>
                        </li>
                        <li>
                          <a href="#" title="type 1">
                            type 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="$">
                        wall sticker
                        <br />
                        <img src="assets/images/nav8.jpg" />
                      </a>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" title="bedroom">
                            bedroom
                          </a>
                        </li>
                        <li>
                          <a href="#" title="family lounge">
                            family lounge
                          </a>
                        </li>
                        <li>
                          <a href="#" title="kids room">
                            kids room
                          </a>
                        </li>
                        <li>
                          <a href="#" title="nursery room">
                            nursery room
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto w-75 justify-content-center searchnav">
              <li
                className="nav-item"
                style={{ width: "100%", position: "relative" }}
              >
                <input type="text" className="navsearch" />
                <button className="searchbtn">
                  <img src={search} alt="Search" />
                </button>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto w-75 justify-content-end actionbuttons righside">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown01"
                  data-toggle="dropdown"
                >
                  <img src={account} className="float-right menuicon" />
                  My Account
                  <br />
                  <small>Login</small>
                </a>
                <div
                  className="dropdown-menu credentials"
                  aria-labelledby="dropdown"
                >
                  <ul className="list-unstyled">
                    <li>
                      <a href="" title="My Account">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a href="" title="My Wishlist">
                        My Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="" title="Checkout" className="top-link-checkout">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a href="" title="Log In">
                        Log In
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={cart} className="float-right menuicon" />
                  SHOPPING <br className="hidden-xs" />
                  BORA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default upperHeader;
