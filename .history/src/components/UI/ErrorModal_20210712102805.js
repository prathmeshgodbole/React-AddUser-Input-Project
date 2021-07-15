import React from 'react';
import classes from './ErrorModal.module.css';
import Button from './Button';
import card from './Card';

const ErrorModal = (props) => {
    return (
<Card className={classes.mod}>
<header className={classes.header}></header>
<div><p></p></div>
<footer></footer>

</Card>
    );
}

export default ErrorModal;