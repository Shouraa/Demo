import React, { Component } from "react";

import SingleImagePage from "../../components/SingleImage/SingleImage";

class SingleImageContainer extends Component {
  render() {
    console.log("[SingleImage]", this.props.image);

    return <SingleImagePage img={this.props.image} />;
  }
}

export default SingleImageContainer;
