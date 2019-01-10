import React from "react";

import classes from "./Comments.module.css";

const Comments = props => {
  console.log("[Propss]", props);
  let commentsArr = props.comments.map(comment => {
    return (
      <li>
        <span style={{ fontWeight: "bold" }}>Comment:</span> {comment.body}
      </li>
    );
  });
  return <ul>{commentsArr}</ul>;
};

export default Comments;
