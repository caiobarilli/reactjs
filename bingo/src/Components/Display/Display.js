import React from "react";

import Card from "../UI/Card";
import classes from "./Display.module.css";

const Display = (props) => {
  const luckyNumbers = props.luckyNumbers;
  const bets = props.bets;
  bets.sort((a, b) => {
    return a - b;
  });

  return (
    <Card className={classes.column}>
      <div className={classes.display}>
        <h4>
          <strong> Ball Numbers: </strong>
        </h4>
        <p>
          {luckyNumbers.map((num, i) => {
            if (i <= 4) {
              return num + " - ";
            } else {
              return num;
            }
          })}
        </p>

        <br />

        <h4>
          <strong> Plays: </strong>
        </h4>
        <p>
          {bets.map((num, i) => {
            if (i <= 4) {
              return num + " - ";
            } else {
              return num;
            }
          })}
        </p>
      </div>
    </Card>
  );
};

export default Display;
