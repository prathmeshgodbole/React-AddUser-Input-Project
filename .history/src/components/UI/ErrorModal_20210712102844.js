import React from "react";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}></header>
      <div>
        <p></p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
