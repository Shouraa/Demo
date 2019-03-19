import React, { Component } from "react";

import SingleImage from "../../components/SingleImage/SingleImage";
import CommentsContainer from "./CommentsContainer/CommentsContainer";
import Form from "../../components/SingleImage/Form/Form";

import classes from "./SingleImageContainer.module.css";

import axios from "../../axios-singleImagePage";

class SingleImageContainer extends Component {
  state = {
    imageUrl: [],
    comments: [{ author: "Asghar", comment: "Goh bigiran" }],
    likes: null
    // userName: "",
    // userComment: ""
  };

  componentDidMount() {
    this.setState({
      imageUrl: [this.props.image.urls.regular, this.props.image.urls.small],
      likes: this.props.image.likes,
      ID: this.props.image.id
    });
  }

  handleChange = event => {
    this.setState(prevState => ({
      comments: [
        ...prevState.comments,
        { [event.target.name]: event.target.value }
      ]
    }));
    console.log("changed");
  };

  handleSubmit = event => {
    event.preventDefault();
    const commentData = {
      // userName: this.state.userName,
      // userComment: this.state.userComment,
      likes: this.state.likes,
      imageUrl: this.state.imageUrl[0],
      id: this.state.ID,
      comments: this.state.comments
    };
    this.setState({ name: "", comment: "" });
    axios
      .post("/singleImagePage.json", commentData)
      .then(response => {
        console.log(response);
        this.setState({
          name: response.name,
          comment: response.comment
        });
      })
      .catch(err => {
        console.log(err);
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
            <Form
              inputChanged={this.handleChange}
              clicked={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleImageContainer;
