import React, { Component } from "react";

import SingleImagePage from "../../components/SingleImagePage/SingleImagePage";

class SingleImage extends Component {
  render() {
    console.log("[SingleImage]", this.props.image);

    return <SingleImagePage img={this.props.image} />;
  }
}

export default SingleImage;