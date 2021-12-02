import React, { useContext } from "react";

import Board from "./Board/Board";
import Controls from "./Controls/Controls";
import Display from "../Display/Display";
import GameContext from "../../Store/game-context";

import classes from "./Game.module.css";

const Game = (prop) => {
  const GameCTX = useContext(GameContext);

  const addBetHandler = () => {
    let arrNum = document.getElementById("betNumbers").value;
    arrNum = arrNum.split(",", 6);

    if (arrNum.length === 6) {
      GameCTX.addBet({ bet: arrNum });
    }
  };

  const addLuckyNumbersHandler = () => {
    if (GameCTX.betNumbers && GameCTX.betNumbers.length === 6) {
      GameCTX.addLuckyNumbers();
    }
  };

  return (
    <React.Fragment>
      <div className={classes.row}>
        <Board id="betNumbers" />
        <Display
          luckyNumbers={GameCTX.luckyNumbers}
          bets={GameCTX.betNumbers}
        />
      </div>
      <div className={classes.row}>
        <Controls
          enableAddBet={GameCTX.lockBet}
          onAddBet={addBetHandler}
          onAddLuckyNumbers={addLuckyNumbersHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Game;
