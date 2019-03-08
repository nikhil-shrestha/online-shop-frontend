import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";
import UpperHeader from "../../components/Navigation/Header/UpperHeader";
import Navbar from "../../components/Navigation/Header/Navbar";
import Footer from "../../components/Navigation/Footer/Footer";

class Layouts extends Component {
  render() {
    return (
      <Aux>
        <UpperHeader />
        <Navbar />
        {this.props.children}
        <Footer />
      </Aux>
    );
  }
}

export default Layouts;
