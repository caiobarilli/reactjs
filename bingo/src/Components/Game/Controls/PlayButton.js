import React from "react";

import classes from "./PlayButton.module.css";

const PlayButton = (props) => {
  return (
    <div className={classes.PlayButton}>
      <button
        className={classes.PlayButton}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <strong>{props.Title}</strong>
      </button>
    </div>
  );
};

export default PlayButton;
