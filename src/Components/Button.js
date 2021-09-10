import React from 'react';
import classes from '../Style/Button.module.css';

const Button = ({className, children}) => {
    return (
        <div className={`${classes.button} ${className}`}>
            {children}
        </div>
    );
};

export default Button;