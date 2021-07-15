import React from "react";
import  ReactDOM  from "react";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const Backdrop = props=>{
return <div className={classes.backdrop} onClick={props.onConfirm} />
};

const Overlay =props=>{
  return 
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      
     
    </React.Fragment>
  );
};

export default ErrorModal;
