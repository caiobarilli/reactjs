import React, { useState, useRef, useContext } from "react";

import Card from "../../UI/Card";
import Input from "../../UI/Input";
import Number from "./Number";
import GameContext from "../../../Store/game-context";

import classes from "./Board.module.css";

const Board = (props) => {
  const GameCTX = useContext(GameContext);
  const gameNumbers = GameCTX.gameNumbers;
  const gameQuantityNumbers = GameCTX.quantityNumbers;

  const numRefs = useRef([]);

  numRefs.current = gameNumbers.map(
    (ball, i) => numRefs.current[i] ?? React.createRef()
  );

  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const checkboxClickHandler = (ref) => {
    let gameNumber = ref.current;
    let selectedNumber = gameNumber.id;

    if (gameNumber.checked) {
      if (selectedNumbers.length === 5) {
        GameCTX.lockBetButton();
      }
      setSelectedNumbers((selectedNumbers) => [
        ...selectedNumbers,
        selectedNumber,
      ]);
    }

    if (!gameNumber.checked || selectedNumbers.length === gameQuantityNumbers) {
      const filteredNumber = selectedNumbers.filter(
        (num) => num !== selectedNumber
      );
      setSelectedNumbers(filteredNumber);

      if (selectedNumbers.length === gameQuantityNumbers) {
        gameNumber.checked = false;
      }
    }
  };

  return (
    <React.Fragment>
      <Card>
        <form className={classes.board}>
          {gameNumbers.map((ball, i) => {
            return (
              <Number
                ref={numRefs.current[i]}
                key={ball}
                title={ball}
                onClick={() => checkboxClickHandler(numRefs.current[i])}
              />
            );
          })}
          <Input
            id={props.id}
            type="hidden"
            input={{
              value: selectedNumbers,
              onChange: props.onChange,
            }}
          />
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Board;
