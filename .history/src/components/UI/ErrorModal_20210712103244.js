import React from "react";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div>
    <div></div>
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
