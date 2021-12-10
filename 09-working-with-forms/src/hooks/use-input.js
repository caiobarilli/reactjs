import { useState } from "react";

const useInput = (validateValue) => {
  const [valueField, setValueField] = useState("");
  const [fieldTouched, setFieldTouched] = useState(false);

  const valueIsValid = validateValue(valueField);
  const hasError = !valueIsValid && fieldTouched;

  const inputChangeHandler = (event) => {
    setValueField(event.target.value);
  };

  const inputBlurHandler = () => {
    setFieldTouched(true);
  };

  const reset = () => {
    setValueField("");
    setFieldTouched(false);
  };

  return {
    value: valueField,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
