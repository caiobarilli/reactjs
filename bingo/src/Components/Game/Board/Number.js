import React from "react";

import classes from "./Number.module.css";

const Number = React.forwardRef((props, ref) => {
  return (
    <div className={classes.checkbox}>
      <input
        id={props.title}
        type="checkbox"
        onClick={props.onClick}
        onChange={props.onChange}
        ref={ref}
      />
      <label htmlFor={props.title}>[ {props.title} ]</label>
    </div>
  );
});

export default Number;
