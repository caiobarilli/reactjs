import React, { useContext, useState, useEffect } from "react";

import CartIcon from "../Cart/CartIcon";
import CardContext from "../../store/cart-context";
import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CardContext);
  const { items } = cartCtx;
  const [bumpIsOn, setBumpIsOn] = useState(false);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${bumpIsOn && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setTimeout(() => {
      setBumpIsOn(false);
    }, 300);
    setBumpIsOn(true);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
