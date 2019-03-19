import React from "react";

import classes from "./SingleImage.module.css";

const SingleImage = props => {
  return (
    <div>
      <div className={classes.SingleImage}>
        <img src={props.img.urls.regular} alt={props.img.description} />
      </div>
      <div className={classes.Likes}>Likes: {props.img.likes}</div>
    </div>
  );
};

export default SingleImage;
