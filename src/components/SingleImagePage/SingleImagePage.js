import React from "react";

import classes from "./SingleImagePage.module.css";

import CommentsContainer from "../../containers/SingleImage/CommentsContainer/CommentsContainer";
import FormContainer from "../../containers/SingleImage/FormContainer/FormContainer";

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
        <FormContainer />
      </div>
    </div>
  );
};

export default SingleImagePage;
