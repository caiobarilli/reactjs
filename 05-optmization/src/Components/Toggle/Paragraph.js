import React from "react";

const Paragraph = (props) => {
  console.log("Component Internal");

  return <p>{props.children}</p>;
};

export default Paragraph;
