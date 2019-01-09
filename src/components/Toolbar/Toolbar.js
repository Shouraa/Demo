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
      <ul>
        {/* <li>Link</li> */}
        <NavLink to="//">
          <li className={classes.Login}>SignUp/Login</li>
        </NavLink>
      </ul>
    </nav>
  </header>
);

export default Toolbar;
