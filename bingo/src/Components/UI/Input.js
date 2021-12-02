import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type={props.type}
      id={props.id}
      onChange={props.onChange}
      {...props.input}
    />
  );
});

export default Input;
