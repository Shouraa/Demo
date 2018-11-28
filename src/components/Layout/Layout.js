import React from "react";

import classes from "./Layout.module.css";
import Aux from "../../hoc/Aux";

const layout = props => (
  <Aux>
    <div>Header, footer, sideDrawer</div>
    <div className={classes.Content}>Content</div>
  </Aux>
);

export default layout;
