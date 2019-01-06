import React from "react";

import classes from "./ImagesGrid.module.css";
import Image from "./Image/Image";

const Images = props => {
  let image = [];
  for (let i = 0; i < 40; i++) {
    image.push(<Image />);
    i++;
  }
  return <div className={classes.ImagesGrid}>{image}</div>;
};

export default Images;
