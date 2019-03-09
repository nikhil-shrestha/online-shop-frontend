import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layouts from "../../hoc/Layouts/Layouts";
import Home from "../Home/Home";

class MyShop extends Component {
  render() {
    return (
      <Layouts>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layouts>
    );
  }
}

export default MyShop;
