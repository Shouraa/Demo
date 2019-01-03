import React from "react";

import classes from "./Toolbar.module.css";

const Toolbar = () => (
  <header className={classes.Toolbar}>
    <div className={classes.Div}>
      <a href="index.html" className={classes.Brand}>
        LOGO
      </a>
    </div>

    <nav className={classes.MainNav}>
      <ul>
        <li>Link</li>
        <li className={classes.Login}>
          <a href="#">SignUp/Login</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Toolbar;
