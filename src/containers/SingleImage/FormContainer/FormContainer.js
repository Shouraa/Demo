import React, { Component } from "react";

class FormContainer extends Component {
  state = {
    name: "",
    comment: ""
  };
  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Your Name"
        />
        <textarea
          type="text"
          rows="8"
          name="comment"
          value={this.state.comment}
          placeholder="Your Comment"
        />
        <div>
          <button btnType="Success" clicked>
            SEND
          </button>
        </div>
      </form>
    );
  }
}

export default FormContainer;
