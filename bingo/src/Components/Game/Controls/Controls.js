import React from "react";

import PlayButton from "./PlayButton";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

import classes from "./Controls.module.css";

const Control = (props) => {
  return (
    <Card>
      <div className={classes.row}>
        <div className={classes.column}>
          <Button
            className={classes.btnGray}
            onClick={props.onAddBet}
            disabled={props.enableAddBet}
          >
            ADD Bet
          </Button>
        </div>
        <div className={classes.column}>
          <PlayButton Title="PLAY" onClick={props.onAddLuckyNumbers} />
        </div>
      </div>
    </Card>
  );
};

export default Control;
