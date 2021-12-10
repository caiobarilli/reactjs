import { useState } from "react";

const useInput = (validateValue) => {
  const [valueField, setValueField] = useState("");
  const [fieldTouched, setFieldTouched] = useState(false);

  const valueIsValid = validateValue(valueField);
  const hasError = !valueIsValid && fieldTouched;

  const inputChangeHandlerValue = (event) => {
    setValueField(event.target.value);
  };

  const inputBlurHandlerValue = () => {
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
    inputChangeHandlerValue,
    inputBlurHandlerValue,
    reset,
  };
};

export default useInput;
