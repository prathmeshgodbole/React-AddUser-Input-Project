import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css';
const UsersList = (props) => {
  return (
      <Card>
    <ul className=>
      {props.users.map((user) => (
        <li>
          {user.name} ({user.age} years old.)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;