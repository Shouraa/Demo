import React, { Component } from "react";

import ImagesGrid from "../../components/ImagesGrid/ImagesGrid";
import axios from "axios";

class FrontPage extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    axios
      .get("")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <ImagesGrid />
      </div>
    );
  }
}

export default FrontPage;
