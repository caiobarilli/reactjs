import React, { useContext } from "react";

import Ball from "./Ball";
import Card from "../UI/Card";
import GameContext from "../../Store/game-context";

import classes from "./LuckyNumbers.module.css";

const LuckyNumbers = (props) => {
  const gameCtx = useContext(GameContext);
  const luckyNumbers = gameCtx.luckyNumbers;
  return (
    <div className={classes.lucky_numbers}>
      <Card>
        {luckyNumbers.map((ballNumber, i) => {
          return <Ball key={ballNumber + i} value={ballNumber} />;
        })}
      </Card>
    </div>
  );
};

export default LuckyNumbers;
