import React, { Component } from "react";

import ImagesGrid from "../../components/ImagesGrid/ImagesGrid";
import axios from "axios";

class FrontPage extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=add2d2d52391495814a84b22b6089261f7133c5ac4b5a22017e11a4c7a6dc60b"
      )
      .then(response => {
        this.setState({ images: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  clickHandler = () => {};

  render() {
    return (
      <div>
        <ImagesGrid images={this.state.images} clicked={this.clickHandler} />
      </div>
    );
  }
}

export default FrontPage;
