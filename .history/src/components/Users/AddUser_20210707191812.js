import React from "react";
import Card from '../UI/Card';
const AddUser = (props) => {
    const addUserHandler=(event)=>{
        event.preventDefault();
    }
  return (
      <Card></Card>
  <form onSubmit={addUserHandler}>
      <lable htmlfor='username'>User Name</lable>
      <input id='username' type='text'></input>
      <lable htmlfor='age'>Age</lable>
      <input id='age' type='number'></input>
      <button type='submit'>Add User</button>
  </form>);
};

export default AddUser;
