import React, { Component } from "react";

// import classes from "./Form.module.css";

class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            name="name"
            value={this.props.name}
            placeholder="Your Name"
            onChange={this.props.changed}
          />
        </div>
        <div>
          <textarea
            type="text"
            rows="8"
            name="comment"
            value={this.props.comment}
            onChange={this.props.changed}
            placeholder="Your Comment"
          />
        </div>

        <div>
          <button onClick={this.props.clicked}>SEND</button>
        </div>
      </form>
    );
  }
}

export default Form;
