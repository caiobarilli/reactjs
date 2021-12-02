import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.Backdrop} onClick={props.onConfirm} />;

  
};

const Modal = (props) => {
  return (
    <Card className={classes.Error}>
      <header>
        <h2>{props.Title}</h2>
      </header>
      <div>{props.Text}</div>
      <footer>
        <Button onClick={props.onConfirm}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        // document.getElementById("backdrop-root")
        document.body
      )}
      {ReactDOM.createPortal(
        <Modal
          onConfirm={props.onConfirm}
          Title={props.Title}
          Text={props.Text}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
