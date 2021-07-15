import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css';
const UsersList = (props) => {
  return (
      <Card>
    <ul className={classes}>
      {props.users.map((user) => (
        <li className={classes}>
          {user.name} ({user.age} years old.)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;
