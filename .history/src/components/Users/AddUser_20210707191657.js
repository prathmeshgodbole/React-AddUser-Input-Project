import React from "react";
import
const AddUser = (props) => {
    const addUserHandler=(event)=>{
        event.preventDefault();
    }
  return (
  <form onSubmit={addUserHandler}>
      <lable htmlfor='username'>User Name</lable>
      <input id='username' type='text'></input>
      <lable htmlfor='age'>Age</lable>
      <input id='age' type='number'></input>
      <button type='submit'>Add User</button>
  </form>);
};

export default AddUser;
