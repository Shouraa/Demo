import React from "react";

import classes from "./ImagesGrid.module.css";
import Image from "./Image/Image";

const ImagesGrid = props => {
  let images = [];
  // for (let i = 0; i < 40; i++) {
  //   image.push(<Image />);
  //   i++;
  // }
  // console.log(props.images);

  images = props.images.map(image => {
    return <Image src={image.urls.small} key={image.id} />;
  });

  return <div className={classes.ImagesGrid}>{images}</div>;
};

export default ImagesGrid;
