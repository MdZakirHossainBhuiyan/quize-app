import React from 'react';
import Checkbox from './Checkbox';
import classes from '../Style/Answers.module.css';

const Answers = () => {
    return (
        <div className={classes.answers}>
            <Checkbox className={classes.answer} text="Option One" />
            <Checkbox className={classes.answer} text="Option Two" />
            <Checkbox className={classes.answer} text="Option Three" />
            <Checkbox className={classes.answer} text="Option Four" />
            <Checkbox className={classes.answer} text="Option One" />
            <Checkbox className={classes.answer} text="Option Two" />
            <Checkbox className={classes.answer} text="Option Three" />
            <Checkbox className={classes.answer} text="Option Four" />
            <Checkbox className={classes.answer} text="Option Three" />
            <Checkbox className={classes.answer} text="Option Four" />
        </div>
    );
};

export default Answers;