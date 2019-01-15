import React, { Component } from "react";

// import classes from "./Form.module.css";

class Form extends Component {
  changeHandler = event => {
    this.props.inputChanged(event);
  };

  submitHandler = () => {
    this.props.clicked();
  };

  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            name="userName"
            value={this.props.userName}
            placeholder="Your Name"
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <textarea
            type="text"
            rows="8"
            name="userComment"
            value={this.props.userComment}
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
