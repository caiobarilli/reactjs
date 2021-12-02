import React from "react";
import ReactDOM from "react-dom";

import Button from "../UI/Button";
import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <Button onClick={props.onClick} className={classes.btnOrange}>
        {props.txtButton}
      </Button>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("messages");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          text={props.text}
          txtButton={props.txtButton}
          onClick={props.onClick}
        />,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
