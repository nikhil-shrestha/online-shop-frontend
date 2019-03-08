import React from "react";

const upperHeader = () => {
  return (
    <div className="uppernav">
      <div className="container">
        <div className="header-offerzone">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Daily Deals</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Sell</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Help &amp; Contact</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Special Zone</a>
            </li>
          </ul>
        </div>
        <div className="navinfo">
          <select>
            <option>NRS</option>
            <option>USD</option>
          </select>
          <a href="skype:itsmesushan">
            <img src="assets/images/skype.svg" alt="Skype" /> Skype
          </a>
          <a href="callto:9843779601">
            <img src="assets/images/phone.svg" alt="Skype" /> 9843779601
          </a>
        </div>
      </div>
    </div>
  );
};

export default upperHeader;
