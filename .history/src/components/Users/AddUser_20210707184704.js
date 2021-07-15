import React from "react";
const AddUser = (props) => {
  return (
  <form>
      <lable htmlfor='username'>User Name</lable>
      <input id='username' type='text'></input>
      <lable htmlfor='age'>User Name</lable>
      <input id='age' type='number'></input>
  </form>);
};

export default AddUser;
