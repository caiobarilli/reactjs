import React from "react";
import "./PageTitle.css";

const PageTitle = (props) => {
  return <h1 className="my-title">{props.text}</h1>;
};

export default PageTitle;
