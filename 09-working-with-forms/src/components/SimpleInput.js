import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  let formIsValid = false;

  const {
    value: nameField,
    isValid: nameFieldIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: onNameChangeHandler,
    inputBlurHandler: onNameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailField,
    isValid: emailFieldIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: onEmailChangeHandler,
    inputBlurHandler: onEmailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      value.match(
        /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );

  if (nameFieldIsValid && emailFieldIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameFieldIsValid && !emailFieldIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailInputHasError
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
          onChange={onNameChangeHandler}
          onBlur={onNameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">O campo nome é obrigatório.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={emailField}
          onChange={onEmailChangeHandler}
          onBlur={onEmailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">
            Digite um email válido, o campo email é obrigatório.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
