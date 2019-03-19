import React, { Component } from "react";

// import classes from "./Form.module.css";

class Form extends Component {
  changeHandler = event => {
    this.props.inputChanged(event);
  };

  submitHandler = event => {
    this.props.clicked(event);
  };

  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            name="name"
            value={this.props.name}
            placeholder="Your Name"
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <textarea
            type="text"
            rows="8"
            name="comment"
            value={this.props.comment}
            onChange={this.changeHandler}
            placeholder="Your Comment"
          />
        </div>

        <div>
          <button onClick={this.submitHandler}>SEND</button>
        </div>
      </form>
    );
  }
}

export default Form;
