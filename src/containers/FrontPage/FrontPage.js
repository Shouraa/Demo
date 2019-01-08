import React, { Component } from "react";

import ImagesGrid from "../../components/ImagesGrid/ImagesGrid";
import axios from "axios";

class FrontPage extends Component {
  render() {
    return <ImagesGrid images={this.props.images} />;
  }
}

export default FrontPage;
