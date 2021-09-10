import React from 'react';
import classes from '../Style/MiniPlayer.module.css';
import imageMP from '../Assets/Images/tutorial1.jpg';

const MiniPlayer = () => {
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
          <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
          <span className={`material-icons-outlined ${classes.close}`}> close </span>
          <img src={imageMP} alt="Alt tag" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
};

export default MiniPlayer;