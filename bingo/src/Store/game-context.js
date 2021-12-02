import React from "react";

const GameContext = React.createContext({
  luckyNumbers: [],
  gameNumbers: [],
  betNumbers: [],
  quantityNumbers: 6,
  lockBet: false,
  addBet: () => {},
  addLuckyNumbers: () => {},
  lockBetButton: () => {},
});

export default GameContext;
