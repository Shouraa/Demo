import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Image.module.css";

const Image = props => (
  <div className={classes.Image}>
    <NavLink to="./singleImage">
      <img src={props.src} alt={props.description} />
    </NavLink>

    <h4 className={classes.Caption}>Caption</h4>

    <h4 className={classes.Comments}>Comments</h4>
    <h4 className={classes.Likes}>Likes</h4>
  </div>
);

export default Image;
