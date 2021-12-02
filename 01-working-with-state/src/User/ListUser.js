import React from "react";
import Card from "../UI/Card";

const ListUser = (props) => {
  return (
    <Card>
      <ul>
        {props.usersList.map((user) => (
          <li key={user.ID}>
            User: {user.Name}, {user.Age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ListUser;
