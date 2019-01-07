import React from "react";
import { NavLink } from "react-router-dom";

const Image = () => (
  <NavLink to="/singleImage">
    <div>
      <img src="https://via.placeholder.com/300" />
    </div>
  </NavLink>
);

export default Image;
