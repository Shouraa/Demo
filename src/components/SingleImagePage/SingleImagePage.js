import React from "react";

import classes from "./SingleImagePage.module.css";

const SingleImagePage = props => {
  return (
    <div className={classes.SingleImagePage}>
      <div className={classes.ImageContainer}>
        <img src={props.src} alt="whatever" />
      </div>
      <div className={classes.Like}>2</div>
      <div className={classes.Comments}>3</div>
      <div className={classes.AddNew}>4</div>
    </div>
  );
};

export default SingleImagePage;
