import React from "react";
import  ReactDOM  from "react";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const Backdrop = props=>{
return <div className={classes.backdrop} onClick={props.onConfirm} />
};

const Overlay =props=>{}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      
      <Card className={classes.modal}>
        <header className={classes.header}>{props.title}</header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
