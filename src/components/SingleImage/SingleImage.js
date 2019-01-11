import React from "react";

import classes from "./SingleImage.module.css";

import CommentsContainer from "../../containers/SingleImageContainer/CommentsContainer/CommentsContainer";
import Form from "../SingleImage/Form/Form";

const SingleImagePage = props => {
  let comments = <CommentsContainer />;
  return (
    <div className={classes.SingleImagePage}>
      <div className={classes.ImageContainer}>
        <img src={props.img.urls.regular} alt={props.img.description} />
      </div>
      <div className={classes.Like}>Likes: {props.img.likes}</div>
      <div className={classes.Comments}>{comments}</div>
      <div className={classes.AddNew}>
        <Form />
      </div>
    </div>
  );
};

export default SingleImagePage;
