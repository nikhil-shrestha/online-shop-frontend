import React from "react";

const footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <strong>NEWSLETTER</strong>
          <br />
          <div className="desc">Stay updated with our latest offers.</div>
          <input type="email" name="" placeholder="Enter your email address" />
          <input type="button" name="" value="SUBSCRIBE" />
        </div>
        <div className="col-md-1" />
        <div className="col-md-2">
          <strong>CUSTOMER</strong>
          <br />
          <ul className="list-unstyled">
            <li>
              <a href="#" title="Shipping">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" title="30-days rerutns">
                30-days rerutns
              </a>
            </li>
            <li>
              <a href="#" title="Free gift packing">
                Free gift packing
              </a>
            </li>
            <li>
              <a href="#" title="Vouchers">
                Vouchers
              </a>
            </li>
            <li>
              <a href="#" title="Help Topics">
                Help Topics
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-1" />
        <div className="col-md-2">
          <strong>COMPANY</strong>
          <br />
          <ul className="list-unstyled">
            <li>
              <a href="#" title="Our story">
                Our story
              </a>
            </li>
            <li>
              <a href="#" title="Careers">
                Careers
              </a>
            </li>
            <li>
              <a href="#" title="Relations with us">
                Relations with us
              </a>
            </li>
            <li>
              <a href="#" title="In the news">
                In the news
              </a>
            </li>
            <li>
              <a href="#" title="Blog">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-1" />
        <div className="col-md-2">
          <strong>FEEDBACK</strong>
          <br />
          <div className="desc">
            We would like to hear from you with any feedback about our website
            or products,
          </div>
          <br />
          <div className="desc">
            <a href="mailto:info@mayadecor.com" title="Send feedback to us">
              info@mayadecor.com
            </a>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />
  </footer>
);

export default footer;
