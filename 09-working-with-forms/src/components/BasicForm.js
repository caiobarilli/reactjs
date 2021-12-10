import React from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  let formIsValid = false;
  const isEmpty = (value) => value.trim() !== "";
  const isValidEmail = (value) =>
    value.match(
      /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  const {
    value: nameField,
    isValid: nameFieldIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: onNameChangeHandler,
    inputBlurHandler: onNameBlurHandler,
    reset: resetNameInput,
  } = useInput(isEmpty);
  const {
    value: lastNameField,
    isValid: lastNameFieldIsValid,
    hasError: lastNameInputHasError,
    inputChangeHandler: onLastNameChangeHandler,
    inputBlurHandler: onLastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isEmpty);
  const {
    value: emailField,
    isValid: emailFieldIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: onEmailChangeHandler,
    inputBlurHandler: onEmailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmpty && isValidEmail);

  if (nameFieldIsValid && lastNameFieldIsValid && emailFieldIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameFieldIsValid) {
      return;
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameField}
            onChange={onNameChangeHandler}
            onBlur={onNameBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">O campo nome é obrigatório.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastNameField}
            onChange={onLastNameChangeHandler}
            onBlur={onLastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">O campo nome é obrigatório.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailField}
          onChange={onEmailChangeHandler}
          onBlur={onEmailBlurHandler}
        />
        {emailInputHasError && (
          <>
            <p className="error-text">O campo é obrigatório.</p>
            <p className="error-text">Digite um email válido.</p>
          </>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
