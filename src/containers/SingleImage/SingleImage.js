import React, { Component } from "react";

import SingleImagePage from "../../components/SingleImagePage/SingleImagePage";

class SingleImage extends Component {
  render() {
    // console.log(this.props.images);

    console.log("this.props", this.props);

    return <SingleImagePage src={this.props.match.params.id} />;
  }
}

export default SingleImage;
