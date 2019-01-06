import React from "react";

import classes from "./ImagesGrid.module.css";
import Image from "./Image/Image";

const Images = props => (
  <div className={classes.Images}>
    <Image />
    <Image />
    <Image />
    <Image />
    <Image />
    <Image />
  </div>
);

export default Images;
