import React from "react";
import tutorialOne from '../Assets/Images/tutorial1.jpg';
import classes from '../Style/Video.module.css';

const Video = () => {
  return (
    <>
      <a href="quiz.html">
        <div className={classes.video}>
          <img src={tutorialOne} alt="" />
          <p>#1 React Project Tutorial - Quiz Application with Firebase - Part 1</p>
          <div className={classes.qmeta}>
            <p>20 Question</p>
            <p>Score: Not taken yet</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Video;
