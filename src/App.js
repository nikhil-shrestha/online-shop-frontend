import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import MyShop from "./containers/MyShop/MyShop";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MyShop />
      </BrowserRouter>
    );
  }
}

export default App;
