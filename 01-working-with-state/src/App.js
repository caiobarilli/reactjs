import React, { useState } from "react";
import UserForm from "./User/CreateUser";
import ListUser from "./User/ListUser";

function App() {
  const [usersList, setUsersList] = useState([]);

  const submitUserHandler = (name, age) => {
    setUsersList((prevUserList) => [
      ...prevUserList,
      { ID: Math.random().toString(), Name: name, Age: age },
    ]);

    return;
  };

  return (
    <div>
      <UserForm onSubmitUser={submitUserHandler} />
      {usersList.length !== 0 && <ListUser usersList={usersList} />}
    </div>
  );
}

export default App;
