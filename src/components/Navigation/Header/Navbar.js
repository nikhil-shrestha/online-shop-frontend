import React, { Component } from "react";

import NavDropdown from "./NavDropdown/NavDropdown";
import NavItems from "./NavItems/NavItems";
import NavItem from "./NavItems/NavItem/NavItem";

import logo from "../../../assets/images/logo.png";
import search from "../../../assets/images/search.svg";
import account from "../../../assets/images/account.svg";
import cart from "../../../assets/images/basket.svg";
import nav1 from "../../../assets/images/nav1.jpg";
import nav2 from "../../../assets/images/nav2.jpg";
import nav3 from "../../../assets/images/nav3.jpg";
import nav4 from "../../../assets/images/nav4.jpg";
import nav5 from "../../../assets/images/nav5.jpg";
import nav6 from "../../../assets/images/nav6.jpg";
import nav7 from "../../../assets/images/nav7.jpg";
import nav8 from "../../../assets/images/nav8.jpg";

const CATEGORIES = [
  {
    name: "bedsheet",
    image: nav1,
    subcategories: [
      {
        name: "type1"
      },
      {
        name: "type2"
      }
    ]
  },
  {
    name: "canvas",
    image: nav2,
    subcategories: [
      {
        name: "type1"
      },
      {
        name: "type2"
      }
    ]
  },
  {
    name: "clock",
    image: nav3,
    subcategories: [
      {
        name: "type1"
      },
      {
        name: "type2"
      }
    ]
  },
  {
    name: "curtains",
    image: nav4,
    subcategories: [
      {
        name: "type1"
      },
      {
        name: "type2"
      }
    ]
  },
  {
    name: "cushion",
    image: nav5,
    subcategories: [
      {
        name: "type1"
      },
      {
        name: "type2"
      }
    ]
  },
  {
    name: "duvet",
    image: nav6,
    subcategories: [
      {
        name: "type1"
      },
      {
        name: "type2"
      }
    ]
  },
  {
    name: "wallpaper",
    image: nav7,
    subcategories: [
      {
        name: "type1"
      },
      {
        name: "type2"
      }
    ]
  },
  {
    name: "wallsticker",
    image: nav8,
    subcategories: [
      {
        name: "type1"
      },
      {
        name: "type2"
      }
    ]
  }
];

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-md sticky-top">
        <div className="container">
          <div className="d-flex align-items-center w-100">
            <a className="navbar-brand" href="#">
              <img src={logo} className="logo" />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="nav navbar-nav ml-auto w-25 justify-content-start mainav actionbuttons">
                <NavDropdown name="SHOP">
                  <ul className="list-inline">
                    {CATEGORIES.map(category => {
                      return <NavItems category={category} />;
                    })}
                  </ul>
                </NavDropdown>
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
                <NavDropdown
                  name="My Account"
                  image={account}
                  subName
                  credentials
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
                </NavDropdown>
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
  }
}

export default Navbar;
