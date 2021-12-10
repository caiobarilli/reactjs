import { useState } from "react";

const SimpleInput = (props) => {
  let formIsValid = false;

  const [nameField, setNameField] = useState("");
  const [nameFieldTouched, setNameFieldTouched] = useState(false);

  const [emailField, setEmailField] = useState("");
  const [emailFieldTouched, setEmailFieldTouched] = useState(false);

  const nameFieldIsValid = nameField.trim() !== "";
  const nameInputIsInvalid = !nameFieldIsValid && nameFieldTouched;

  const emailFieldIsValid =
    emailField.trim() !== "" &&
    emailField.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const emailInputIsInvalid = !emailFieldIsValid && emailFieldTouched;

  if (nameFieldIsValid && emailFieldIsValid) {
    formIsValid = true;
  }

  const onBlurHandler = (event) => {
    switch (event.target.id) {
      case "name":
        setNameFieldTouched(true);
        break;
      case "email":
        setEmailFieldTouched(true);
        break;
      default:
        break;
    }
  };

  const onChangeHandler = (event) => {
    switch (event.target.id) {
      case "name":
        setNameField(event.target.value);
        break;
      case "email":
        setEmailField(event.target.value);
        break;
      default:
        break;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameFieldTouched(true);
    setEmailFieldTouched(true);

    if (!nameFieldIsValid || !emailFieldIsValid) {
      return;
    }

    setNameField("");
    setEmailField("");
    setNameFieldTouched(false);
    setEmailFieldTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={nameField}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">O campo nome é obrigatório.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={emailField}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">O campo email é obrigatório.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
