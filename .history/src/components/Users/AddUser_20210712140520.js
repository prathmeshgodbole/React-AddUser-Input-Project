import React, { useState,useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import { message } from "statuses";

const AddUser = (props) => {
  const nameInputRef=useRef();
  const ageInputRef=useRef();


  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredUserAge=ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Name",
        message: "Please Enter a valid name & age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
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
            ref={nameInputRef}
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
