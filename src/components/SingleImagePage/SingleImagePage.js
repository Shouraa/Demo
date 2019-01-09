import React from "react";

import classes from "./SingleImagePage.module.css";

const SingleImagePage = props => {
  return (
    <div className={classes.SingleImagePage}>
      <div className={classes.ImageContainer}>
        <img src={props.img.urls.regular} alt={props.img.description} />
      </div>
      <div className={classes.Like}>Likes: {props.img.likes}</div>
      <div className={classes.Comments}>Comments</div>
      <div className={classes.AddNew}>Form</div>
    </div>
  );
};

export default SingleImagePage;
