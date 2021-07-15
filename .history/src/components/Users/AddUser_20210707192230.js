import React from "react";
import classes from './AddUser.module.css';
import Card from ''../UI/Card';
const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <lable htmlfor="username">User Name</lable>
        <input id="username" type="text"></input>
        <lable htmlfor="age">Age</lable>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
