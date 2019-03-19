import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Toolbar.module.css";

const Toolbar = () => (
  <header className={classes.Toolbar}>
    <div>
      <NavLink to="/" className={classes.Brand}>
        LOGO
      </NavLink>
    </div>

    <nav className={classes.MainNav}>
      <NavLink to="//" className={classes.btn}>
        Login
      </NavLink>
    </nav>
  </header>
);

export default Toolbar;
