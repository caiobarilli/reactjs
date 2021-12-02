import React from "react";

import classes from "./Ball.module.css";

const Ball = (props) => {
  return (
    <section className={classes.stage}>
      <figure className={classes.ball}>
        <span className={classes.shadow}></span>
        <span className={classes.number}> {props.value} </span>
      </figure>
    </section>
  );
};

export default Ball;
