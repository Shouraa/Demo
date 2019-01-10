import React, { Component } from "react";

// import classes from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    comment: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
          <button>SEND</button>
        </div>
      </form>
    );
  }
}

export default Form;
