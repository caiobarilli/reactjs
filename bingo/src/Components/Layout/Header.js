import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <h1>Bingo!</h1>
      <div className={classes.menu}></div>
    </header>
  );
};

export default Header;
