import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredAge);
    enteredUserName('');
    enteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <lable htmlFor="username">User Name</lable>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
        ></input>

        <lable htmlFor="age">Age (Years)</lable>
        <input id="age" type="number" onChange={ageChangeHandler}></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
