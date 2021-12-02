import React, { useReducer } from "react";

import GameContext from "./game-context";

const generateLuckyNumbers = () => {
  const sizeArr = 6;
  const maxValue = 60;

  let arr = [];
  while (arr.length < sizeArr) {
    let n = Math.floor(Math.random() * maxValue) + 1;
    if (arr.indexOf(n) === -1) arr.push(n);
  }

  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 1:
        arr[i] = "01";
        break;
      case 2:
        arr[i] = "02";
        break;
      case 3:
        arr[i] = "03";
        break;
      case 4:
        arr[i] = "04";
        break;
      case 5:
        arr[i] = "05";
        break;
      case 6:
        arr[i] = "06";
        break;
      case 7:
        arr[i] = "07";
        break;
      case 8:
        arr[i] = "08";
        break;
      case 9:
        arr[i] = "09";
        break;

      default:
        break;
    }
  }

  arr = arr.map(function (e) {
    return e.toString();
  });

  return arr;
};

const generateGameNumbers = () => {
  let numbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
  let size = 60;

  for (let index = 11; index <= size; index++) {
    numbers.push(index.toLocaleString());
  }

  return numbers;
};

const defaultGameState = {
  luckyNumbers: ["XX", "XX", "XX", "XX", "XX", "XX"],
  gameNumbers: generateGameNumbers(),
  betNumbers: [],
  quantityNumbers: 6,
  lockBet: true,
};

const gameReducer = (state, action) => {
  if (action.type === "LOCK_BET_BUTTON") {
    return {
      luckyNumbers: state.luckyNumbers,
      gameNumbers: state.gameNumbers,
      betNumbers: state.betNumbers,
      quantityNumbers: state.quantityNumbers,
      lockBet: false,
    };
  }
  if (action.type === "ADD_BET") {
    return {
      luckyNumbers: state.luckyNumbers,
      gameNumbers: state.gameNumbers,
      betNumbers: action.betNumbers.bet,
      quantityNumbers: state.quantityNumbers,
      lockBet: state.lockBet,
    };
  }
  if (action.type === "ADD_BALL_NUMBERS") {
    return {
      luckyNumbers: generateLuckyNumbers(),
      gameNumbers: state.gameNumbers,
      betNumbers: state.betNumbers,
      quantityNumbers: state.quantityNumbers,
      lockBet: state.lockBet,
    };
  }
  return defaultGameState;
};

const GameProvider = (props) => {
  const [gameState, dispatchGameAction] = useReducer(
    gameReducer,
    defaultGameState
  );

  const unlockBetButtonHandler = () => {
    dispatchGameAction({
      type: "LOCK_BET_BUTTON",
    });
  };

  const addBetHandler = (bet) => {
    dispatchGameAction({
      type: "ADD_BET",
      betNumbers: bet,
    });
  };

  const addLuckyNumbersHandler = () => {
    dispatchGameAction({
      type: "ADD_BALL_NUMBERS",
    });
  };

  const gameContext = {
    luckyNumbers: gameState.luckyNumbers,
    gameNumbers: gameState.gameNumbers,
    betNumbers: gameState.betNumbers,
    quantityNumbers: gameState.quantityNumbers,
    lockBet: gameState.lockBet,
    lockBetButton: unlockBetButtonHandler,
    addBet: addBetHandler,
    addLuckyNumbers: addLuckyNumbersHandler,
  };

  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
