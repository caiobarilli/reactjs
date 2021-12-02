import React, { Fragment } from "react";

import HeaderCardButton from "./HeaderCardButton";
import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onClick={props.openCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
