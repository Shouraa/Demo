import React, { Component } from "react";

import SingleImage from "../../components/SingleImage/SingleImage";
import CommentsContainer from "./CommentsContainer/CommentsContainer";
import Form from "../../components/SingleImage/Form/Form";

import classes from "./SingleImageContainer.module.css";

import axios from "axios";

class SingleImageContainer extends Component {
  state = {
    imageUrl: "",
    comments: [],
    likes: null,
    name: "",
    comment: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    const commentData = {
      name: this.state.name,
      comment: this.state.comment
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", commentData)
      .then(response => {
        console.log(response);
        this.setState({ name: "", comment: "" });
      });
  };

  render() {
    // console.log("[SingleImage]", this.props.image);

    return (
      <div className={classes.SingleImageContainer}>
        <div className={classes.SingleImage}>
          <SingleImage img={this.props.image} />
        </div>
        <div className={classes.Comments}>
          <div>
            <CommentsContainer />
          </div>
          <div>
            <Form inputChanged={this.handleChange} clicked={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleImageContainer;
