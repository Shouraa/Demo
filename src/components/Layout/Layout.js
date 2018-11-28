import React from "react";

import classes from "./Layout.module.css";
import Aux from "../../hoc/Aux";
import Container from "../Container/Container";

const layout = props => (
  <Aux>
    <div>Header, footer, sideDrawer</div>
    <Container className={classes.Content} />
  </Aux>
);

export default layout;
