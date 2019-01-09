import React from "react";

import classes from "./ImagesGrid.module.css";
import Image from "./Image/Image";

const ImagesGrid = props => {
  let images = [];

  images = props.images.map(image => {
    return (
      <Image
        src={image.urls.small}
        key={image.id}
        id={image.id}
        caption={image.description}
      />
    );
  });

  return <div className={classes.ImagesGrid}>{images}</div>;
};

export default ImagesGrid;
