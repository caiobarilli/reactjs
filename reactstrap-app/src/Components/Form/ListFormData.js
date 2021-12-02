import React from "react";
import "./ListFormData.css";

const ListFormData = (props) => {
  const listData = props.dataValues.map((data, id) => {
    return <p key={id}>{data.name}</p>;
  });

  return <div className="ListData">{listData}</div>;
};

export default ListFormData;
