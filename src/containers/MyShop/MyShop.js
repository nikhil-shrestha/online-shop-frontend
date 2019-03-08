import React, { Component } from "react";

import Layouts from "../../hoc/Layouts/Layouts";
import Home from "../Home/Home";

class MyShop extends Component {
  render() {
    return (
      <Layouts>
        <Home />
      </Layouts>
    );
  }
}

export default MyShop;
