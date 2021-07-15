import React, { useState,useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import { message } from "statuses";

const AddUser = (props) => {
  const nameInputRef=useRef();
  const nameInputAge=useRef();


  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Name",
        message: "Please Enter a valid name & age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <lable htmlFor="username"> User Name </lable>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
            ref=
          ></input>
          <lable htmlFor="age"> Age(Years) </lable>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
