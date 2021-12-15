import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [inputFormValidity, setInputFormValidity] = useState({
    name: true,
    street: true,
    code: true,
    city: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const codeInput = useRef();
  const cityInput = useRef();

  const isEmpty = (value) => value.trim() === "";
  const isNotFiveChars = (value) => value.trim().lenght === "5";

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredCode = codeInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCodeIsValid = !isNotFiveChars(enteredCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setInputFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      code: enteredCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      code: enteredCode,
      city: enteredCity,
    });
  };

  const nameClasses = `${classes.control}
  ${inputFormValidity.name ? "" : classes.invalid}
  `;
  const streetClasses = `${classes.control}
  ${inputFormValidity.street ? "" : classes.invalid}
  `;
  const codeClasses = `${classes.control}
  ${inputFormValidity.code ? "" : classes.invalid}
  `;
  const cityClasses = `${classes.control}
  ${inputFormValidity.city ? "" : classes.invalid}
  `;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!inputFormValidity.name && <p> Sorry, this field is required</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!inputFormValidity.street && <p> Sorry, this field is required</p>}
      </div>
      <div className={codeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={codeInput} />
        {!inputFormValidity.code && <p> Sorry, this field is required</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!inputFormValidity.city && <p> Sorry, this field is required</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
