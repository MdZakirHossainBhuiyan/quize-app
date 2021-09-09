import React from 'react';
import classes from '../Style/Illustration.module.css';
import signupImage from '../Assets/Images/signup.svg';

const Illustration = () => {
    return (
        <div className={classes.illustration}>
            <img src={signupImage} alt="Signup" />
        </div>
    );
};

export default Illustration;