import React from "react";

import classes from "./Layout.module.css";
import ImagesGrid from "../ImagesGrid/ImagesGrid";
import Toolbar from "../Toolbar/Toolbar";
import Footer from "../Footer/Footer";
import Aux from "../../hoc/Aux";

const Layout = props => (
  <Aux>
    <Toolbar />
    <ImagesGrid />
    <Footer />
  </Aux>
);

export default Layout;
