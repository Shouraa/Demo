import React from "react";

import classes from "./SingleImagePage.module.css";

const SingleImagePage = props => {
  // console.log(props);
  return (
    <div className={classes.SingleImagePage}>
      <div className={classes.ImageContainer}>
        <img src="https://via.placeholder.com/500" />
      </div>
      <div className={classes.Like}>2</div>
      <div className={classes.Comments}>3</div>
      <div className={classes.AddNew}>4</div>
    </div>
  );
};

export default SingleImagePage;
