import React, { Component } from "react";
import axios from "axios";

import Comments from "../../../components/SingleImagePage/Comments/Comments";

class CommentsContainer extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(response => {
        // console.log(response.data);
        let shortenedArr = response.data.slice(0, 5);
        this.setState({ comments: shortenedArr });
        console.log(this.state.comments);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return <Comments comments={this.state.comments} />;
  }
}

export default CommentsContainer;
