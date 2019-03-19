import React, { Component } from "react";

import Toolbar from "../../components/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import Aux from "../Aux";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <main>{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
