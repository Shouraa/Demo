import React, { Component } from "react";
import axios from "axios";

// import classes from "./Form.module.css";

class Form extends Component {
  state = {
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
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Your Name"
          onChange={this.handleChange}
        />
        <textarea
          type="text"
          rows="8"
          name="comment"
          value={this.state.comment}
          onChange={this.handleChange}
          placeholder="Your Comment"
        />
        <div>
          <button onClick={this.handleClick}>SEND</button>
        </div>
      </form>
    );
  }
}

export default Form;
