import React, { useState, Fragment, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./CreateUser.module.css";

const CreateUser = (props) => {
  const [errorModal, setErrorModal] = useState(false);

  const refInputName = useRef();
  const refInputAge = useRef();

  const closeErrorModal = () => {
    setErrorModal(null);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    // console.log(refInputName);

    if (refInputName.current.value.trim().length === 0) {
      setErrorModal({
        title: "Check Name field",
        text: "field name is empty",
      });
      return;
    }
    if (refInputAge.current.value.trim().length === 0) {
      setErrorModal({
        title: "Check Age field",
        text: "field age is empty",
      });
      return;
    }
    if (+refInputAge.current.value <= -1) {
      setErrorModal({
        title: "Check Age field",
        text: "field age can't be less than zero",
      });
      return;
    }
    props.onSubmitUser(refInputName.current.value, refInputAge.current.value);

    refInputName.current.value = "";
    refInputAge.current.value = "";
  };

  return (
    <Fragment>
      {errorModal && (
        <ErrorModal
          Title={errorModal.title}
          Text={errorModal.text}
          onConfirm={closeErrorModal}
        />
      )}
      <Card className={classes.CreateUser}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={refInputName} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={refInputAge} />
          <Button>Submit</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default CreateUser;
