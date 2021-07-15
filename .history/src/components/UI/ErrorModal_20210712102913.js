import React from "react";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}></header>
      <div className="classes.>
        <p></p>
      </div>
      <footer className={classes.}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
