import React from "react";

import Paragraph from "./Paragraph";

const ToogleParagraph = (props) => {
  console.log("Component");

  return <Paragraph>{props.show ? "This is New" : ""}</Paragraph>;
};

export default React.memo(ToogleParagraph);
